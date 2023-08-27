import fs from "fs";
import { TargetType, TokenType } from "../../types";

const cssTemplate = (token: TokenType) =>
  `:root {\n${Object.entries(token)
    .map(([key, value]) => `${key}: ${value};\n`)
    .join("")}}`;

const scssTemplate = (data: TokenType) => {
  return Object.entries(data)
    .map(([key, value]) => `${key}: ${value};\n`)
    .join("");
};

const jsTemplate = (data: TokenType) =>
  `export default {\n${Object.entries(data)
    .map(([key, value]) => `${key}: "${value}",\n`)
    .join("")}}`;

const tsTemplate = (data: TokenType) =>
  `export interface ITokenTypes  {\n${Object.keys(data)
    .map((key) => `${key}: string | number,\n`)
    .join("")} }`;

export const writeFile = (path: string, data: TokenType, type: TargetType) => {
  let target: string;
  if (type === "css") {
    target = cssTemplate(data);
  } else if (type === "scss") {
    target = scssTemplate(data);
  } else if (type === "ts") {
    target = tsTemplate(data);
  } else {
    target = jsTemplate(data);
  }

  fs.writeFile(path, target, (err) => console.error(err));
};
