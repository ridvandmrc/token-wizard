import { TokenOptionType } from './types';
import { selfReferencObject, flatObj, targetCaseMap } from './utils';



export const generateToken = ({ targetCase, tokens, delimiter }: TokenOptionType) => {
    const referenced = flatObj(selfReferencObject(tokens))

    const toCss = () => targetCaseMap[targetCase || 'kebab-case']({ obj: referenced, delimiter: delimiter ?? '-', prefix: '--' })
    const toScss = () => targetCaseMap[targetCase || 'kebab-case']({ obj: referenced, delimiter: delimiter ?? '-', prefix: '$' })
    const toJS = () => targetCaseMap[targetCase || 'camelCase']({ obj: referenced, delimiter: delimiter ?? '' })

    return { toCss, toScss, toJS }
}


