import React, { useState, useCallback, useEffect } from 'react'
import Table from '../Post/Table'
import Content from '../Content'
import TitleSet from '../TitleSet'
import { useLocation, useSearchParams } from 'react-router-dom';
import View from '../Post/View';
import axios from 'axios';
import useWindowSize from '../../hooks/useWindowSize';
import useAsync from '../../hooks/useAsync';

function Community() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category');
  const id = searchParams.get('id');
  const location = useLocation();
  const { width } = useWindowSize();

  const [state, refetch] = useAsync(getData, [id]);
  const { loading, data, error } = state;
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return null;
  async function getData() {
    const response = await axios.get(
      `http://localhost:8080/api/public/communityList?id=${id}`
    );
    console.log(response.data.data)
    return response.data.data
  }


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