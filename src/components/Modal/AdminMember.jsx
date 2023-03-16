import React from 'react'
import styled from 'styled-components'
import Modal from '.';
import policy from '../../assets/img/policy.png';

const Content = styled.div``;

function AdminMember({onClick}) {
  return (
    <Modal onClick={onClick}>
      <Content>
        <img src={policy} alt='가입확인서'/>
      </Content>
    </Modal>
  )
}

export default AdminMember