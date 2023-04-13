import React from 'react'
import styled from 'styled-components'
import Modal from '.';
import { useFormContext } from 'react-hook-form';
import checkIcon from '../../assets/img/checkboxIcon.png';
import { useState } from 'react';
const Form = styled.form`
  background-color: #FFFFFF;
  padding: 50px 20px;
  width: 500px;
  border-radius: 10px;

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
  padding-bottom: 30px;
  label {
    font-size: 0.8rem;
  }
  input {
    width: 100%;
    border-bottom: 1px solid #EBEBEB;
    /* border-radius: 5px; */
    height: 50px;
    margin-bottom: 20px;
    padding: 10px 15px; 
    :last-child {
      margin-bottom: 0;
    }
    ::placeholder {
      color: #989898;
    }
  }
`;

const ErrorText = styled.p`
  font-size: 13px;
  line-height: 13px;
  color: ${(props) => props.theme.color.WARNING_MESSAGE};
  position: absolute;
  bottom: 0;
  ${props => props.theme.window.mobile} {
    padding-top: 0px;
    line-height: 20px;
  }
`;

const CheckBoxGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  > div {
    input[type='checkbox'] {
      position: absolute;
      left: -1000%;
    }
    input + label::before {
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      border: 2px solid #EBEBEB;
      border-radius: 3px;
      margin-right: 10px;

    }
    label {
      display: flex;
      align-items: center;
      font-size: 0.7rem;
    }
    input:checked + label::before {
      border-color: #6F85E3;
      background-color: #6F85E3;
      background-image: url(${checkIcon});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }
  .agree-btn {
    border: 1px solid #dadada;
    padding: 5px;
    font-size: 0.6rem;
  }
 
`;

function ApplyModal({onClick}) {
  const { register, watch, reset, formState: { errors } } = useFormContext();
  const [showPopup, setShowPopup] = useState(false);
    return (
      <Modal onClick={onClick}>
        <Form>
          <InputGroup>
            <div>
              <label>성명</label>
              <input
                placeholder='회사명을 입력하세요'
                {...register('bizName', {
                  required: '*필수 입력 사항입니다.',
                })}
              />
              {errors.WindstormName?.message && <ErrorText>{errors.WindstormName?.message}</ErrorText>}
            </div>
            <div>
              <label>연락처</label>
              <input
                placeholder='연락처'
                {...register('bizPhone', { 
                  required: '*필수 입력 사항입니다.',
                })}
              />
              {errors.WindstormBussiness?.message && <ErrorText>{errors.WindstormBussiness?.message}</ErrorText>}
            </div>
            <div>
              <label>업종</label>
              <input
                placeholder='영위하시는 업종을 입력해 주세요.'
                {...register('bizSectors', { 
                  required: '*필수 입력 사항입니다.',
                })}
              />
              {errors.WindstormBussiness?.message && <ErrorText>{errors.WindstormBussiness?.message}</ErrorText>}
            </div>
          </InputGroup>
          <CheckBoxGroup>
            <div>
              <input type='checkbox' id='agree' />
              <label for='agree'>개인정보수집 및 활용동의</label>
            </div>
            <div className='agree-btn' onClick={() => setShowPopup(true)}>보기</div>
          </CheckBoxGroup>
          <button type='submit'>상담신청</button>
        </Form>
        {showPopup && (
          <div>dsdsdsd</div>
        )}
      </Modal>
    )
}

export default ApplyModal