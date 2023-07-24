import sro from 'self-referenced-object'
import { TokenType } from '../types'

export const selfReferencObjdex = (obj: TokenType) => {
    return sro(obj)
}