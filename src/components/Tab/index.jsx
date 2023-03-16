import React, { useState } from 'react'
import styled from 'styled-components';

const Wrap = styled.div``;

const TabNav = styled.ul`
  display: flex;
  justify-content: space-between;

  > li {
    

    > h2 {
      
    }
    
  }
`;

const TitleBox = styled.div`
  border: 2px solid #176FFF; 
  &.active {

  }
`;

const TabContent = styled.div`
  &.block {
    display: block;
  }
  &.hidden {
    display: none;
  }
`;

function Tab({data}) {
  const [openTab, setOpenTab] = useState(1);
  return (
    <Wrap>
      <TabNav>
        {data.map((dt) => {
          return (
            <li 
              key={dt.id} 
              onClick={() => {setOpenTab(dt.id)}}
            >
              <TitleBox className={openTab === dt.id ? 'active' : null}>
                {dt.title}
              </TitleBox>
            </li>
          )
        })}
      </TabNav>
      {data.map((dt) => {
        return (
          <TabContent className={openTab === dt.id ? 'block' : 'hidden'}>
            {dt.content}
          </TabContent>
        )
      })}
      
    </Wrap>
  )
}

export default Tab