import fs from 'fs'
import { TokenType } from '../types'

const cssTemplate = (token: TokenType) => `:root {\n${Object.entries(token)
    .map(([key, value]) => `${key}: ${value};\n`)
    .join("")}}`

const scssTemplate = (data: TokenType) => {
    return Object.entries(data)
        .map(([key, value]) => `${key}: ${value};\n`)
        .join("");
};

const jsTemplate = (data: TokenType) => `export default {\n${Object.entries(data)
    .map(([key, value]) => `${key}: "${value}",\n`)
    .join("")}}`


export const writeFile = (path: string, data: TokenType, type: 'scss' | 'css' | 'js') => {
    let target: string;
    if (type === 'css') { target = cssTemplate(data) }
    else if (type === 'scss') { target = scssTemplate(data) }
    else { target = jsTemplate(data) }

    fs.writeFile(path, target, (err) => console.error(err))
}