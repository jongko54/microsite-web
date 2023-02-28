import React from 'react'
import styled from 'styled-components';
import { CommunityData } from '../../api/community';
import useWindowSize from '../../hooks/useWindowSize';
import theme from '../../style/Theme';

const FaqListWrap = styled.div`
  border-top: 2px solid #2F2F2F;
  background-color: #FFFFFF;
  margin-top: 3.5%;
  display: flex;
  flex-direction: column;
  ${(props) => props.theme.window.mobile} {
    margin-top: 13.9%;
  }
`;

const Menu = styled.ul`
  display: flex;
  align-self: flex-end;
  width: 41.66666666666667%;
  ${(props) => props.theme.window.mobile} {
    padding-right: 3.7%;
  }
`;
const Item = styled.li`
  flex: 1;
  text-align: center;
  color: #BABABA;
  padding: 4.2% 0;
  ${(props) => props.theme.window.mobile} {
    text-align: end;
    padding: 15.4% 0;
    font-size: 0.8666666666666667rem;
  }
`;

const ListWrap = styled.ul`
  display: flex;
  flex-direction: column;
  
`;

const List = styled.li`
  display: flex;
  width: 100%;
  padding: 22px 10px;
  line-height: 39px;
  border-top: 2px solid #F5F5F5;
  
  :last-child {
    border-bottom: 2px solid #F5F5F5;
  }
  > span {
    display: inline-block;
    color: #FFFFFF;
    width: 79px;
    height: 39px;
    background-color: ${props => theme.color[props.color]};
    border-radius: 19px;
    text-align: center;
    line-height: 39px;
    font-size: 0.75rem;
  }
  > p {
    margin-left: 63px;
    font-size: 1rem;
  }

  ${(props) => props.theme.window.mobile} {
    padding: 10px 15px;

    > span {
      width: 54px;
      height: 30px;
      line-height: 30px;
      border-radius: 6px;
      font-size: 0.8666666666666667rem;
      align-self: center;
    }
    > p {
      margin-left: 13px;
      font-size: 0.8666666666666667rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

const ButtonWrap = styled.div`
  width: 20%;
  margin: 0 auto;
  padding-top: 5.5%;
  > button {
    width: 100%;
    height: 70px;
    border-radius: 56px;
    font-size: 1rem;
    background-color: #F9F9F9;
  }

  ${(props) => props.theme.window.mobile} {
    width: 53.33333333333333%;
    padding-top: 5%;
    > button {
      height: 40px;
    }
  }
`;

 // let searchTypes = searchType[0].type;
  // const setSearchType = (value) => {
  //   searchTypes = value;
  //   console.log(searchType)
  // }
   // const [info, setInfo] = useState([]);
  // const [selected, setSelected] = useState('');
  // const [modalOn, setModalOn] = useState(false);

  // console.log(selected, modalOn)
  // const nextId = useRef(11);
  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //   .then(res => setInfo(res.data))
  //   .catch(err => console.log(err))
  // }, []);

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

  // const handleRemove = (id) => {
  //   setInfo(info => info.filter(item => item.id !== id));
  // }

  // const hadleEdit = (item) => {
  //   setModalOn(true);
  //   const selectedData = {
  //     id: item.id,
  //     name: item.name,
  //     email: item.email,
  //     phone: item.phone,
  //     website: item.website
  //   };
  //   console.log(selectedData);
  //   setSelected(selectedData);
  // }

  // const hadleCancel = () => {
  //   setModalOn(false);
  // }
  // const handleEditSubmit = (item) => {
  //   console.log(item);
  //   handleSave(item);
  //   setModalOn(false)
  // }

 

  const searchType = [
    {
      type: 'ALL', 
      print: '전체',
  
    },
    {
      type: 'WIND_STORM',
      print: '풍수'
      
    },
    {
      type: 'EVENT', 
      print: '이벤트',
    },
    {
      type: 'BIZ_SUPPORT',
      print: '지원정책',
    },
    {
      type: 'LOAN',
      print: '대출',
    },
    {
      type: 'PROMOTION',
      print: '홍보',
    }
  ]

export default function Faq() {
  const { width } = useWindowSize();
  // const [selected, setSelected] = useState('ALL');
  // const changeSearchTypeHandler = (e) => {
  //   setSelected(e.target.value);
  //   console.log(selected)
  // }
  return (
    <FaqListWrap>
      <Menu>
        {width > 768 ? searchType.map((dt) => (
          <Item 
          key={dt.type}
          // value={searchType.type}
        >
          {dt.print}
        </Item>
        )) : searchType.filter((dt) => dt.print === '전체').map((dt) => (
         <Item key={dt.type}>
            {dt.print}
         </Item> 
        ))}
      </Menu>
      <ListWrap>
        {CommunityData.map((dt) => (
          <List key={dt.id} color={dt.type === '풍수' ? 'PRIMARY' : '이벤트' ? 'POINT' : '대출' ? 'SECONDARY' : null}>
            <span>{dt.type}</span>
            <p>{dt.title}</p>
          </List>
        ))}
      </ListWrap>
    <ButtonWrap>
      <button>더 보기</button>
    </ButtonWrap>
      {/* <Tr 
            info={info} 
            handleRemove={handleRemove} 
            handleEdit={hadleEdit}
          />
       */}
      </FaqListWrap>
    )
  }
  

