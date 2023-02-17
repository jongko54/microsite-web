import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Board() {
  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState('');
  const [modalOn, setModalOn] = useState(false);

  console.log(selected, modalOn)
  // const nextId = useRef(11);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => setInfo(res.data))
    .catch(err => console.log(err))
  }, []);

  // const handleSave = (data) => {
  //   if (data.id) {
  //     setInfo(
  //       info.map(row => data.id === row.id ? {
  //         id: data.id,
  //         name: data.name,
  //         email: data.email,
  //         phone: data.phone,
  //         website: data.website
  //       } : row))
  //     } else {
  //       setInfo(info => info.concat({
  //         id: nextId.current,
  //         name: data.name,
  //         email: data.email,
  //         phone: data.phone,
  //         website: data.website
  //       }))
  //     nextId.current += 1;
  //   }
  // }

  const handleRemove = (id) => {
    setInfo(info => info.filter(item => item.id !== id));
  }

  const hadleEdit = (item) => {
    setModalOn(true);
    const selectedData = {
      id: item.id,
      name: item.name,
      email: item.email,
      phone: item.phone,
      website: item.website
    };
    console.log(selectedData);
    setSelected(selectedData);
  }

  // const hadleCancel = () => {
  //   setModalOn(false);
  // }
  // const handleEditSubmit = (item) => {
  //   console.log(item);
  //   handleSave(item);
  //   setModalOn(false)
  // }
  

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No</th>
            <th>Website</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <Tr 
          info={info} 
          handleRemove={handleRemove} 
          handleEdit={hadleEdit}
        />
      </table>
      
    </div>
  )
}

export default Board


export const Tr = ({info, handleRemove, handleEdit}) => {

  return (
    <tbody>
      {
        info.map(item => {
          return (
            <Td 
              key={item.id} 
              item={item} 
              handleRemove={handleRemove} 
              hadleEdit={handleEdit} 
            />
          )
        })
      }
    </tbody>
  )
}

export const Td = ({item, handleRemove, handleEdit}) => {

  const onRemove = () => {
    handleRemove(item.id);
  }
  const onEdit = () => {
    handleEdit(item);
  }

  return (
    <>
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.website}</td>
        <button onClick={onEdit}>수정</button>
        <button onClick={onRemove}>삭제</button>
      </tr>
    </>
  )
}