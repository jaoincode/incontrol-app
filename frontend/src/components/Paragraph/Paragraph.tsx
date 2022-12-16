import React from "react";
import StyledParagraph from "./styles";

interface Props {
  children: React.ReactNode;
}

const Paragraph: React.FC<Props> = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};

export default Paragraph;
