import React from 'react'
import { useLocation } from 'react-router-dom';
import Layout from '../layout';
import InfoContent from '../components/Content/InfoContent';
import styled from 'styled-components';

import duty from '../assets/img/insurance/duty.png';

const Banner = styled.div`
  background-color: #2EA5FF;
  padding: 80px 25px;
  border-radius: 13px;
  display: flex;
	justify-content: space-between;
  
  
  > div {
      > p {
      color: #0C1F6F;
      font-size: 15px;
      font-weight: 700;
      padding-top: 20px;
		
    }
    > h2 {
      color: #FFFFFF;
    }
  }
`;

const ItemListWrap = styled.div`
  padding: 20px;
  
`;


const ItemList = styled.ul``;

function InsuranceInfo() {
  
  return (
    <Layout>
      <Item />
    </Layout>
  )
}
export default InsuranceInfo


function Item() {
  const location = useLocation();
  console.log(location)
  if (location.search === '?item=duty') {
    return (
      <InfoContent color='BG_WHITE'>
        <Banner>
          <div>
            <h2>
              사장님!!<br />
              운영하시는 사업장 마다<br />
              의무적으로 가입하실 보험입니다.
            </h2>
            <p>**미가입시 과태로 부과 대상입니다.</p>
          </div>
          <div>
            <img src={duty} alt='의무보험'/>
          </div>
        </Banner>
        <ItemListWrap>
          <ItemList>
            
          </ItemList>
        </ItemListWrap>
      </InfoContent>
    )
  }
  if (location.search === '?item=must') {
    return (
      <div>필수보험</div>
    )
  }
  if (location.search === '?item=invest') {
    return (
      <div>재태크보험</div>
    )
  }
}