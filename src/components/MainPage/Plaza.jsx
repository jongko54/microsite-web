import React from 'react'
import styled from 'styled-components'
import Section from '../Section';
import TitleSet from '../TitleSet';

import icon1 from '../../assets/img/bell.png';
import icon2 from '../../assets/img/speaker.png';
import icon3 from '../../assets/img/wallet.png';
import { Text, Title } from '../Font';
import { useScroll } from '../../hooks/useScroll';
import bg_R from '../../assets/img/bg_Img_R.png';

const data = [
  {
    id: 1,
    icon: icon1,
    title: '의무보험',
    text: '업종별 의무보험\n꼭! 챙기세요',
    className: 'delay1'
  },
  {
    id: 2,
    icon: icon2,
    title: '필수보험',
    text: '사업장 안전!\n선택이 아닌 필수',
    className: 'delay2'
  },
  {
    id: 3,
    icon: icon3,
    title: '재테크보험',
    text: '저축과\n 위험보장을 동시에',
    className: 'delay3'
  },
]

const CardList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 8.76% 0;
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
`;

function Plaza({scrollY}) {
  const { y } = useScroll();

  return (
    <Section 
      top='10.66%' 
      bottom='5.8%'
      bgImg={bg_R}
      scrollY={scrollY}
    >
      <TitleSet
        small_title='사업장 안정지킴이'
        big_title1='사장님 보험'
        big_title2='Plaza'
      />
      <CardList>
        {data.map((dt) => (
          <Card key={dt.id} className={y > scrollY ? `${dt.className}` : null}>
            <img src={dt.icon} alt='아이콘' />
            <Text size='23px' bold='400' color='BLACK4'>{dt.text}</Text>
            <Title size='30px'>{dt.title}</Title>
          </Card>
        ))}
      </CardList>
    </Section>
  )
}

export default Plaza