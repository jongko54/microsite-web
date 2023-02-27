import React from 'react'
import Layout from '../../layout';
import Content from '../Content';
import ListTitle from './ListTitle';
import ListContent from './ListContent';

function List1() {
  return (
    <Layout>
      <Content top='5%' bottom='5%'>
        <ListTitle
          page='01'
          title='소상공인 정책자금'
          desc='정책자금 지원은 소상공인의 성장동력이 됩니다.'
        />
        <ListContent title='지원규모'>
          <ul>
            <li>3조원</li>
          </ul>
        </ListContent>
        <ListContent title='지원대상'>
          <ul>
            <li>3조원</li>
            <li>재해확인증 받은 소상공인</li>
            <li>업력 3년 이상 소상공인</li>
          </ul>
          <p>*정책자금별 지원대상은 상이하기 때문에 반드시 소상공인진흥공단 문의 요망</p>
        </ListContent>
        <ListContent title='지원내용'>
          <ul>
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
          <ul>
            <li>
              직접대출
              <ul>
                <li>신청/접수</li>
                <li>지원대상 확인</li>
                <li>대출심사</li>
                <li>약정 미 실행</li>
              </ul>
            </li>
            <li>
              대리대출
              <ul>
                <li>신청/접수</li>
                <li>지원대상 확인</li>
                <li>보증심사</li>
                <li>대출심사</li>
                <li>약정심사</li>
              </ul>
            </li>
            <li>
              신용/담보대출
              <ul>
                <li>신청/접수</li>
                <li>지원대상 확인</li>
                <li>대출심사</li>
                <li>약정 미 실행</li>
              </ul>
            </li>
          </ul>
        </ListContent>
        <ListContent title='신청접수'>
          <ul>
            <li>온라인 접수 : 소상공인 정책자금 홈페이지 (ols.sbiz.or.kr)에서 신청 가능</li>
            <li>문의처 : 소상공인진흥공단 국번없이 1357</li>
          </ul>
        </ListContent>
      </Content>

    </Layout>
  )
}

export default List1