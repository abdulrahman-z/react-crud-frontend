import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PeopleIcon from "@mui/icons-material/People";

export default function BasicInfoCard({ infoCardTitle, infoCardCount }) {
  return (
    <Box flex={1} padding={"12px 16px"}>
      <Card style={{ padding: "0 4px" }}>
        <CardContent
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
          >
            <Typography variant="subtitle2">{infoCardTitle}</Typography>
            <Typography variant="h6">{infoCardCount}</Typography>
            <Box display={"flex"} alignItems={"center"}>
              <Typography
                variant="subtitle1"
                style={{ paddingRight: "8px", color: "#00e64d" }}
              >
                10%
              </Typography>
              <ArrowUpwardIcon
                style={{
                  fontSize: "20px",
                  paddingRight: "8px",
                  color: "#00e64d",
                }}
              />
              <Typography variant="span">than last month</Typography>
            </Box>
          </Box>
          <Box style={{ paddingLeft: "24px" }}>
            <PeopleIcon />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
