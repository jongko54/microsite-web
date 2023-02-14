import styled from "styled-components";
import theme from "../style/Theme";

export const Title = styled.h1`
  font-weight: ${(props) => (props.bold ? props.bold : '600')};
  font-size: ${(props) => (props.size ? props.size : '50px')};
  color: ${(props) => (theme.color[props.color] || theme.color.BLACK3)};
`;

export const Text = styled.p`
  font-weight: ${(props) => (props.bold ? props.bold : '300')};
  font-size: ${(props) => (props.size ? props.size : '20px')};
  color: ${(props) => (theme.color[props.color] || theme.color.BLACK4)};
`;


