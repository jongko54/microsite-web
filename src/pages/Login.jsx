import React from 'react'
import styled from 'styled-components';
import Input from '../components/Input';
import AccoutLayout from '../components/Account/AccoutLayout';
import { Text } from '../components/Font';
import CustomButton from '../components/Button/CustomButton';
import useWindowSize from '../hooks/useWindowSize';
import naverIcon from '../assets/img/naverIcon.png';
import kakaoIcon from '../assets/img/kakaoIcon.png';



const SocialLoginGroup = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 80px;

  > button {
    display: flex;
    align-items: center;
    width: 46.6%;
    padding: 22px 4.67%;
    
    > img {
      margin-right: 14.3%;
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
`;

const ButtonWrap = styled.div`
  padding-top: 7px;
`;

const Form = styled.form`
  padding: 14px 0 18px;
`;


function Login() {
  const { width } = useWindowSize();
  return (
      <AccoutLayout
        title='로그인'
        subTitle={width > 768 ? `소상공인의 성공을 지원하는 \n소상공인 도우미 방문을 환영합니다.` : `소상공인의 성공을 지원하는 \n소상공인 도우미 방문을\n환영합니다.`}
      >
        <SocialLoginGroup>
          <CustomButton bgColor='YELLOW'>
            <img src={kakaoIcon} alt='카카오' />
            <Text size='1.15rem' color='BLACK4'>카카오 로그인</Text>
          </CustomButton>
          <CustomButton bgColor='GREEN'>
            <img src={naverIcon} alt='네이버' />
            <Text size='1.15rem' color='WHITE'>네이버 로그인</Text>
          </CustomButton>
        </SocialLoginGroup>
        <Linear>
          <hr /><span>또는</span><hr />
        </Linear>
        <Form>
          <Input 
            label='이메일' 
            type='email'
            name="email"
            placeholder='이메일주소를 입력하세요'
          />
          <ButtonWrap>
            <CustomButton bgColor='GRAY' width='100%'>
              <Text color='WHITE' bold='200'>
                이메일로 계속하기
              </Text>
            </CustomButton>
          </ButtonWrap>
        </Form>
      </AccoutLayout>
  )
}

export default Login