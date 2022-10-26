import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const ActionButton = styled(Button)(() => ({
  backgroundColor: "rgb(236, 76, 76)",
  color: "white",
  border: "1px solid rgb(236, 76, 76)",
  transition: "none",
  "&:hover": {
    backgroundColor: "rgb(186, 49, 49)",
    transition: "background-color 0.7s",
  },
}));
