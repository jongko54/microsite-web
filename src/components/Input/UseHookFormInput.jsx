import React from 'react';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const InputWrap = styled.div`
  > p {
    font-size: 0.7rem;
  }
`;

const InputBase = styled.input`
  width: 100%;
  padding: 13px 16px;
  height: 50px;
  border: 1px solid #D8D8D8;
  border-radius: 5px;
  font-size: 13px;
  box-sizing: border-box;
  background: none;
  margin-bottom: 10px;
  ::placeholder {
    color: ${(props) => props.theme.color.INPUT_GRAY};
  }

  ${props => props.theme.window.mobile} {
    padding: 7px;
    height: 35px;
  }
`;

const Label = styled.label`
  color: #585858;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 12px;
  display: block;
  width: 100%;

  ${props => props.theme.window.mobile} {
    margin-bottom: 8px;
  }
`;
const ErrorText = styled.p`
  font-size: 13px;
  line-height: 18px;
  padding-top: 5px;
  color: ${(props) => props.theme.color.WARNING};
`;


const UseHookFormInput = ({
  type, name, placeholder, onChange, label, caution,
  onClick, readOnly, required, validate, pattern
}) =>  {

  const { 
    register,
    formState: { errors } 
  } = useFormContext();

  return (
    <InputWrap>
      {label && (
        <Label>{label}</Label>
      )}
      <InputBase
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
        readOnly={readOnly}
        
        {...register(name, {
          required: required,
          validate: validate,
          pattern: pattern
        })}
      />
      {caution && <p>{caution}</p>}
      <ErrorMessage
        errors={errors}
        name={name}
        render={({message}) => <ErrorText>{message}</ErrorText>}
      />
    </InputWrap>
  )
}
export default UseHookFormInput