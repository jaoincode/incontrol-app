import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;

  label {
    font-size: 15px;
    color: ${(props) => props.theme.colors.titlesColor};
    margin-bottom: 5px;
  }

  input {
    height: 41px;
    width: 100%;
    background: none;
    border-radius: 15px;
    border: 1px solid ${(props) => props.theme.colors.titlesColor};
    outline: none;
    color: ${(props) => props.theme.colors.titlesColor};
    font-family: "Roboto";
    font-size: 17px;
    padding: 0 21px;
  }
`;
