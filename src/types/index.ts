import { Options } from "change-case";
export * from "./theme";
declare type ObjType = Record<string, string>;

export type TokenType = Object;

export type CaseType = "kebab-case" | "snake_case" | "PascalCase" | "camelCase";

export type TargetType = "css" | "scss" | "js" | "ts";

export type TokenOptionType = {
  targetCase?: CaseType;
  tokens: TokenType;
  delimiter?: string;
};

export type CaseHelperType = {
  obj: ObjType;
  caseFunc?: (str: string, opts?: Options) => string;
  delimiter?: string;
  prefix?: string;
};
