import React from 'react'
import styled from 'styled-components'
import Modal from '.';
import policy from '../../assets/img/policy.png';

const Wrap = styled.div`

`;

function Certificate() {
  return (
    <Modal>
      <Wrap>
        <img src={policy} />
      </Wrap>
    </Modal>
  )
}

export default Certificate