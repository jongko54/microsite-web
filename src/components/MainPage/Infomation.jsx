import React from 'react'
import styled from 'styled-components'
import Content from '../Content';
import TitleSet from '../TitleSet';
import left from '../../assets/img/left_bg.png';
import right from '../../assets/img/right_bg.png';
import { useScroll } from '../../hooks/useScroll';
import useWindowSize from '../../hooks/useWindowSize';
import Passage from './Passage';

const InfoBanner = styled.div`
  height: 400px;
  background-color: #EEE;
  margin-top: 9%;

  ${(props) => props.theme.window.mobile} {
    margin-top: 11%;
  }
`;


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





function Infomation({scrollY1, scrollY2}) {
  const { y } = useScroll();
  const { width } = useWindowSize();

  return (
    <Content
      top={width > 768 ? '5%' : '18%'}
      bottom={width > 768 ? '8.45%' : '20%'}
      scrollY1={scrollY1}
      scrollY2={scrollY2}
    >
      <LeftBackground className={y > scrollY1 ? 'show' : null}>
        <img src={left} alt='insurobo'  />
      </LeftBackground>
      <RightBackground className={y > scrollY2 ? 'show' : null}>
        <img src={right} alt='insurobo' />
      </RightBackground>
      <TitleSet
        small_title='정보 알림이'
        big_title1='소상공인&nbsp;'
        big_title2='정보마당'
        row={width > 768 ? true : false}
      />
       <Passage link='/board' title='지원사업 더 보러가기' circle='POINT'>
          <InfoBanner>

          </InfoBanner>
       </Passage> 
        
    </Content>
  )
}

export default Infomation