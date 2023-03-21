import React from 'react';
import styled from 'styled-components';

const InputWrap = styled.div`
  width: ${props => props.width ? props.width : '100%'};
  
  > p {
    font-size: 0.7rem;
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
  margin-bottom: 15px;
  font-size: 1rem;
  color: #989898;

  ::placeholder {
    color: #989898;
    font-size: 1rem;
  }

  ${props => props.theme.window.mobile} {
    padding: 7px;
    height: 35px;
  }
`;

const Label = styled.label`
  display: block;
  width: 100%;
  color: #2F2F2F;
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 15px;

  ${props => props.theme.window.mobile} {
    margin-bottom: 8px;
  }
`;


const Input = ({
  type, name, placeholder, onChange, label,
  readOnly, width
}) =>  {

  return (
    <InputWrap width={width}>
      {label && (
        <Label>{label}</Label>
      )}
      <InputBase
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
      />
    </InputWrap>
  )
}
export default Input