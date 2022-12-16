import styled from "styled-components";

export default styled.div`
  position: fixed;
  z-index: 10;
  width: calc(100vw - 200px);
  margin-left: 200px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);

  @media (max-width: 640px) {
    & {
      padding: 10px;
      width: 100vw;
      margin-left: 0;
    }
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .close {
    background: transparent;
    border: none;
    cursor: pointer;
    width: 25px;
    height: 25px;
    overflow-y: hidden;
    border-radius: 50%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  > div {
    height: 300px;
    background: ${(props) => props.theme.colors.bgDark};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

    h1 {
      font-size: 24px;
      margin-bottom: 10px;
      color: ${(props) => props.theme.colors.titlesColor};
    }
  }
`;
