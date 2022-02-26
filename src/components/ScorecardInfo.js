import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

function ScorecardInfo({ scorecardtitle, scorelabel, scoretarget }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        align: "start",
        position: "top",
        labels: {
          boxWidth: 12,
          padding: 5,
          font: {
            size: "14px",
          },
        },
      },

      datalabels: {
        color: "#fff",
        font: {
          size: "16px",
        },
      },
      title: {
        display: true,
        text: scorecardtitle,
        position: "top",
      },
      tooltip: {},
    },
    elements: {
      arc: {
        borderWidth: 1,
        borderAlign: "inner",
      },
    },
    cutout: "65%",
  };
  const data = {
    labels: [...scorelabel],
    datasets: [
      {
        data: [60, 30],
        backgroundColor: ["#2196f3", "#66bb6a"],
        hoverBackgroundColor: ["#2196f3", "#66bb6a"],
      },
    ],
  };

  const plugins = [
    {
      id: "text",
      beforeDraw: function (chart) {
        //console.log(chart);
        const width = chart.width;
        const height = chart.height;
        const ctx = chart.ctx;

        ctx.restore();
        //var fontSize = (height / 114).toFixed(2);
        ctx.font = "20px" + "em sans-serif";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";

        const text = scoretarget,
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;

        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];

  return (
    <Box margin={"32px 0"}>
      <Card style={{ padding: "0 16px" }}>
        <CardContent
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "24px 24px",
          }}
        >
          <Doughnut data={data} options={options} plugins={plugins} />
        </CardContent>

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
      </Card>
    </Box>
  );
}

export default ScorecardInfo;
