import React from 'react'
import styled from 'styled-components'

const AccordionListWrap = styled.ul`
  padding: 2.5% 1.2%;
  
  > li {
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
    &.active .answer {
      height: auto;
      padding: 35px 0 31px;
      transition: all 0.3s;
    }
    &.active .title::after {
      content: '-'; 
    }
    >.title {
      padding: 0 2.7%;
      width: 100%;
      height: 100px;
      border-radius: 8px;
      background-color: #FF9243;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        color: #FFFFFF;
      }
      ::after {
        content: '+';
        display: block;
        font-size: 1rem;
        color: #FFFFFF;
      }
    }
    br {
      display: none;
    }
    .answer {
      height: 0;
      overflow: hidden;
      background: #FAFAFA;
      border-radius: 8px;
    }
  }
  ${(props) => props.theme.window.mobile} {
    padding: 16.3% 0;
  
    > li {
      margin-bottom: 50px;
      :last-child {
        margin-bottom: 0;
      }
      &.active .answer {
        padding: 23px 14px;
      }
      >.title {
        padding: 0 6.5%;
        height: 50px;
      }
      br {
        display: block;
      }
      b {
        display: none;
      }
      .answer {
        height: 0;
        overflow: hidden;
        background: #FAFAFA;
        border-radius: 8px;
      }
    }
  }
`;


function AccordionList({list}) {
  const activeMethod = (event) => {
    const current = event.currentTarget;
    const chkActive = current.classList.value.indexOf('active');

    closeMothodAll();

    if (chkActive === -1) {
      current.classList.add('active');
    }
  }
  const closeMothodAll = () => {
    let bx = document.getElementsByClassName('accordion');
  
    for (let i = 0; i < bx[0].children.length; i++) {
      bx[0].children[i].classList.remove('active');
    }
  }
  return (
    <AccordionListWrap className='accordion'>
      {list.map((item) => (
        <li key={item.id} onClick={activeMethod}>
          <div className='title'>
              <div>
                <p>{item.title}</p>
              </div>
            </div>
          <div className='answer'>
            <ul
              className='list-style-disc'
              dangerouslySetInnerHTML={{__html: item.textArea }} 
            />
          </div>
        </li>
      ))}
    </AccordionListWrap>
  )
}

export default AccordionList