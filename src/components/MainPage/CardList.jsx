import React from 'react'
import styled from 'styled-components'
import Content from '../Content'
import tex from '../../assets/img/tex_refund.png';
import promotion from '../../assets/img/promotion.png';
import onestop from '../../assets/img/onestop.png';
import { Title } from '../Font';
import { useScroll } from '../../hooks/useScroll';
import useWindowSize from '../../hooks/useWindowSize';

const data = [
  {
    id: 1,
    title: '#소상공인 세금환급',
    bg_img: tex,
    class: 'left',
    class2: 'delay1'
  }
  // {
  //   id: 2,
  //   title: '#홍보·판촉물 신청',
  //   bg_img: promotion,
  //   class: 'center',
  //   class2: 'delay2'
  // },
  // {
  //   id: 3,
  //   title: '#알아두면 좋은 원스톱',
  //   bg_img: onestop,
  //   class: 'right',
  //   class2: 'delay3'
  // },
]
const CardListWrap = styled.ul`
  display: flex;
  justify-content: center;

  ${(props) => props.theme.window.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

const CardWrap = styled.li`
  width: 26.38888888888889%;
  text-align: center;
  opacity: 0;
  transform: translate(0, 50px);
  transition: transform 1.5s ease, opacity 1s ease;
  > h1 {
    white-space: nowrap;
  }
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

  ${(props) => props.theme.window.mobile} {
    width: 93.75%;
    padding-bottom: 20.3%;
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

  ${(props) => props.theme.window.mobile} {
    margin-top: 9.4%;
  }
`;

function CardList({scrollY}) {
  const { y } = useScroll();
  const { width } = useWindowSize();
  return (
    <Content 
      top={width > 768 ? '8.01%' : '18%'}
      bottom={width > 768 ? '11.5%' : '18%'}
      color='BG_WHITE'
      scrollY={scrollY}
    >
      <CardListWrap>
        {data.map((dt) => (
          <CardWrap key={dt.id} className={y > scrollY ? `${dt.class2}` : null}>
            <Title size={width > 768 ? '1.5rem' : '1.2rem'} bold='600'>{dt.title}</Title>
            <Card style={{backgroundImage: `url(${dt.bg_img})`}} className={dt.class}/>
          </CardWrap>
        ))}
      </CardListWrap>
    </Content>
      

  )
}
export default CardList