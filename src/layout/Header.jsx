import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import logo from '../assets/img/mainLogo.png';
import UserContext from '../context/UserContext';
import AdminMember from '../components/Modal/AdminMember';

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
  ${(props) => props.theme.window.mobile} {
      width: 41.875%;

  }
`;

const Menu = styled.ul`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  align-items: center;
  > li {
    margin-right: 30px;
    /* height: 60px; */
    position: relative;
    ::after {
      content: 'ㅣ';
      display: inline-block;
      position: absolute;
      right: -25px;
    }
    :last-child {
      margin-right: 0;
    }
    :last-child::after {
      content: none;
    }
  }
  ${(props) => props.theme.window.mobile} {

  }
`;

const ToggleBtn = styled.div`

`;


function Header() {
  const [showPopup, setShowPopup] = useState(false);
  const [ToggleOn, setToggleOn] = useState(false);
  const { loginUser, logIn, setLoginUser, setLogin } = useContext(UserContext);


  let navigate = useNavigate();
  function handleClick(link) {
    navigate(link);
  }
  const toggleClick = () => {
    setToggleOn(!ToggleOn);
  }

  return (
    <>
      <Wrap>
        <Nav>
          <LogoBox onClick={() => handleClick('/')}>
            <img src={logo} alt='소상공인 지원센터' />
          </LogoBox>
          <Menu>
            <li onClick={() => setShowPopup(true)}>풍수해보험 가입확인</li>
            <li><Link to='/login'>로그인</Link></li>
            <li><Link to='/signup'>회원가입</Link></li>
          </Menu>
        </Nav>
        <ToggleBtn>
          
        </ToggleBtn>
      </Wrap>
      {showPopup && (
        <AdminMember onClick={() => setShowPopup(false)} />
      )}
    </>
  )
}

export default Header