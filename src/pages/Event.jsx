import React from 'react'
import DetailContent from '../components/Content/DetailContent';
import EventBanner from '../components/Event/EventBanner';
import EventGuide from '../components/Event/EventGuide';
// import useWindowSize from '../hooks/useWindowSize';
import Layout from '../layout/index';

function Event() {
  // const { width } = useWindowSize();
  return (
    <Layout color='BG_GRAY'>
      <DetailContent>
        <EventBanner />
        <EventGuide />
      </DetailContent>
    </Layout>
  )
}

export default Event