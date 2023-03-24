import React, { useState } from 'react'
import styled from 'styled-components'
import infoArrow from '../../assets/img/infoArrow.png';
import checkIcon from '../../assets/img/checkboxIcon.png';

const CheckBoxGroup = styled.div`
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
    ::after {
      content: '';
      display: block;
      width: 10px;
      height: 22px;
      background-image: url(${infoArrow});
    }
  }

  ${props => props.theme.window.mobile} {
    padding: 14px 13px;
    margin-bottom: 10px;
  }
`;


function CheckBox({data}) {
  const [checkItems, setCheckItems] = useState([]);

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems(prev => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  const handleAllCheck = (checked) => {
    if(checked) {
      const idArray = [];
      data.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    }
    else {
      setCheckItems([]);
    }
  }
  return (
    <>
      <CheckBoxGroup>
        <AllChecked>
          <input
            type='checkbox'
            name='select-all'
            id='all'
            onChange={(e) => handleAllCheck(e.target.checked)}
            checked={checkItems.length === data.length ? true : false}
          />
          <label for='all'>전체 약관 동의</label>
        </AllChecked>
        <SelectChecked>
          {data?.map((data) => (
            <li key={data.id}>
              <input 
                type='checkbox' 
                name={`select-${data.id}`}
                id={`check${data.id}`}
                onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
                checked={checkItems.includes(data.id) ? true : false}
              />
              <label for={`check${data.id}`}>{data.title}</label>
            </li>
          ))}
        </SelectChecked>
      </CheckBoxGroup>
    </>
  )
}

export default CheckBox