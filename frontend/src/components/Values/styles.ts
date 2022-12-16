import styled from "styled-components";

interface Props {
  type?: string;
}

export default styled.p<Props>`
  color: ${(props) => props.theme.colors.valueColor};
  font-size: 14px;

  span {
    font-weight: bold;
    color: ${(props) =>
      props.type === "entries"
        ? props.theme.colors.green
        : props.type === "spents"
        ? props.theme.colors.redTextColor
        : props.type === "bugdet"
        ? props.theme.colors.valueColor
        : props.theme.colors.grayTextColor};
  }
`;
