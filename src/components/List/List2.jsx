import React from 'react'
import Layout from '../../layout';
import Content from '../Content';
import ListTitle from './ListTitle';
import ListContent from './ListContent';
import useWindowSize from '../../hooks/useWindowSize';

function List2() {
  const {width} = useWindowSize();
  return (
    <Layout>
      <Content top={width > 768 ? '5%' : '12.5%'} bottom={width > 768 ? '5%' : '36.7%'}>
        <ListTitle
          page='02'
          title='소상공인 창업지원'
          desc={`유비무환!! 창업전 업종별로 상권정보를\n제공합니다.`}
        />
        <ListContent title='사업내용'>
          <ul>
            <li>국세청 빅데이터를 기반으로 매출액, 유동인구 등 창업전에 반드시 알아야할 다양한 데이터를 활용한 정보 분석</li>
          </ul>
        </ListContent>
        <ListContent title='분석정보'>
          <ul>
            <li>간단분석 : 업종 및 소재지 선택지 주변 동일한 업장수, 매출, 유동인구 등 정보 제공</li>
            <li>간단분석 : 업종 및 소재지 선택지 주변 동일한 업장수, 매출, 유동인구 등 정보 제공 상권분석 : 상권내 업종, 매출, 인구 등의 변화 추이 제공</li>
            <li>경쟁분석 : 지역, 업종의 매출현황 및 동일업종 경쟁수준 평가</li>
            <li>입지분석 : 업종별 입지평가 및 매출예측</li>
            <li>수익분석 : 목표매출, 고객수, 유사업종의 수익분석</li>
          </ul>
        </ListContent>
        <ListContent title='이용방법'>
          <p style={{paddingTop: '0', color: '#393939'}}>인터넷 접속 후 사용 가능 : http://sg.sbiz.or.kr</p>
        </ListContent>
      </Content>

    </Layout>
  )
}

export default List2