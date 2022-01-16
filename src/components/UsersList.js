import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import CreateUserDialog from "./CreateUsersDialog";

import { Box } from "@mui/system";
import PrimaryButton from "./PrimaryButton";
import Header from "./Header";
import {
  Avatar,
  CardHeader,
  Chip,
  Dialog,
  DialogContent,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
// import { useQuery } from "react-fetching-library";
// import { getUsersAction } from "../services/UserService";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment";

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

function UsersList({ users }) {
  const [editOpen, setEditOpen] = useState(false);
  const [currentEditableId, setCurrentEditableId] = useState(null);
  // const { payload: userData, loading } = useQuery(getUsersAction);
  // console.log(userData);

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
          // <CardHeader
          //   avatar={<Avatar>{param.row.name[0]} </Avatar>}
          //   title={
          //     <Typography variant="subtitle2">{param.row.name}</Typography>
          //   }
          // />
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
                // const filtered = tableData.filter(
                //   (item) => item.id !== param.row.id
                // );
                // setTableData(filtered);
              }}
            >
              <DeleteIcon fontSize="inherit" color="error" />
            </IconButton>

            <IconButton
              onClick={() => {
                setEditOpen(true);
                editUserDetails(param);
              }}
            >
              <EditIcon color="primary" />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  // const createUserHandler = (values) => {
  //   const updatedRows = [...tableData, values];
  //   setTableData(updatedRows);
  // };

  const editUserDetails = (event) => {
    console.log(event.row);
    setCurrentEditableId(event.row.id);
  };

  return (
    <>
      <Header
        headerleft={
          <Box style={{ width: "180px" }}>
            <PrimaryButton onClick={() => setEditOpen(true)} label="Add user" />
          </Box>
        }
      />

      <CreateUserDialog
        isEdit={currentEditableId}
        // createUser={createUserHandler}
        editUser={editUserDetails}
        open={editOpen}
        handleClose={() => setEditOpen(false)}
      />

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
    </>
  );
}

export default UsersList;
