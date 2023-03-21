import React from 'react'
import styled from 'styled-components'
import useWindowSize from '../../hooks/useWindowSize';
import Layout from '../../layout';
import Content from '../Content';
import { Title } from '../Font';

const Wrap = styled.div`
  background-color: #FFFFFF;
  width: 52.08333333333333%;
  margin: 0 auto;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  > h1 {
    white-space: pre-wrap;
    text-align: center;
    :nth-child(2) {
      margin-top: 60px;
    }     
  }
`;

function AccoutLayout({children, title, subTitle}) {
  const { width } = useWindowSize();
  return (
    <Layout>
      <Content top='65px' bottom='300px'>
        <Wrap>
          <TitleBox>
            <Title size={width > 768 ? '1.5rem' : '1.33rem'} color='BLACK2'>{title}</Title>
            {subTitle && (
              <Title size={width > 768 ? '1.5rem' : '1.33rem'} color='SECONDARY'>{subTitle}</Title>
            )}
          </TitleBox>
            {children}
        </Wrap>
      </Content>
    </Layout>
  )
}

export default AccoutLayout