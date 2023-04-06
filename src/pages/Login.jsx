import React from 'react'
import AuthLayout from '../components/Auth/AuthLayout';
import naverIcon from '../assets/img/naverIcon.png';
import kakaoIcon from '../assets/img/kakaoIcon.png';
import styled from 'styled-components';
import Input from '../components/Input';
import { Text } from '../components/Font';
import { Link } from 'react-router-dom';
import CustomButton from '../components/Button/CustomButton';
import useWindowSize from '../hooks/useWindowSize';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useFormContext } from 'react-hook-form';
import { setAccessToken, setUser } from '../container/Auth';
import { useEffect } from 'react';

const SocialLoginGroup = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 80px;

  > button {
    display: flex;
    align-items: center;
    width: 46.6%;
    padding: 22px 4.67%;
    white-space: nowrap;
    
    > img {
      margin-right: 14.3%;
    }
  }

  ${props => props.theme.window.mobile} {
    flex-direction: column;
    padding: 55px 0 24px;
    > button {
      width: 100%;
      padding: 12px 13% 16px;
      
      > p {
        line-height: 22px;
      }
      > img {
        margin-right: 18.5%;
      }
      :first-child img {
        width: 23.16px;
        height: 21.28px;
      }
      :last-child {
        margin-top: 15px;
      }
      :last-child img {
        width: 20px;
        height: 20px;
      }
    }
    
  }
`;

const Linear = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 110px;
  > span {
    font-size: 1.15rem;
    color: #545454;
  }

  > hr {
    border: 0;
    width: 43.3%;
    height: 2px;
    background: #F5F5F5;
  }

  ${props => props.theme.window.mobile} {
    height: 50px;
    > hr {
      width: 40%;
    }
    > span {
      font-size: 1rem;
      
    }
  }
`;
const ButtonWrap = styled.div`
   padding-top: 0;

`;

const Form = styled.form`
  padding: 14px 0 18px;
  

`;


const TextLink = styled(Link)`
  color: #2f2f2f;
  display: flex;
  justify-content: center;
  padding-top: 22px;
  ${props => props.theme.window.mobile} {
    padding-top: 16px;
  }
`;

function Login() {
  const { width }= useWindowSize();
  const navigate = useNavigate();
  const { handleSubmit, reset } = useFormContext();

  useEffect(() => {
    reset();
  }, []);

  const onError = (error) => {
    console.log(error)
  }
  const onSubmit = async (data) => {
    console.log(data)
    
    await axios({
      url: 'http://localhost:8080/api/public/login',
      headers: { "Content-Type": `application/json`},
      method: 'post',
      data : JSON.stringify(data)
    }).then(function (response) {
        console.log(response.data.data);
        setAccessToken(response.data.data.accessToken);
        setUser(response.data.data.userName)
        navigate('/')
        reset();
    })
    .catch(function (error) {
      console.log(error.response.data.message);
      alert(error.response.data.message)
    })
  }

  return (
    <AuthLayout
      title='로그인'
      subTitle={width > 768 ? `소상공인의 성공을 지원하는 \n소상공인 도우미 방문을 환영합니다.` : `소상공인의 성공을 지원하는 \n소상공인 도우미 방문을\n환영합니다.`}
    >
    <SocialLoginGroup>
      <CustomButton bgColor='YELLOW'>
        <img src={kakaoIcon} alt='카카오톡' />
        <Text size={width > 768 ? '1.15rem' : '1rem'} color='BLACK4'>카카오톡 로그인</Text>
      </CustomButton>
      <CustomButton bgColor='GREEN'>
        <img src={naverIcon} alt='네이버' />
        <Text size={width > 768 ? '1.15rem' : '1rem'} color='WHITE'>네이버 로그인</Text>
      </CustomButton>
    </SocialLoginGroup>
    <Linear>
      <hr /><span>또는</span><hr />
    </Linear>
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <Input
        label='이메일'
        name='userId'
        placeholder='이메일주소를 입력하세요'
        require='*필수 입력 사항입니다.'
        pattern={{
          value: /^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          message: '규칙에 맞는 이메일 주소를 입력해주세요.'
        }}
      />
      <Input 
        name='userPw'
        type='password'
        placeholder='비밀번호를 입력하세요'
        require='*필수 입력 사항입니다.'
      />
  
      <ButtonWrap>
        <CustomButton bgColor='GRAY' width='100%' type='submit'>
          <Text color='WHITE' bold='200'>
            이메일로 계속하기
          </Text>
        </CustomButton>
      </ButtonWrap>
      <TextLink to='/login/findAccount'>계정정보를 잊으셨나요?</TextLink>
    </Form>
  </AuthLayout>
  )
}

export default Login