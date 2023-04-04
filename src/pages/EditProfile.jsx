import React from 'react'
import AuthLayout from '../components/Auth/AuthLayout';
import styled from 'styled-components';
import Input from '../components/Input';
import { Text } from '../components/Font';
import useWindowSize from '../hooks/useWindowSize';
import { useFormContext } from 'react-hook-form';
import CustomButton from '../components/Button/CustomButton';

const Form = styled.form`
  padding: 54px 0 147px;
  

`;

const InputGroup = styled.div`
  margin-bottom: 30px;
	
	.address {
		display: flex;
    justify-content: space-between;
		.button {
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
		margin-bottom: 20px;
		.address {
			.button {
				margin-left: 5px;
				height: 50px;
				margin-bottom: 10px;
			}
		}
	}
`;

const ButtonWrap = styled.div`
  padding-top: 20px;

  ${(props) => props.theme.window.mobile} {
    padding-top: 30px;

  }
`;
function EditProfile() {
  const { handleSubmit, watch, setFocus, reset } = useFormContext();
  const { width } = useWindowSize();


  return (
    <AuthLayout title='프로필 수정'>
      <Form>
        <InputGroup>
          <Input
            label='이름'
            name='userName'
            placeholder='이메일주소를 입력하세요'
            require='*필수 입력 사항입니다.'
            pattern={{
              value: /^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: '규칙에 맞는 이메일 주소를 입력해주세요.'
            }}
          />
        </InputGroup>
        <InputGroup>
          <Input 
            label='비밀번호' 
            name='beforePw'
            type='password'
            placeholder='비밀번호 변경하기'
            require='*필수 입력 사항입니다.'
            pattern={{
              value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,
              message: '규칙에 맞는 비밀번호를 입력해주세요.'
            }}
          />
					{/* <Input 
            name='afterPw'
            type='password'
            placeholder='새로운 비밀번호'
            require='*필수 입력 사항입니다.'
            pattern={{
              value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,
              message: '규칙에 맞는 비밀번호를 입력해주세요.'
            }}
          />
					<Input 
            name='afterPw          '
            type='password'
            placeholder='새로운 비밀번호'
            require='*필수 입력 사항입니다.'
            pattern={{
              value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,
              message: '규칙에 맞는 비밀번호를 입력해주세요.'
            }}
          /> */}
        </InputGroup>
        <InputGroup>
					<Input
            label='연락처'
            type='phone'
            name='phoneRole' 
            placeholder='‘-’없이 번호만 입력해주세요'
            require='*필수 입력 사항입니다.'
            pattern={{
              value: /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/,
              message: '규칙에 맞는 휴대폰 번호를 입력해 주세요.'
            }}
          />
        </InputGroup>
				<InputGroup>
				  <div className='address'>
						<Input
							label='주소'
							name='userAd'
							readOnly
						/>
						<div className='button'>
              <Text color='WHITE' bold='200'>주소찾기</Text>
            </div>
					</div>
					<Input
						name='userAdDetail'
						placeholder='상세주소 입력해주세요'
					/>
				</InputGroup>
				<ButtonWrap>
          <CustomButton bgColor='GRAY' width='100%' type='submit'>
            <Text color='WHITE' bold='200'>
              수정하기
            </Text>
          </CustomButton>
        </ButtonWrap>
      </Form>
    </AuthLayout>
  )
}

export default EditProfile