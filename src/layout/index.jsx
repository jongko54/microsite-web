import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";

const Wrap = styled.div``;

const Layout = ({children}) => {
  return (
    <Wrap>
      <Header />
      {children}
      <Footer />
    </Wrap>
  )
}

export default Layout;