import lighten from "polished/lib/color/lighten";

/* A good example of what a theme can look like :
   https://github.com/rebassjs/rebass/blob/master/packages/preset/src/index.js */

const lightTheme = {
  activePrimary: "#b81c16",
  deepSecondary: "#041B31",
  blue: "#1a73e8",
  error: "#d9534f",
  success: "#5cb85c",
  info: "#22BAD9",
  warn: "#ffc067",
  text: "#2B2B2B",
  subText: "#767676",
  lightWhite: "#f6f6f6",
  lighterGrey: "#f0f0f0",
  lightGrey: "#F5F7F8",
  inputColor: "#F5F7F8",
  inputBorderColor: "#e3e0e0",
  link: "#93959f",
  linkHover: "#5e6070",
  whiteNavbar: "#ffffff",
  darkGrey: "#1a1a1ab3",
  blackGrey: "#4c4848",
  mediumGrey: "#5f6368",
  paleGreen: "#a2faa3",
  etonBlue: "#79c99e",
  cargoyleGas: "#ffdd4A",
  white: "#ffffff",
  transitionGradiant:
    "linear-gradient(rgba(255,255,255,1),rgba(255,255,255,0), rgba(255,255,255,0), rgba(255,255,255,0), rgba(255,255,255,1))",
  gradient: "linear-gradient(-49deg,#C33453 2%,#B1355A 17%,#81376C 50%,#343A88 94%,#2C3A8B 99%)",
  blueGradient: "linear-gradient(149.1deg, #0575E6 -2.21%, #00417E 101.35%);"
};

const darkTheme = {
  activePrimary: "#b81c16",
  deepSecondary: "#041B31",
  blue: "#1a73e8",
  error: "#d9534f",
  success: "#5cb85c",
  info: "#22BAD9",
  warn: "#ffc067",
  text: "#2B2B2B",
  subText: "#767676",
  lightWhite: "#303134",
  lighterGrey: "#f0f0f0",
  lightGrey: "#e3e0e0",
  grey: "#e3e5e5",
  link: "#93959f",
  linkHover: "#5e6070",
  whiteNavbar: "#303134",
  darkGrey: "#1a1a1ab3",
  blackGrey: "#4c4848",
  mediumGrey: "#5f6368",
  inputColor: "#323638",
  inputBorderColor: "#1a1a1ab3",
  black: "white",
  paleGreen: "#a2faa3",
  etonBlue: "#79c99e",
  cargoyleGas: "#ffdd4A",
  white: "#202124",
  transitionGradiant:
    "background: linear-gradient(rgba(255,255,255,0),rgba(255,255,255,1)), rgba(255,255,255,1)), rgba(255,255,255,1)), rgba(255,255,255,0))",
  gradient: "linear-gradient(-49deg,#C33453 2%,#B1355A 17%,#81376C 50%,#343A88 94%,#2C3A8B 99%)",
  blueGradient: "linear-gradient(149.1deg, #0575E6 -2.21%, #00417E 101.35%);"
};

export const colors = {
  persistanteWhite: "white",
  persistanteBlack: "black",
  lightGrey: "#e3e0e0",
  secondary: "#FCA698",
  primary: "#0b2330",
  primaryLighter: lighten(0.2, "#0b2330"),
  primaryLight: lighten(0.4, "#0b2330"),
  secondaryLight: lighten(0.2, "#f9c600"),
  secondary300: "#8cdcdf",
  lightError: lighten(0.3, lightTheme.error),
  lightSuccess: lighten(0.3, lightTheme.success),
  lightWarn: lighten(0.25, lightTheme.warn)
};

// Modular Augmented Fourth Scale starting at ModularScale(-1)
// const fontSizes = [...new Array(6).keys()].map(size => modularScale(size - 1));
// const space = [0, 4, 8, 16, 32, 64, 128, 256].map(sp => rem(sp));

const theme = (isDark) => ({
  // fontSizes,
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  // breakpoints: ["40em", "52em", "64em"], <== those are default
  colors: { ...(isDark ? darkTheme : lightTheme), ...colors },
  // isDark ? darkTheme : lightTheme,
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Roboto Light", "Oxygen", "Ubuntu",
    "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol"`,
    heading: "inherit",
    monospace: "Menlo, monospace"
  },
  fontWeights: {
    body: 300,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  shadows: {
    smallCard: "0 1px 4px rgba(0,0,0,.08)",
    small: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
    large: "0 0 24px rgba(0, 0, 0, .125)",
    fat: "0 2px 16px rgba(0, 0, 0, 0.25)",
    // Fat shadow without top
    fatNoTop: "1px 15px 20px rgba(0,0,0,0.25)",
    button: "0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);",
    buttonHover: "0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);",
    small2: "0px 10px 30px rgba(0, 0, 0, 0.2);"
  },
  radii: {
    default: 4,
    circle: 99999
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading"
    },
    display: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: [5, 6, 7]
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.1em"
    },
    ellipsis: {
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    }
  },
  variants: {
    avatar: {
      width: "avatar",
      height: "avatar",
      borderRadius: "circle"
    },
    link: {
      color: "primary"
    },
    navLink: {
      transition: "all .15s linear",
      display: "inline-block",
      fontWeight: "bold",
      lineHeight: "28px",
      "&:hover": {
        color: "#5e6070"
      }
    },
    mutedLink: {
      transition: "all .15s linear",
      color: "link",
      "&:hover": {
        color: "linkHover",
        textDecoration: "underline"
      }
    }
  },
  sizes: {
    avatar: 48
  },
  buttons: {
    primary: {
      fontWeight: "bold",
      outline: "none",
      boderRadius: "default",
      WebkitTapHighlightColor: "transparent",
      // whiteSpace: "nowrap",
      // height: "40px",
      lineHeight: "40px !important",
      padding: "0 14px",
      cursor: "pointer",
      textTransform: "uppercase",
      letterSpacing: "0.025em",
      textDecoration: "none",
      transition: "all .15s ease",
      WebkitBoxShadow: "0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)",
      boxShadow: "0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)",
      "&:disabled,&[disabled]": {
        backgroundColor: "#eeeeee",
        color: "#999999",
        cursor: "not-allowed",
        transform: "none",
        boxShadow: "none"
      },
      color: "white",
      backgroundColor: "primary",
      "&:hover": {
        WebkitBoxShadow: "0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08)",
        boxShadow: "0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08)",
        opacity: "0.95",
        transform: "translateY(-1px)",
        backgroundColor: "primaryLighter"
      }
    },
    gradient: {
      variant: "buttons.primary",
      color: "white",
      backgroundImage: "gradient",
      "&:hover": {
        opacity: 0.9
      }
    },
    secondary: {
      variant: "buttons.primary",
      color: "primary",
      backgroundColor: "white",
      "&:hover": {
        opacity: 0.9
      }
    },
    outline: {
      variant: "buttons.primary",
      color: "primary",
      backgroundColor: "transparent",
      boxShadow: "inset 0 0 0 2px",
      "&:hover": {
        backgroundColor: "primaryLight",
        color: "white"
      }
    },
    reverse: {
      variant: "buttons.outline",
      color: "primary",
      backgroundColor: "white"
    },
    noStyle: {
      backgroundColor: "transparent",
      p: 0
    }
  },
  forms: {
    input: {
      outline: "none",
      color: "darkGrey",
      backgroundColor: "white",
      borderWidth: "1px",
      borderStyle: "solid",
      transition: "all 0.2s ease-in-out 0s",
      paddingTop: "11px",
      paddingBottom: "11px",
      paddingLeft: "0.75rem",
      paddingRight: "0.75rem"
    },
    smallInput: {
      paddingTop: "0.25rem",
      paddingBottom: "0.25rem"
    },
    label: {
      fontWeight: "bold",
      color: "darkGrey",
      fontSize: [1, 2]
    },
    smallLabel: {
      fontWeight: "normal"
    },
    select: {
      outline: "none",
      color: "grey",
      backgroundColor: "white",
      borderWidth: "1px",
      borderStyle: "solid",
      transition: "all 0.2s ease-in-out 0s",
      paddingTop: "11px",
      paddingBottom: "11px",
      paddingLeft: "0.75rem",
      paddingRight: "0.75rem"
    }
  }
});

// export type Thembase = typeof theme;
// export default styled as CreateStyled<Theme>;
export { theme };
