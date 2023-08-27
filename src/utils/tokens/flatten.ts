import { TokenType } from "../../types";

export const flatObj = (tokens: TokenType, prefix = '', res: Record<string, string> = {}) => {
    Object.entries(tokens).forEach(([key, value]) => {
        if (typeof value === 'object') {
            flatObj(value as TokenType, `${prefix}${key}_`, res)
        }
        else {
            res[`${prefix}${key}`] = value
        }

    })
    return res
}