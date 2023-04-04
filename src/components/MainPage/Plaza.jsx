import React from 'react'
import styled from 'styled-components'
import Content from '../Content';
import TitleSet from '../TitleSet';

import icon1 from '../../assets/img/bell.png';
import icon2 from '../../assets/img/speaker.png';
import icon3 from '../../assets/img/wallet.png';
import { Text, Title } from '../Font';
import { useScroll } from '../../hooks/useScroll';
import bg_R from '../../assets/img/bg_Img_R.png';

import useWindowSize from '../../hooks/useWindowSize';
import { useNavigate } from 'react-router-dom';


const data = [
  {
    id: 1,
    icon: icon1,
    title: '의무보험',
    text: '업종별 의무보험\n꼭! 챙기세요',
    link: '/insuranceInfo?item=duty',
    className: 'delay1'
  },
  {
    id: 2,
    icon: icon2,
    title: '필수보험',
    text: '사업장 안전!\n선택이 아닌 필수',
    link: '/insuranceInfo?item=must',
    className: 'delay2'
  },
  {
    id: 3,
    icon: icon3,
    title: '재테크보험',
    text: '저축과\n 위험보장을 동시에',
    link: '/insuranceInfo?item=invest',
    className: 'delay3'
  },
]

const CardList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 8.76% 0;

  ${(props) => props.theme.window.mobile} {
    flex-direction: column;
    align-items: center;
    padding: 18.5% 0 18.3%;
  }
`;

const Card = styled.li`
  width: 29.71768202080238%;
  border-radius: 18px;
  background-color: #FFFFFF;
  box-shadow: 0 0 26px 0 rgba(0, 0, 0, 0.1);
  padding: 2.3% 2%;
  opacity: 0;
  transform: translate(0, 50px);
  transition: transform 1.5s ease, opacity 1s ease;
  flex-shrink: 1;
  
  &.delay1 {
    transform: translate(0, 0);
    opacity: 1;
    transition-delay: 0.4s;
  }
  &.delay2 {
    transform: translate(0, 0);
    opacity: 1;
    transition-delay: 0.6s;
  }
  &.delay3 {
    transform: translate(0, 0);
    opacity: 1;
    transition-delay: 0.8s;

  }
  > p {
    white-space: pre-wrap;
    padding-top: 17.3%;
    padding-bottom: 13.5%;
  }
  > h1 {
    text-align: end;
  }

  ${(props) => props.theme.window.mobile} {
    width: 93.75%;
    margin-bottom: 10%;
    padding: 8.9% 7.2% 7%;

    :last-child {
      margin-bottom: 0;
    }

    > p {
      padding-top: 0;
      padding-bottom: 10.6%;
    }
  }
`;

const ImgWrap = styled.div`
  ${(props) => props.theme.window.mobile} {
    height: 63px;
    > img {
      max-width: 50px;
      max-height: 50px;
    }
  }
`;

function Plaza({scrollY}) {
  let navigate = useNavigate();
  const { y } = useScroll();
  const { width } = useWindowSize();
  return (
    <Content 
      top={width > 768 ? '10.66%' : '16.5%'} 
      bottom={width > 768 ? '5.8%' : '0%'}
      bgImg={bg_R}
      scrollY={scrollY}
      min={width > 768 && '1440px'}
    >
      <TitleSet
        small_title='사업장 안전지킴이'
        big_title1='사장님 보험'
        big_title2='Plaza'
      />
      <CardList>
        {data.map((dt) => (
          <Card 
            key={dt.id} 
            className={y > scrollY ? `${dt.className}` : null}
            onClick={() => navigate(dt.link)}
          >
            <ImgWrap>
              <img src={dt.icon} alt='아이콘' />
            </ImgWrap>
            <Text size={width > 768 ? '1.15rem' : '1rem' } bold='400' color='BLACK4'>{dt.text}</Text>
            <Title size={width > 768 ? '1.5rem' : '1.2rem' }>{dt.title}</Title>
          </Card>
        ))}
      </CardList>
    </Content>
  )
}

export default Plaza