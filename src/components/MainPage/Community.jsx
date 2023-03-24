import React, { useState, useCallback, useEffect } from 'react'
import Table from '../Post/Table'
import Content from '../Content'
import TitleSet from '../TitleSet'
import { useLocation, useSearchParams } from 'react-router-dom';
import View from '../Post/View';
import axios from 'axios';
import useWindowSize from '../../hooks/useWindowSize';


function Community() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category');
  const id = searchParams.get('id');
  const location = useLocation();
  const [data, setData] = useState({});

  const CONTENT_URL = `http://localhost:4000/community?id=${id}`
  useEffect(() => {
    const getData = async () => {
        const {data} = await axios.get(CONTENT_URL);
        setData(data);
    }
    getData();
  }, [CONTENT_URL]);

  const { width } = useWindowSize();
  return (
    <Content bottom={width > 768 ? '3.4%' : '15.4%'}>
      <TitleSet 
        small_title='서로 공유해요!!'
        big_title2='커뮤니티'
      />
      {location.search === `?id=${id}` ? (<View data={data[0]} />) : (
        <Table category={category}  />
      )}
      

    </Content>
  )
}

export default Community