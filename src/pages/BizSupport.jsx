import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import DetailContent from '../components/Content/DetailContent';
import { Title } from '../components/Font';
import Layout from '../layout/index';
import banner from '../assets/img/event/bizsupport_banner.png';
import useWindowSize from '../hooks/useWindowSize';

const Banner = styled.div`
  display: flex;
  justify-content: space-between;

  > img {
    width: 500px;
    height: 636.47px;
    transform: translate(-155px, 20px);
  }
  ${(props) => props.theme.window.mobile} {
    padding: 13px 24px;
    > img {
      width: 200px;
      height: 245px;
      margin-bottom: 0;
      transform: translate(-50px, -30px);
    }
  }
`;

const BottonBox = styled.div`
  /* height: 1100px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 76px;

  ${(props) => props.theme.window.mobile} {
    /* height: 485px; */
    padding-bottom: 0px;
  }
`;

const TextBox = styled.div`
  padding-top: 120px;
  > h1 {
    line-height: 1.25;
    white-space: nowrap;
    margin-bottom: 179px;
  }
  ${(props) => props.theme.window.mobile} {
    padding-top: 0;
    > h1 {
      margin-bottom: 60px;
    }
  }

`;

function BizSupport() {
  const {width} = useWindowSize();
  return (
    <Layout color='BG_GRAY'>
      <DetailContent>
        <Banner>
          <TextBox>
            <Title color='BLACK2' size={width > 768 ? '1.5rem' : '1rem'} bold='300'>
              2023년 소상공인 지원정책
            </Title>
            <Title color='ORANGE' size={width > 768 ? '4rem' : '1.533333333333333rem'} bold='800'>
              정부 예산<br />
              소진전에<br />
              신청하셔서<br />
              혜택 누리세요
            </Title>
          </TextBox>
          <img src={banner} alt='icon'/>
        </Banner>
        <BottonBox>
          <Link to='/bizsupport/list1'>
            <Button title='소상공인 정책자금' color='WHITE' bgColor='ORANGE' height={width > 768 ? '150px' : '60px'} />
          </Link>
          {/* <Link to='/bizsupport/list2'>
            <Button title='소상공인 창업지원' color='WHITE' bgColor='ORANGE' height={width > 768 ? '150px' : '60px'} />
          </Link>
          <Link to='/bizsupport/list3'>
            <Button title='소상공인 성장지원' color='WHITE' bgColor='ORANGE' height={width > 768 ? '150px' : '60px'} />
          </Link>
          <Link to='/bizsupport/list4'>
            <Button title='소상공인 재기지원' color='WHITE' bgColor='ORANGE' height={width > 768 ? '150px' : '60px'} />
          </Link>
          <Link to='/bizsupport/list5'>
            <Button title='소상공인 특화지원' color='WHITE' bgColor='ORANGE' height={width > 768 ? '150px' : '60px'} />
          </Link>
          <Link to='/bizsupport/list6'>
            <Button title='전통시장 활성화지원' color='WHITE' bgColor='ORANGE' height={width > 768 ? '150px' : '60px'} />
          </Link> */}
        </BottonBox>
      </DetailContent>
    </Layout>
  )
}

export default BizSupport