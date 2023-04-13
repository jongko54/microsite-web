import React from 'react'
import styled from 'styled-components'
import Modal from '.';

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
