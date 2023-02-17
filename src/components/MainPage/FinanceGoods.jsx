import React from 'react'
import Section from '../Section'
import TitleSet from '../TitleSet'
import styled from 'styled-components';
import { Text, Title } from '../Font';
import loan from '../../assets/img/loan.png';
import card from '../../assets/img/card.png';

const GoodsList = styled.ul`
  display: flex;
  justify-content: space-between;
  /* padding: 7%; */
  padding: 5%;
`;

const Card = styled.li`
  min-width: 500px;
  padding: 3% 2%;
  border: 2px solid #F5F5F5;
  border-radius: 21px;
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  background-color: #FFFFFF;
  transition: all 0.5s ease-in;
  :hover {
    box-shadow: 0 4px 42px 0 rgba(0, 0, 0, 0.15);
  }
  
`;

const TextArea = styled.div`
  width: 100%;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: top right;
  > h1 {
    margin-top: 3%;
  }
  > div {
    padding: 12% 0 9.2%;
  }
  span {
    color: #4575F5;
    font-weight: 700;
  }
`;


function FinanceGoods() {
  return (
    <Section top='5%' bottom='5%'>
      <TitleSet
        small_title='전용 대출과 카드 알아보세요!'
        big_title1='소상공인 전용'
        big_title2='&nbsp;금융상품'
        row
      />
      <GoodsList>
        <Card>
          <TextArea img={loan}>
            <Title size='20px' color='BLACK3'>소상공인 전용 대출</Title>
            <div>
              <Text size='18px' color='GRAY' bold='200'>대출 조건 <b>깐</b><b>깐</b>하게<br />
                따지는 소상공인이라면</Text>
              <Text size='35px' color='BLACK3' bold='700'>
                <span>대출</span>도<br />남달라야합니다.
              </Text>
              <Text size='18px' color='GRAY' bold='200'>
                연 금리 5.90% ~ 20.90%<br />
                중도상환수수료 0.0% ~ 1.0%<br />
                대출기관 최대 10년
              </Text>
            </div>
            <Text size='14px' color='GRAY' bold='400'>*대출금액에 따라 상환기간 상이</Text>
          </TextArea>
        </Card>
        <Card>
          <TextArea img={card}>
            <Title size='20px' color='BLACK3'>소상공인 전용카드</Title>
            <div>
              <Text size='18px' color='GRAY'>다양한 혜택을 한 카드로!<br />
                본인에게 맞는 전용카드 필수!</Text>
              <Text size='35px' color='BLACK3' bold='700'>
                많이 쓰는 영역<br />
                <span>맞춤 할인</span> 혜택
              </Text>
              <Text ext size='18px' color='GRAY' bold='200'>
                연매출액 3억원 이하 소상공인 누구나!<br />
                자동맞춤 최대 30%할인<br />
                카드 매출액의 0.8%에 해당하는 금액 지급 등등
              </Text>
            </div>
            <Text size='14px' color='GRAY' bold='400'>*제외대상은 상세내용 확인해주세요</Text>
          </TextArea>
        </Card>
      </GoodsList>
    </Section>
  )
}

export default FinanceGoods