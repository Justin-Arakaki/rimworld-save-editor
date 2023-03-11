import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

// component: React.ElementType must be added for TS not to put out error
const FileButton = styled(Button)<
  ButtonProps & { component: React.ElementType }
>(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "40%",
    height: "30%",
  },
}));

export default FileButton;
