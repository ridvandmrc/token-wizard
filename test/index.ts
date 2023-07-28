import { generateToken } from '../dist'

export const defaultLightBrand = {
    test: {
        blue: {
            900: "#03045E",
            800: "#023E8A",
            700: "#0077B6",
            600: "#0096C7",
            500: "#00B4D8",
            400: "#48CAE4",
            300: "#90E0EF",
            200: "#ADE8F4",
            100: "#CAF0F8",
        },
        red: {
            900: "#590D22",
            800: "#800F2F",
            700: "#A4133C",
            600: "#C9184A",
            500: "#FF4D6D",
            400: "#FF758F",
            300: "#FF8FA3",
            200: "#FFB3C1",
            100: "#FFCCD5",
            50: "#FFF0F3",
        },
        yellow: {
            900: "#FF7B00",
            800: "#FF8800",
            700: "#FF9500",
            600: "#FFA200",
            500: "#FFAA00",
            400: "#FFB700",
            300: "#FFC300",
            200: "#FFD000",
            100: "#FFDD00",
            50: "#FFEA00",
        },
        gray: {
            900: "#212529",
            800: "#343A40",
            700: "#495057",
            600: "#6C757D",
            500: "#ADB5BD",
            400: "#CED4DA",
            300: "#DEE2E6",
            200: "#E9ECEF",
            100: "#F8F9FA",
        },
        white: "#ffffff",
        background: '${this.test.gray[100]}',
        primaryButtonBackground: '${this.test.blue[600]}',
        primaryButtonColor: '${this.test.white}',
        secondaryButtonBackground: '${this.test.white}',
        secondaryButtonColor: '${this.test.white}',
    }

};



const tokens = generateToken({ tokens: defaultLightBrand })

console.log(tokens.toCss('./token.css'))
console.log(tokens.toScss('./token.scss'))
console.log(tokens.toJS('./token.js'))