import sro from 'self-referenced-object'
import { TokenType } from '../../types'

export const selfReferencObject = (obj: TokenType) => {
    return sro(obj)
}