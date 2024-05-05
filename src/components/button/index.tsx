import { Button, colors } from "@mui/material";
import React from "react";
import theme from "../../utils/theme";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const CustomButton: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: theme.palette.secondary.main,
        color: colors.common.white,
        borderRadius: "50px",
        padding: "10px 30px",
        textTransform: "none",
        fontSize: "24px",
        fontWeight: "600",
        "&:hover": {
          backgroundColor: theme.palette.secondary.dark,
        },
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
