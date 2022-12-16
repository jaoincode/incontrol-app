import React from "react";
import ButtonContainer from "./styles";

interface IButton {
  icon?: any;
  text: string;
  onClick?: () => void;
}

function Button({ icon, onClick, text }: IButton) {
  return (
    <ButtonContainer>
      <button onClick={onClick}>
        {text} {icon && <img src={icon} />}
      </button>
    </ButtonContainer>
  );
}

export default Button;
