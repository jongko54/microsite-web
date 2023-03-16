import React from 'react'
import Layout from '../../layout';
import Content from '../Content';
import ListTitle from './ListTitle';
import ListContent from './ListContent';
import useWindowSize from '../../hooks/useWindowSize';

function List5() {
  const {width} = useWindowSize();
  return (
    <Layout>
      <Content top={width > 768 ? '5%' : '12.5%'} bottom={width > 768 ? '5%' : '36.7%'}>
        <ListTitle
          page='05'
          title='소상공인 특화지원'
          desc={`소상공인 지원 정책! \n꼭 확인하세요`}
        />
        <ListContent title='소상공인 판로개척지원'>
          <ul className='list-style-disc'>
            <li>예산 : 76.5억원</li>
            <li>규모 : 250개사 내외</li>
            <li>대상 : 도시형 소상공인으로 상시근로자 10인 미만 제조업</li>
            <li>지원내용
              <ol>
                <li>바우처 항목 선택 후 판로연계 지원</li>
                <li>바우처 항목 : 전시회 참가, 온라인마케팅, 오프라인매장입점, 미디어컨텐츠제작</li>
              </ol>
            </li>
            <li>신청
              <ol>
                <li>공고 : 소상공인 진흥공단 홈페이지 (www.semas.or.kr)</li>
                <li>접수 : e나라도움 홈페이지 (www.gosims.go.kr)</li>
              </ol>
            </li>
          </ul>
        </ListContent>
        <ListContent title='클린제조 환경조성'>
          <ul className='list-style-disc'>
            <li>예산 : 84억원</li>
            <li>규모 : 2,000개사 내외</li>
            <li>지원내용 : (필수) 안전교육, (선택) 탄소작업장, 안전조치, 근로환경개선</li>
          </ul>
        </ListContent>
        <ListContent title='스마트 공방 기술지원'>
          <ul className='list-style-disc'>
            <li>예산 : 735억원 (업체당 4,900만원)</li>
            <li>규모 : 1,500개사 내외</li>
            <li>대상 : 소상공인으로 상시근로자 10인 미만 제조업</li>
            <li>지원내용 : 연구장비/재료비, 위탁개발비</li>
            <li>신청 : e나라도움 홈페이지 (www.gosims.go.kr) 에서 사업조회 및 신청접수</li>
          </ul>
        </ListContent>
        <ListContent title='특화지원센터 설치,운영'>
          <ul className='list-style-disc'>
            <li>예산 : 133억원 (업체당 4,900만원)</li>
            <li>규모 : 전국 39개소 특화지원센터 운영</li>
            <li>특화지원 : 기본지원, 위탁개발비지원, 자율사업지원</li>
          </ul>
        </ListContent>
        <ListContent title='복합지원센터 구축,운영'>
          <ul className='list-style-disc'>
            <li>지원방식 : 지자체 2곳</li>
            <li>복합지원 : 공동장비, 스마트장비, 전시/판매장, 체험공간 등 구축비용을 지원</li>
          </ul>
        </ListContent>
      </Content>
    </Layout>
  )
}

export default List5