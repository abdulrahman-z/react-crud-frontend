import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import { useFormik } from "formik";

export default function CreateUserDialog({
  createUser,
  isEdit,
  editUser,
  open,
  handleClose,
}) {
  console.log(isEdit);
  const formik = useFormik({
    initialValues: {
      id: 0,
      username: "",
      age: 0,
      designation: "",
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      createUser(values);
      handleClose();
    },
  });

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {isEdit ? "Edit user details" : "Add new user"}
      </DialogTitle>
      <DialogContent>
        <form onSubmit={formik.handleSubmit}>
          <Box m={3}>
            {/* <label htmlFor="id">id</label> */}
            <TextField
              id="id"
              label="id"
              name="id"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.id}
            />
          </Box>
          <Box m={3}>
            {/* <label htmlFor="username">username</label> */}
            <TextField
              id="username"
              name="username"
              label="username"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
          </Box>

          <Box m={3}>
            {/* <label htmlFor="age">age</label> */}
            <TextField
              id="age"
              name="age"
              label="age"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.age}
              required
            />
          </Box>

          <Box m={3}>
            {/* <label htmlFor="designation">designation</label> */}
            <TextField
              id="designation"
              name="designation"
              label="designation"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.designation}
              required
            />
          </Box>
          <Box m={2} style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button mr={2} type="submit" color="error" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </Box>
        </form>
      </DialogContent>
      {/* <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
    </Dialog>
  );
}
