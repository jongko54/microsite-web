import React from 'react'
import styled from 'styled-components'
import theme from '../../style/Theme';

const ButtonWrap = styled.button`
  background-color: ${props => theme.color[props.bgColor]};
  border-radius: 10px;
  height: 80px;
  width: ${props => props.width};
  display: block;
  font-weight: 100;
`;

function CustomButton({children, onClick, bgColor, width}) {
  return (
    <ButtonWrap 
      onClick={onClick}
      bgColor={bgColor}
      width={width}
    >
      {children}
    </ButtonWrap>
  )
}

export default CustomButton