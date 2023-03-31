import React from 'react'
import Content from '../Content';
import TitleSet from '../TitleSet';
import useWindowSize from '../../hooks/useWindowSize';
import Passage from './Passage';
import styled from 'styled-components';
import taxRefund from '../../assets/img/tax_refund.png';
import { useNavigate } from 'react-router-dom';

const TaxReturnBanner = styled.div`
  background-color: #FFF;
  height: 300px;
  border-radius: 40px;
  margin-top: 4.4%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > h2 {
    padding-left: 7.3%;
  }
  > img {
    width: 40.31454545454545%;
  }

  ${(props) => props.theme.window.mobile} {
    flex-direction: column;
    align-items: flex-start;
    height: 200px;
    border-radius: 21px;
    > h2 {
      font-size: 1rem;
      padding: 5% 0 0 4%;
    }
    > img {
      width: 60%;
      align-self: flex-end;
      margin-bottom: 40px;
    }
  }
`;


function TaxReturn() {
  const { width } = useWindowSize();
  let navigate = useNavigate();
  function goToMainPage(link) {
    navigate(link);
  }
  return (
    <Content
      color='BG_WHITE'
      top={width > 768 ? '4.45%' : '18%'}
      bottom={width > 768 ? '8.45%' : '20%'}
    >
      <TitleSet
        small_title='세무진단을 받을 수 있어요'
        big_title1='소상공인&nbsp;'
        big_title2='세금환급'
        row={width > 768 ? true : false}
      />
       <Passage link='/board' title='세금환급하러 가기' circle='SECONDARY' none>
          <TaxReturnBanner>
            <h2>
              지금 바로! 소상공인 세금환급<br />
              확인해 보세요
            </h2>
            <img src={taxRefund} alt='소상공인 세금환급' onClick={width > 768 ? null : () => goToMainPage('/login')} />
          </TaxReturnBanner>
       </Passage> 
        
    </Content>
  )
}

export default TaxReturn