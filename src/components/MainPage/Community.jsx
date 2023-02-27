import React from 'react'
import Faq from '../Post/Faq'
import Content from '../Content'
import TitleSet from '../TitleSet'

function Community() {
  return (
    <Content bottom='10%'>
      <TitleSet 
        small_title='서로 공유해요!!'
        big_title2='커뮤니티'
      />
      <Faq />
    </Content>
  )
}

export default Community