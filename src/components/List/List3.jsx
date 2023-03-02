import React from 'react'
import Layout from '../../layout';
import Content from '../Content';
import ListTitle from './ListTitle';
import ListContent from './ListContent';
import styled from 'styled-components';
import useWindowSize from '../../hooks/useWindowSize';

const List3BoxWrap = styled.div`
  display: flex;
${(props) => props.theme.window.mobile} {
  flex-direction: column;
  padding: 6%;
}
`;

const List3Box = styled.div`
  border-radius: 20px;
  background-color: #EBEBEB;
  height: 150px;
  padding: 2%;
  position: relative;
  width: 280px;
  min-width: 150px;
  margin-right: 134px;
  > h2 {
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Noto Sans KR', sans-serif;
    position: relative;
    ::before {
      content: '';
      display: block;
      width: 4px;
      height : 4px;
      border-radius: 50%;
      background-color: #393939;
      position: absolute;
      top: 14px;
      left: -5%;
    }
  }
  > p {
    font-size: 0.9rem;
    font-weight: 300;
  }

  ::after {
    content: '→';
    display: block;
    font-size: 1rem;
    width: 1.5rem;
    color: #393939;
    position: absolute;
    top: 50px;
    right: -80px;
  }
  :last-child::after {
    content: none;
  }

  ${(props) => props.theme.window.mobile} {
    border-radius: 15px;
    height: 85px;
    width: 100%;
    min-width: none;
    padding: 0;
    margin-right: 0;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 11.5%;
  > h2 {
    font-size: 0.8666666666666667rem;
    ::before {
      top: 9px;
    }
  }
  > p {
    font-size: 0.8666666666666667rem;
  }

  ::after {
    transform: rotate(90deg);
    top: 98px;
    right: calc(50% - 20px);
  }
  :last-child {
    margin-bottom: 0
  }
  :last-child::after {
    content: none;
  }
  }
`;

function List3() {
  const {width} = useWindowSize();
  return (
    <Layout>
      <Content top={width > 768 ? '5%' : '12.5%'} bottom={width > 768 ? '5%' : '36.7%'}>
        <ListTitle
          page='02'
          title='소상공인 성장지원'
          desc='강한 소상공인을 육성해 드립니다.'
        />
        <ListContent title='지원규모'>
          <ul>
            <li>예산 : 100억원 / 규모 : 350여개 팀</li>
          </ul>
        </ListContent>
        <ListContent title='지원대상'>
          <ul>
            <li>
              소상공인이면 누구나<br/>
              단, 소상공인 정책자금 지원에 제외되는 소상공인은 참여 제한
            </li>
          </ul>
        </ListContent>
        <ListContent title='이용방법'>
          <List3BoxWrap>
            <List3Box>
              <h2>아이디어 선발 및 팀 빌딩</h2>
              <p>-350개 팀</p>
            </List3Box>
            <List3Box>
              <h2>비즈니스 모델 고도화</h2>
              <p>-105개 팀</p>
              <p>-최대 6,000만원</p>
            </List3Box>
            <List3Box>
              <h2>아이디어 선발 및 팀 빌딩</h2>
              <p>-30개 팀</p>
              <p>-최대 4,000만원</p>
            </List3Box>
          </List3BoxWrap>
        </ListContent>
        <ListContent title='지원유형'>
          <ul>
            <li>라이프사이클형 : 창의적인 컨텐츠를 새롭게 접목하여 비즈니스 확장</li>
            <li>로컬프랜드형 : 로컬 크리에이터가 지역기업으로 성장</li>
            <li>글로벌형 : 글로벌(수출) 지향적 비즈니스</li>
          </ul>
        </ListContent>
        <ListContent title='절차'>
          <ol>
            <li>지원자 모집</li>
            <li>아이디어 선정</li>
            <li>1차 오디션</li>
            <li>파이널 오디션</li>
          </ol>
        </ListContent>
        <ListContent title='신청'>
          <ul>
            <li>소상공인 진흥공단 홈페이지(www.semas.or.kr) 공지사항 게시 </li>
          </ul>
        </ListContent>
        
      </Content>

    </Layout>
  )
}

export default List3