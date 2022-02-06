import {useState} from 'react'
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../redux/apiCalls'

const Container = styled.div`
height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
    
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const LoginInput = styled.input`
width: 300px;
padding: 10px;
border: 1px solid #555;
`

const Login = () => {
    const dispatch = useDispatch()
    const {isFetching ,error} = useSelector(state=>state.user)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = (e)=>{
        e.preventDefault();
       login(dispatch,{username,password})
    }
  return <Container>

      <Form onSubmit={handleSubmit}>
          {error &&  "something went wrong"}
      <LoginInput onChange={(e)=>setUsername(e.target.value)}  placeholder="Enter username"/>
      <LoginInput onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password"/>
      <LoginInput type="submit"></LoginInput>
      </Form>
  </Container>;
};

export default Login;
