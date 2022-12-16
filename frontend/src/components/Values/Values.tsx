import React from "react";
import StyledValue from "./styles";

interface Props {
  text: string;
  value: number | string;
  type?: "entries" | "spents" | "budget";
}

const Values: React.FC<Props> = ({ text, value, type }) => {
  return (
    <StyledValue type={type}>
      {text} <span>R${value}</span>
    </StyledValue>
  );
};

export default Values;
