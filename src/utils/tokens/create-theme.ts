import fs from "fs";

import { ITheme, TargetType, TokenType } from "../../types";
import { execute } from "./execute";
import { flatObj } from "./flatten";
import { selfReferencObject } from "./self-reference";
import { generateDocs } from "../docs";

const cssTemplate = (target: string, token: TokenType, isRoot = false) =>
  `${isRoot ? `:root ` : `html [theme='${target}']`} {\n${Object.entries(token)
    .map(([key, value]) => `${key}: ${value};\n`)
    .join("")}}`;

const scssTemplate = (target: string, data: TokenType) => {
  return `$${target}:(\n${Object.entries(data)
    .map(([key, value]) => `\t${key}: ${value},\n`)
    .join("")});\n`;
};

export const createTheme = ({
  darkTokens,
  lightTokens,
  radiusTokens,
  shadowTokens,
  spacingTokens,
  startedPage,
  themeName,
}: ITheme) => {
  const flatAndRefence = (obj: Object) => flatObj(selfReferencObject(obj));
  const executeObj = (obj: Object, type: TargetType = "css", prefix = "--") =>
    execute({
      obj: flatAndRefence(obj),
      targetCase: "kebab-case",
      type: type,
      delimiter: "-",
      prefix: prefix,
      fileName: "",
    });

  const toCss = (fileName: string) => {
    const dark = executeObj(darkTokens);
    const light = executeObj(lightTokens);
    const radius = executeObj(radiusTokens) as Object;
    const shadow = executeObj(shadowTokens) as Object;
    const spacing = executeObj(spacingTokens) as Object;

    const root = `${cssTemplate(
      "",
      {
        ...radius,
        ...shadow,
        ...spacing,
      },
      true
    )}\n`;

    const themeColor = `${cssTemplate("dark", dark)} \n\n  ${cssTemplate(
      "light",
      light
    )}`;

    fs.writeFile(fileName, root + themeColor, (err) => console.error(err));
    generateDocs(
      {
        darkTokens,
        lightTokens,
        radiusTokens,
        shadowTokens,
        spacingTokens,
        themeName,
        startedPage,
      },
      fileName
    );
  };

  const toScss = (fileName: string) => {
    const dark = scssTemplate("dark", executeObj(darkTokens, "scss", "$"));
    const light = scssTemplate("light", executeObj(lightTokens, "scss", "$"));
    const core = scssTemplate(
      "core",
      executeObj(
        { ...radiusTokens, ...shadowTokens, ...spacingTokens },
        "scss",
        "$"
      )
    );

    const scssToken = `${dark}\n${light}\n${core}`;

    fs.writeFile(fileName, scssToken, (err) => console.error(err));
    generateDocs(
      {
        darkTokens,
        lightTokens,
        radiusTokens,
        shadowTokens,
        spacingTokens,
        themeName,
        startedPage,
      },
      fileName
    );
  };

  return { toCss, toScss };
};
