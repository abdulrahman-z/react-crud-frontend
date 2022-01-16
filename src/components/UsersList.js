import React, { useState } from "react";

import { Box } from "@mui/system";
import PrimaryButton from "./PrimaryButton";
import Header from "./Header";
import UsersTable from "./UsersTable";
import AddEditUserModal from "./AddEditUserModal";
import { UserService } from "../services/UserService";
import moment from "moment";

function UsersList({ users, getUsers }) {
  const [dialogOpen, setDialogOpen] = useState({
    state: false,
    rowId: null,
  });

  const addUserDetails = async (values, handleClose) => {
    try {
      const response = await UserService.addUsers({
        ...values,
        createdAt: moment().toString(),
      });
      if (response) {
        getUsers();
      }
    } catch (err) {
    } finally {
      handleClose();
    }
  };

  const updateUserDetails = async (values, handleClose) => {
    try {
      const response = await UserService.updateUser(dialogOpen?.rowId, values);
      if (response) {
        getUsers();
      }
    } catch (err) {
    } finally {
      handleClose();
    }
  };

  const deleteUserDetails = async (id) => {
    try {
      const response = await UserService.deleteUser(id);
      if (response) {
        getUsers();
      }
    } catch (err) {}
  };

  return (
    <>
      <Header
        headerleft={
          <Box style={{ width: "180px" }}>
            <PrimaryButton
              onClick={() => setDialogOpen({ state: true, rowId: null })}
              label="Add user"
            />
          </Box>
        }
      />
      <UsersTable
        users={users}
        setDialogOpen={setDialogOpen}
        deleteUserDetails={deleteUserDetails}
      />
      <AddEditUserModal
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        users={users}
        addUserDetails={addUserDetails}
        updateUserDetails={updateUserDetails}
      />
    </>
  );
}

export default UsersList;
