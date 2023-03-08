import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import logo from '../assets/img/mainLogo.png';

const Wrap = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.2% 0;
  background-color: #FFFFFF;
  
  ${(props) => props.theme.window.tab} {
    padding: 4% 0;

  }
`;

const Nav = styled.nav`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;

 ${(props) => props.theme.window.mobile} {
    width: 85.33333333333333%;
 } 
`;

const LogoBox = styled.button`
  width: 23.19444444444444%;
  display: flex;
  align-items: center;
  
  > p {
    white-space: nowrap;
    letter-spacing: -2px;
  }
  ${(props) => props.theme.window.tab} {
      width: 41.875%;

  }
`;

const Button = styled.button`
  border: 1px solid #393939;
  font-size: 1.25rem;
  line-height: 1.2;
  padding: 0.86% 1.2%;
  ${(props) => props.theme.window.mobile} {
    font-size: 1.133333333333333rem;
    padding: 4.4% 5.7%;
  }
`;


function Header() {
  const [showPopup, setShowPopup] = useState(false);
  let navigate = useNavigate();
  function handleClick(link) {
    navigate(link);
  }
  return (
    <Wrap>
      <Nav>
        <LogoBox onClick={() => handleClick('/')}>
          <img src={logo} alt='소상공인 지원센터' />
        </LogoBox>
        <Button>가입확인</Button>
      </Nav>
    </Wrap>
  )
}

export default Header