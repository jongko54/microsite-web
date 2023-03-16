import React from 'react'
import Layout from '../../layout';
import Content from '../Content';
import ListTitle from './ListTitle';
import ListContent from './ListContent';
import useWindowSize from '../../hooks/useWindowSize';

function List3() {
  const {width} = useWindowSize();
  return (
    <Layout>
      <Content top={width > 768 ? '5%' : '12.5%'} bottom={width > 768 ? '5%' : '36.7%'}>
        <ListTitle
          page='02'
          title='소상공인 성장지원'
          desc='아는 것이 힘이다!! 사업 성공을 위한 다양한 지원'
        />
        <ListContent title='소상공인 역량강화 (컨설팅)'>
          <ul className='list-style-disc'>
            <li>예산 : 100억원</li>
            <li>규모 : 6,500건</li>
            <li>대상 : 소상공인 또는 예비창업자</li>
            <li>지원내용 : 긴급경영, 기업가형, 동네상권, 무료법률 컨설팅</li>
            <li>신청 : 소상공인 컨설팅 (con.sbiz.or.kr) 을 통해 신청</li>
          </ul>
        </ListContent>
        <ListContent title='소상공인 역량강화 (교육)'>
          <ul className='list-style-disc'>
            <li>예산 : 112.2억원</li>
            <li>규모 : 50,000명</li>
            <li>대상 : 소상공인 또는 예비창업자</li>
            <li>지원내용 : 전문기술, 경영개선, 로컬창업, 온택트, 기업가형 온라인 셀러 교육</li>
            <li>신청 : 소상공인 지식배움터 (edu.sbiz.or.kr) 을 통해 신청</li>
          </ul>
        </ListContent>
        <ListContent title='스마트상점 기술보급 지원'>
          <ul className='list-style-disc'>
            <li>예산 : 313억원</li>
            <li>규모 : 5,500개</li>
            <li>소상공인 단, 소상공인 정책자금 지원제외 업종은 제외</li>
            <li>지원내용 : 일반형, 상생형, 미래형 스마트기술 도입지원</li>
            <li>신청 : 스마트상점 기술보급사업 전용 홈페이지(http://www.sbiz.or.kr/smst/index.do)에서 개별 접수</li>
          </ul>
        </ListContent>
        <ListContent title='소상공인 전용결제시스템 (제로페이)'>
          <ul className='list-style-disc'>
            <li>규모 : 누적 가맹점 1,626,000개</li>
            <li>대상 : 사업자번호를 가진 법인 또는 개인사업자</li>
            <li>지원내용 : 제로페이 인프라구축, 홍보 마케팅, 0% 대의 결제수수료</li>
            <li>신청 : 제로페이 홈페이지(www.zeropay.or.kr)에서 신청</li>
          </ul>
        </ListContent>
        <ListContent title='결합형 스마트마켓'>
          <ul className='list-style-disc'>
            <li>규모 : 전국 100개 (점포당 최대 2,000만원)</li>
            <li>대상 : 스마트기기 활용 소상공인</li>
            <li>지원내용 : 제로페이 인프라구축, 홍보 마케팅, 0% 대의 결제수수료</li>
            <li>신청 : 제로페이 홈페이지(www.zeropay.or.kr)에서 신청</li>
          </ul>
        </ListContent>
        <ListContent title='백년가게/백년소공인 육성'>
          <ul className='list-style-disc'>
            <li>예산 : 22억 9,400만원</li>
            <li>규모 : 백년가게 100개사, 백년소공인 50개사</li>
            <li>대상 
              <ol>
                <li>-백년가게 : 업력 30년 이상의 소상공인, 소기업, 중기업 (제조업 제외)</li>
                <li>-백년소공인 : 업력 15년 이상 숙련기술을 보유한 상시근로자 10인 미만이 제조업체</li>
              </ol>
            </li>
            <li>신청 : 소상공인마당 온라인 신청 (www.sbiz.or.kr) 공지사항 확인 후 사업신청</li>
          </ul>
        </ListContent>
        <ListContent title='소상공인 온라인 판로지원'>
          <ul className='list-style-disc'>
            <li>예산 : 교육 42억, O2O 72억</li>
            <li>규모 : 교육 15,000명, O2O 14,400개 업체</li>
            <li>대상 : 온라인 시장 진출 소상공인</li>
            <li>신청 : 소상공인 지식배움터 (edu.sbiz.or.kr), 소상공인 마당 (sibz.or.kr)</li>
          </ul>
        </ListContent>
        <ListContent title='소상공인 물류 유통지원'>
          <ul className='list-style-disc'>
            <li>예산 : 86억원</li>
            <li>규모 : 10개 단체 내외</li>
            <li>대상 : 소상공인, 중소유통물류 관련 협력단체</li>
            <li>신청 : 소상공인 정책자금 홈페이지 (ols.sbiz.or.kr) 내 모집공고</li>
          </ul>
        </ListContent>
        <ListContent title='상생협력 프랜차이즈 육성'>
          <ul className='list-style-disc'>
            <li>예산 : 11.4억원</li>
            <li>규모 : 20개사 내외</li>
            <li>대상 : 프랜차이즈화 준비중인 소상공인</li>
            <li>신청 : 소상생협력 프랜차이즈 홈페이지 (www.sbiz.or.kr/fcs/main.do) 내 온라인 신청, 접수</li>
          </ul>
        </ListContent>
        <ListContent title='소상공인 협업활성화'>
          <ul className='list-style-disc'>
            <li>예산 : 112.78억원</li>
            <li>규모 : 협동조합 200개사 내외</li>
            <li>대상 : 조합원의 50% 이상이 소상공인으로 구성된 협동조합</li>
            <li>신청 : 협업활성화 홈페이지 (coop.sbiz.or.kr) 내 온라인 신청, 접수</li>
          </ul>
        </ListContent>
        <ListContent title='사회적경제기업 성장집중 지원'>
          <ul className='list-style-disc'>
            <li>예산 : 25.68억원</li>
            <li>규모 : 사회적경제기업 22개사 내외</li>
            <li>대상 : 소관부처의 추천을 받은 업력 4~10년차 사회적기업 (협동조합, 마을기업, 자활기업, 소셜벤처)</li>
            <li>신청 : 중소벤처기업부, 소상공인진흥공단, 소관부처</li>
          </ul>
        </ListContent>
      </Content>
    </Layout>
  )
}

export default List3