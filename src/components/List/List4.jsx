import React from 'react'
import Layout from '../../layout';
import Content from '../Content';
import ListTitle from './ListTitle';
import ListContent from './ListContent';
import useWindowSize from '../../hooks/useWindowSize';

function List4() {
  const {width} = useWindowSize();
  return (
    <Layout>
      <Content top={width > 768 ? '5%' : '12.5%'} bottom={width > 768 ? '5%' : '36.7%'}>
        <ListTitle
          page='04'
          title='소상공인 재기지원'
          desc={`Fighting 소상공인!! \n소상공인의 재도전을 위한 지원사업`}
        />
        <ListContent title='희망 리턴 패키지'>
          <ul className='list-style-disc'>
            <li>예산 : 1,464억원</li>
            <li>규모 : 66,000건 내외</li>
            <li>대상 : 경영위기 또는 폐업(예정) 소상공인</li>
            <li>지원내용 : 경영개선지원, 원스톱폐업지원, 재취업지원, 재창업지원</li>
            <li>신청 : 희망리텅 패키지 홈페이지(hope.sbzi.or.kr)  2023년 1월부터 예산 소진시까지</li>
          </ul>
        </ListContent>
        <ListContent title='자영업자 고용보험료 지원'>
          <ul className='list-style-disc'>
            <li>예산 : 50억원</li>
            <li>규모 : 25,000명</li>
            <li>대상 : 자영업자 고용보험에 가입한 모든 소상공인</li>
            <li>지원내용 : 소상공인이 납입한 고용보험의 20~50%를 최대 5년간 지원</li>
            <li>신청 : 소상공인진흥공단 자영업자 고용보험지원사업 신청 홈페이지(go.sbzi.or.kr) 에서 온라인 신청</li>
          </ul>
        </ListContent>
      </Content>
    </Layout>
  )
}

export default List4