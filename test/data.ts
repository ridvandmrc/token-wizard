export const defaultLightBrand = {
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
  background: "${this.gray[100]}",
  primaryButtonBackground: "${this.blue[600]}",
  primaryButtonColor: "${this.white}",
  secondaryButtonBackground: "${this.white}",
  secondaryButtonColor: "${this.white}",
};

export const radius = {
  border: {
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
  },
};

export const spacing = {
  space: {
    1: "12px",
    2: "16px",
    3: "24px",
  },
};

export const shadow = {
  shadow: {
    1: "0 0 0 1px gray",
    2: "0 0 0 2px red",
  },
};
