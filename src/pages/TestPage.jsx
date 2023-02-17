import React from 'react'
import Test1 from '../assets/img/test1.png'
import styled from 'styled-components';
import Layout from '../layout';

const Wrap = styled.div`
  height: 1000px;
`;

function TestPage() {
  return (
    <Wrap>
      <Layout>
        <img src={Test1} alt='test'/>
      </Layout>
    </Wrap>
  )
}

export default TestPage