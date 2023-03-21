import React, { useState, useCallback } from 'react'
import styled from 'styled-components';
import Input from '../components/Input';
import axios from 'axios';
import AccoutLayout from '../components/Account/AccoutLayout';
import { Text } from '../components/Font';
import CustomButton from '../components/Button/CustomButton';
import CheckBox from '../components/Input/CheckBox';

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

`;

const Form = styled.form`
  padding-top: 54px;
`;

const ButtonWrap = styled.div`
  padding-top: 50px;
`;

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
function SignUp() {
  const [passwordConfirm, setPasswordConfirm] = useState(false);
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    name: "",
    phone: "",
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
  
  const onChangePasswordConfirm = useCallback((e) => {
    const passwordConfirmCurrent = e.target.value
    setPasswordConfirm(passwordConfirm)

    if (inputValue.password === passwordConfirmCurrent) {
      setPasswordConfirm(true)
    } else {
      setPasswordConfirm(false);
      alert('비밀번호가 일치하지 않습니다')
    }
  }, [inputValue.password]) 

  
  return (
      <AccoutLayout
        title='회원가입'
      >
        <Form>
          <InputGroup>
            <Input 
              label='이메일' 
              type='email'
              name="email"
              placeholder='AAA.@HJJJJ.COM'
              onChange={inputChangeHandler}
            />
          </InputGroup>
          <InputGroup>
            <Input 
              label='비밀번호' 
              type='password' 
              name='password' 
              placeholder='비밀번호를 입력해주세요'
              onChange={inputChangeHandler}
            />
            <Input 
              label='비밀번호' 
              type='password' 
              name='passwordConfirm' 
              placeholder='비밀번호를 다시 한번 입력해주세요'
              onChange={onChangePasswordConfirm}
            />
            <Text size='0.9rem' color='WARNING_MESSAGE'>
              *영문 숫자, 특수문자를 2가지 이상으로 조합해 8자리 이상 16자리 이하로 입력해주세요
            </Text>
          </InputGroup>
          <InputGroup>
            <Input
              label='이름' 
              type='text' 
              name='name' 
              placeholder='이름을 입력해주세요'
              onChange={inputChangeHandler}
            />
          </InputGroup>
          <InputGroup>
            <div className='phone-wrap'>
              <Input
                width='62.5%'
                label='휴대폰번호'
                type='phone' 
                name='phone' 
                placeholder='‘-’없이 번호만 입력해주세요'
                onChange={inputChangeHandler}
              />
              <CustomButton bgColor='GRAY3' width='33.9%'>
                <Text color='WHITE' bold='200'>인증번호받기</Text>
              </CustomButton>
            </div>
            <Input
              type='number'
              name='confirmNumber'
              placeholder='인증번호를 입력해주세요'
            />
          </InputGroup>
          <CheckBox data={data} />
          <Text size='0.9rem' color='WARNING_MESSAGE'>
            *선택 항목을 동의하지 않아도 가입이 가능합니다.
          </Text>
          <ButtonWrap>
            <CustomButton onClick={() => doSignUp()} bgColor='GRAY' width='100%'>
              <Text color='WHITE' bold='200'>
                이메일로 가입하기
              </Text>
            </CustomButton>
          </ButtonWrap>
        </Form>
      </AccoutLayout>
  )
}

export default SignUp