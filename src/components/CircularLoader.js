import styled from "@emotion/styled";
import { Box, CircularProgress } from "@mui/material";
import React from "react";

function CircularLoader(props) {
  return (
    <LoaderContainer>
      <CircularProgress />
    </LoaderContainer>
  );
}

const LoaderContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export default CircularLoader;
