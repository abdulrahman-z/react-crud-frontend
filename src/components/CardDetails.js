import { Box, Typography } from "@mui/material";
import moment from "moment";
import react from "react";

function CardDetails({ data }) {
  const cardTitle = [
    "Total users",
    "Recently joined",
    "Active users",
    "Inactive users",
  ];

  const getValue = (value) => {
    switch (value) {
      case "Total users":
        return data.length;

      case "Recently joined":
        const EarlierDate = moment().subtract(15, "days");
        const recentRecords = data.filter((user) =>
          moment(user.createdAt).isAfter(EarlierDate)
        ).length;
        return recentRecords;
      case "Active users":
        const activeUsers = data.filter((user) => user.status === true).length;
        return activeUsers;

      case "Inactive users":
        const InactiveUsers = data.filter(
          (user) => user.status === false
        ).length;
        return InactiveUsers;
    }
  };

  return cardTitle.map((title) => {
    return (
      <Box
        key={title}
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
            {title}
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
            {getValue(title)}
          </Typography>
        </Box>
      </Box>
    );
  });
}

export default CardDetails;
