import React from 'react'
import styled from 'styled-components'
import Button from '../Button';
import banner from '../../assets/img/event/event_banner.png';
import { Title } from '../Font';
import icon from '../../assets/img/event/money_icon.png';
import useWindowSize from '../../hooks/useWindowSize';
import { useNavigate } from 'react-router-dom';


const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  > div {
      img {
        margin: 0 auto;  
      }
    }

  ${(props) => props.theme.window.mobile} {
    > div {
        img {
          width: 260px;
        }
      }
    } 
`;


const BottomContent = styled.div`
  text-align: center;
  position: relative;
  padding: 85.95px 0 64px;
  h3 {
    font-weight: 800;
    font-size: 5rem;
    color: #176FFF;
  }

  ${(props) => props.theme.window.mobile} {
    padding: 39px 0 32px;
    h3 {
      font-size: 2rem;
    }
  }
`;

const MoneyIcon = styled.div`
  background-image: url(${icon});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  &.left {
    width: 131px;
    height: 52.2px;
    transform: rotate(-44.19deg);
    left: 24px;
  }
  &.right {
    width: 172.94px;
    height: 68.91px;
    transform: rotate(26.18deg);
    right: -15px;
    top: 41%;
  }

  ${(props) => props.theme.window.mobile} {
    &.left {
      width: 40px;
      height: 16px;
      left: 28px;
    }
    &.right {
      width: 60px;
      height: 24px;
      transform: rotate(26.18deg);
      right: 20px;
      top: 47%;
    }
  }
`;


const EventBanner = () => {
  const { width } = useWindowSize();
  let navigate = useNavigate();
  return (
    <Wrap>
      <div>
        <img src={banner} alt='지원센터 오픈기념'/>
        <BottomContent>
          <MoneyIcon className='left' />
          <Title size={width > 768 ? '2.25rem' : '1.2rem'} bold='300' color='BLACK2'>
            사장님 가게 홍보비를<br />
            <h3>화&nbsp;&nbsp;-&nbsp;&nbsp;끈</h3>
            하게 지원합니다.
          </Title>
          <MoneyIcon className='right' />
        </BottomContent>
      </div>
      <Button title='이벤트 참여하기' bgColor='BLUE' color='WHITE' onClick={() => navigate('/register')} />
    </Wrap>
  )
}

export default EventBanner