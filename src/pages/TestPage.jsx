import React from 'react'
import Test1 from '../assets/img/test1.png'
import styled from 'styled-components';

const Wrap = styled.div`
  height: 1000px;
`;

function TestPage() {
  return (
    <Wrap>
      <img src={Test1} alt='test'/>
    </Wrap>
  )
}

export default TestPage