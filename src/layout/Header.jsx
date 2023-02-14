import React from 'react';

import styled from 'styled-components';
// import logo from '../assets/img/mainLogo.png';
// import { Text } from '../components/Font';

const Wrap = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  width: 75%;
`;

// const LogoBox = styled.button`
//   display: flex;

//   > p {
//     white-space: nowrap;
//     letter-spacing: -2px;
//   }
// `;

// const Logo = styled.img`
//   margin-right: 5px;
// `;



function Header() {
  

  // const handleClick = (path) => {
  //   navigate(path)
  // }

  return (
    <Wrap>
      <Nav>
        {/* <LogoBox>
          <Logo src={logo} alt='소상공인' />
          <Text size='35px' bold='500' color='BLACK0'>지원센터</Text>
        </LogoBox> */}
        
      </Nav>
    </Wrap>
  )
}

export default Header