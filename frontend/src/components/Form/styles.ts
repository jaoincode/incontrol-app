import styled from "styled-components";

export default styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.box};
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
