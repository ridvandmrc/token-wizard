import { paramCase, camelCase, pascalCase, snakeCase, Options } from 'change-case'
import { CaseType } from '../types';

type CaseHelperType = {
    obj: ObjType;
    caseFunc?: (str: string, opts?: Options) => string;
    delimiter?: string
    prefix?: string
}



const caseHelper = ({ caseFunc, delimiter = '', obj, prefix = '' }: CaseHelperType) => {
    return Object.entries(obj).reduce((first, [key, value]) =>
        ({ ...first, [`${prefix}${caseFunc!(key, { delimiter: delimiter }).replace('_', delimiter)}`]: value })
        , {})
}

export const targetCaseMap: Record<CaseType, (scaseHelper: CaseHelperType) => {}> = {
    "kebab-case": ({ obj, delimiter, prefix }) => caseHelper({ caseFunc: paramCase, obj, delimiter, prefix }),
    camelCase: ({ obj, delimiter, prefix }) => caseHelper({ caseFunc: camelCase, obj, delimiter, prefix }),
    PascalCase: ({ obj, delimiter, prefix }) => caseHelper({ caseFunc: pascalCase, obj, delimiter, prefix }),
    snake_case: ({ obj, delimiter, prefix }) => caseHelper({ caseFunc: snakeCase, obj, delimiter, prefix }),
}
