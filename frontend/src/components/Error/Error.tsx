import React from "react";
import StyledError from "./styles";

interface Props {
  message: string;
}

const Error: React.FC<Props> = ({ message }) => {
  return <StyledError>{message}</StyledError>;
};

export default Error;
