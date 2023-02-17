import React from 'react'
import styled from 'styled-components'
import Section from '../Section'
import tex from '../../assets/img/tex_refund.png';
import promotion from '../../assets/img/promotion.png';
import onestop from '../../assets/img/onestop.png';
import { Title } from '../Font';

const data = [
  {
    id: 1,
    title: '#소상공인 세금환급',
    bg_img: tex,
    class: 'left'
  },
  {
    id: 2,
    title: '#홍보·판촉물 신청',
    bg_img: promotion,
    class: 'center'
  },
  {
    id: 3,
    title: '#알아두면 좋은 원스톱',
    bg_img: onestop,
    class: 'right'
  },
]
const CardListWrap = styled.ul`
  display: flex;
  justify-content: space-between;

  > li {
    width: 26.38888888888889%;
    text-align: center;
  }
`;

const Card = styled.div`
  padding-top: 105.3%;
  background-repeat: no-repeat;
  background-position: center bottom;
  border-radius: 10px 10px 80px 10px;
  box-shadow: 5px 11px 19px 0 rgba(0, 0, 0, 0.15);
  margin-top: 5.5%;
  &.left {
    background-size: 183%;
  }
  &.center {
    background-position: center center;
    background-size: 105%;
  }
  &.right {
    background-size: 112%;
  }
`;

function CardList() {
  return (
    <Section top='8.01%' bottom='11.5%' color='BG_WHITE'>
      <CardListWrap>
        {data.map((dt) => (
          <li key={dt.id}>
            <Title size='30px' bold='600'>{dt.title}</Title>
            <Card style={{backgroundImage: `url(${dt.bg_img})`}} className={dt.class}/>
          </li>
        ))}
      </CardListWrap>
    </Section>
  )
}

export default CardList