import styled from "@emotion/styled";
import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CardDetails from "./CardDetails";

const staticData = [
  {
    title: "Unresolved",
    count: 60,
  },
  {
    title: "Overdue",
    count: 16,
  },
  {
    title: "Open",
    count: 43,
  },
  {
    title: "Onhold",
    count: 64,
  },
];

function DashboardContents(props) {
  return (
    <>
      <Box
        style={{
          padding: "36px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box flex={"1"}>
          <StyledTypography variant="h5">Overview</StyledTypography>
        </Box>

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
          <Avatar>JF</Avatar>
        </Box>
      </Box>

      <Box
        style={{
          padding: "58px 30px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {staticData.map((item, idx) => {
          return <CardDetails key={idx} data={item} />;
        })}
      </Box>
    </>
  );
}

const StyledTypography = styled(Typography)`
  color: #252733;
  line-height: 30px;
  letter-spacing: 0.3px;
`;

export default DashboardContents;
