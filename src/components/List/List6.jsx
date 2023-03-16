import React from 'react'
import Layout from '../../layout';
import Content from '../Content';
import ListTitle from './ListTitle';
import ListContent from './ListContent';
import useWindowSize from '../../hooks/useWindowSize';

function List6() {
  const {width} = useWindowSize();
  return (
    <Layout>
      <Content top={width > 768 ? '5%' : '12.5%'} bottom={width > 768 ? '5%' : '36.7%'}>
        <ListTitle
          page='06'
          title='전통시장 활성화 지원'
          desc={`전통시장이 살아야 경제가 산다! \n전통시장만을 위한 특별한 지원`}
        />
        <ListContent title='문화관광형 시장'>
          <ul className='list-style-disc'>
            <li>예산 : 시장당 2년간 최대 10억원 이내</li>
            <li>규모 : 81곳 내외 (신규 40곳, 계속 41곳) 개사 내외</li>
            <li>대상 : 전통시장 및 상점가
              <span>단, 화제공제 가입율 35% 이상, 상인회 가입율/상인회비 납부율/온누리상품권 가맹율 각 80% 이상</span>
            </li>
            <li>지원내용 : 시장중심의 체험, 축제 개발, 상인 중심형 프로젝트 지원</li>
            <li>신청 : 전통시장 사업관리포탈 (www.sbiz.or.kr/sijang/main.do)</li>
          </ul>
        </ListContent>
        <ListContent title='특성화 첫걸음 기반조성'>
          <ul className='list-style-disc'>
            <li>예산 : 시장당 1년간 최대 3억원 이내</li>
            <li>규모 : 30곳</li>
            <li>대상 : 전통시장 및 상점가 
              <span>단, 화제공제 가입율 35% 이상, 상인회 가입율/상인회비 납부율/온누리상품권 가맹율 각 60% 이상</span>
            </li>
            <li>지원내용 : 3대 서비스 혁신(편리한 지불결제, 고객신뢰, 위생청결),  2대 조직역량강화 (상인회, 안전관리)</li>
            <li>신청 : 전통시장 사업관리포탈 (www.sbiz.or.kr/sijang/main.do)</li>
          </ul>
        </ListContent>
        <ListContent title='디지털전통시장'>
          <ul className='list-style-disc'>
            <li>예산 : 시장당 2년간 최대 4억원</li>
            <li>대상 : 전통시장 및 상점가 
              <span>단, 화제공제 가입율 25% 이상, 상인회 가입율/상인회비 납부율/온누리상품권 가맹율 각 80% 이상</span>
            </li>
            <li>지원내용 : 전통시장 디지털화 종합지원 (교육비, 구축비, 마케팅비)</li>
            <li>신청 : 전통시장 사업관리포탈 (www.sbiz.or.kr/sijang/main.do)</li>
          </ul>
        </ListContent>
        <ListContent title='청년몰 활성화 및 확장'>
          <ul className='list-style-disc'>
            <li>예산 : 활성화 (시장당 최대 4억원), 확장 (시장당 최대 5억원)</li>
            <li>규모 : 활성화 10곳 내외. 확장 1곳 내외</li>
            <li>대상 : 전통시장 및 상점가, 골목형상점가 로서 청년몰 조성이 완료된 곳
              <span>단, 화제공제 가입율 35% 이상, 상인회 가입율/상인회비 납부율/온누리상품권 가맹율 각 60% 이상</span>
            </li>
            <li>신청 : 전통시장 사업관리포탈 (www.sbiz.or.kr/sijang/main.do)</li>
          </ul>
        </ListContent>
        <ListContent title='청년상인 도약지원'>
          <ul className='list-style-disc'>
            <li>예산 : 1인당 최대 500백만원</li>
            <li>규모 : 청년상인 200명 내외</li>
            <li>대상 : 전통시장 내 만 39세 이하 청년상인</li>
            <li>지원내용 : 점포활성화 비용</li>
            <li>신청 : 전통시장 사업관리포탈 (www.sbiz.or.kr/sijang/main.do)</li>
          </ul>
        </ListContent>
        <ListContent title='상권활성화'>
          <ul className='list-style-disc'>
            <li>예산 : 304억원</li>
            <li>대상 : 관련법규에서 지정한 자율상권구역, 상권활성화구역</li>
            <li>지원내용 : 특색체험 테마공간조성, 지역특화상품, 판촉프로그램</li>
            <li>신청 : 소상공인진흥공단</li>
          </ul>
        </ListContent>
        <ListContent title='전통시장 화재안전점검'>
          <ul className='list-style-disc'>
            <li>대상 : 전통시장 535곳 대상 3년 주기 점검</li>
            <li>지원내용 : 화재안전점검 및 개별점검결과보고</li>
          </ul>
        </ListContent>
        <ListContent title='전통시장 노후전선 정비'>
          <ul className='list-style-disc'>
            <li>예산 : 시장당 최대 5억원 (점포당 125만원)</li>
            <li>규모 : 청년상인 200명 내외</li>
            <li>대상 : 전통시장, 상점가, 골목형상점가, 상권활성화구역</li>
            <li>지원내용 : 전통시장 개별점포 내 전기설비 개선 (문의처 : 소상공인 진흥공단 1357)</li>
          </ul>
        </ListContent>
        <ListContent title='전통시장 화재알림시설 설치'>
          <ul className='list-style-disc'>
            <li>예산 : 점포당 80만원 한도</li>
            <li>대상 : 전통시장, 상점가, 골목형상점가, 상권활성화구역</li>
            <li>지원내용 : 화재감지시설, 화재감시용 CCTV 등 (문의처 : 소상공인 진흥공단 1357)</li>
          </ul>
        </ListContent>
        <ListContent title='전통시장 화재공제'>
          <ul className='list-style-disc'>
            <li>예산 : 9.9억원</li>
            <li>대상 : 전통시장 (문의처 : 소상공인 진흥공단 1357)</li>
          </ul>
        </ListContent>
        <ListContent title='시장경영 패키지지원'>
          <ul className='list-style-disc'>
            <li>예산 : 161.42억원</li>
            <li>대상 : 전통시장, 상점가, 골목형상점가, 상권활성화구역, 상인엽합회</li>
            <li>지원내용 : 사업지원 (마케팅, 교육, 경영자문), 인력지원 (시장매니저, 배송매니저)</li>
          </ul>
        </ListContent>
        <ListContent title='온누리상품권발행'>
          <ul className='list-style-disc'>
            <li>발행규모 : 4조원</li>
            <li>종류 : 지류, 카드형, 모바일</li>
            <li>가맹대상 : 전통시장, 상점가, 골목형상점가, 상권활성화구역</li>
            <li>가맹신청 : 온라인 신청 (https://ongift.or.kr)</li>
            <li>판매처 : 신한, 우리, 하나 등 카드사, 농협, 수협, 신협, 우체국 등</li>
          </ul>
        </ListContent>
      </Content>
    </Layout>
  )
}

export default List6