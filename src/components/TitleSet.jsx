import React from 'react'
import styled from 'styled-components'
import { Title } from '../components/Font';
import useWindowSize from '../hooks/useWindowSize';

const MainTitle = styled.div`
  padding-top: 1.6%;
  display: ${props => props.row ? 'flex' : 'block'};
  
  h1 {
    line-height: 1.2;
  }

  ${(props) => props.theme.window.tab} {
    padding-top: 4.7%;
    > h1 {
      line-height: 1.4;
    }
  }
`;


function TitleSet({small_title, big_title1, big_title2, row}) {
  const { width } = useWindowSize();
  return (
    <>
      <Title color='PRIMARY' size={width > 768 ? '1.333333333333333rem' : '0.9333333333333333rem'} bold='500'>{small_title}</Title>

      <MainTitle row={row}>
        {big_title1 && (<Title color='BLACK2' bold='200'>{big_title1}</Title>)}
        {big_title2 && (<Title color='BLACK2' bold='600'>{big_title2}</Title>)}
      </MainTitle>
    </>
  )
}

export default TitleSet