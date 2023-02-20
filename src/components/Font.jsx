import styled from "styled-components";
import theme from "../style/Theme";

export const Title = styled.h1`
  font-weight: ${(props) => (props.bold ? props.bold : '600')};
  font-size: ${(props) => (props.size ? props.size : '2.5rem')}; //50px
  color: ${(props) => (theme.color[props.color] || theme.color.BLACK3)};

  ${(props) => props.theme.window.mobile} {
    font-size: ${(props) => (props.size ? props.size : '1.333333333333333rem')}; //20px
  }
`;

export const Text = styled.p`
  font-weight: ${(props) => (props.bold ? props.bold : '300')};
  font-size: ${(props) => (props.size ? props.size : '1rem')}; // 20px
  color: ${(props) => (theme.color[props.color] || theme.color.BLACK4)};

  ${(props) => props.theme.window.mobile} {
    font-size: ${(props) => (props.size ? props.size : '0.8666666666666667rem')}; //13px
  }
`;


