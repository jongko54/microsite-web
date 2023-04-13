import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Layout from '../layout';
import InfoContent from '../components/Content/InfoContent';
import styled from 'styled-components';
import hyd from '../assets/img/insurance/hyd.png';
import imgPlace from '../assets/img/insurance/imagePlace.png';
import d_icon1 from '../assets/icon/dutyIcon1.png';
import d_icon2 from '../assets/icon/dutyIcon2.png';
import d_icon3 from '../assets/icon/dutyIcon3.png';
import d_icon4 from '../assets/icon/dutyIcon4.png';
import d_icon5 from '../assets/icon/dutyIcon5.png';
import m_icon1 from '../assets/icon/mustIcon1.png';
import m_icon2 from '../assets/icon/mustIcon2.png';
import CustomButton from '../components/Button/CustomButton';
import { Text } from '../components/Font';
import ApplyModal from '../components/Modal/ApplyModal';

const list_duty = [
  {
    id: 1,
    title: '다중이용시설배상책임보험',
    text: 'PC방, 노래방 등의 시설 운영',
    link: 'https://mplatform.hi.co.kr/service.do?m=pipin1000&jehuCd=hyundaipay',
    icon: d_icon1
  },
  {
    id: 2,
    title: '재난배상책임보험',
    text: '예기치 못한 사고에도 걱정없이!',
    link: 'https://mplatform.hi.co.kr/service.do?m=pipim1000&jehuCd=hyundaipay',
    icon: d_icon2
  },
  {
    id: 3,
    title: '학원배상책임보험',
    text: '독서실, 학원 사장님이라면 필수로',
    link: 'https://platform.hi.co.kr/service.do?m=pipih1000&jehuCd=insurobo',
    icon: d_icon3
  },
  {
    id: 4,
    title: '개인정보보호 배상책임보험 II',
    text: '개인정보 관련 사고 위험에 대비',
    link: 'https://platform.hi.co.kr/service.do?m=pipil1000&jehuCd=insurobo',
    icon: d_icon4
  },
  {
    id: 5,
    title: '가스사고배상책임보험',
    text: '가스 누출, 화재 사고 위험에 대비',
    link: 'https://platform.hi.co.kr/service.do?m=pipil1000&jehuCd=insurobo',
    icon: d_icon5
  }
]

const list_must = [
  {
    id: 1,
    title: '사업장 화재보험',
    text: '가까운 곳에서 시작되는 화재',
    link: '',
    icon: m_icon1
  },
  {
    id: 2,
    title: '카디프생명(e)대출안심 보장보험',
    text: '대출상환능력 상실시 대출금 상환',
    link: 'https://insurobowindstorm.com/cardifarea',
    icon: m_icon2
  }
]

const list_invest = [
  {
    id: 1,
    title: '국산 자동차 구매가격 평균',
    money: '3079만원',
    icon: '',
    source: '<컨슈머인사이트 2017>'
  },
  {
    id: 2,
    title: '해외여행 경비 평균',
    money: '143.5만원',
    icon: '',
    source: '<컨슈머인사이트 2017>'
  },
  {
    id: 3,
    title: '결혼자금 평균',
    money: '2억 3천만원',
    icon: '',
    source: '<듀오웨드 2018>'
  },
  {
    id: 4,
    title: '4년제 대학 1학기 등록금 평균',
    money: '671만원',
    icon: '',
    source: '<교육부 2018>'
  },
]

const Banner = styled.div`
  background-color: ${props => props.color};
  box-shadow: ${props => props.shadow && '0 0 10px 0 rgba(26,26,26,0.1)'};
  padding: 20px 25px;
  border-radius: 13px;
  display: flex;
  align-items: center;
	justify-content: space-between;
  margin-bottom: 20px;
  
  > div {
    > p {
      color: #0C1F6F;
      font-size: 15px;
      font-weight: 700;
      padding-top: 20px;
		
    }
    > h2 {
      color: #1A1A1A;
    }
  }
  > .sub-banner {
      display: flex;
      > img {
        
      }
  }
`; 

const ItemListWrap = styled.div`
  padding: 20px;
  background-color: #FFF;
  box-shadow: 0 0 10px 0 rgba(26,26,26,0.1);
  border-radius: 10px;
 
  margin-bottom: 20px;
  /* margin: 20px auto 0; */
`;


const ItemList = styled.ul`
  > li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #E5E5E5;
    :last-child {
      border-bottom: 0;
    }
    .left-wrap {
      display: flex;
      align-items: center;
      padding: 30px 0;
      > img {
        margin-right: 10px;
      }
      > div {
        > p {
          font-size: 16px;
          color: #1A1A1A;
          font-weight: 700;
          line-height: 28px;
        }
        > span {
          font-size: 12px;
          color: #808080;
          line-height: 18px;
        }
      }
    }
  }
`;

const InvestList = styled.div`
  width: 100%;
  > ul {
    display: flex;
    justify-content: space-between;
    
    width: 100%;
    margin-top: 20px;
    > li {
      display: flex;
      flex-direction: column;
      align-items: center;
      > h2 {
        font-size: 1rem;
        text-align: center;
        span {
          display: block;
          font-size: 0.65rem;
        }
      }
      > p {
        font-size: 0.6rem;
      }
    }
  }
`;

const StyledLink = styled(Link)`
  font-size: 12px;
  font-weight: 700;
  color: #808080;
  background-color: #F0F0F0;
  border-radius: 15px;
  width: 61px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  const [showPopup, setShowPopup] = useState(false);

  if (location.search === '?item=duty') {
    return (
      <InfoContent>
        <Banner color='#FFFFFF' shadow> 
          <div>
            <h2>
              사장님!!<br />
              운영하시는 사업장 마다<br />
              의무적으로 가입하실 보험입니다.
            </h2>
            <p>**미가입시 과태로 부과 대상입니다.</p>
          </div>
          <div>
            <img src={imgPlace} alt='의무보험'/>
          </div>
        </Banner>
        <ItemListWrap>
          <ItemList>
            {list_duty.map((dt) => (
              <li key={dt.id}>
                <div className='left-wrap'>
                  <img src={dt.icon} alt={dt.title} />
                  <div>
                    <p>{dt.title}</p>
                    <span>{dt.text}</span>
                  </div>
                </div>
                <StyledLink to={dt.link}>알아보기</StyledLink>
              </li>
            ))}
          </ItemList>
        </ItemListWrap>
      </InfoContent>
    )
  }
  if (location.search === '?item=must') {
    return (
      <InfoContent>
        <Banner color='#FFFFFF' shadow>
          <div>
            <h2>
              사장님!!<br />
              사업장 안전을 위해<br />
              필수 가입하실 보험입니다.
            </h2>
          </div>
          <div>
            <img src={imgPlace} alt='필수 보험'/>
          </div>
        </Banner>
        <ItemListWrap>
          <ItemList>
            {list_must.map((dt) => (
              <li key={dt.id}>
                <div className='left-wrap'>
                  <img src={dt.icon} alt={dt.title} />
                  <div>
                    <p>{dt.title}</p>
                    <span>{dt.text}</span>
                  </div>
                </div>
                <StyledLink to={dt.link}>알아보기</StyledLink>
              </li>
            ))}
          </ItemList>
        </ItemListWrap>
        <Banner color='#FFFFFF' shadow>
          <div className='sub-banner'>
            <h3>
              뜻하지 않게 발생하는 재산손해와 배상책임!<br />
              종합보장으로 안전하게 대비하세요.
            </h3>
            <img src={imgPlace} alt='필수 보험' style={{width: '200px'}}/>
          </div>
          <StyledLink>알아보기</StyledLink>
        </Banner>
        <Banner color='#FFFFFF' shadow>
          <div className='sub-banner'>
            <img src={hyd} alt='필수 보험' style={{width: '200px'}}/>
          </div>
          <StyledLink>알아보기</StyledLink>
        </Banner>
      </InfoContent>
    )
  }
  if (location.search === '?item=invest') {
    return (
      <InfoContent>
        <Banner color='#FFFFFF' shadow>
          <div>
            <h2>
              사장님!!<br />
              운영하시는 사업장 마다<br />
              의무적으로 가입하실 보험입니다.
            </h2>
            <p>**미가입시 과태로 부과 대상입니다.</p>
          </div>
          <div>
            <img src={imgPlace} alt='의무보험'/>
          </div>
        </Banner>
        <Banner color='#FFFFFF' shadow>
          <InvestList>
            <h2>
              <span>01</span>목적자금!!<br />
              자금 준비계획이 꼭 필요합니다.
            </h2>
            <ul>
              {list_invest.map((dt) => (
                <li key={dt.id}>
                  <h2>
                    <span>{dt.title}</span>
                    {dt.money}
                  </h2>
                  <img src={dt.icon} alt='icon' />
                  <p>{dt.source}</p>
                </li>
              ))}
            </ul>
          </InvestList>
        </Banner>
        <Banner color='#FFFFFF' shadow>
          <InvestList>
            <h2>
              <span>02</span>목적자금!!<br />
              마련시 꼭 체크하실 내용입니다.
            </h2>
            <ul className='text-box'>
              <li>1. 비과세 혜택과 연복리효과는?</li>
              <li>2. 목돈 필요시 일시 수령 가능여부는?</li>
              <li>3. 노후 준비 필요시 연금 전환 가능여부는?</li>
              <li>4. 보험회사의 안정성은?</li>
            </ul>
          </InvestList>
        </Banner>
        <CustomButton 
          onClick={() => setShowPopup(true)} 
          width='100%'
          bgColor='BLUE3'
        >
          <Text color='WHITE'>목돈마련 상담신청</Text>
        </CustomButton>
        {showPopup && (
          <ApplyModal onClick={() => setShowPopup(false)} />
        )}
      </InfoContent>
    )
  }
}