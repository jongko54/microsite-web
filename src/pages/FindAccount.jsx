import React, { useState } from 'react'
import styled from 'styled-components';
import Input from '../components/Input';
import AuthLayout from '../components/Auth/AuthLayout';
import { Text } from '../components/Font';
import { useFormContext } from "react-hook-form";
import CustomButton from '../components/Button/CustomButton';
import useWindowSize from '../hooks/useWindowSize';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import checkIcon from '../assets/icon/smsCheckIcon.png';

const Form = styled.form`
  padding-top: 80px;

  ${(props) => props.theme.window.mobile} {
    padding-top: 20px;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 50px;
  position: relative;
  .phone-wrap {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .button {
      width: 46.6%;
      margin-bottom: 15px;
      background-color: #989898;
      border-radius: 10px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  ${(props) => props.theme.window.mobile} {
    margin-bottom: 55px;
    .phone-wrap {
      .button {
        margin-bottom: 10px;
        height: 50px;
      }
    }
  }
`;

const ButtonWrap = styled.div`
  ${props => props.theme.window.mobile} {
    padding-top: 0;
  }
  
`;


const ResultWrap = styled.div`
  padding-top: 127px;

  > input {
    width: 100%;
    border: 1px solid #2F2F2F;
    height: 80px;
    margin-bottom: 50px;
    
    
    ::placeholder {
      color: #2F2F2F;
                 
    }
  }

  ${props => props.theme.window.mobile} {
    > input {
      height: 50px;
      
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

  ${props => props.theme.window.mobile} {
    height: 50px;
    width: 15px;
  }
`;

function FindAccount() {
  const { handleSubmit, watch, setFocus, reset, setValue } = useFormContext();
  const { width } = useWindowSize();
  const [messageId, setMessageId] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(0);
  const [email, setEmail] = useState('');

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

  const onSubmit = async () => {
    await axios({
      url: 'http://localhost:8080/api/public/findEmail',
      method: 'get',
      params: {
        mobile: watch('phoneRole'),
        messageId: messageId,
      }
    }).then(function (response) {
        setMessage(response.data.message)
        setStatus(response.status);
        console.log(response.data.data[0].userId)
        setEmail(response.data.data[0].userId)
        
    })
    .catch(function (error) {
        setMessage(error.response.data.message)
    })
  }

  const onError = (error) => {
    console.log(error);
  }

  setValue('email', email)
  return (
      <AuthLayout
        title='계정찾기'
        subTitle={status === 200 ? '회원님의 계정을 찾았습니다.': `계정을 찾기 위해서\n휴대폰번호를 입력해주세요`}
      >
        {status === 200 ? (
          <ResultWrap>
            <Input
              name='email'
              readOnly
            />
            <ButtonWrap>
              <CustomButton bgColor='GRAY' width='100%'>
                <Link to='/'>
                  <Text color='WHITE' bold='200'>메인으로 돌아가기</Text>
                </Link>
              </CustomButton>
            </ButtonWrap>
          </ResultWrap>
        ) : (
          <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <InputGroup>
              <Input 
                label='휴대폰번호' 
                type='phone'
                name="phoneRole"
                placeholder='‘-’없이 번호만 입력해주세요'
                require='*필수 입력 사항입니다.'
                pattern={{
                  value: /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/,
                  message: '규칙에 맞는 휴대폰 번호를 입력해 주세요.'
                }}
              />
              <div className='phone-wrap'>
                <div className='button' onClick={openSmsSend}>
                  <Text color='WHITE'>인증번호받기</Text>
                </div>
                <div className='button'>
                  <Text color='WHITE'>인증번호재전송</Text>
                </div>
              </div>
              <Input  
                type='number'
                name="confirmCode"
                placeholder='인증번호를 입력해주세요'
                validate={{check: () => openSmsCheck() }}
              />
              {message === '인증이 완료 되었습니다.' ? (<SmsCheckIcon check={message} />) : null}
              {/* <Text size={width > 768 ? '0.9rem' : '0.86rem'} color='WARNING_MESSAGE'>
                {`인증번호가 요청되었습니다. 유효시간 ${`04:00`} 입니다.`}
              </Text> */}
            </InputGroup>
            <ButtonWrap>
              <CustomButton bgColor='GRAY' width='100%' type='submit'>
                <Text color='WHITE' bold='200'>이메일로 계속하기</Text>    
              </CustomButton>
            </ButtonWrap>
          </Form>
        )}
        
       
      </AuthLayout>
      
  )
}

export default FindAccount