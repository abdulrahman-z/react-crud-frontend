import styled from "@emotion/styled";
import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import UserImage from "./../assets/images/avatar.png";
import LogoutIcon from "@mui/icons-material/Logout";

function Header({ headerleft }) {
  return (
    <Box
      style={{
        padding: "36px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box flex={"1"}>{headerleft}</Box>

      <Box
        flex={"1"}
        style={{
          display: "flex",
          alignItems: "center",

          justifyContent: "flex-end",
        }}
      >
        <Typography variant="subtitle2" style={{ paddingRight: "14px" }}>
          Jones Ferdinand
        </Typography>
        <Avatar src={UserImage} />
        <Box>
          <Button>
            <LogoutIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
