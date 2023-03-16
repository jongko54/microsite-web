import React from 'react'
import styled from 'styled-components'
import theme from '../../style/Theme';


const ButtonBase = styled.div`
  background-color: ${props => theme.color[props.bgColor]};
  color: ${props => theme.color[props.color]};
  border-radius: 10px;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.4;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: pre-wrap;
  text-align: center;
  cursor: pointer;
  height: ${props => props.height || '100px'};
  ${(props) => props.theme.window.mobile} {
    font-size: 1rem;
    height: ${props => props.height || '50px'};
  }
`;

function Button({onClick, title, bgColor, color, height, type}) {
  
  return (
    <ButtonBase onClick={onClick} bgColor={bgColor} color={color} height={height} type={type}>
      {title}
    </ButtonBase>
  )
}

export default Button