import React from 'react'
import styled,{ keyframes } from 'styled-components'
import Section from '../Section';
import TitleSet from '../TitleSet';
import left from '../../assets/img/left_bg.png';
import right from '../../assets/img/right_bg.png';
import arrow from '../../assets/img/arrowIcon.png';
import mb_arrow from '../../assets/img/MbArrowIcon.png';
import { useScroll } from '../../hooks/useScroll';
import useWindowSize from '../../hooks/useWindowSize';

const LeftBackground = styled.div`
  position: absolute;
  z-index: -1;
  top: -7%;
  left: -39%;
  width: 80%;
  opacity: 0;
  transition: opacity 1s ease;
  transition-delay: 0.4s;
  &.show {
    opacity: 1;
  }
`;

const RightBackground = styled.div`
  position: absolute;
  z-index: -1;
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

const Info = styled.div`
  background-color: #EEEEEE;
  width: 76.38888888888889%;
  padding-top: 30%;
  margin: 5.9% 0 0;
  position: relative;

  ${(props) => props.theme.window.mobile} {
    width: 100%;
    margin: 11% 0 0;
    padding-top: 98%;
  }
  
`;

const mouseAnimation = keyframes`
  0%{
    transform:translate(0,0);
  }
  50% {
    transform:translate(0,-60%);
  }
  100%{
    transform:translate(0,0);
  }
`
const GoToMoreButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  top: 70%;
  right: -35%;

  > h3 {
    height: 69px;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #2F2F2F;
    font-weight: 200;
    position: relative;
    padding-left: 6.5%;
    white-space: nowrap;
    :hover::before {
      animation: ${mouseAnimation} 2s infinite;
    }

    ::before {
      content: '';
      position: absolute;
      top: 30%;
      left: -7%;
      z-index: 0;
      display: block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #F58839;
      transition: all 1s;
    }
  }

  ${(props) => props.theme.window.mobile} {
    top: 85%;
    left: 15%;
    > h3 {
      font-size: 1rem;
      ::before {
        width: 25px;
        height: 25px;
        top: 36%;
        left: -10%;
      }
    }

    
  }
`;

const Arrow = styled.img`
  z-index: 1;
  ${(props) => props.theme.window.mobile} {

  }
`;

function Infomation({scrollY1, scrollY2}) {
  const { y } = useScroll();
  const { width } = useWindowSize();
  console.log(y)
  return (
    <Section 
      top={width > 768 ? '5%' : '18%'}
      bottom={width > 768 ? '5.8%' : '20%'}
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
        <Info>
          <GoToMoreButton>
            <Arrow src={width > 768 ? arrow : mb_arrow} alt='보러가기' />
            <h3>지원사업 더 보러가기</h3>
          </GoToMoreButton>
        </Info>
        
    </Section>
  )
}

export default Infomation