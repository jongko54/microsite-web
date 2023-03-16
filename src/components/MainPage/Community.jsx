import React, { useState, useCallback } from 'react'
import Table from '../Post/Table'
import Content from '../Content'
import TitleSet from '../TitleSet'
import { useParams } from 'react-router-dom';

function Community() {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback(category => setCategory(category), []);
  const params = useParams();
  const category = params.category || 'all';
  
  return (
    <Content bottom='10%'>
      <TitleSet 
        small_title='서로 공유해요!!'
        big_title2='커뮤니티'
      />
      <Table category={category}  />

    </Content>
  )
}

export default Community