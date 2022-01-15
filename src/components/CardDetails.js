import { Box, Typography } from "@mui/material";
import React from "react";

function CardDetails(props) {
  const { data } = props;
  return (
    <Box
      style={{
        backgroundColor: "#ffffff",
        width: "258px",
        padding: "24px 32px",
        border: "1px solid #DFE0EB",
        borderRadius: "8px",
      }}
    >
      <Box>
        <Typography
          variant="h6"
          style={{
            color: "#9FA2B4",
            lineHeight: "24px",
            textAlign: "center",
            letterSpacing: "0.4px",
          }}
        >
          {data.title}
        </Typography>
        <Typography
          variant="h3"
          style={{
            color: "#252733",
            lineHeight: "50px",
            textAlign: "center",
            letterSpacing: "1px",
            marginTop: "12px",
          }}
        >
          {data.count}
        </Typography>
      </Box>
    </Box>
  );
}

export default CardDetails;
