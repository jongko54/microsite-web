import React from 'react'
import styled from 'styled-components'
import closeIcon from '../../assets/img/closeIcon.png';
const ModalOveray = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;



const ModalWrap = styled.div`
  z-index: 1000;
  margin: 0 auto;

  ${(props) => props.theme.window.mobile} {
    width: 85.33333333333333%;
  }
`;

const CloseButton = styled.button`
  width: 50px;
  height: 50px;
  background-image: url(${closeIcon});
  margin-left: calc(100% - 50px);
  margin-bottom: 20px;
  ${(props) => props.theme.window.mobile} {
    width: 28px;
    height: 28px;
    background-size: contain;
    margin-left: 90%;
  }

`;

const Content = styled.div`
`;

function Modal({onClick, children}) {

  return (
    <ModalOveray>
      
      <ModalWrap>
        <CloseButton onClick={onClick} />
        <Content>
          {children}
        </Content>
      </ModalWrap>
    </ModalOveray>
  )
}

export default Modal