import React from 'react'
import styled from 'styled-components';

const GuideList = styled.ul`
  padding: 64px 82px 64px 0;
  
  &.list-style > li {
    position: relative;
    font-weight: 500;
    font-size: 1rem; 
    color: #2F2F2F;
    padding-left: 25px;
    margin-bottom: 53px;
    :last-child {
      margin-bottom: 0;
    }
    ::before {
      content: '';
      display: block;
      width: 4.5px;
      height: 4.5px;
      background: #2F2F2F;
      border-radius: 50%;
      position: absolute;
      top: 13px;
      left: 10px;
    }
  }
 .list-style-gray > li {
    position: relative;
    font-weight: 400;
    margin-bottom: 5px;
    font-size: 0.9rem; 
    color: #6C6C6C;
    padding-left: 25px;
    :first-child {
      margin-top: 5px;
    }
    ::before {
      content: '';
      display: block;
      width: 4px;
      height: 4px;
      background: #6C6C6C;
      border-radius: 50%;
      position: absolute;
      top: 13px;
      left: 10px;
    }
 }

  p, span {
      font-size: 0.9rem;
      color: #6C6C6C;
      font-weight: 400;
  }

  ${(props) => props.theme.window.mobile} {
    padding: 64px 10px 0;
    &.list-style > li {
      padding-left: 15px;
      margin-bottom: 28px;
      ::before {
        top: 10px;
        left: 0px;
      }
      > p {
        font-size: 0.8666666666666667rem;
      }
    }
    .list-style-gray > li {
      font-size: 0.8666666666666667rem;
      padding-left: 0;
      :first-child {
        margin-top: 23px;
      }
      ::before {
        top: 13px;
        left: -15px;
      }
    }
  }
`;

const EventGuide = () => {
  return (
    <GuideList className='list-style'>
      <li>
        이벤트 참여하기
        <p>
          이벤트 기간 중 회원가입한 분은 자동 응모가 됩니다.
        </p>
      </li>
      <li>
        이벤트 기간
        <p>
          2023. 04. 01 ~ 2023. 04. 30 (1개월 간)
        </p>
      </li>
      <li>
        경품
          <p>1등 / 01명<span>가게 홍보비 100만 원</span></p>
          <p>2등 / 05명<span>가게 홍보비 50만 원</span></p>
          <p>3등 / 10명<span>가게 홍보비 30만 원</span></p>
      </li>
      <li>
        당첨자 발표
        <p>2023년 5월 8일 (월요일)</p>
      </li>
      <li>
        꼭 확인해야할 사항 
        <ul className='list-style-gray'>
          <li>경품 지급시 제세공과금은 당첨자 본인 부담입니다.</li>
          <li>소상공인 아닌 경우 당첨이 취소될 수 있습니다.</li>
          <li>개인정보 수집, 이용에 대해 동의하지 않을 경우 참여할 수 없습니다.</li>
          <li>정확하지 않은 개인정보로 인한 부분에서는 책임지지 않습니다.</li>
          <li>비정상적이거나 부정한 방법으로 응모 시 당첨된 경품은 별도 고지 없이 당첨이 취소될 수 있습니다</li>
          <li>당첨자 발표일은 내부 사정에 의해 변경될 수 있습니다.</li>
          <li>유선 연락 5회 시도 후 연락이 되지 않을 경우 당첨이 취소될 수 있으니 유의 부탁 드립니다.</li>
        </ul>
      </li>
    </GuideList>
  )
}

export default EventGuide