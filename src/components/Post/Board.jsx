import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import styled, { css } from 'styled-components';
import Layout from '../../layout';
import TitleSet from '../TitleSet';
import Content from '../Content';
import bg from '../../assets/img/left_bg.png';
import useWindowSize from '../../hooks/useWindowSize';
import moreIcon from '../../assets/img/moreIcon.svg';
import foldIcon from '../../assets/img/foldIcon.png';
import View from './View';
import { Text } from '../Font';

const BoardWrap = styled.ul`
  display: grid;
  grid-template-columns: 478px 507px;
  grid-template-rows: 450px 350px 350px;
  margin-left: 270px;
  column-gap: 108px;
  row-gap: 80px;
  padding: 142px 0;

  ${(props) => props.theme.window.mobile} {
    grid-template-columns: repeat(1, 93.75%);
    grid-template-rows: ${props => props.isOpen ? `repeat(5, 160px)` : `repeat(3, 160px)`};
    justify-content: center;
    margin-left: 0;
    row-gap: 30px;
    column-gap: 0;
    padding: 27px 0;
  }
`;

const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #FFFFFF;
  z-index: 2;
  box-shadow: 8px 11px 50px 0 rgba(69, 117, 245, 0.15);
  border-radius: 20px;
  padding: 37px 35px;
  :hover {
    box-shadow: 8px 11px 50px 0 rgba(69, 117, 245, 0.3);
  }
  :first-child {
    width: 545px;
    padding: 54px 35px;
  }
  :nth-child(2) {
    width: 450px;
    justify-self: end;
    padding: 54px 29px;
  }
  :nth-child(4) {
    padding: 52px 47px 64px;
    grid-row: span 2;
  }

  ${(props) => props.theme.window.mobile} {
    width: 93.75%;
    box-shadow: 0 4px 15px 0 rgba(69, 117, 245, 0.15);
    padding: 31px 16px;
    justify-self: center;
    :first-child {
      width: 93.75%;
      padding: 31px 16px;
    }
    :nth-child(2) {
      width: 93.75%;
      padding: 31px 16px;
      justify-self: center;
    }
    :nth-child(4) {
      padding: 31px 16px;
      grid-row: span 1;
    }
    :nth-child(5) {
      padding: 31px 16px;
      grid-row: span 1;
    }
  }
`;


const Background = styled.img`
  position: absolute;
  width: 70%;
  left: -29%;
  top: 15%;

  ${(props) => props.theme.window.mobile} {
    width: 100%;
    left: -50%;
    top: 25%;
    transform: scale(1.8);
  }
`;

const TextArea = styled.div`
  > h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }
  ${(props) => props.theme.window.mobile} {
    > h2 {
      font-size: 1rem;
    }
  }
`;

const ImageArea = styled.div`
  ${(props) => props.theme.window.mobile} {
    display: none;
  }
`;

const MoreButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 62.5%;
  height: 40px;
  border-radius: 56px;
  background-color: #F9F9F9;
  margin: 0 auto;

  > p {
    margin-left: 14px;
  }
`;

const Icon = styled.span`
  width: 10px;
  height: 10px;
  display: inline-block;
  background-image: ${props => props.isOpen ? `url(${foldIcon})` : `url(${moreIcon})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const CardLink = styled(Link)`
  display: block;
  height: 100%;
`;

function Board() { 
  const {width} = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const limit = width > 768 ? '5' : isOpen ? '5' : '3'

  useEffect(() => {
    const LIST_URL = `http://localhost:4000/info_place?_limit=${limit}`
    const getData = async () => {
      const { data } = await axios.get(LIST_URL);   
      setPosts(data.slice(0).reverse());
    }
    getData();
  }, [limit]);

  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');
  const location = useLocation();
  const [data, setData] = useState({});
  const CONTENT_URL = `http://localhost:4000/info_place?id=${id}`;
  useEffect(() => {
    const getData = async () => {
        const {data} = await axios.get(CONTENT_URL);
        setData(data);
    }
    getData();
  }, [CONTENT_URL]);
  
  return (
    <Layout>
      <Content 
        top={width > 768 ? '6.56%' : '16.5%'}
        bottom={width > 768 ? '10%' : '16.5%'}
      >
        <TitleSet
          small_title='정보 알림이'
          big_title1='소상공인&nbsp;'
          big_title2='정보마당'
          row={width > 768 ? true : false}
        />
       
        {location.search === `?id=${id}` && (<View data={data[0]} />) }
        {location.search === '' && (
          <>
            <Background src={bg} alt='배경화면'/>
            <BoardWrap isOpen={isOpen}>
            {posts.map((dt) => (
                <Card key={dt.id} className={dt.class}>
                  <CardLink to={`?id=${dt.id}`}> 
                    <TextArea>
                      <h2>{dt.title}</h2>
                      <p>{dt.content}</p>
                    </TextArea>
                    {dt.id === 2 && (
                      <ImageArea>
                        <img src={dt.img} alt='이미지'/>
                      </ImageArea>
                    )}
                  </CardLink>
                </Card>
            ))}
        </BoardWrap>
        <>
          {width > 768 ? null : (
          <MoreButton onClick={() => {setIsOpen(!isOpen)}}>
            <Icon isOpen={isOpen} />
            <Text>{isOpen ? '접기' : '더보기'}</Text>
            {/* {isOpen ? (<p onClick={setIsOpen(false)}>접기</p>) : (<p onClick={setIsOpen(true)}>더 보기</p>)} */}
          </MoreButton>
          )}
        </>
          </>
        )}
        
        
      </Content> 
    </Layout>
  )
}

export default Board;


