import React from "react";
import { useParams } from 'react-router-dom';
import List1 from "../components/List/List1";
import List2 from "../components/List/List2";
import List3 from "../components/List/List3";
import List4 from '../components/List/List4';
import List5 from "../components/List/List5";
import List6 from "../components/List/List6";

const List = () => {
  const params = useParams();
  if (params.list === 'list1') {
    return (
      <List1 />
    )
  } else if (params.list === 'list2') {
    return (
      <List2 />
    )
  } else if (params.list === 'list3') {
    return (
      <List3 />
    )
  } else if (params.list === 'list4') {
    return (
      <List4 />
    )
  } else if (params.list === 'list5') {
    return (
      <List5 />
    )
  } else if (params.list === 'list6') {
    return (
      <List6 />
    )
  } else {
    return <p>존재하지 않는 페이지입니다.</p>
  }
};

export default List