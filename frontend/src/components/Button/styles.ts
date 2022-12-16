import styled from "styled-components";

export default styled.div`
  width: 135px;
  height: 45px;

  button {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 10px;
    background: ${(props) => props.theme.colors.btnBg};
    color: ${(props) => props.theme.colors.primaryTextColor};
    font-size: 15px;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    transition: 0.2s;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 11px;

    &:hover {
      /* background: ${(props) => props.theme.colors.hoverBtnBg}; */
      opacity: 0.6;
    }

    img {
      filter: invert(1);
      width: 23px;
    }
  }

  @media (max-width: 1270px) {
    width: 100px;

    button {
      font-size: 14px;
      img {
        width: 17px;
      }
    }
  }
`;
