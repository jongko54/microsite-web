import React from 'react'
import styled from 'styled-components'

const ModalOveray = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
const ModalWrap = styled.div`
  display: ${(props) => (props.visible ? 'blcok' : 'none')};
  position: absolute;
  inset: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;
const ModalInner = styled.div`
  box-sizing: border-box;
  position: fixed;
  inset: 0;
  transform: translateY(50%);
  width: 800px;
  height: 500px;
  margin: 0 auto;
  background: ${props => theme.color[props.color] || '#FFFFFF' };
  ${(props) => props.theme.window.tab} {
    width: 100%;
    height: 250px;
  }
`;
function Modal({children, maskClosable, closable, visible, onClose}) {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e)
    }
  }
  const close = (e) => {
    if (onClose) {
      onClose(e)
    }
  }
  return (
    <ModalOveray visible={visible}>
      <ModalWrap
        onClick={maskClosable ? onMaskClick : null}
        className={className}
        tabIndex='-1'
        visible={visible}
      >
        <ModalInner tabIndex='0' className='modal-inner'>
          {closable && 
            <button onClick={close}>닫기</button>
          }
          {children}
        </ModalInner>
      </ModalWrap>
    </ModalOveray>
  )
}

export default Modal