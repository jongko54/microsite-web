import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import DetailContent from '../components/Content/DetailContent';
import { Title } from '../components/Font';
import Layout from '../layout/index';
import banner from '../assets/img/event/bizsupport_banner.png';

const Banner = styled.div`
  display: flex;
  justify-content: space-between;

  > img {
    width: 500px;
    margin-bottom: 131px;
    transform: translate(-20px, -40px);
  }
`;

const BottonBox = styled.div`
  height: 720px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 76px;

`;

const TextBox = styled.div`
  padding-top: 84px;
  > h1 {
    line-height: 1.25;
    white-space: nowrap;
    margin-bottom: 85px;
  }
`;

function BizSupport() {
  return (
    <Layout color='BG_WHITE2'>
      <DetailContent>
        <Banner>
          <TextBox>
            <Title color='ORANGE' size='4rem' bold='800'>
              2023년<br />소상공인<br />지원정책
            </Title>
            <Title color='BLACK3' size='1.4rem' bold='300'>
              정책자금, 전통시장 활성화<br />
              창업지원, 성장지원, 재기지원
            </Title>
          </TextBox>
          <img src={banner} alt='icon'/>
        </Banner>
        <BottonBox>
          <Link to='/bizsupport/list1'>
            <Button title='소상공인 정책자금' color='WHITE' bgColor='ORANGE' height='150px' />
          </Link>
          <Link to='/bizsupport/list2'>
            <Button title='소상공인 창업지원' color='WHITE' bgColor='ORANGE' height='150px'/>
          </Link>
          <Link to='/bizsupport/list3'>
            <Button title='소상공인 성장지원' color='WHITE' bgColor='ORANGE' height='150px'/>
          </Link>
          <Link to='/bizsupport/list4'>
            <Button title='-' color='WHITE' bgColor='ORANGE' height='150px'/>
          </Link>
        </BottonBox>
      </DetailContent>
    </Layout>
  )
}

export default BizSupport