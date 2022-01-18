import styled from "@emotion/styled";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import CustomInput from "./CustomInput";

function AddEditUserModal({
  dialogOpen,
  setDialogOpen,
  users,
  addUserDetails,
  updateUserDetails,
}) {
  const formik = useFormik({
    initialValues: {
      name: "",
      city: "",
      status: "",
      designation: "",
    },
    onSubmit: (values) => {
      if (dialogOpen?.rowId) {
        updateUserDetails(values, handleClose);
      } else {
        addUserDetails(values, handleClose);
      }
    },
  });

  useEffect(() => {
    if (dialogOpen?.rowId) {
      const selectedUser = users?.find((el) => el?.id === dialogOpen?.rowId);
      formik.setValues({
        name: selectedUser?.name,
        city: selectedUser?.city,
        status: selectedUser?.status,
        designation: selectedUser?.designation,
      });
    }
  }, [dialogOpen?.rowId]);

  const handleClose = () => {
    formik.setValues({ name: "", city: "", status: "", designation: "" });
    setDialogOpen({ state: false, rowId: null });
  };

  return (
    <StyledDialog
      open={dialogOpen?.state}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
    >
      <StyledDialogTitle>
        {dialogOpen?.rowId ? "Edit user details" : "Add new user"}
      </StyledDialogTitle>
      <Box height={"16px"} />

      <DialogContent>
        <form onSubmit={formik.handleSubmit}>
          <CustomInput id="name" name="name" label="Name" formik={formik} />
          <Box height={"24px"} />
          <CustomInput id="city" label="city" name="city" formik={formik} />
          <Box height={"24px"} />
          <CustomInput
            id="designation"
            label="designation"
            name="designation"
            formik={formik}
          />

          <Box height={"24px"} />
          {/* <CustomInput
            id="status"
            name="status"
            label="status"
            formik={formik}
          /> */}
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              id="status"
              labelId="demo-simple-select-label"
              name="status"
              label="status"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.status}
            >
              <MenuItem value={true}>Active</MenuItem>
              <MenuItem value={false}>Inactive</MenuItem>
            </Select>
          </FormControl>
          <Box height={"24px"} />
          <Box style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button color="error" onClick={handleClose}>
              Cancel
            </Button>
            <Box style={{ marginLeft: "24px" }}>
              <Button type="submit">Submit </Button>
            </Box>
          </Box>
        </form>
      </DialogContent>
    </StyledDialog>
  );
}

export default AddEditUserModal;

const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    padding: 40px 32px 16px 32px;
    border-radius: 8px;
  }
`;

const StyledDialogTitle = styled(DialogTitle)`
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.3px;
  color: #252733;
`;
