import React from 'react'
import styled from 'styled-components'
import Input from '.';

const CheckBoxGroup = styled.div``;




function CheckBox({data}) {
  return (
    <>
      {data.map((item) => {
        return (
          <CheckBoxGroup>
            
          </CheckBoxGroup>
        )
      })}
    </>
  )
}

export default CheckBox