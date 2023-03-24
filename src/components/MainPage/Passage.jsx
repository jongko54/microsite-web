import React from 'react'
import styled,{ keyframes } from 'styled-components'
import arrow from '../../assets/img/arrowIcon.png';
import mb_arrow from '../../assets/img/MbArrowIcon.png';
import { Link } from 'react-router-dom';
import theme from '../../style/Theme';
import useWindowSize from '../../hooks/useWindowSize';

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

const Wrap = styled.div`
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
      background-color: ${props => theme.color[props.circle]};
      transition: all 1s;
    }
  }

  ${(props) => props.theme.window.mobile} {
    top: 85%;
    left: 15%;
    h3 {
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


function Passage({children, link, title, circle}) {
  const { width } = useWindowSize();
  return (
    <Wrap>
      {children}
      <GoToMoreButton circle={circle}>
        <Arrow src={width > 768 ? arrow : mb_arrow} alt='보러가기' />
        <h3><Link to={link}>{title}</Link></h3>
      </GoToMoreButton>
    </Wrap>
  )
}

export default Passage