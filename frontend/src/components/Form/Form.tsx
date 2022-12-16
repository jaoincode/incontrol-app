import React from "react";
import StyledForm from "./styles";

interface Props {
  children?: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
}

const Form: React.FC<Props> = ({ children, onSubmit }) => {
  return (
    <StyledForm>
      <form onSubmit={onSubmit}>{children}</form>
    </StyledForm>
  );
};

export default Form;
