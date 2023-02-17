import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import logo from '../assets/img/mainLogo.png';

const Wrap = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.2% 0;
`;

const Nav = styled.nav`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoBox = styled.button`
  display: flex;
  align-items: center;
  
  > p {
    white-space: nowrap;
    letter-spacing: -2px;
  }
`;

const Logo = styled.img`
  margin-right: 5px;
`;

const Button = styled.button`
  border: 1px solid #393939;
  font-size: 1.5625rem;
  padding: 12px 10px;
  line-height: 36px;
`;


function Header() {
  let navigate = useNavigate();
  function handleClick(link) {
    navigate(link);
  }
  return (
    <Wrap>
      <Nav>
        <LogoBox onClick={() => handleClick('/test')}>
          <Logo src={logo} alt='소상공인 지원센터' />
        </LogoBox>
        <Button onClick={() => handleClick('/')}>풍수해보험 가입확인</Button>
      </Nav>
    </Wrap>
  )
}

export default Header