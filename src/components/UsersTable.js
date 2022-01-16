import React from "react";
import {
  Avatar,
  Box,
  CardHeader,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment";
import { DataGrid } from "@mui/x-data-grid";

function UsersTable({ users, setDialogOpen, deleteUserDetails }) {
  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 2,
      align: "start",
      editable: false,
      renderCell: (param) => {
        return (
          <Box display={"flex"} alignItems={"center"}>
            <Avatar
              src={`https://i.pravatar.cc/150?img=${param.row.id}`}
            ></Avatar>
            <Typography style={{ paddingLeft: "24px" }}>
              {param.row.name}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "designation",
      headerName: "Designation",
      flex: 1,
      align: "start",
      editable: false,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
      align: "start",
      editable: false,
    },
    {
      field: "status",
      headerName: "status",
      flex: 1,
      align: "start",
      editable: false,
      renderCell: (param) => {
        return param.row.status ? (
          <Chip label="Active" color="success" />
        ) : (
          <Chip label="Inactive" color="error" />
        );
      },
    },
    {
      field: "createdAt",
      headerName: "Creation Date",
      flex: 1,
      align: "start",
      editable: false,
      renderCell: (param) => {
        const formattedDate = moment(param.row.createdAt).format("DD MMM YYYY");

        return <>{formattedDate}</>;
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      align: "start",
      renderCell: (param) => {
        return (
          <Box display={"flex"} alignItems={"center"}>
            <IconButton
              aria-label="delete"
              onClick={() => {
                deleteUserDetails(param?.row?.id);
              }}
            >
              <DeleteIcon fontSize="inherit" color="error" />
            </IconButton>

            <IconButton
              onClick={() => {
                setDialogOpen({ state: true, rowId: param.row.id });
              }}
            >
              <EditIcon color="primary" />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <div style={{ padding: "24px 32px" }}>
      <StyledTable
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        autoHeight
        headerHeight={46}
        rowHeight={92}
      />
    </div>
  );
}

export default UsersTable;

const StyledTable = styled(DataGrid)`
  .MuiDataGrid-columnHeaderTitle {
    color: #9fa2b4;
  }
  .MuiDataGrid-cell--textLeft {
    color: #252733;
    font-size: 16px;
  }
  .MuiChip-label {
    color: #ffffff;
  }
`;
