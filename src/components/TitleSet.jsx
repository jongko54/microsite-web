import React from 'react'
import styled from 'styled-components'
import { Title } from '../components/Font';

const MainTitle = styled.div`
  padding-top: 23px;
  display: ${props => props.row ? 'flex' : 'block'};
  
  h1 {
    line-height: 1.2;
  }
`;


function TitleSet({small_title, big_title1, big_title2, row}) {
  return (
    <>
      <Title color='PRIMARY' size='15px' bold='500'>{small_title}</Title>

      <MainTitle row={row}>
        {big_title1 && (<Title color='BLACK2' size='50px' bold='200'>{big_title1}</Title>)}
        {big_title2 && (<Title color='BLACK2' size='50px' bold='600'>{big_title2}</Title>)}
      </MainTitle>
    </>
  )
}

export default TitleSet