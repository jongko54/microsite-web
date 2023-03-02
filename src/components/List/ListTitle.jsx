import React from 'react'
import styled from 'styled-components'
import useWindowSize from '../../hooks/useWindowSize';
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
  ${(props) => props.theme.window.mobile} {
    > h1 {
      line-height: 1.5;
    }
    > div {
      white-space: pre-wrap;
    }
  }
`;

function ListTitle({page, title, desc}) {
  const { width } = useWindowSize();
  return (
    <Wrap>
      <Title color='ORANGE' size={width > 768 ? '5rem' : '1.866666666666667rem'} bold='800'>{page}</Title>
      <div>
        <Title color='ORANGE' size={width > 768 ? '2.5rem' : '1rem'} bold='600'>{title}</Title>
        <Title color='BLACK2' size={width > 768 ? '1rem' : '0.8666666666666667rem' } bold='200'>{desc}</Title>
      </div>
    </Wrap>
  )
}

export default ListTitle