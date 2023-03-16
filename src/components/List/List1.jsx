import React from 'react'
import Layout from '../../layout';
import Content from '../Content';
import ListTitle from './ListTitle';
import ListContent from './ListContent';
import useWindowSize from '../../hooks/useWindowSize';

function List1() {
  const {width} = useWindowSize();

  return (
    <Layout>
      <Content top={width > 768 ? '5%' : '12.5%'} bottom={width > 768 ? '5%' : '23.5%'}>
        <ListTitle
          page='01'
          title='소상공인 정책자금'
          desc='정책자금 지원은 소상공인의 성장동력이 됩니다.'
        />
        <ListContent title='지원규모'>
          <ul className='list-style-disc'>
            <li>3조원</li>
          </ul>
        </ListContent>
        <ListContent title='지원대상'>
          <div>
            <ul className='list-style-disc'>
              <li>일반 소상공인</li>
              <li>재해확인증 받은 소상공인</li>
              <li>업력 3년 이상 소상공인</li>
            </ul>
            <ul className='list-style-disc'>
              <li>청년/청년고용 소상공인</li>
              <li>장애인 기업</li>
              <li>지능형/기업가형 소상공인</li>
            </ul>
            <ul className='list-style-disc'>
              <li>금융소외계층 재창업소상공인</li>
              <li>고용/산업위기 소상공인</li>
              <li>민간 투자/펀팅 받은 소상공인</li>
            </ul>
          </div>
          <p>*정책자금별 지원대상은 상이하기 때문에 반드시 소상공인진흥공단 문의 요망</p>
        </ListContent>
        <ListContent title='지원내용'>
          <ul className='list-style-disc'>
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
          </ul>
          <p>*정책자금별 융자조건은 상이하기 때문에 반드시 소상공인진흥공단 문의 요망</p>
        </ListContent>
        <ListContent title='절차'>
          <ul className='list-style-disc'>
            <li>
              직접대출
              <div className='arrow-box flex-grow-1'>
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
              <p style={{paddingTop: '10px'}}>- 보증서대출</p>
              <div className='arrow-box flex-grow-1'>
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
              <p style={{paddingTop: '20px'}}>- 신용/담보대출</p>
              <div className='arrow-box flex-grow-1'>
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
          </ul>
        </ListContent>
        <ListContent title='신청접수'>
          <ul className='list-style-disc'>
            <li>온라인 접수 <b>:&nbsp;</b><br />소상공인 정책자금 홈페이지 (ols.sbiz.or.kr)에서 신청 가능</li>
            <li>문의처 <b>:&nbsp;</b><br />소상공인진흥공단 국번없이 1357</li>
          </ul>
        </ListContent>
      </Content>

    </Layout>
  )
}

export default List1