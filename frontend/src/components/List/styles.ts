import styled from "styled-components";

interface Props {
  type: string;
}

export default styled.div<Props>`
  margin-top: 5px;
  width: 100%;
  height: 100%;
  border-radius: 10px;

  > .item {
    border-radius: 10px;
    background: ${(props) => props.theme.colors.btnBg};
    display: flex;
    height: 40px;
    padding: 0 21px;
    align-items: center;
    margin-bottom: 10px;

    p,
    span {
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: center;
      width: 33%;
      color: ${(props) => props.theme.colors.titlesColor};
      font-size: 16px;
    }

    justify-content: space-between;
    .itemName {
      font-weight: 500;
    }

    .itemValue {
      color: ${(props) =>
        props.type === "entry"
          ? props.theme.colors.green
          : props.type === "spent"
          ? props.theme.colors.redTextColor
          : props.theme.colors.titlesColor};
    }
  }

  @media (max-width: 800px) {
    > .item {
      p,
      span {
        font-size: 14px;
      }
    }
  }
`;
