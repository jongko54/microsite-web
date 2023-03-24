import React, { useState, useEffect, useCallback } from 'react'
import styled, { css } from 'styled-components';
import { Link,  } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';
import theme from '../../style/Theme';
import moreIcon from '../../assets/img/moreIcon.svg';
import axios from 'axios';
import Pagination from '../Pagination';
import usePromise from '../../hooks/usePromise';

const categories = [
  {
    name: 'all', 
    print: '전체',
    color: ''
  },
  {
    name: 'windstorm',
    print: '풍수',
    color: 'PRIMARY'
  },
  {
    name: 'event',
    print: '이벤트',
    color: 'POINT'
  },
  {
    name: 'bizsupport',
    print: '지원정책',
    color: 'SUCCESS'
  },
  {
    name: 'loan',
    print: '대출',
    color: 'SECONDARY'
  },
  {
    name: 'promotion',
    print: '홍보',
    color: 'POINT_SUB'
  }
]

const TableWrap = styled.div`
  border-top: 2px solid #2F2F2F;
  background-color: #FFFFFF;
  margin-top: 3.5%;
  display: flex;
  flex-direction: column;
  ${(props) => props.theme.window.mobile} {
    margin-top: 13.9%;
  }
`;

const Categories = styled.ul`
  display: flex;
  align-self: flex-end;
  > li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 80px;
  }

  ${(props) => props.theme.window.mobile} {
    > li {
      width: 62px;
      height: 60px;
    }
  }
`;

const Category = styled(Link)`
  color: #BABABA;
  position: relative;

  ${props => props.active && css`
    color:#4575F5;
    
    ::before {
      content: '';
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #4575F5;
      position: absolute;
      left: -15px;
      top: calc(50% - 3.5px);
    }
  `}

  ${(props) => props.theme.window.mobile} {
    text-align: end;
    font-size: 0.9333333333333333rem;
    text-align: center;
    
    ::before {
      width: 6px;
      height: 6px;
      left: -12px;
      top: calc(50% - 2.5px);
    }
  }
`;

const ListWrap = styled.ul`
  display: flex;
  flex-direction: column;

`;

const ItemBlock = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 22px 10px;
  line-height: 39px;
  border-top: 2px solid #F5F5F5;
  :last-child {
    border-bottom: 2px solid #F5F5F5;
  }
  a {
    width: 87.63888888888889%;
  }
  ${(props) => props.theme.window.mobile} {
    padding: 10px 15px;
    a {
      display: block;
      width: 75%;
      font-size: 0.8666666666666667rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

const CategoryLabel = styled.span`
  display: block;
  color: #FFFFFF;
  height: 39px;
  width: 100px;
  border-radius: 19px;
  text-align: center;
  line-height: 39px;
  font-size: 0.75rem;
  background-color: ${props => theme.color[props.color]};

  ${(props) => props.theme.window.mobile} {
    width: 54px;
    height: 30px;
    line-height: 30px;
    border-radius: 6px;
    font-size: 0.8666666666666667rem;
    align-self: center;
  }
`;

const ButtonWrap = styled.div`
  width: 20%;
  margin: 0 auto;
  padding-top: 5.5%;
  > button {
    width: 100%;
    height: 70px;
    border-radius: 56px;
    font-size: 1rem;
    background-color: #F9F9F9;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${(props) => props.theme.window.mobile} {
    width: 61.4%;
    padding-top: 20%;
    > button {
      height: 40px;
    }
  }
`;

const MoreIcon = styled.span`
  width: 15px;
  height: 15px;
  display: inline-block;
  background-image: url(${moreIcon});
  background-size: contain;
  margin-right: 20px;

  ${(props) => props.theme.window.mobile} {
    margin-right: 14px;
    width: 12px;
    height: 12px
  }
`;

const WriteButton = styled.button`
  width: 100px;
  height: 30px;
  display: flex;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  background-color: #F9F9F9;
  color: #393939;
  font-family: 'Malgun Gothic';
  font-weight: 700;
  margin: 6% 0;
`;

export default function Table() {
  const { width } = useWindowSize();
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState('all');
  const [limit, setLimit] = useState(4);
  // const limit = 4;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  
 
  
  const onSelect = (category) => {
    setPage(1);
    setCategory(category);
    
  }
  
  
  const categoryValue = category === 'all' ? '' : `?category=${category}`
  const LIST_URL = `http://localhost:4000/community${categoryValue}`
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(LIST_URL);
      setPosts(data.slice(0).reverse());
    }
    getData();
    console.log(category)
  }, [category, categoryValue]);


  return (
    <TableWrap>
      <Categories>
        {width > 768 ? categories.map((dt) => (
          <li>
            <Category
              key={dt.id}
              to={dt.name === 'all' ? '' : `?category=${dt.name}`}
              active={category === dt.name}
              onClick={() => onSelect(dt.name)}
            >
              {dt.print}
            </Category>
          </li>
        )) : categories.filter((dt) => dt.name === 'all').map((dt) => (
         <li>
          <Category
            key={dt.id}
            active={category === dt.name}
          >
            {dt.print}
          </Category> 
         </li>
        ))}
      </Categories>
  
      <ListWrap className={limit === 10 ? 'open' : null}>
        {posts.slice(offset, offset + limit).map((dt) => (
          <ItemBlock key={dt.id}>
            {categories.filter((ct) => (ct.name === dt.category)).map((fd) => (
                <CategoryLabel color={fd.color}>{fd.print}</CategoryLabel>
              ))}
              {category === 'all' ? (<Link to={`?id=${dt.id}`}>{dt.title}</Link>) : (
                <Link
                  to={`?id=${dt.id}`}>
                    {dt.title}
                </Link>
              )}
          </ItemBlock>
        ))}
      </ListWrap>
      {limit === 4 && (
        <ButtonWrap>
          <button
            onClick={() => setLimit(Number(8))}
          >
            <MoreIcon />
            <p>더 보기</p>
          </button>
        </ButtonWrap>
      )}
      
      {limit === 8 && (
        <>
          <WriteButton>글쓰기</WriteButton>
          <Pagination
          total={posts.length}
          limit={limit}
          page={page}
          setPage={setPage}
          />  
        </>
      )}
    </TableWrap>
    
    )
  }

  

