import React from 'react'
import styled from 'styled-components'
import Modal from '.';
import { useFormContext } from 'react-hook-form';
import tamplate from '../../assets/img/hyundaiTamplate.png';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';



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
  > .button {
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
  > div {
    position: relative;
    input {
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

function WindStormModal({onClick}) {
  const { register, watch, reset, formState: { errors } } = useFormContext();
  const [data, setData] = useState([]);
  const frame = [
    {
      id: '1',
      name: '증권번호',
      value: data.SEC_NO
    },
    {
      id: '2',
      name: '보험기간',
      value: data.INSDATE + ' 부터 1년'

    },
    {
      id: '3',
      name: '보험종목',
      value: data.PROD_NAME
    },
    {
      id: '4',
      name: '가입업체',
      value: data.BUSSINESS_NAME
    },
    {
      id: '5',
      name: '주소',
      value: data.INSLOC
    },
    {
      id: '6',
      name: '보장내용',
      value: '풍수해로 인한 사고를 보장'
    }
  ]

  useEffect(() => {
    reset()
  }, []);

  const openWindstormCheck = async () => {
    let bizNum = '';

    if (watch('WindstormBussiness').length === 10) {
      bizNum = watch('WindstormBussiness').replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3');
    } else {
      bizNum = watch('WindstormBussiness')
    }
    await axios({
      url: 'http://insrb.com/apis/windstorm/join/check',
      method: 'get',
      headers: {
        'X-insr-servicekey' : 'Q29weXJpZ2h0IOKTkiBpbnN1cm9iby5jby5rciBBbGwgcmlnaHRzIHJlc2VydmVkLg=='
      },
      params: {
        name: watch('WindstormName'),
        bussiness: bizNum
      }
    })
    .then(function (response) {
      console.log(response)
      if (response.data === '') {
        alert('입력한 값을 확인해 주세요.');
        return false;
      }
      setData(response.data);
    })
    .catch(function (error) {
      console.log(error)
    }) 
  }


  return (
    <Modal onClick={onClick}>
      {data.STAT === '유지' ? (
       <InsuranceCertificate>
       {frame.map((dt) => (
         <InputWrap key={dt.name}>
           <p>{dt.name}</p><span>:</span>
           <span>{dt.value}</span>
         </InputWrap>
       ))}
       <InputWrap>
         <p>보장한도액</p><span>:</span>
         <span><b>시설</b><b>3 천만원</b><b>재고자산</b><b>1 천만원</b></span>
       </InputWrap>
       <InputWrap>
         <p></p><span></span>
         <span><b>총보상한도</b><b>미적용</b><b>자기부담금</b><b>20 만원</b></span>
       </InputWrap>
       <InputWrap>
         <p>가입약관</p><span>:</span>
         <span>풍수해보험 VI 보통약관</span>
       </InputWrap>
       <InputWrap>
         <p></p><span></span>
         <span>날짜인식오류 보장제외 추가약관</span>
       </InputWrap>
     </InsuranceCertificate>
      ) : (
      <Form>
        <h2>풍수해보험 가입확인</h2>
        <InputGroup>
          <div>
            <input
              placeholder='대표자 성명'
              {...register('WindstormName', {
                required: '*필수 입력 사항입니다.',
              })}
            />
            {errors.WindstormName?.message && <ErrorText>{errors.WindstormName?.message}</ErrorText>}
          </div>
          <div>
            <input
              placeholder='사업자등록번호'
              {...register('WindstormBussiness', { 
                required: '*필수 입력 사항입니다.',
                
              })}
            />
            {errors.WindstormBussiness?.message && <ErrorText>{errors.WindstormBussiness?.message}</ErrorText>}
          </div>
          
        </InputGroup>
        <div className='button' onClick={openWindstormCheck}>확인</div>
      </Form>
      )}
        
      
      
    </Modal>
  )
}

export default WindStormModal