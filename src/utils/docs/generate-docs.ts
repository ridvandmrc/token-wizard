import fs from "fs";

import { ITheme } from "../../types";
import { flatObj, selfReferencObject, targetCaseMap } from "../tokens";

export const generateDocs = (theme: ITheme, folderPath: string) => {
  console.log("folder: ", folderPath);

  const flatAndRefence = (obj: Object) =>
    targetCaseMap.camelCase({ obj: flatObj(selfReferencObject(obj)) });

  let dataContent = `const darkToken = ${JSON.stringify(
    flatAndRefence(theme.darkTokens)
  )} \n`;
  dataContent += `const lightToken =${JSON.stringify(
    flatAndRefence(theme.lightTokens)
  )} \n`;
  dataContent += `const radiusToken =${JSON.stringify(
    flatAndRefence(theme.radiusTokens)
  )} \n`;
  dataContent += `const shadowToken =${JSON.stringify(
    flatAndRefence(theme.shadowTokens)
  )} \n`;
  dataContent += `const spacingToken =${JSON.stringify(
    flatAndRefence(theme.spacingTokens)
  )}`;
  dataContent += `\nconst themeName =${JSON.stringify(theme.themeName)} \n`;

  dataContent += `const startedPage = ${JSON.stringify(theme.startedPage)} `;

  const path =
    folderPath.split("/").length > 1
      ? `${folderPath.split("/").slice(0, -1).join("/")}`
      : "";

  !fs.existsSync(`${path}/docs`) && fs.mkdirSync(`${path}/docs`);

  fs.cpSync("src/docs/index.html", `${path}/docs/index.html`);
  fs.cpSync("src/docs/style.css", `${path}/docs/style.css`);

  fs.writeFileSync(`${path}/docs/data.js`, dataContent, { flag: "w" });
};
