import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const titleSizeMap = {
  xxsm: "16px",
  xsm: "18px",
  sm: "22px",
  md: "24px",
  lg: "26px",
  xl: "28px",
  xl1: "36px",
  xxl: "40px",
  xxxl: "48px",
};

//an example of styled component
export const TitleStyled = styled(Typography)((props) => {
  const {
    size = "sm",
    color = "primary",
    bold = false,
    mediumBold = false,
    noPadding = false,
    theme,
    id,
  } = props;
  const fontWeight = bold ? "bold" : mediumBold ? "500" : "normal";

  return {
    color: theme?.palette.text[color],
    fontSize: titleSizeMap[size],
    fontWeight,
    padding: noPadding ? "" : `5px 0px`,
    id: id,
  };
});
