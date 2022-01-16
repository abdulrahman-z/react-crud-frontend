import styled from "@emotion/styled";
import { alpha, Box, TextField } from "@mui/material";
import React from "react";

function CustomInput({ id, name, label, type, formik }) {
  return (
    <Box>
      <StyledTextField
        id={id}
        label={label}
        name={name}
        type={type}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values[name]}
        fullWidth
        helperText={
          formik.errors[name] && formik.touched[name] ? (
            <span style={{ color: "#ff0000" }}>{formik.errors[name]}</span>
          ) : null
        }
      />
    </Box>
  );
}

const StyledTextField = styled(TextField)`
  background-color: #fcfdfe;

  /* .MuiOutlinedInput-root {
    padding: 11px 8px;
  } */

  label {
    color: ${alpha("#4b506d", 0.4)};
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: #f0f1f7;
    border-radius: 8px;
  }
`;

export default CustomInput;
