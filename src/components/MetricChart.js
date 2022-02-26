import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Box } from "@mui/system";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Users count based on status(Active / Inactive)",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function MetricChart({ users }) {
  const activeUsersCount = users.filter((user) => user.status === true).length;
  const InactiveUsersCount = users.filter(
    (user) => user.status === false
  ).length;

  //const months = users.map((item) => moment(item.createdAt).get("month"));
  //console.log(months);
  const data = {
    labels,
    datasets: [
      {
        label: "Active Users",
        data: [activeUsersCount],
        backgroundColor: "#3f51b5",
        borderWidth: 1,
      },
      {
        label: "Inactive Users",
        data: [InactiveUsersCount],
        backgroundColor: "#c5cae9",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={"0 32px 0 32px"}
      margin={"0 32px 0 32px"}
      style={{ backgroundColor: "#fff" }}
      maxWidth={"100%"}
    >
      <Bar options={options} data={data} />
    </Box>
  );
}
