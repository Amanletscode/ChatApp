import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { orange } from "../constants/color";

const Header = () => {
  const handle = () => {
    console.log("IconButton clicked");
  };

  return (
    <Box sx={{ flexGrow: 1 }} height={"4rem"}>
      <AppBar
        position="static"
        sx={{
          bgcolor: orange,
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            GupShup
          </Typography>

          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton color="inherit" onClick={handle}>
              {/* Icon content goes here */}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
