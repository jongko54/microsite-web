import React from 'react'
import Layout from '../../layout';
import Content from '../Content';
import ListTitle from './ListTitle';
import useWindowSize from '../../hooks/useWindowSize';
import AccordionList from './AccordionList';
import styled from 'styled-components';

const data = [
  {
    id: 1,
    title: '지원규모',
    textArea: `<li>3조원</li>`
  },
  {
    id: 2,
    title: '지원내용',
    textArea: `
  <li>
    대출한도
    <p>-직접대출 : 대출잔액 기준 5억원</p>
    <p>-대리대출 : 대출잔액 기준 7천만원</p>
  </li>
  <li>
    대출금리
    <p>-기준금리 (분기별 변동금리) + 가산금리 (최대 0.6%)</p>
  </li>
  <li>
    대출기간
    <p>-운전자금 5년 (거치기간 2년, 상환기간 3년)</p>
    <p>-시설자금 8년 (거치기간 3년, 상환기간 5년)</p>
  </li>
  <p class='caution'>*정책자금별 융자조건은 상이하기 때문에 반드시 소상공인진흥공단 문의 요망</p>`
  },
  {
    id: 3,
    title: '절차',
    textArea: `
  <li>
    직접대출
    <div class='arrow-box flex-grow-1'>
      <ul>
        <li>신청/접수</li>
      </ul>
      <ul>
        <li>지원대상 확인</li>
      </ul>
      <ul>
        <li>대출심사</li>
      </ul>
      <ul>
        <li>약정 미 실행</li>
      </ul>
    </div>
  </li>
  <li>
    대리대출
    <p style="padding-top: 10px;">- 보증서대출</p>
      <div class='arrow-box flex-grow-1'>
        <ul>
          <li>신청/접수</li>
        </ul>
        <ul>
          <li>지원대상 확인</li>
        </ul>
        <ul>
          <li>보증심사</li>
        </ul>
        <ul>
          <li>대출심사</li>
        </ul>
        <ul>
          <li>약정 미 실행</li>
        </ul>
      </div>
      <p style="padding-top: 20px;">- 신용/담보대출</p>
      <div class='arrow-box flex-grow-1'>
        <ul>
          <li>신청/접수</li>
        </ul>
        <ul>
          <li>지원대상 확인</li>
        </ul>
        <ul>
          <li>대출심사</li>
        </ul>
        <ul>
          <li>약정 미 실행</li>
        </ul>
      </div>
    </li>`
  },
  {
    id: 4,
    title: '신청접수',
    textArea: `
  <li>온라인 접수 <b>:&nbsp;</b><br />소상공인 정책자금 홈페이지 (ols.sbiz.or.kr)에서 신청 가능</li>
  <li>문의처 <b>:&nbsp;</b><br />소상공인진흥공단 국번없이 1357</li>`
  },
]

const FixList = styled.div`
  background-color: #FAFAFA;
  padding: 50px 25px 51px 19px;
 
  > div {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    > ul {
      margin: 0 0 51px 19px;
      > li {
        margin-bottom: 20px;
        ::before {
          left: -7%;
        }
      }
    }
  }
  ${(props) => props.theme.window.mobile} {
    padding: 24px 33px 24px 13px;
    border-radius: 8px;
    > div {
      flex-flow: column;
      > ul {
        margin: 0 0 5px 13px;
        :last-child {
          margin-bottom: 31px;
        }
        > li {
          margin-bottom: 5px;
          ::before {
            left: -5%;
          }
        }
      }
    }
  }
`;

function List1() {
  const {width} = useWindowSize();

  return (
    <Layout>
      <Content top={width > 768 ? '5%' : '12.5%'} bottom={width > 768 ? '5%' : '0'}>
        <ListTitle
          page='01'
          title='소상공인 정책자금'
          desc='정책자금 지원은 소상공인의 성장동력이 됩니다.'
        />
        <AccordionList list={data} />
        <FixList>
          <div>
            <ul className='list-style-disc'>
              <li>일반 소상공인</li>
              <li>재해확인증 받은 소상공인</li>
              <li>업력 3년 이상 소상공인</li>
            </ul>
            <ul className='list-style-disc'>
              <li>청년/청년고용 소상공인</li>
              <li>장애인 기업</li>
              <li>지능형/기업가형 소상공인 </li>
            </ul>
            <ul className='list-style-disc'>
              <li>금융소외계층 재창업소상공인</li>
              <li>고용/산업위기 소상공인</li>
              <li>민간 투자/펀딩 받은 소상공인</li>
            </ul>
          </div>
          <p className='caution'>*정책자금별 지원대상은 상이하기 때문에 반드시 소상공인진흥공단 문의 요망</p>
        </FixList>
      </Content>

    </Layout>
  )
}

export default List1