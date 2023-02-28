import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";
import theme from '../style/Theme';

const Wrap = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  background-color: ${props => theme.color[props.color] || '#FFFFFF'};
 
`;

const Layout = ({children, color}) => {
  return (
    
      <Wrap color={color}>
        <Header />
          {children}
        <Footer />
      </Wrap>

  )
}

export default Layout;