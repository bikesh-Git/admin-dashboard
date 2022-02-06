import Styled from "styled-components";
import { DataGrid } from '@mui/x-data-grid';
import {userData} from '../DummyData'
import {useState} from 'react'
import { Link } from "react-router-dom";

const Conatainer = Styled.div`
    flex:4;
    background-color: white;
    height: calc(100vh -50px);
`
const User = Styled.div`
display: flex;
align-items: center;
`
const UserImage =Styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`

const Username = Styled.div`
 
`


const Users = () => {
  const [data, setData] = useState(userData)

  const handleDelete = (id)=>{
    setData(data => data.filter(el => el.id !== id))
    console.log("delete",id)
  }


  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: "user",
      width: 150,
      renderCell:(param)=>{
        // console.log(param)
        return (
          <User>
             <UserImage src={param.row.avatar} alt=""/>
            <Username>{param.row.username}</Username> 
          </User>
        )
      },
    },
    {
      field: 'email',
      headerName: "email",

      width: 150,
      
    },
    {
      field: 'status',
      headerName: "status",


      width: 150,
      
    },
    {
      field: 'transaction',
      headerName: "transaction",
      width: 150,
      
    },
    {
      field: 'action',
      headerName: "action",
      width: 150,
      
      renderCell:(param)=>{
        return (
          <div>
        
          <Link to={"/user/"+param.row.id}> 
            <button>edit</button>
            </Link>
           <button onClick={()=>handleDelete(param.row.id)}>delete</button>
          </div>
        )
      },
    },
  

  ];


  return <Conatainer>
    <DataGrid
      rows={data}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
    />
  </Conatainer>;
};

export default Users;
