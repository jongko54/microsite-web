import React, { useEffect, useState } from 'react';
import { useFormContext } from "react-hook-form";
import styled from 'styled-components';
import AuthLayout from '../components/Auth/AuthLayout';
import { Text } from '../components/Font';
import CustomButton from '../components/Button/CustomButton';
import useWindowSize from '../hooks/useWindowSize';
import CheckBox from '../components/Input/CheckBox';
import Input from '../components/Input';
import axios from 'axios';
import checkIcon from '../assets/icon/smsCheckIcon.png';
import { useLocation } from 'react-router-dom';

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

  ${(props) => props.theme.window.mobile} {
    margin-bottom: 20px;
  }
  
`;

const PhoneGroup = styled.div`
  position: relative;
  > div {
      display: flex;
      justify-content: space-between;
    > .button {
      width: 40%;
      height: 80px;
      margin-left: 27px;
      background-color: #989898;
      border-radius: 10px;
      align-self: flex-end;
      margin-bottom: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
  ${(props) => props.theme.window.mobile} {
    > div {
      > .button {
          height: 50px;
          margin-bottom: 20px;
          margin-left: 5px;
      }
    }
  }
`;

const SmsCheckIcon = styled.div`
  width: 21.65px;
  height: 80px;
  background-image: url(${checkIcon});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
  right: 5%;
`;


function Register() {
  const { width } = useWindowSize();
  const location = useLocation();
  const [messageId, setMessageId] = useState('');
  const [message, setMessage] = useState('');

  const { handleSubmit, watch, setFocus, reset } = useFormContext();
  useEffect(() => {
    reset()
  }, [location, reset]);

  const onSubmit = async (data) => {
    await axios({
      url: 'http://localhost:8080/api/public/join',
      method: 'post',
      body: data
    }).then(function (response) {
      console.log(response)
    }).catch(function (error) {
      console.log(error)
    });
  }

  const onError = (error) => {
    console.log(error);
  }
  const openEmailCheck = async (value) => {
    await axios({
      url: 'http://localhost:8080/api/public/email',
      method: 'get',
      params: {
        email: value
      }
    }).then(function (response) {
      console.log(response)
      return true;
    })
    .catch(function (error) {
      console.log(error)
      return false;
    })
  }

  const passwordCheck = () => {
    if (watch('userPw') === watch('userPwCheck')) {
      return true;
    } else {
      return false;
    }
  }

  const openSmsSend = async () => {
    await axios({
      url: 'http://localhost:8080/api/public/sms_send',
      method: 'post',
      data: {
        mobile: watch('phoneRole')
      }
    })
    .then(function (response) {
      setMessageId(response.data.data.messageId);
      setFocus('confirmCode')
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  const openSmsCheck = async () => {
    await axios({
      url: 'http://localhost:8080/api/public/sms_check',
      method: 'get',
      params: {
        messageId: messageId,
        authKey: watch('confirmCode')
      }
    }).then(function (response) {
        setMessage(response.data.message)
    })
    .catch(function (error) {
        setMessage(error.response.data.message)
    })
  }
  

  return (
    <AuthLayout title='회원가입'>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <InputGroup>
          <Input
            label='이메일'
            name="userId"
            placeholder='AAA.@HJJJJ.COM'
            require='*필수 입력 사항입니다.'
            validate={{
              check: (value) => openEmailCheck(value) ? '중복확인이 완료되었습니다' : '이미존재하는아이디입니다'
            }}
            pattern={{
              value: /^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: '규칙에 맞는 이메일 주소를 입력해주세요.'
            }}
          />
        </InputGroup>
        <InputGroup>
          <Input 
            label='비밀번호' 
            name='userPw'
            type='password'
            placeholder='비밀번호를 입력해주세요'
            require='*필수 입력 사항입니다.'
            pattern={{
              value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,
              message: '규칙에 맞는 비밀번호를 입력해주세요.'
            }}
          />
          <Input 
            name='userPwCheck'
            type='password'
            placeholder='비밀번호를 다시 한번 입력해주세요'
            require='*필수 입력 사항입니다.'
            validate={{
              check: () => passwordCheck() ? true : '비밀번호가 일치하지 않습니다.'
            }}
          />
            <Text size={width > 768 ? '0.9rem' : '0.86rem'} color='WARNING_MESSAGE'>
              *영문 숫자, 특수문자를 조합해 8자리 이상 16자리 이하로 입력해주세요
            </Text>
          </InputGroup>
          <InputGroup>
            <Input
              label='이름' 
              name='userName'
              placeholder='이름을 입력해주세요'
              require='*필수 입력 사항입니다.'
            />
          </InputGroup>
          <PhoneGroup>
            <div>
              <Input
                label='휴대폰번호'
                type='phone'
                name='phoneRole' 
                placeholder='‘-’없이 번호만 입력해주세요'
                require='*필수 입력 사항입니다.'
                pattern={{
                  value: /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/,
                  message: '규칙에 맞는 휴대폰 번호를 입력해 주세요.'
                }}
              />
              <div className='button' onClick={openSmsSend}>
                <Text color='WHITE' bold='200'>인증번호받기</Text>
              </div>
            </div>
            <Input
              name='confirmCode'
              type='number'
              placeholder='인증번호를 입력해주세요'
              validate={{check: () => openSmsCheck()}}
            />
            {message === '인증이 완료 되었습니다.' ? (<SmsCheckIcon check={message} />) : null}
          </PhoneGroup>
          <CheckBox data={data} />
          <Text size={width > 768 ? '0.9rem' : '0.86rem'} color='WARNING_MESSAGE'>
            *선택 항목을 동의하지 않아도 가입이 가능합니다.
          </Text>
          <ButtonWrap>
            <CustomButton bgColor='GRAY' width='100%' type='submit'>
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