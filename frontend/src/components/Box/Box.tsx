import React from "react";
import Box from "./styles";

interface Props {
  children?: React.ReactNode;
  small?: boolean;
}

const BoxContainer: React.FC<Props> = ({ children, small }) => {
  return <Box isSmall={small}>{children}</Box>;
};

export default BoxContainer;
