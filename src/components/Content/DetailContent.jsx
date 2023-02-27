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
`;

const Content = styled.div`
  background-color: #FFFFFF;
  border: 2px solid #F5F5F5;
  padding: 42px 33px;
  margin-bottom: 68px;
  border-radius: 20px;
  overflow: hidden;
`;

const Logo = styled.div`
  width: 200px;
  height: 25.13px;
  background-image: url(${logo});
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