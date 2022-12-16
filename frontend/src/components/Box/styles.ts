import styled from "styled-components";

interface Props {
  isSmall?: boolean;
}

export default styled.div<Props>`
  width: 100%;
  height: ${(props) => (props.isSmall ? "179px" : "575px")};
  background: ${(props) => props.theme.colors.box};
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-height: 860px) {
    height: ${(props) => (props.isSmall ? "179px" : "300px")};
  }
`;
