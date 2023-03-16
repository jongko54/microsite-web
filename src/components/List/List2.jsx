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
          desc={`유비무환!! 강한 소상공인을 위한 \n창업전, 창업후 지원`}
        />
        <ListContent title='상권정보시스템'>
          <ul className='list-style-disc'>
            <li>내용 : 빅데이터를 기반으로 매출액, 유동인구 등 창업전에 반드시 알아야 할 분석자료</li>
            <li>제공정보 : 간단분석, 상권분석, 경쟁분석, 입지분석, 수익분석</li>
            <li>이용방법 : 인터넷 접속 후 사용 가능 : http://sg.sbiz.or.kr</li>
          </ul>
        </ListContent>
        <ListContent title='강한 소상공인 성장지원'>
          <ul className='list-style-disc'>
            <li>예산 : 100억원</li>
            <li>규모 : 350여개 팀</li>
            <li>대상 : 소상공인이면 누구나 단, 소상공인 정책자금 지원에 제외되는 소상공인은 참여 제한</li>
            <li>지원내용
              <div className='arrow-box'>
                <ul className='list-style-disc right-85'>
                  <li>아이디어 선발 및 팀 빌딩
                    <p>-350개 팀</p>
                  </li>
                </ul>
                <ul className='list-style-disc right-85'>
                  <li>아이디어 선발 및 팀 빌딩
                    <p>-350개 팀</p>
                  </li>
                </ul>
                <ul className='list-style-disc right-85'>
                  <li>아이디어 선발 및 팀 빌딩
                    <p>-350개 팀</p>
                  </li>
                </ul>
              </div>
            </li>
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