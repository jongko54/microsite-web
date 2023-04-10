import React from 'react';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const InputWrap = styled.div`
  width: ${props => props.width ? props.width : '100%'};
  position: relative;
  margin-bottom: 25px;
  > p {
    font-size: 0.7rem;
  }

  ${props => props.theme.window.mobile} {
    margin-bottom: 20px;
  }

`;

const InputBase = styled.input`
  width: 100%;
  padding: 25px 26px;
  height: 80px;
  border: 1px solid #989898;
  border-radius: 10px;
  font-size: 13px;
  box-sizing: border-box;
  background: none;
  font-size: 1rem;
  color: #989898;
  
  
  ::placeholder {
    color: #989898;
    font-size: 1rem;
  }

  ${props => props.theme.window.mobile} {
    padding: 14px 13px;
    height: 50px;
    /* margin-bottom: 10px; */
  }
`;

const Label = styled.label`
  display: block;
  width: 100%;
  color: #2F2F2F;
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 15px;

`;

const ErrorText = styled.p`
  font-size: 13px;
  line-height: 13px;
  padding-top: 5px;
  color: ${(props) => props.theme.color.WARNING_MESSAGE};
  position: absolute;
  bottom: -17px;

  ${props => props.theme.window.mobile} {
    padding-top: 0px;
    line-height: 20px;
  }
`;

const Input = ({
  name, placeholder, onChange, label, type,
  readOnly, width, require, validate, pattern, maxLength, minLength
}) =>  {
  const { register, formState: { errors } } = useFormContext({
    mode: 'onBlur'
  });
  return (
    <InputWrap width={width}>
      {label && (
        <Label>{label}</Label>
      )}
      <InputBase
        name={name}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        {...register(name, {
          required: require,
          validate: validate,
          pattern: pattern,
          maxLength: maxLength,
          minLength: minLength,
        })}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({message}) => <ErrorText>{message}</ErrorText>}
      />
    </InputWrap>
  )
}
export default Input