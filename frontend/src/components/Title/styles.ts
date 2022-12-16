import styled from "styled-components";

export default styled.h1`
  color: ${(props) => props.theme.colors.titlesColor};
  font-size: 36px;
  overflow-y: hidden;

  @media (max-width: 720px) {
    font-size: 24px;
  }
`;
