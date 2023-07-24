export type TokenType = Record<string, string | Object>;

export type CaseType = 'kebab-case' | 'snake_case' | 'PascalCase' | 'camelCase'

export type TokenOptionType = {
    targetCase?: CaseType,
    tokens: TokenType
    delimiter?: string
}