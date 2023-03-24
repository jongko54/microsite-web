import React, { useState } from 'react';
import styled from 'styled-components';
import AuthLayout from '../components/Auth/AuthLayout';
import { Text } from '../components/Font';
import CustomButton from '../components/Button/CustomButton';
import useWindowSize from '../hooks/useWindowSize';
import CheckBox from '../components/Input/CheckBox';
import Input from '../components/Input';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const data = [
  {
    id: 1,
    title: '회원가입 및 운영약관 동의(필수)',
    textArea: `
      <div>약관동의</div>
    `
  },
  {
    id: 2,
    title: '회원가입 및 운영약관 동의(필수)',
    textArea: `
      <div>약관동의</div>
    `
  },
  {
    id: 3,
    title: '마케팅 이용 동의(선택)',
    textArea: `
      <div>약관동의</div>
    `
  },
]

const ButtonWrap = styled.div`
  padding-top: 50px;

  ${(props) => props.theme.window.mobile} {
    padding-top: 30px;
  }
`;

const Form = styled.form`
  padding-top: 54px;
  
  ${(props) => props.theme.window.mobile} {
    padding-top: 20px;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 30px;

  .phone-wrap {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    > button {
      margin-bottom: 15px;
    }
  }
  ${(props) => props.theme.window.mobile} {
    .phone-wrap {
      > button {
        margin-bottom: 10px;
      }
    }
  }
`;

function Register() {
  const navigate = useNavigate()
  const { width } = useWindowSize();
  const [inputValue, setInputValue] = useState({
    id: '',
    email: '',
    password: '',
    phone: '',
    name: '',
  })

  const inputChangeHandler = (e) => {
    const { name, value } = e.target
    setInputValue({
      ...inputValue,
      [name]: value,
    })
  }

  const doSignUp = async () => {
    
      const { data } = await axios.post(
        'http://localhost:4000/users',
        inputValue,
      )
      console.log(data)
      
  }

  return (
    <AuthLayout title='회원가입'>
      <Form>
        <InputGroup>
          <Input
            label='이메일' 
            name="email"
            onChange={inputChangeHandler}
            placeholder='AAA.@HJJJJ.COM'
          />
        </InputGroup>
        <InputGroup>
          <Input 
            label='비밀번호' 
            name='password'
            onChange={inputChangeHandler} 
            placeholder='비밀번호를 입력해주세요'
          />
          {/* <Input 
            label='비밀번호' 
            name='passwordConfirm' 
            placeholder='비밀번호를 다시 한번 입력해주세요'
          /> */}
            <Text size={width > 768 ? '0.9rem' : '0.86rem'} color='WARNING_MESSAGE'>
              *영문 숫자, 특수문자를 2가지 이상으로 조합해 8자리 이상 16자리 이하로 입력해주세요
            </Text>
          </InputGroup>
          <InputGroup>
            <Input
              label='이름' 
              name='name'
              placeholder='이름을 입력해주세요'
              onChange={inputChangeHandler}
            />
          </InputGroup>
          <InputGroup>
            <div className='phone-wrap'>
              <Input
                width={width > 768 ? '62.5%' : '66.875%'}
                label='휴대폰번호'
                name='phone' 
                placeholder='‘-’없이 번호만 입력해주세요'
                onChange={inputChangeHandler}
              />
              <CustomButton bgColor='GRAY3' width={width > 768 ? '33.9%' : '31.5625%'}>
                <Text color='WHITE' bold='200'>인증번호받기</Text>
              </CustomButton>
            </div>
            <Input
              name='confirmNumber'
              placeholder='인증번호를 입력해주세요'
            />
          </InputGroup>
          <CheckBox data={data} />
          <Text size={width > 768 ? '0.9rem' : '0.86rem'} color='WARNING_MESSAGE'>
            *선택 항목을 동의하지 않아도 가입이 가능합니다.
          </Text>
          <ButtonWrap>
            <CustomButton bgColor='GRAY' width='100%' onClick={() => doSignUp()}>
              <Text color='WHITE' bold='200'>
                이메일로 가입하기
              </Text>
            </CustomButton>
          </ButtonWrap>
      </Form>
    </AuthLayout>
  )
}

export default Register