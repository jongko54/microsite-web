import React, { useEffect, useState } from 'react';
import { useFormContext } from "react-hook-form";
import styled from 'styled-components';
import AuthLayout from '../components/Auth/AuthLayout';
import { Text } from '../components/Font';
import CustomButton from '../components/Button/CustomButton';
import useWindowSize from '../hooks/useWindowSize';
import Input from '../components/Input';
import axios from 'axios';
import checkIcon from '../assets/icon/smsCheckIcon.png';
import { useLocation } from 'react-router-dom';
import HookFormCheckbox from '../components/Input/HookFormCheckbox';

const data = [
  {
    id: 1,
    title: '회원가입 및 운영약관 동의(필수)',
    checked: false,
    textArea: `
      <div>약관동의</div>
    `
  },
  {
    id: 2,
    title: '마케팅 이용 동의(선택)',
    checked: false,
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
  const [smsIcon, setSmsIcon] = useState(false);
  const { handleSubmit, watch, setFocus, reset, setError, setValue, formState: { errors } } = useFormContext({ 
    mode: 'onBlur'
  });
  useEffect(() => {

    reset()
  }, [location, reset]);

  const onSubmit = async (data) => {
   
    await axios({
      url: 'http://localhost:8080/api/public/join',
      method: 'post',
      data: {
        userId: data.userId,
        userPw: data.userPw,
        userName: data.userName,
        phoneRole: data.phoneRole,
        marketing_yn: data.marketing_yn === true ? 'Y' : 'N'
      }
    }).then(function (response) {
      console.log(response)
      alert('회원가입이 완료되었습니다')
      reset()
      setSmsIcon('')

    }).catch(function (error) {
      console.log(JSON.stringify(error))
    });
  }

  const onError = (error) => {
    setSmsIcon(false)
    console.log(watch())
    console.log(error);
  }


  const openEmailCheck =  () => {
     axios({
      url: 'http://localhost:8080/api/public/email',
      method: 'get',
      params: {
        email: watch('userId')
      }
    })
    .then(function (response) {
      console.log(response.status)
      
    //  alert('성공')
    })
    .catch(function (error) {
      console.log(error.response.status)
      setError('userId', { type: 'custom', message: '이미 등록된 이메일입니다'});
      return false;
    });
    return true;
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
      timeout: 500,
      data: {
        mobile: watch('phoneRole')
      }
    })
    .then(function (response) {
      console.log(response)
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
        console.log(response)
        return true
    })
    .catch(function (error) {
      setError('confirmCode', { type: 'custom', message: '인증번호를 확인해주세요'});
      setSmsIcon(false)
        // setStatue(error.response.data.message)
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
            pattern={{
              value: /^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: '규칙에 맞는 이메일 주소를 입력해주세요.'
            }}
            validate={{
              value: () => openEmailCheck()
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
              // minLength={5}
              // maxLength={5}
              validate={{
                value: () => openSmsCheck() && setSmsIcon(true)
              }}
            />
            {smsIcon && (<SmsCheckIcon />)}
          </PhoneGroup>

          <HookFormCheckbox />

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