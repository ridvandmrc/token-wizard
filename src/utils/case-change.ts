import { paramCase, camelCase, pascalCase, snakeCase } from "change-case";
import { CaseHelperType, CaseType } from "../types";

const caseHelper = <T>({
  caseFunc,
  delimiter = "",
  obj,
  prefix = "",
}: CaseHelperType): keyof T => {
  return Object.entries(obj).reduce(
    (first, [key, value]) => ({
      ...first,
      [`${prefix}${caseFunc!(key, { delimiter: delimiter }).replace(
        "_",
        delimiter
      )}`]: value,
    }),
    {}
  ) as keyof T;
};

export const targetCaseMap: Record<
  CaseType,
  <T extends {}>(scaseHelper: CaseHelperType) => keyof T
> = {
  "kebab-case": ({ obj, delimiter, prefix }) =>
    caseHelper({ caseFunc: paramCase, obj, delimiter, prefix }),
  camelCase: ({ obj, delimiter, prefix }) =>
    caseHelper({ caseFunc: camelCase, obj, delimiter, prefix }),
  PascalCase: ({ obj, delimiter, prefix }) =>
    caseHelper({ caseFunc: pascalCase, obj, delimiter, prefix }),
  snake_case: ({ obj, delimiter, prefix }) =>
    caseHelper({ caseFunc: snakeCase, obj, delimiter, prefix }),
};
