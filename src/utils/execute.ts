import { CaseHelperType, CaseType, TargetType } from "../types";
import { targetCaseMap } from "./case-change";
import { writeFile } from "./write-file";

type ExecuteType = {
  targetCase: CaseType;
  fileName?: string;
  type: TargetType;
} & Omit<CaseHelperType, "caseFunc">;

export const execute = ({
  obj,
  delimiter,
  prefix,
  targetCase,
  fileName,
  type,
}: ExecuteType) => {
  const token = targetCaseMap[targetCase]({
    obj,
    delimiter: delimiter,
    prefix: prefix,
  });

  if (type === "ts")
    Object.keys(token).forEach(
      (key) => ((token as any)[key] = "string | number")
    );

  !!fileName && writeFile(fileName, token, type);
  return token;
};
