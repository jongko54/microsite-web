import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Layout from '../layout'
import { Text  } from '../components/Font';
import bannerImg from '../assets/img/windstorm.png';
import moreBtn from '../assets/icon/moreBtn.png';
import checkIcon from '../assets/icon/checkIcon.png';
import store from '../assets/icon/store.png';
import factory from '../assets/icon/factory.png';
import facility from '../assets/icon/facility.png';
import inventories from '../assets/icon/inventories.png';
import equipment from '../assets/icon/equipment.png';

import coin from '../assets/icon/coin.png';
import { Link } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';

const list1 = [
  {
    id: 1,
    title: '상가',
    icon: store
  },
  {
    id: 2,
    title: '공장',
    icon: factory
  },
  {
    id: 3,
    title: '시설',
    icon: facility
  },
  {
    id: 4,
    title: '집기비품',
    icon: equipment 
  },
  {
    id: 5,
    title: '재고자산',
    icon: inventories
  },
]
const Wrap = styled.div`
  max-width: 990px;
  margin: 103px auto 330px;
  background-color: #FAFAFA;

  ${(props) => props.theme.window.mobile} {
    max-width: none;
    width: 100%;
    margin: 39px 0 46px;
    
  }
`;

const GradationBanner = styled.div`
  background: linear-gradient(0deg, rgb(89, 116, 255) 0%, rgb(99, 189, 255) 100%);
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 120px 30px;

  ${(props) => props.theme.window.mobile} {
    height: 375px;
    padding: 0 18px 30px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
  }
`;

const TextBox = styled.div`
  span {
    color: #FFFFFF;
  }

  ${(props) => props.theme.window.mobile} {
    display: flex;
    flex-direction: column;
    order: 2;
  }
`;

const ImageBox = styled.div`
  width: 256px;
  height: 190px;
  background-image: url(${bannerImg});
  ${(props) => props.theme.window.mobile} {
    display: flex;
    order: 1;
    align-self: flex-end;
  }
`;


const Discription = styled.div`
  width: 410px;
  margin: 57px auto 91px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    padding: 47px 0 60px;
    letter-spacing: -0.7px;
    line-height: 1.8;
    > b {
      font-weight: bold;
    }
  }

  ${(props) => props.theme.window.mobile} {
    width: 100%;
    margin: 57px 0 39px;
    padding: 0 16px;
  }
`;

const Bubble = styled.div`
  width: 317px;
  height: 156px;
  background-color: #FFF;
  border-radius: 20px;
  box-shadow: 0 0 50 0 rgba(26, 26, 26, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > p {
    display: flex;
    > span {
      color: #1A1A1A;
      font-weight: 400;
    }
  }
  ::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -20px;
    right: 33.05px; 
    width: 27.13px;
    height: 26.95px;
    background: linear-gradient(-45deg, transparent 50%, #FFF 50%);
  }

  ${(props) => props.theme.window.mobile} {
    height: 133px;
  }
`;
const Accordion = styled.div`
  width: 100%;
  border-radius: 10px;
  border: 1px solid #F0F0F0;
  padding: 0 15px;
  margin-bottom: 20px;
  background-color:#FFFFFF;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  > p {
    display: flex;
    line-height: 26px;
    ::before {
      content: '';
      display: block;
      background-image: url(${checkIcon});
      background-repeat: no-repeat;
      background-position: center;
      width: 24px;
      height: 26px;
      margin-right: 5px;
    } 
  }

  ${(props) => props.theme.window.mobile} {
    height: 60px;
  }
`;



const MoreButton = styled.div`
  background-image: url(${moreBtn});
  background-repeat: no-repeat;
  background-position: center;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 3px;
  transition: all 0.3s;
  transform: rotate(180deg);
  ${props => props.isopen && css`
    transform: rotate(0);
  `}
`;


const Content = styled.div`
  height: 0;
  overflow: hidden;
  transition: all 0.35s;
  ${props => props.isopen && css`
    height: auto;
  `}
  > ul {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    :first-child {
      border-bottom: 1px solid #F0F0F0;
    }
    li {
      font-size:16px;
      color: #808080;
      > b {
        font-weight: 700;
        color: #808080;
      }
      > .img-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
      }
      > p {
        font-size: 0.5rem;
        text-align: center;
      }
    }
  }
  .coin-wrap {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
    > li {
      font-weight: 700;
      font-size: 20px;
      color: #444444;
      > span {
        font-weight: 700;
        position: relative;
        ::before {
          content: '';
          display: block;
          width: 100%;
          height: 10px;
          position: absolute;
          bottom: 1px;
          left: -2px;
          background-color: rgba(46, 165, 255, .3);
        }
      }
    }
  }
`;

const Coin = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${coin});
  background-position: center;
  margin-right: 20px;
`;

const ButtonWrap = styled.div`
  width: 100%;
  padding: 0 13% 0;
  > a {
    display: flex;
    background-color: #2EA5FF;
    border-radius: 10px;
    height: 50px;
    align-items: center;
    justify-content: center;
  }

  ${(props) => props.theme.window.mobile} {
    padding: 0 16px;
  }
`;

function FreeApply() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const { width } = useWindowSize();

  return (
    <Layout color="BG_GRAY">
      <Wrap>
        <GradationBanner>
          <TextBox>
            <Text size={width > 768 ? '0.7rem' : '1.06rem'} color='BLUE2' bold='700'>소상공인전용</Text>
            <Text size={width > 768 ? '1.3rem' : '1.74rem'}  color='WHITE' bold='700'>
              <span>인슈로보</span> 풍수해보험
            </Text>
          </TextBox>
          <ImageBox />
        </GradationBanner>
        <Discription>
          <Bubble>
            <Text color='BLACK5' size='20px' bold='700'>소상공인전용</Text>
            <Text color='BLUE3' size='20px' bold='700'>풍수해보험<span>이 뭔가요?</span></Text>
          </Bubble>
          <Text color='BLACK5' size='16px' bold='400'><b>풍수해보험은 태풍, 홍수, 호우, 강풍, 지진</b> 등 자연재해로 인한 사고발생시 <b>실손비용을 보상</b>하는 정부의 정책보험입니다.</Text>
          <Accordion>
            <Title onClick={() => setIsOpen1(!isOpen1)}>
              <Text color='BLACK5' size='16px' bold='700'>가입대상</Text>
              <MoreButton isopen={isOpen1} />
            </Title>
            <Content isopen={isOpen1}>
              <ul>
                {list1.map((item) => (
                   <li key={item.id}>
                    <div className='img-wrap'><img src={item.icon} alt={item.title} /></div>
                    <p>{item.title}</p>
                  </li>
                ))}
              </ul>
              <ul>
                <li>
                  소상공인이 운영하는 <b>상가, 공장, 시설, 집기비품, 재고자산</b>에 한해 가입 가능합니다.
                </li>
              </ul>
            </Content>
          </Accordion>
          <Accordion>
            <Title onClick={() => setIsOpen2(!isOpen2)}>
              <Text color='BLACK5' size='16px' bold='700'>보험료 지원</Text>
              <MoreButton isopen={isOpen2}/>
            </Title>
            <Content isopen={isOpen2}> 
              <ul className='coin-wrap'>
                <li><Coin /></li>
                <li><span style={{color: '#444444'}}>인슈로보가</span><br />100%<br /><span style={{color: '#2EA5FF'}}>보험료 지원!</span></li>
              </ul>
            </Content>
          </Accordion>
        </Discription>
        <ButtonWrap>
          <Link to='https://mplatform.hi.co.kr/service.do?m=pipis1000&jehuCd=insurobo'>
            <Text color='WHITE' size='16px'>무료가입 신청</Text>
          </Link>
        </ButtonWrap>
      </Wrap>
    </Layout>
  )
}

export default FreeApply