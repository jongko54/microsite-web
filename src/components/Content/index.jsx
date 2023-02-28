import React from 'react'
import styled from 'styled-components'
import theme from '../../style/Theme';

const Wrap = styled.div`
  padding-left: 12.5%;
  padding-right: 12.5%;
  padding-top: ${props => props.top};
  padding-bottom: ${props => props.bottom};
  background-color: ${props => theme.color[props.color]};
  background-image: url(${(props) => props.bgImg});
  background-repeat: no-repeat;
  background-size: 29%;
  background-position: top left;
  position: relative;
  min-width: 1440px;

  ${(props) => props.theme.window.mobile} {
    padding-left: 6.5%;
    padding-right: 6.5%;
    min-width: auto;
  }
`;

function Content({children, top, bottom, bgImg, color, min}) {
  return (
    <Wrap top={top} bottom={bottom} bgImg={bgImg} color={color} min={min}>
      {children}
    </Wrap>
  )
}

export default Content