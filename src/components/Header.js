import styled from "@emotion/styled";
import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import React, { useContext } from "react";
import UserImage from "./../assets/images/avatar.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { UserContext } from "../provider/UserProvider";
import { useNavigate } from "react-router-dom";

function Header({ headerleft }) {
  const { user, setUser } = useContext(UserContext);
  //console.log(user);
  const navigate = useNavigate();
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
          {user.email}
        </Typography>
        <Avatar src={UserImage} />
        <Box>
          <IconButton
            style={{ marginLeft: "24px" }}
            onClick={() => {
              localStorage.removeItem("loggedInUser");
              setUser(null);
              navigate("/");
            }}
          >
            <LogoutIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
