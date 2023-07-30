import { TokenOptionType } from "./types";
import { selfReferencObject, flatObj, execute } from "./utils";

export const generateToken = ({
  targetCase,
  tokens,
  delimiter,
}: TokenOptionType) => {
  const referenced = flatObj(selfReferencObject(tokens));

  const toCss = (fileName?: string) =>
    execute({
      obj: referenced,
      targetCase: targetCase || "kebab-case",
      type: "css",
      delimiter: delimiter || "-",
      prefix: "--",
      fileName,
    });

  const toScss = (fileName?: string) =>
    execute({
      obj: referenced,
      targetCase: targetCase || "kebab-case",
      type: "scss",
      delimiter: delimiter || "-",
      prefix: "$",
      fileName,
    });

  const toJS = (fileName?: string) =>
    execute({
      obj: referenced,
      targetCase: targetCase || "camelCase",
      type: "js",
      delimiter: delimiter || "",
      prefix: "",
      fileName,
    });

  const toTs = (fileName?: string) =>
    execute({
      obj: referenced,
      targetCase: targetCase || "camelCase",
      type: "ts",
      delimiter: delimiter || "",
      prefix: "",
      fileName: fileName,
    });

  return { toCss, toScss, toJS, toTs };
};
