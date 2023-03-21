import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ViewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10% 0;

  ${(props) => props.theme.window.tab} {
    padding: 5% 0;
  }
`;
const ViewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  background-color: #F7F7F7;
  white-space: pre;
  border-top: 1px solid #C4C4C4;
  padding-left: 39px;
  > h2 {
    font-size: 1.5rem;
    width: 800px;
    overflow-x: hidden;
    text-overflow: ellipsis;
  }
  > p {
    font-size: 0.9rem;
  }
  
  ${(props) => props.theme.window.tab} {
   
  }
`;

const ViewBody = styled.div`
  padding: 5% 0;
  font-size: 0.9rem;
  color: #808080;
  ${(props) => props.theme.window.tab} {

  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color:#4575F5;
  color: #FFFFFF;
`;


function View({data}) {
  let navigate = useNavigate();

  function handleClick(link) {
    navigate(link);
  }
  return (
    <ViewContainer>
      {data && (
        <>
          <ViewHeader key={data.id}>
            <h2>{data.title}</h2>
            <p>{data.date}</p>
          </ViewHeader>
          <ViewBody>
            {data.content}
          </ViewBody>
           
          <ButtonWrap>
            <Button onClick={() => handleClick('/')}>목록</Button>
          </ButtonWrap>
        </>
      )}
    </ViewContainer>
  )
}

export default View