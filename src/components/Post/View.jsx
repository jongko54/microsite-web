import React from 'react'
import styled from 'styled-components';

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
  > h1 {
    white-space: pre-wrap;
  }
  > div {
    display: flex;
    flex-direction: column;

  }
  span {
    display: none;
  }
  .title-img {
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
  }
  ${(props) => props.theme.window.tab} {
    height: 70px;
    width: 100%;
    > h1 {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .title-img > img {
      height: 15px;
    }
  }
`;
const ViewBody = styled.div`
  padding: 10% 0;
  > img {
      max-width: 500px;
  }
  > img.none {
    display: none;
  }

  ${(props) => props.theme.window.tab} {
    font-size: 0.95rem;

    > img {
      max-width: 100%;
    }
  }
`;
const SectionTitle = styled.h2`
  font-weight: 400;
  font-size: 1.8rem;
  padding: 10.4% 0 8.3% 0;
  
  ${(props) => props.theme.window.tab} {
    font-size: 0.8rem;
    padding: 0 0 5% 0;

  }
`;
const DataContents = styled.p`
  color: #808080;
  font-size: 0.9rem;
  padding-bottom: 5%;
  white-space: pre;

  ${(props) => props.theme.window.tab} {
    font-size: 0.5rem;
    white-space: pre-wrap;
  }
`;
function View({data}) {
  

  return (
    <ViewContainer>
      {data && (
          <>
            <SectionTitle>{data.mainTitle}</SectionTitle>
            <ViewHeader key={data.id}>
              <h2>{data.title}</h2>
              <p>{data.date}</p>
            </ViewHeader>
            <ViewBody>
              <DataContents>{data.content}</DataContents>
              <img src={data.img} alt={data.idx} className={data.img === 'none' ? 'none' : null}/>
              <img src={data.img2} alt={data.idx} className={data.img2 === 'none' ? 'none' : null}/>
            </ViewBody>
           
            {/* <ButtonWrap>
              <Button onClick={history.push('/news')}>목록</Button>
              <Button onClick={handleGoBack}>뒤로가기</Button>
            </ButtonWrap> */}
          </>)}
          </ViewContainer>
  )
}

export default View