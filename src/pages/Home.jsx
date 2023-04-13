import React from 'react';
import Community from '../components/MainPage/Community';
import FinanceGoods from '../components/MainPage/FinanceGoods';
import Infomation from '../components/MainPage/Infomation';
import MainSlider from '../components/MainPage/MainSlider';
import Plaza from '../components/MainPage/Plaza';
import TaxReturn from '../components/MainPage/TaxReturn';
import useWindowSize from '../hooks/useWindowSize';
import Layout from '../layout/index';

function Home() {
  const { width } = useWindowSize();
  return (
    <Layout>
      <MainSlider />
      <Plaza scrollY={width > 768 ? 450 : 550} />
      <Infomation 
        scrollY1={width > 768 ? 1700 : 1600}
        scrollY2={width > 768 ? 1400 : 1450}
      />
      <Community />
      <TaxReturn />
      <FinanceGoods />
    </Layout>
  )
}

export default Home