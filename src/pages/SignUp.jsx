import React from 'react'
import styled from 'styled-components';
import Layout from '../layout'
import Content from '../components/Content';
import { useFormContext } from 'react-hook-form';
import { Title } from '../components/Font';
import Input from '../components/Input';

const SignUpWrap = styled.form`
  background-color: #FFFFFF;
  padding: 20px;
`;
const InputGroup = styled.div`
  margin: 30px 0;


    > button {
        background-color: red;
        padding: 5px 10px;
        color: #FFFFFF;
        display: block;
        width: 30%;
    }
  
   
`;

const TosGroup = styled.div`
   
`;

function SignUp() {
  const { handleSubmit } = useFormContext()
  const onSubmit = (data) => console.log(data);

  return (
    <Layout color='BG_GRAY'>
      <Content top='100px' bottom='100px'>
        <SignUpWrap>
          <Title>회원가입</Title>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input 
              label='이메일' 
              type='email' 
              name='email' 
              placeholder='AAA.@HJJJJ.COM'
              required='필수 입력사항 입니다.'
            />
            <InputGroup>
              <Input 
                label='비밀번호' 
                type='password' 
                name='password' 
                placeholder='비밀번호를 입력해주세요'
                required='필수 입력사항 입니다.'
              />
              <Input 
                type='password' 
                name='passwordConfirm' 
                placeholder='비밀번호를 다시 한번 입력해주세요'
                required='필수 입력사항 입니다.'
                caution='영문 숫자, 특수문자를 2가지 이사으로 조합해 8자리 이상 16자리 이하로 입력해주세요'
              />
            </InputGroup>
            <Input
              label='이름' 
              type='name' 
              name='name' 
              placeholder='이름을 입력해주세요'
              required='필수 입력사항 입니다.'
            />
            <InputGroup>
              <Input
                label='휴대폰번호'
                type='phone' 
                name='phoneNumber' 
                placeholder=''
                required='필수 입력사항 입니다.'
              />
              <button>인증번호 받기</button>
              <Input
                type='number' 
                name='verification' 
                placeholder='인증번호를 입력해주세요'
                required='필수 입력사항 입니다.'
              />
            </InputGroup>
          <TosGroup>
            
          </TosGroup>
          <button type="submit">이메일로 가입하기</button>
        </form>
            
        </SignUpWrap>
      </Content>
    </Layout>
  )
}

export default SignUp