import styled from "styled-components";

export default styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  overflow-y: hidden;
  color: ${(props) => props.theme.colors.titlesColor};

  @media (max-width: 800px) {
    font-size: 20px;
  }
`;
