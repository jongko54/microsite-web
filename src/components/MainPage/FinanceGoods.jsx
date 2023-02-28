import React from 'react'
import Content from '../Content'
import TitleSet from '../TitleSet'
import styled from 'styled-components';
import { Text, Title } from '../Font';
import loan from '../../assets/img/loan.png';
import card from '../../assets/img/card.png';
import useWindowSize from '../../hooks/useWindowSize';

const GoodsList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 83.88888888888889%;
  margin: 0 auto;
  padding: 7.6% 0;
  
  ${(props) => props.theme.window.mobile} {
    flex-direction: column;
    padding: 10% 0 0 0;
  }
`;

const Card = styled.li`
  width: 41.39072847682119%;

  /* min-width: 400px; */
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
  ${(props) => props.theme.window.mobile} {
    width: 100%;
    min-width: auto;
    padding: 7.4% 6.6%;
    margin-bottom: 12.3%;
    :last-child {
      margin-bottom: 0;
    }
  }
`;

const TextArea = styled.div`
  width: 100%;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 35%;
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
  b {
    position: relative;
    ::before {
      content: '';
      display: inline-block;
      position: absolute;
      top: -5px;
      right: 6px;
      width: 5px;
      height: 5px;
      border-radius: 100px;
      background-color: #4575F5;
    }
  }

  ${(props) => props.theme.window.mobile} {
    background-size: 30%;
    background-position: 100% 10%;
    > h1 {
      margin-top: 0;
    }
    > div {
      padding: 22.5% 0 19%;
      > p {
        line-height: 1.4;
        margin-bottom: 3%;
        :last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;


function FinanceGoods() {
  const {width} = useWindowSize();
  return (
    <Content 
      top={width > 768 ? '8.23%' : '18%'} 
      bottom={width > 768 ? '3.23%' : '15%'}
    >
      <TitleSet
        small_title='전용 대출과 카드 알아보세요!'
        big_title1='소상공인 전용&nbsp;'
        big_title2='금융상품'
        row={width > 768 ? true : false}
      />
      <GoodsList>
        <Card>
          <TextArea img={loan}>
            <Title size={width > 768 ? '1rem' : '1.125rem'} color='BLACK3'>소상공인 전용 대출</Title>
            <div>
              <Text size={width > 768 ? '0.9rem' : '1rem'}color='GRAY' bold='200'>대출 조건 <b>깐</b><b>깐</b>하게<br />
                따지는 소상공인이라면</Text>
              <Text size={width > 768 ? '1.75rem' : '1.333333333333333rem'} color='BLACK3' bold='700'>
                <span>대출</span>도<br />남달라야합니다.
              </Text>
              <Text size={width > 768 ? '0.9rem' : '0.8666666666666667rem'} color='GRAY' bold='200'>
                연 금리 5.90% ~ 20.90%<br />
                중도상환수수료 0.0% ~ 1.0%<br />
                대출기관 최대 10년
              </Text>
            </div>
            <Text size={width > 768 ? '0.7rem' : '0.8666666666666667rem'} color='GRAY' bold='400'>*대출금액에 따라 상환기간 상이</Text>
          </TextArea>
        </Card>
        <Card>
          <TextArea img={card}>
            <Title size={width > 768 ? '1rem' : '1.125rem'} color='BLACK3'>소상공인 전용카드</Title>
            <div>
              <Text size={width > 768 ? '0.9rem' : '1rem'} color='GRAY'>다양한 혜택을 한 카드로!<br />
                본인에게 맞는 전용카드 필수!
              </Text>
              <Text size={width > 768 ? '1.75rem' : '1.333333333333333rem'} color='BLACK3' bold='700'>
                많이 쓰는 영역<br />
                <span>맞춤 할인</span> 혜택
              </Text>
              <Text size={width > 768 ? '0.9rem' : '0.8666666666666667rem'} color='GRAY' bold='200'>
                연매출액 3억원 이하 소상공인 누구나!<br />
                자동맞춤 최대 30%할인<br />
                카드 매출액의 0.8%에 해당하는 금액 지급 등등
              </Text>
            </div>
            <Text size={width > 768 ? '0.7rem' : '0.8666666666666667rem'} color='GRAY' bold='400'>*제외대상은 상세내용 확인해주세요</Text>
          </TextArea>
        </Card>
      </GoodsList>
    </Content>
  )
}

export default FinanceGoods