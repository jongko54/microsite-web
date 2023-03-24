import React from 'react'
import styled from 'styled-components'
import Content from '../Content';
import TitleSet from '../TitleSet';
import left from '../../assets/img/left_bg.png';
import right from '../../assets/img/right_bg.png';
import { useScroll } from '../../hooks/useScroll';
import useWindowSize from '../../hooks/useWindowSize';
import Passage from './Passage';


const LeftBackground = styled.div`
  position: absolute;
  top: -7%;
  left: -39%;
  width: 80%;
  opacity: 0;
  transition: opacity 1s ease;
  transition-delay: 0.4s;
  &.show {
    opacity: 1;
  }

  ${(props) => props.theme.window.mobile} {
    top: 35%;
    left: -80%;
    width: 160%;
  }
`;

const RightBackground = styled.div`
  position: absolute;
  top: -20%;
  right: -30%;
  width: 50%;
  opacity: 0;
  transition: opacity 1s ease;

  &.show {
    opacity: 1;
  }

  ${(props) => props.theme.window.mobile} {
    width: 53.4%;
    top: -7.5%;
    right: -22%;
  }
`;





function TaxReturn() {
  const { width } = useWindowSize();

  return (
    <Content
      color='BG_WHITE'
      top={width > 768 ? '4.45%' : '18%'}
      bottom={width > 768 ? '8.45%' : '20%'}
    >
      <TitleSet
        small_title='세무진단을 받을 수 있어요'
        big_title1='소상공인&nbsp;'
        big_title2='세금환급'
        row={width > 768 ? true : false}
      />
       <Passage link='/board' title='세금환급하러 가기' circle='SECONDARY'>
       </Passage> 
        
    </Content>
  )
}

export default TaxReturn