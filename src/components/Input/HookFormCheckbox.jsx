import React, {useEffect, useState} from "react";
import {useFormContext} from "react-hook-form";
import styled from "styled-components";
import checkIcon from '../../assets/img/checkboxIcon.png';
import infoArrow from '../../assets/img/infoArrow.png';
import { ErrorMessage } from '@hookform/error-message';
import Modal from "../Modal";

const CheckBoxGroup = styled.div`
  position: relative;
  input {
    position: absolute;
    left: -1000px;
  }
  input:checked + label::before {
    background-color: #176FFF;
    border-color: #176FFF;
    background-image: url(${checkIcon});
    background-repeat: no-repeat;
    background-position: center;
  }
  label {
    display: flex;
    align-items: center;
    height: 80px;
    color: #2F2F2F;

    ::before {
      content: '';
      display: block;
      width: 18px;
      height: 18px;
      border: 1px solid #989898;
      border-radius: 50%;
      margin-right: 15px;
      margin-left: 3px;
      transition: background-color .3s;
    }
  }

  ${props => props.theme.window.mobile} {
    label {
      ::before {
        width: 15px;
        height: 15px;
        margin-left: 0;
        margin-right: 10px;
      }
    }
  }
`;

const AllChecked = styled.div``;

const SelectChecked = styled.ul`
  padding: 15px 0;
  background-color: #F9F9F9;
  margin-bottom: 13px;

  > li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .button {
      content: '';
      display: block;
      width: 20px;
      height: 22px;
      background-image: url(${infoArrow});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: right;
      cursor: pointer;
    }
  }

  ${props => props.theme.window.mobile} {
    padding: 14px 13px;
    margin-bottom: 10px;
  }
`;
const ErrorText = styled.p`
  font-size: 13px;
  line-height: 13px;
  padding-top: 5px;
  color: ${(props) => props.theme.color.WARNING_MESSAGE};
  position: absolute;
  top: 60px;
  ${props => props.theme.window.mobile} {
    padding-top: 0px;
    
    line-height: 20px;
  }

`;

const Info = styled.div`
  width: 500px;
  height: 500px;
  background-color: #FFFFFF;
  border-radius: 10px;
`;


const HookFormCheckbox = (props) => {
    const {register, setValue, formState: { errors }} = useFormContext();
    const [allFlag, setAllFlag] = useState(false);
    const [termsFlag, setTermsFlag] = useState([false,false]);
    const [open, setOpen] = useState(false);

    const exList = [
      {
        id: 0,
        title: '회원가입 및 운영약관 동의(필수)',
        name: 'use_agree',
        label: 'select1',
        required: true,
        message: '필수 체크사항은 모두 동의해주세요',
        textArea: `
          <div>약관동의1</div>
        `
      },
      {
        id: 1,
        title: '마케팅 이용 동의(선택)',
        name: 'marketing_yn',
        label: 'select2',
        required: false,
        message: '',
        textArea: `
          <div>마케팅이용동의</div>
        `
      },
    ]
    const toggleCheck = (e, index) => {
      setTermsFlag((prev) => {
          const arr = { ...prev };
          arr[index] = !prev[index];
          return arr;
      });
  };

    const selectAll = (e) => {
        setAllFlag(e.target.checked);
        setValue('use_agree', true)
        setValue('marketing_yn', true)
        setTermsFlag((prev) => {
          Object.keys(prev).map((item) => prev[item] = e.target.checked)
         return {
             ...prev
         }
      });
        
    };

    useEffect(() => {
        let allChecked = false;
        if (Object.values(termsFlag).every((item) => item)) {
            allChecked = true;
        }
        setAllFlag(allChecked);
    },[termsFlag])

    const [id, setId] = useState(0);

    const openModal = (id) => {
      setOpen(true)
      setId(id)
    }


    return (
      <>
        <CheckBoxGroup>
          <AllChecked>
            <input type="checkbox" checked={allFlag} {...register('all')} onChange={selectAll} id='all'/>
            <label for='all'>전체 약관 동의</label>
          </AllChecked>
          <SelectChecked>
            {exList.map((item, index) => {
              return (
                <li key={item.id}>
                  <div>
                    <input 
                      type="checkbox" 
                      id={item.label}
                      checked={termsFlag[item.id]}
                      {...register(item.name, {
                        required: {
                          value: item.required,
                          message: item.message
                        }
                      })}
                      onChange={(e) => toggleCheck(e, index)} 
                      
                    />
                    <label for={item.label}>{item.title}</label>
                  </div>
                  <div className='button' onClick={() => openModal(item.id)} />
                </li>
            )})}
          </SelectChecked>
        
            <ErrorMessage
              errors={errors}
              name={'use_agree'}
              render={({message}) => <ErrorText>{message}</ErrorText>}
            />
            
        </CheckBoxGroup>
        {open && (
          <Modal onClick={() => setOpen(false)}>
            <Info
              dangerouslySetInnerHTML={{__html: exList.find((cur) => cur.id === id).textArea}}
            />
          </Modal>
        )}
      </>
    )
}

export default HookFormCheckbox

