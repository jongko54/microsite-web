import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
 
  ${(props) => props.theme.window.mobile} {

  }
`;

const ContentBox = styled.div`
  position: relative;
  padding: 12% 0 0 0;

  ${(props) => props.theme.window.mobile} {
    padding: 9% 0 0 0;
  }
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

  ${(props) => props.theme.window.mobile} {
    padding: 0 2.9%;
    height: 30px;
    line-height: 30px;
  }
`;

const TextBox = styled.div`
  background-color: #FAFAFA;
  padding: 2.5% 1.2%;
  > div {
    display: flex;
    > ul {
      margin-right: 15%;
      > li {
        margin-bottom: 20px;
        ::before {
          left: -6%;
        }
      }
    }
  }

  > ul {
    > li {
      > br {
        display: none;
      }
    }
  }
  > p {
    font-size: 0.7rem;
    color: #C91717;
    padding-top: 2.5%;
  }

  ${(props) => props.theme.window.mobile} {
    padding: 5% 4.3%;
    > div {
      flex-direction: column;
      > ul {
        margin-right: 0;
        margin-bottom: 20px;
        :last-child {
          margin-bottom: 0;
        }
        > li {
          margin-bottom: 3px;
          ::before {
            left: -10px;
          }
        }
      }
    }
    > ul {
      > li {
        > br {
          display: block;
        }
        > b {
          display: none;
        }
        > ul {
          
          
          > li {
            
            height: 30px;
            margin: 0 0 40px 0;
            
            :last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  > p {
      font-size: 0.6666666666666667rem;
      padding: 5% 3% 0 4%;
    }
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