import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BasicInfoCard from "./BasicInfoCard";
import CardDetails from "./CardDetails";
import Header from "./Header";
import MetricChart from "./MetricChart";
import ScorecardInfo from "./ScorecardInfo";

function DashboardContents({ users }) {
  const BasicInfoCardTitles = [
    { title: "Total Patients Census", count: "14K" },
    { title: "Patient Adoption", count: 500 },
    { title: " Overall Patient Engagement", count: 1000 },
  ];

  const ScoreCardInfoTitles = [
    {
      title: "Total Patients Census Target",
      labels: [
        "Total Patients Census Target 70%",
        "Total Patients Census Target 30%",
      ],
      target: "30%",
    },
    {
      title: "Patient Adoption Target",
      labels: ["Patient Adoption", "Patient Adoption Target"],
      target: "10%",
    },
    {
      title: " Overall Patient Engagement Target",
      labels: [
        "Overall Patient Engagement",
        "Overall Patient Engagement Target",
      ],
      target: "18%",
    },
  ];

  return (
    <Box>
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
      <Box
        style={{
          display: "flex",
          padding: "12px",
        }}
      >
        {/* <MetricChart users={users} /> */}
        {BasicInfoCardTitles.map((info) => {
          return (
            <BasicInfoCard
              infoCardTitle={info.title}
              infoCardCount={info.count}
            />
          );
        })}
      </Box>

      <Box>
        <Typography variant="subtitle2" style={{ padding: "0 24px" }}>
          Scorecard
        </Typography>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          style={{
            padding: "32px 12px",
            margin: "0 12px",
          }}
        >
          {ScoreCardInfoTitles.map((item, idx) => {
            return (
              <ScorecardInfo
                key={idx}
                scorecardtitle={item.title}
                scorelabel={item.labels}
                scoretarget={item.target}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

const StyledTypography = styled(Typography)`
  color: #252733;
  line-height: 30px;
  letter-spacing: 0.3px;
`;

export default DashboardContents;
