import React from "react";
import StyledTitle from "./styles";

interface Props {
  children: React.ReactNode;
}

const SecondTitle: React.FC<Props> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default SecondTitle;
