import React from 'react';
// import axios from 'axios';
import styled from 'styled-components';
import Layout from '../../layout';
import TitleSet from '../TitleSet';
import Content from '../Content';
import bg from '../../assets/img/left_bg.png';
import useWindowSize from '../../hooks/useWindowSize';
import { infoData } from '../../api/post';


const BoardWrap = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 33.19444444444444%);
  margin-right: 15%;
  grid-template-rows: 450px 350px 350px;
  justify-content: end;
  row-gap: 80px;
  column-gap: 108px;
  padding: 142px 0;

  > li {
    background-color: #FFFFFF;
    z-index: 2;
    box-shadow: 8px 11px 50px 0 rgba(69, 117, 245, 0.15);
    border-radius: 20px;
    :hover {
      box-shadow: 8px 11px 50px 0 rgba(69, 117, 245, 0.3);
    }
    &.item1 {
      width: 110%;
    }
    &.item2 {
      width: 94.3%;
      justify-self: end;
    }
    &.item3 {
      
    }
    &.item4 {
      grid-row: span 2;
    }
    &.item5 {
      
    }
  }
`;

const Background = styled.img`
  position: absolute;
  width: 70%;
  left: -29%;
  top: 15%;
  
`;

function Board() { 
  const {width} = useWindowSize()
  return (
    <Layout>
      <Content 
        top={width > 768 ? '6.56%' : ''}
        bottom={width > 768 ? '10%' : ''}
      >
        <TitleSet
          small_title='정보 알림이'
          big_title1='소상공인&nbsp;'
          big_title2='정보마당'
          row
        />
        <Background src={bg} alt='배경화면'/>
        <BoardWrap>
          {infoData.map((dt) => (
            <li key={dt.id} className={dt.class}>
              <h2>{dt.title}</h2>
              <p>{dt.content}</p>
            </li>
          ))}
        </BoardWrap>
      </Content> 
    </Layout>
  )
}

export default Board


// export const Tr = ({info, handleRemove, handleEdit}) => {

//   return (
//     <tbody>
//       {
//         info.map(item => {
//           return (
//             <Td 
//               key={item.id} 
//               item={item} 
//               handleRemove={handleRemove} 
//               hadleEdit={handleEdit} 
//             />
//           )
//         })
//       }
//     </tbody>
//   )
// }

// export const PostList = ({item, title}) => {
//   return (
//     <Line>
//       <span>{item.type}</span>
//       <p>{item.title}</p>
//     </Line>
//   )
// }
// export const Td = ({item, handleRemove, handleEdit}) => {

//   const onRemove = () => {
//     handleRemove(item.id);
//   }
//   const onEdit = () => {
//     handleEdit(item);
//   }

//   return (
//     <>
//       <tr>
//         <td>{item.id}</td>
//         <td>{item.name}</td>
//         <td>{item.email}</td>
//         <td>{item.phone}</td>
//         <td>{item.website}</td>
//         <button onClick={onEdit}>수정</button>
//         <button onClick={onRemove}>삭제</button>
//       </tr>
//     </>
//   )
// }