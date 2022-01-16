import { Box, alpha } from "@mui/system";
import React from "react";
import styled from "@emotion/styled";
import { ReactComponent as LogoIcon } from "../assets/images/logo.svg";
import { Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import PrimaryButton from "../components/PrimaryButton";

const BackgroundWrapper = styled("main")`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #363740;
  height: 100%;
  flex-direction: column;
`;

const LoginCard = styled(Box)`
  background-color: #ffffff;
  border: 1px solid #dfe0eb;
  box-sizing: border-box;
  border-radius: 8px;
  width: 380px;
  padding: 40px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledTextField = styled(TextField)`
  background-color: #fcfdfe;
  label {
    color: ${alpha("#4b506d", 0.4)};
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: #f0f1f7;
    border-radius: 8px;
  }
`;

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email field is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Password field is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 characters or more";
  }

  return errors;
};

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <BackgroundWrapper>
      <LoginCard>
        <LogoIcon />
        <Box height={"12px"} />
        <Typography variant="h6" style={{ color: "#A4A6B3" }}>
          Dashboard Portal
        </Typography>
        <Box height={"32px"} />

        <Typography
          variant="h5"
          style={{ color: "#252733", fontWeight: "bold" }}
        >
          Log in to Dashboard
        </Typography>
        <Box height={"12px"} />
        <Typography
          variant="subtitle2"
          style={{
            fontWeight: "400",
            letterSpacing: "0.3px",
            color: "#9FA2B4",
          }}
        >
          Enter your email and password below
        </Typography>
        <Box height={"48px"} />
        <Box width={"100%"}>
          <form onSubmit={formik.handleSubmit}>
            <Box>
              <StyledTextField
                id="email"
                label="Email"
                name="email"
                type="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                fullWidth
                helperText={
                  formik.errors.email && formik.touched.email ? (
                    <span style={{ color: "#ff0000" }}>
                      {formik.errors.email}
                    </span>
                  ) : null
                }
              />
            </Box>
            <Box height={"24px"} />
            <Box>
              <StyledTextField
                id="password"
                name="password"
                label="Password"
                type="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
                fullWidth
                helperText={
                  formik.errors.password && formik.touched.password ? (
                    <span style={{ color: "#ff0000" }}>
                      {formik.errors.password}
                    </span>
                  ) : null
                }
              />
            </Box>
            <Box height={"24px"} />

            <PrimaryButton label="Log In" isDisabled={!formik.isValid} />
          </form>
        </Box>
      </LoginCard>
    </BackgroundWrapper>
  );
};

export default Login;
