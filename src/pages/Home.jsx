import React from 'react';

import CardList from '../components/MainPage/CardList';
import Community from '../components/MainPage/Community';
import FinanceGoods from '../components/MainPage/FinanceGoods';
import Infomation from '../components/MainPage/Infomation';
import MainSlider from '../components/MainPage/MainSlider';
import Plaza from '../components/MainPage/Plaza';
import useWindowSize from '../hooks/useWindowSize';
import Layout from '../layout/index';

function Home() {
  const { width } = useWindowSize();
  return (
    <Layout>
      <MainSlider />
      <Plaza scrollY={width > 768 ? 500 : 550} />
      <Infomation 
        scrollY1={width > 768 ? 1700 : 1750}
        scrollY2={width > 768 ? 1400 : 1450}
      />
      <Community />

      <CardList scrollY={width > 768 ? 2200 : 2700} />
      <FinanceGoods />
    </Layout>
  )
}

export default Home