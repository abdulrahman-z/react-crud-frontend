import React, { useState } from "react";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import CreateUserDialog from "./CreateUsersDialog";

import { Box } from "@mui/system";

const rows = [
  {
    id: 1,
    username: "John",
    age: 25,
    designation: "Software Engineer",
    actions: "",
  },
  {
    id: 2,
    username: "Stephen",
    age: 32,
    designation: "Senior Software Engineer",
    actions: "",
  },
  {
    id: 3,
    username: "Robert",
    age: 45,
    designation: "Team Leader",
    actions: "",
  },
];

function UsersList(props) {
  const [editOpen, setEditOpen] = useState(false);
  const [tableData, setTableData] = useState(rows);
  const [currentEditableId, setCurrentEditableId] = useState(null);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      editable: false,
    },
    { field: "username", headerName: "username", width: 300, editable: true },
    {
      field: "age",
      headerName: "Age",
      width: 100,
      editable: true,
      type: "number",
    },
    {
      field: "designation",
      headerName: "Designation",
      width: 300,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 300,
      renderCell: (param) => {
        return (
          <Box display={"flex"} alignItems={"center"}>
            <Button
              onClick={() => {
                const filtered = tableData.filter(
                  (item) => item.id !== param.row.id
                );
                setTableData(filtered);
              }}
            >
              Delete
            </Button>
            <Button onClick={() => setEditOpen(!editOpen)}>Edit</Button>
          </Box>
        );
      },
    },
  ];

  const createUserHandler = (values) => {
    const updatedRows = [...tableData, values];
    setTableData(updatedRows);
  };

  const editUserDetails = () => {};

  return (
    <>
      <div
        style={{ margin: "24px 0", display: "flex", justifyContent: "center" }}
      >
        <Box m={4} style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="outlined" onClick={() => setEditOpen(true)}>
            Add user
          </Button>
        </Box>

        <CreateUserDialog
          isEdit={currentEditableId}
          createUser={createUserHandler}
          editUser={editUserDetails}
          open={editOpen}
          handleClose={() => setEditOpen(!editOpen)}
        />
      </div>
      <div style={{ height: 300, margin: "24px 24px" }}>
        <DataGrid
          rows={tableData}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[8]}
        />
      </div>
    </>
  );
}

export default UsersList;
