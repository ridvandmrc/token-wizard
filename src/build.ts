import { TokenOptionType } from './types';
import { selfReferencObject, flatObj, targetCaseMap, writeFile } from './utils';



export const generateToken = ({ targetCase, tokens, delimiter }: TokenOptionType,) => {
    const referenced = flatObj(selfReferencObject(tokens))


    const toCss = (fileName?: string) => {
        const token = targetCaseMap[targetCase || 'kebab-case']({ obj: referenced, delimiter: delimiter ?? '-', prefix: '--' })
        !!fileName && writeFile(fileName, token, 'css')
        return token
    }
    const toScss = (fileName?: string) => {
        const token = targetCaseMap[targetCase || 'kebab-case']({ obj: referenced, delimiter: delimiter ?? '-', prefix: '$' })
        !!fileName && writeFile(fileName, token, 'scss')
        return token
    }
    const toJS = (fileName?: string) => {
        const token = targetCaseMap[targetCase || 'camelCase']({ obj: referenced, delimiter: delimiter ?? '' })
        !!fileName && writeFile(fileName, token, 'js')
        return token
    }

    return { toCss, toScss, toJS }
}

