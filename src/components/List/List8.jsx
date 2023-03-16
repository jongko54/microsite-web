import React from 'react';
import styled from 'styled-components';
import Layout from '../../layout';
import Button from '../Button';
import { Title } from '../Font';
import { useNavigate } from "react-router-dom";

const ListWrap = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 130px 0 228px;
`;

const ListContent = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  margin-bottom: 130px;
`;


const TitleBox = styled.div`
  padding: 23px 0 73px;
`;

const Table = styled.table`
  width: 100%;
  
  th,td {
    padding: 1.778% 0;
    text-align: start;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1rem;
  }
  
  thead th {
    background-color: #ECECEC;
    border: 2px solid #393939;
    color: #393939;

    border-top: 0;
    border-left: 0;
    text-align: center;
    :last-child {
      border-right: 0;
    }
  }
  tbody th {
    color: #393939;
    
    :nth-child(2) {
      text-align: end;
    }
  }
  tbody .bg-gray {
    background-color: #F9F9F9;
    
  }
  tbody td, th{
    padding: 1.778% 2%;
    border: 2px solid #F5F5F5;
    border-left: 0;
  }
  tbody td {

    :last-child {
      border-right: 0;
    }
    :nth-child(2) {
      text-align: end;
    }
  }
`;

const Info = styled.ul`
  padding: 4.12% 0;
  
  > li {
    font-weight: 500;
    color: #2F2F2F;
    margin-bottom: 2.1%;
    :last-child {
      margin-bottom: 0;
    }
    > p {
      color: #6C6C6C;
      font-size: 0.9rem;
      :first-child {
        padding-top: 0.9%;
      }
    }
  }
`;

const ButtonBox = styled.div`
  width: 55.55555555555556%;
  margin: 0 auto;
`;


function List8() {
  let navigate = useNavigate();
  function handleClick(link) {
    navigate(link);
  }
  return (
    <Layout color='BG_WHITE2'>
      <ListWrap>
        <ListContent>
          <Title size='0.75rem' color='BLUE' bold='500'>2023년 소상공인 정부정책자금</Title>
          <TitleBox>
            <Title color='BLACK2' bold='600'>정부 예산 소진 전에 신청하셔서 혜택을 누리세요</Title>
          </TitleBox>
          <Table>
            <thead>
              <tr>
                <th>구분</th>
                <th>지원규모(억원)</th>
                <th>지원대상</th>
                <th>대출조건</th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-gray'>
                <th>일반경영안정자금</th>
                <th>5,000</th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>일반 소상공인</td>
                <td>5,000</td>
                <td>일반 소상공인</td>
                <td>1억원 이내, 5년</td>
              </tr>
              <tr className='bg-gray'>
                <th>특별경영안정자금</th>
                <th>13,000</th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>청년고용연계</td>
                <td>1,000</td>
                <td>청년/청년고용 소상공인</td>
                <td>7천만원 이내, 5년</td>
              </tr>
              <tr>
                <td>경영애로자금</td>
                <td>8,000</td>
                <td>금융소외계층</td>
                <td>3천만원 이내, 5년</td>
              </tr>
              <tr>
                <td>재도전특별자금</td>
                <td>2,000</td>
                <td>재창업소상공인</td>
                <td>7천만원 이내, 5년</td>
              </tr>
              <tr>
                <td>긴급경영안정자금</td>
                <td>1,000</td>
                <td>재해확인증 받은 소상공인</td>
                <td>7천만원 이내, 5년</td>
              </tr>
              <tr>
                <td>장애인기업</td>
                <td>500</td>
                <td>장애인기업</td>
                <td>1억원 이내, 7년</td>
              </tr>
              <tr>
                <td>위기지역</td>
                <td>500</td>
                <td>고용/산업위기 소상공인</td>
                <td>7천만원 이내, 5년</td>
              </tr>
              <tr className='bg-gray'>
                <th>성장기반자금</th>
                <th>12,000</th>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>특화자금</td>
                <td>6,000</td>
                <td>업력 무관 소상공인</td>
                <td>5억원 이내, 5~8년</td>
              </tr>
              <tr>
                <td>성장촉진자금</td>
                <td>4,500</td>
                <td>업력 3년 이상 소상공인</td>
                <td>1억원/2억원, 5년</td>
              </tr>
              <tr>
                <td>지능형(스마트)자금</td>
                <td>1,100</td>
                <td>지능형/기업가형 소상공인</td>
                <td>5억원 이내, 8년</td>
              </tr>
              <tr>
                <td>민간선투자형연계융자</td>
                <td>400</td>
                <td>민간 투자/펀딩을 받은 소상공인</td>
                <td>5억원 이내, 8년</td>
              </tr>
              <tr className='bg-gray'>
                <th>합계</th>
                <th>400</th>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
          <Info>
            <li>
              대상
              <p>일반 소상공인 : 업력 3년 미만 또는 최근 1년 이내 정부 창업지원을 마친 소상공인</p>
              <p>취약 소상공인 : 장애인기업, 고용・산업위기지역, 재해 피해, 청년, 재창업・채무조정, 저신용 소상공인</p>
              <p>기업가형 소상공인 : 성장기에 진입한 소상공인</p>
            </li>
            <li>
              신청방법
              <p>소상공인시장진흥공단</p>
            </li>
          </Info>
        </ListContent>
        <ButtonBox>
          <Button
            onClick={() => handleClick(-1)}
            title='뒤로가기' 
            color='BLACK2' 
            bgColor='GRAY2' 
          />
        </ButtonBox>
      </ListWrap>
      
    </Layout>
  )
}

export default List8