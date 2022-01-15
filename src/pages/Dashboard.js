import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  alpha,
} from "@mui/material";
import PieChartIcon from "@mui/icons-material/PieChart";
import { Box } from "@mui/system";
import { ReactComponent as LogoIcon } from "../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";
import DashboardContents from "../components/DashboardContents";
import GroupIcon from "@mui/icons-material/Group";

const BackgroundWrapper = styled("div")`
  display: flex;
  flex: 1;
`;

const StyledDrawer = styled(Drawer)`
  width: 255px;
  .MuiDrawer-paper {
    background-color: #363740;
    width: inherit;
  }
`;

const StyledListItem = styled(ListItem)`
  padding: 20px 24px 20px 32px;

  border-left: 3px solid transparent;
  color: #a4a6b3;
  fill: #a4a6b3;
  &.Mui-selected,
  &:hover,
  &.Mui-selected:hover {
    background-color: ${alpha("#9fa2b4 ", 0.08)};
    color: #dde2ff;
  }

  &.Mui-selected {
    border-left: 3px solid #dde2ff;
    color: #dde2ff;
  }

  .MuiListItemIcon-root {
    min-width: 0;
    padding-right: 24px;
    color: #a4a6b3;
  }
  &.Mui-selected > .MuiListItemIcon-root,
  &.Mui-selected:hover > .MuiListItemIcon-root,
  &:hover > .MuiListItemIcon-root {
    color: #dde2ff;
  }
`;

const Dashboard = (props) => {
  const [title, setTitle] = useState(["Overview", "Users"]);

  const [currentList, setCurrentList] = useState(0);
  const navigate = useNavigate();
  const handleCurrentList = (event, index) => {
    console.log(event, index);
    setCurrentList(index);
  };

  return (
    <BackgroundWrapper>
      <StyledDrawer variant="permanent">
        <Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            marginTop={"41px"}
            marginBottom={"50px"}
            marginLeft={"32px"}
          >
            <LogoIcon style={{ width: "32px" }} />
            <Typography
              variant="h6"
              style={{
                color: "#A4A6B3",
                lineHeight: "24px",
                letterSpacing: "0.4px",
                opacity: "0.7",
                marginLeft: "12px",
                marginRight: "43px",
              }}
            >
              Dashboard Portal
            </Typography>
          </Box>
        </Box>
        <List>
          {title.map((text, index) => (
            <StyledListItem
              button
              key={text}
              selected={currentList === index}
              onClick={(event) => handleCurrentList(event, index)}
            >
              <ListItemIcon>
                {text === "Overview" ? <PieChartIcon /> : <GroupIcon />}
              </ListItemIcon>
              <ListItemText
                primary={text}
                style={{
                  fontSize: "16px",

                  letterSpacing: "0.2px",
                  lineHeight: "20px",
                }}
              />
            </StyledListItem>
          ))}
        </List>
      </StyledDrawer>
      <Box flex={1}>
        <DashboardContents />
      </Box>
    </BackgroundWrapper>
  );
};

export default Dashboard;
