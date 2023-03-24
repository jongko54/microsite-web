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

  ${(props) => props.theme.window.mobile} {
    width: 100%;
  }
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

  ${props => props.theme.window.mobile} {
    > h1 {
      :nth-child(2) {
        margin-top: 20px;
      }     
    }
  }
`;

function AuthLayout({children, title, subTitle}) {
  const { width } = useWindowSize();
  return (
    <Layout>
      <Content top={width > 768 ? '65px' : '42px'} bottom={width > 768 ? '300px' : '91px'}>
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

export default AuthLayout