import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components'
import Layout from '../layout';
import Content from '../components/Content';


const LoginWrap = styled.div`
  background-color: #FFFFFF;
  width: 800px;
  margin: 0 auto;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > form {
    > button {
      border-radius: 5px;
      border: 1px solid #D8D8D8;
      padding: 10px;
    }
  }
`;




function Login() {
  // const { handleSubmit } = useFormContext();

  return (
    <Layout color='BG_GRAY'>
      <Content top='100px' bottom='100px'>
        <LoginWrap>
          
        </LoginWrap>
      </Content>
    </Layout>
  )
}

export default Login