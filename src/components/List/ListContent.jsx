import React from 'react'
import styled from 'styled-components'
import { Text } from '../Font';

const Wrap = styled.div`
  min-width: 1380px;
`;

const ContentBox = styled.div`
  position: relative;
  padding: 12% 0 0 0;
`;

const TitleBox = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  background-color: #FF9243;
  color: #FFFFFF;
  z-index: 2;
  padding: 1.12% 2.9%;
  text-align: center;
  display: inline-block;
  transform: translateY(40%);
`;

const TextBox = styled.div`
  background-color: #FAFAFA;
  padding: 2.5% 1.2%;
  
  > ul {
    margin-left: 2%;
    > li {
      font-size: 1rem;
      position: relative;
      margin-bottom: 3%;
      :last-child {
        margin-bottom: 0;
      }
      ::before {
        content: '';
        display: block;
        width: 4px;
        height : 4px;
        border-radius: 50%;
        background-color: #393939;
        position: absolute;
        top: 14px;
        left: -1%;
      }
      > ul {
        display: flex;
        justify-content: space-between;
        padding: 2%;
        > li {
          position: relative;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          margin-right: 80px;
          background-color: #EBEBEB;
          border-radius: 5px;
          ::after {
            content: '→';
            display: block;
            font-size: 1rem;
            width: 1.5rem;
            color: #393939;
            position: absolute;
            top: 15px;
            right: -60px;
          }
          :last-child {
            margin-right: 0;
          }
          :last-child::after {
            content: none;
          }
        }
      }
    }
  }
  ol {
        display: flex;
        justify-content: space-between;
        padding: 2%;
        > li {
          position: relative;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          margin-right: 5%;
          background-color: #EBEBEB;
          border-radius: 5px;
          ::after {
            content: '→';
            display: block;
            font-size: 1rem;
            color: #393939;
            position: absolute;
            top: 15px;
            right: -2rem;
          }
          :last-child {
            margin-right: 0;
          }
          :last-child::after {
            content: none;
          }
        }
      }
  > p {
    font-size: 0.7rem;
    color: #C91717;
    padding-top: 2.5%;
  }
`;

function ListContent({title, children}) {
  return (
    <Wrap>
      <ContentBox>
        <TitleBox>{title}</TitleBox>
        <TextBox>
          {children}
        </TextBox>
      </ContentBox>
    </Wrap>
    
  )
}

export default ListContent