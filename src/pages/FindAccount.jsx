import React from 'react'
import styled from 'styled-components';
import Input from '../components/Input';
import AuthLayout from '../components/Auth/AuthLayout';
import { Text } from '../components/Font';
import CustomButton from '../components/Button/CustomButton';
import useWindowSize from '../hooks/useWindowSize';
import { Link, useLocation } from 'react-router-dom';


const Form = styled.form`
  padding-top: 80px;

  ${(props) => props.theme.window.mobile} {
    padding-top: 20px;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 50px;
 
  .phone-wrap {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    > button {
      width: 46.6%;
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



function FindAccount() {
  const { width } = useWindowSize();
  const location = useLocation();
  return (
      <AuthLayout
        title='계정찾기'
        subTitle={location.search  === `?search` ? '회원님의 계정을 찾았습니다.': `계정을 찾기 위해서\n휴대폰번호를 입력해주세요`}
      >
        {location.search === `?search` ? (
          <ResultWrap>
            <input type='email' name='email' />
            <ButtonWrap>
              <CustomButton bgColor='GRAY' width='100%'>
                <Link to='/'>
                  <Text color='WHITE' bold='200'>메인으로 돌아가기</Text>
                </Link>
              </CustomButton>
            </ButtonWrap>
          </ResultWrap>
        ) : (
          <Form>
            <InputGroup>
              <Input 
                label='휴대폰번호' 
                type='phone'
                name="phone"
                placeholder='‘-’없이 번호만 입력해주세요'
              />
              <div className='phone-wrap'>
                <CustomButton bgColor='GRAY3'>
                  <Text color='WHITE'>인증번호받기</Text>
                </CustomButton>
                <CustomButton bgColor='GRAY3'>
                  <Text color='WHITE'>인증번호재전송</Text>
                </CustomButton>
              </div>
              <Input  
                type='phone'
                name="certification"
                placeholder='인증번호를 입력해주세요'
              />
              <Text size={width > 768 ? '0.9rem' : '0.86rem'} color='WARNING_MESSAGE'>
                {`인증번호가 요청되었습니다. 유효시간 ${`04:00`} 입니다.`}
              </Text>
            </InputGroup>
            <ButtonWrap>
              <CustomButton bgColor='GRAY' width='100%'>
                <Link to='/login/findAccount?search'>
                  <Text color='WHITE' bold='200'>
                    이메일로 계속하기
                  </Text>
                </Link>
              </CustomButton>
            </ButtonWrap>
          </Form>
        )}
        
       
      </AuthLayout>
      
  )
}

export default FindAccount