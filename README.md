# token-wizard

Token wizard is a powerful and versatile library for managing design tokens in your projects. Simplify your design system by centralizing colors, typography, spacing, and more, ensuring consistent styling across different platforms and applications.

## Installation

You can install Token Wizard via npm. Make sure you have npm and Node.js installed on your machine before proceeding with the following command:

```bash
npm i token-wizard --save-dev
```

## Features

- The library has typescript support, so that you can use it easily
- A comprehensive collection of design tokens for various design attributes.
- Well-organized categories, including colors, typography, spacing, borders, and shadows.
- Easily accessible tokens to ensure consistent theming and styling across your projects.
- Customizable and extensible tokens to fit the specific needs of your design system.
- You can create **.css, .scss and Js** file.

## Usage

- import library and use **generateToken**

```ts
import { generateToken } from "token-wizard";
```

- Then, we should define **tokens**
- And, we can refere inner object attribute by using **${this.}**

```ts
const tokens = generateToken({
  tokens: {
    blue: {
      900: "#03045E",
      800: "#023E8A",
    },
    red: {
      900: "#590D22",
      800: "#800F2F",
    },
    primary: {
      color: "${this.blue[900]}",
    },
    white: "#ffffff",
  },
});

console.log(tokens.toCss());
/*
{
  '--blue-800': '#023E8A',
  '--blue-900': '#03045E',
  '--red-800': '#800F2F',
  '--red-900': '#590D22',
  '--primary-color': '#03045E',
  '--white': '#ffffff'
}
*/

console.log(tokens.toScss());

/*
{
  '$blue-800': '#023E8A',
  '$blue-900': '#03045E',
  '$red-800': '#800F2F',
  '$red-900': '#590D22',
  '$primary-color': '#03045E',
  '$white': '#ffffff'
}
*/

console.log(tokens.toJS());
/*
{
  blue800: '#023E8A',
  blue900: '#03045E',
  red800: '#800F2F',
  red900: '#590D22',
  primaryColor: '#03045E',
  white: '#ffffff'
}
*/
```

- Also, we can extract this token to a file with giving a parameters

```ts
tokens.toCss("./tokens.css"); // it will crate a file that name is token.css under :root
tokens.toScss("./tokens.scss"); // it will crate a file that name is token.scss
tokens.toJS("./tokens.js"); // it will crate a file that name is token.js
```

### More Customize

- Also, **generateToken** is taking more options so that we can make the library more customize.

```ts
import { generateToken } from "token-wizard";

const tokens = generateToken({
  targetCase: "kebab-case", // PascalCase | camelCase | kebab-case | snake_case
  delimeter: "--", // we can use delimeter whatever we want like --, **, __ etc.
  tokens: {
    blue: {
      900: "#03045E",
      800: "#023E8A",
    },
    red: {
      900: "#590D22",
      800: "#800F2F",
    },
    primary: {
      color: "${this.blue[900]}",
    },
    white: "#ffffff",
  },
});
```

## Under Development

- we are improving this library so some features still under development like:
  - **Dark/light Theme** integration
  - exporting **d.ts** file
  - Integration with **design tools**

### Sample Project

- [Here](https://github.com/ridvandmrc/design-token) is the sample project to provide a basic design system.

## Contributing

Contributions to **Token Wizard** Kit are welcome! If you have ideas for new design tokens, improvements, or bug fixes, please follow these steps:

- Fork the repository.
- Create a new branch for your changes.
- Make your modifications and additions.
- Commit and push your changes to your forked repository.
- Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the **MIT** License. Feel free to use, modify, and distribute **Token Wizard** as needed.
