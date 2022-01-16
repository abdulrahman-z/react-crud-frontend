import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CardDetails from "./CardDetails";
import Header from "./Header";

function DashboardContents({ users }) {
  return (
    <>
      <Header
        headerleft={<StyledTypography variant="h5">Overview</StyledTypography>}
      />
      <Box
        style={{
          padding: "58px 30px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <CardDetails data={users} />
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
