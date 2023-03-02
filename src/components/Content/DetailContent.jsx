import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/img/insurobo.png';

const Wrap = styled.div`
  margin: 0 auto;
  width: 800px;
  padding: 127px 0 220px 0;
  border-radius: 20px;

  ${(props) => props.theme.window.mobile} {
    width: 85.33333333333333%;
    padding: 44px 0 108px 0;
  }
`;

const Content = styled.div`
  background-color: #FFFFFF;
  border: 2px solid #F5F5F5;
  padding: 42px 33px;
  margin-bottom: 68px;
  border-radius: 20px;
  overflow: hidden;
  ${(props) => props.theme.window.mobile} {
    padding: 30px 0 65px 0;
  }
`;

const Logo = styled.div`
  width: 200px;
  height: 25.13px;
  background-image: url(${logo});

  ${(props) => props.theme.window.mobile} {
    width: 25%;
    background-size: contain;
    background-repeat: no-repeat;
    transform: translateX(29px);
  }
`;


const DetailContent = ({children}) => {
  let navigate = useNavigate();
  function handleClick(link) {
    navigate(link);
  }
  return (
    <Wrap>
      <Content>
        <Logo />
        {children}
      </Content>
      <Button
        onClick={() => handleClick('/')}
        title='홈페이지로 돌아가기' 
        color='BLACK2' 
        bgColor='GRAY2'
      />
    </Wrap>
  )
}

export default DetailContent