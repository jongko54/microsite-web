import React from "react";
import Header from "./Header";
import styled from "styled-components";

const Wrap = styled.div``;

const Layout = ({children}) => {
  return (
    <Wrap>
      <Header />
      {children}
    </Wrap>
  )
}

export default Layout;