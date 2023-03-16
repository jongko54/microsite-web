import React, { useState } from 'react';
// import axios from 'axios';
import styled from 'styled-components';
import Layout from '../../layout';
import TitleSet from '../TitleSet';
import Content from '../Content';
import bg from '../../assets/img/left_bg.png';
import useWindowSize from '../../hooks/useWindowSize';
import { infoData } from '../../api/post';
import moreIcon from '../../assets/img/moreIcon.svg';

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
    grid-template-rows: repeat(5, 160px);
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
  &.item1 {
    width: 545px;
    padding: 54px 35px;
  }
  &.item2 {
    width: 450px;
    justify-self: end;
    padding: 54px 29px;
  }
  &.item4 {
    padding: 52px 47px 64px;
    grid-row: span 2;
  }

  ${(props) => props.theme.window.mobile} {
    width: 93.75%;
    box-shadow: 0 4px 15px 0 rgba(69, 117, 245, 0.15);
    padding: 31px 16px;
    justify-self: center;
    &.item1 {
      width: 93.75%;
      padding: 31px 16px;
    }
    &.item2 {
      width: 93.75%;
      padding: 31px 16px;
      justify-self: center;
    }
    &.item4 {
      padding: 31px 16px;
      grid-row: span 1;
    }
    &.item5 {
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
    left: -42%;
    top: 18%;
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
  
`;

const MoreIcon = styled.span`
  width: 12px;
  height: 12px;
  display: inline-block;
  background-image: url(${moreIcon});
  background-size: contain;
  margin-right: 20px;
`;



function Board() { 
  const {width} = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

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
        <Background src={bg} alt='배경화면'/>
        <BoardWrap>
          {/* {infoData.map((dt) => (
            <Card key={dt.id} className={dt.class} isOpen={isOpen}>
              <TextArea>
                <h2>{dt.title}</h2>
                <p>{dt.content}</p>
              </TextArea>
              {dt.id === 4 && (
                <ImageArea>
                  <img src={dt.img} alt='이미지'/>
                </ImageArea>)}
            </Card>
          ))} */}
          {width > 768 || isOpen ? (
            infoData.map((dt) => (
              <Card key={dt.id} className={dt.class} isOpen={isOpen}>
              <TextArea>
                <h2>{dt.title}</h2>
                <p>{dt.content}</p>
              </TextArea>
              {dt.id === 4 && (
                <ImageArea>
                  <img src={dt.img} alt='이미지'/>
                </ImageArea>)}
              </Card>
            ))
          ) : width < 768 && !isOpen && infoData.filter((dt) => dt.img).map((dt) => (
            <Card key={dt.id} className={dt.class} isOpen={isOpen}>
              <TextArea>
                <h2>{dt.title}</h2>
                <p>{dt.content}</p>
              </TextArea>
              {dt.id === 4 && (
                <ImageArea>
                  <img src={dt.img} alt='이미지'/>
                </ImageArea>)}
            </Card>
          ))}
        </BoardWrap>
        {width > 768 ? null : (
          <MoreButton onClick={() => setIsOpen(true)}>
            <MoreIcon />
            {isOpen ? (<p onClick={setIsOpen(false)}>접기</p>) : (<p>더 보기</p>)}
          </MoreButton>
        )}
      </Content> 
    </Layout>
  )
}

export default Board;


