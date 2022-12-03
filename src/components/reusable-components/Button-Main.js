import { Button } from "@mui/material";
import React from "react";

const ButtonMain = (props) => {
  return (
    <Button
      size="large"
      variant="contained"
      sx={{
        backgroundColor: "#5614CF",
        borderRadius: "10px",
        "&:hover": {
          color: "white",
          backgroundColor: "red",
         
        },
      }}
    >
      {props.children}
    </Button>
  );
};

export default ButtonMain;
