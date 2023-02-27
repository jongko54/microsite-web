import React from 'react'
import styled from 'styled-components'
import { Title } from '../Font';

const Wrap = styled.div`
  display: flex;
  > h1 {
    line-height: 1;
  }
  > div {
    margin-left: 1.3%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

function ListTitle({page, title, desc}) {
  return (
    <Wrap>
      <Title color='ORANGE' size='5rem' bold='800'>{page}</Title>
      <div>
        <Title color='ORANGE' size='2.5rem' bold='600'>{title}</Title>
        <Title color='BLACK2' size='1rem' bold='200'>{desc}</Title>
      </div>
    </Wrap>
  )
}

export default ListTitle