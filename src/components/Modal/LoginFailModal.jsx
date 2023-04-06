import React from 'react'
import styled from 'styled-components'
import Modal from '.';
import { useFormContext } from 'react-hook-form';
import tamplate from '../../assets/img/hyundaiTamplate.png';

const data = [
    {
        id: '1',
        name: '증권번호',
        value: 'F-2022-0955555'
    },
    {
        id: '2',
        name: '보험기간',
        value: '2022.09.30 부터 1년'
    },
    {
        id: '3',
        name: '보험종목',
        value: '풍수해보험 VI'
    },
    {
        id: '4',
        name: '가입업체',
        value: '윤배네야채가게'
    },
    {
        id: '5',
        name: '주소',
        value: '서울시 양천구 오목로 9길 29'
    },
    {
        id: '6',
        name: '보장내용',
        value: '풍수해로 인한 사고를 보상'
    }
]

const Form = styled.form`
  background-color: #FFFFFF;
  padding: 50px 20px;
  width: 500px;
  border-radius: 10px;

  > h2 {
    margin-bottom: 50px;
    font-weight: 500;
    text-align: center;
  }
  > button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    background-color: #6F85E3;
    border-radius: 10px;
    height: 50px;
    font-size: 15px;
  }

  ${(props) => props.theme.window.mobile} {
    width: 100%;
    > h2 {
      font-size: 20px;
      margin-bottom: 30px;
    }
  }
`;

const InputGroup = styled.div`
  padding-bottom: 50px;
  > input {
    width: 100%;
    border-bottom: 1px solid #EBEBEB;
    /* border-radius: 5px; */
    height: 50px;
    margin-bottom: 20px;
    padding: 10px 15px; 
    ::placeholder {
      color: #989898;
    }
  }
`;

const InsuranceCertificate = styled.div`
  background-color: #FFFFFF;
  width: 570px;
  height: 840px;
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: 43% 50%;
  box-shadow: 7px 10px 39px 0 rgba(0, 0, 0, 0.3);
  background-image: url(${tamplate});
  padding: 150px 50px;
  
  ${(props) => props.theme.window.mobile} {
    width: 100%;
    height: 450px;
    padding: 70px 20px;
  }
`;

const InputWrap = styled.div`
  border-top: 1px dashed #c4c4c4;
  display: flex;
  align-items: center;
  padding: 5px 0;
  :first-child {
    margin-top: 5px;
  }
  :nth-child(8) {
    border-bottom: 1px dashed #c4c4c4;
  }
  :nth-child(9) {
    margin-top: 75px;
  }
  > p {
    font-size: 12px;
    line-height: 1;
    color: #2F2F2F;
    font-weight: 700;
    width: 60px;
    
  }
  > span {
    color: #2F2F2F;
    padding-left: 5px;
    font-size: 12px;
    > b {
      width: 80px;
      display: inline-block;
    }
  }

  ${(props) => props.theme.window.mobile} {
    padding: 2px 0;
    :first-child {
      margin-top: 10px;
    }
    :nth-child(7) {
      margin-top: 50px;
    }
    :nth-child(8) {
      border-bottom: 1px dashed #c4c4c4;
    }
    :nth-child(9) {
      border-top: 0;
      margin-top: 0;
    }
    > p {
      font-size: 10px;
      width: 50px;
      margin-left: 5px;
    }
    > span {
      padding-left: 5px;
      font-size: 10px;
      > b {
        width: 50px;
      }
    }
  }
`;

const TextInfo = styled.div`
  text-align: center;
`

function WindStormModal({onClick, type, kor_name}) {
    return (
        <Modal onClick={onClick}>
            <Form>
                <InputGroup>
                  <TextInfo>이미 {kor_name}로 가입된 계정입니다</TextInfo>
                  <TextInfo>해당 계정으로 로그인 해주세요</TextInfo>
                </InputGroup>
                <button onClick={onClick}>확인</button>
            </Form>
        </Modal>
    )
}

export default WindStormModal
