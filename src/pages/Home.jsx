import React from 'react'
import CardList from '../components/MainPage/CardList';
import Community from '../components/MainPage/Community';
import FinanceGoods from '../components/MainPage/FinanceGoods';
import Infomation from '../components/MainPage/Infomation';
import MainSlider from '../components/MainPage/MainSlider';
import Plaza from '../components/MainPage/Plaza';

import Layout from '../layout/index';
function Home() {
  return (
    <Layout>
      <MainSlider />
      <Plaza scrollY={'500'} />
      <Infomation 
        scrollY1={'1700'}
        scrollY2={'1400'}
      />
      <Community />
      <CardList scrollY={'2200'}/>
      <FinanceGoods />
    </Layout>
    
  )
}

export default Home