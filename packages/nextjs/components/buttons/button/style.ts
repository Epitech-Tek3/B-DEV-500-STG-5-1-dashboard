export const buttonStyle = (variant, bg, fontWeight, textStyle, isDark, ...props: any) => {
  return {
    button: {
      ...props.buttonStyle,
      bg: variant == "contained" && bg,
      ":hover": { bg: variant == "contained" && bg },
      textTransform: textStyle !== "firstLetterCapitalize" ? textStyle : "none",
      fontWeight,
      span: {
        display: "block",
        color:
          variant == "text" || variant == "outlined"
            ? props.color
              ? (props.color as any)
              : isDark
              ? "persistanteWhite"
              : "persistanteBlack"
            : bg == "persistanteWhite"
            ? "#000000"
            : "persistanteWhite"
      },
      borderRadius: props.rounded && 50,
      overflow: "hidden",
      "span:first-letter": { textTransform: "capitalize" }
    }
  };
};
