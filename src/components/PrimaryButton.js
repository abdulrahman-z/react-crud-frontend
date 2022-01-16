import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

const StyledSubmitButton = styled(Button)`
  border-radius: 8px;
  padding: 12px 24px;
  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  font-size: 14px;
  color: #ffffff;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.2px;
  text-transform: capitalize;
`;

function PrimaryButton({ label, isDisabled, ...rest }) {
  return (
    <StyledSubmitButton
      fullWidth
      variant="contained"
      type="submit"
      disabled={isDisabled}
      {...rest}
    >
      {label}
    </StyledSubmitButton>
  );
}

export default PrimaryButton;
