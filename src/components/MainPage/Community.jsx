import React from 'react'
import Board from '../Board'
import Section from '../Section'
import TitleSet from '../TitleSet'

function Community() {
  return (
    <Section bottom='10%'>
      <TitleSet 
        small_title='서로 공유해요!!'
        big_title2='커뮤니티'
      />
      <Board />
    </Section>
  )
}

export default Community