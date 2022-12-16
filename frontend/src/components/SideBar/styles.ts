import styled from "styled-components";

interface Props {
  opened: boolean;
}

export default styled.aside<Props>`
  height: 100vh;
  width: 200px;
  position: fixed;
  background: ${(props) => props.theme.colors.asideBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;

  &.openedAnimation {
    animation: open 0.3s;
  }

  .greeter {
    margin-top: 46px;
    margin-bottom: 36px;
    width: 100%;
  }

  h1,
  span {
    margin-left: 36px;
    font-size: 17px;
    color: ${(props) => props.theme.colors.titlesColor};
  }
  span {
    font-weight: bold;
    color: ${(props) => props.theme.colors.green};
  }

  h1.small,
  span.small {
    font-size: 20px;
  }

  .buttons {
    div {
      margin-bottom: 19px;
    }
  }

  a {
    font-weight: 500;
    color: ${(props) => props.theme.colors.titlesColor};
    text-decoration: none;
    position: absolute;
    bottom: 20px;
  }

  .opened {
    transform: translateX(0);
  }

  @media (max-width: 640px) {
    transform: ${(props) =>
      props.opened ? "translateX(0px)" : "translateX(-300px)"};
  }

  @keyframes open {
    from {
      transform: translateX(-300px);
    }
    to {
      transform: translateX(0);
    }
  }
`;
