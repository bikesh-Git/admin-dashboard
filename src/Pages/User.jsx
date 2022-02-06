import styled from "styled-components";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Link } from "react-router-dom";


const Container = styled.div`
flex: 4;
/* padding:20px; */
margin: 20px;
`
const Wrapper = styled.div`
    display: flex;
`
const Top =styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
   
`
const Left = styled.div`
    flex:1;
    padding: 20px;
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
`
const Right = styled.div `
    flex: 2;
    padding: 20px;
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
`

const EditTitle = styled.h1`
    
`

const UserInfo = styled.div`
display:flex;
    flex-direction: column;
`

const UserImage = styled.img`
width: 40px;
height: 40px;
border-radius:50%;
margin-right: 10px;
`


const UserShowTopTitle = styled.div`
display: flex;
flex-direction: column;
`


const UserShowUsername = styled.div`
font-weight:600;
`

const UserShowUserTitle = styled.div`
font-weight:300;
font-size:12px;
`

const UserInfoTop = styled.div`
   display: flex;
`
const UserInfoBottom = styled.div`
    
`

const UserDetails = styled.div`
margin-top:20px;

`
const UserAcctTitle = styled.div`
font-weight: 300;
`
const UserAcctDetails = styled.div`
padding: 10px;

`
const UserName = styled.div`
font-weight: 600;

`
const UserDOB = styled.div`
font-weight: 600;
`
const UserContactTitle = styled.div`
font-weight: 300;

`
const UserContactDetails =styled.div`
padding: 10px;
`
const UserMonileNo = styled.div`
font-weight: 600;
`
const UserEmail = styled.div`
font-weight: 600;

`
const UserLocation = styled.div`
font-weight: 600;

`

const RightTop = styled.div`
    
`
const EditRightTitle = styled.h2`
    
`
const RightBottom = styled.div`
    display: flex;
`

const EditUser = styled.div`
display:flex;
flex-direction: column;
margin:10px;
`
const Lable = styled.label`
font-weight: 300;
`
const InputBox = styled.input`
border: none;
border-bottom: 1px solid gray;
max-width:200px;
/* margin: 3px; */
padding: 5px;
`

const CreateButton = styled.button``

const UpdateUserLeft= styled.div`
    flex: 1;
`

const UpdateUserRight = styled.div`
 flex: 1;   
 display: flex;
 flex-direction: column;
 justify-content: space-between;
`
const UpdateUploadImage = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    /* padding: 20px; */
`
const UploadImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius:5px;
    margin:10px;
    
`
const UploadIcon =styled.label``

const UpdateBtn =styled.button`
width: 100px;
background-color:blue;
color:white;
border-radius:5px;
padding:5px 10px;
`

const SubmitUpdateBtn = styled.div`
display: flex;
justify-content: end;
margin:10px;
`

const User = () => {
  return <Container>
        <Top>
              <EditTitle>Edit User</EditTitle>
            <Link to="/newUser">   <CreateButton>Create</CreateButton>  </Link> 
          </Top>
      <Wrapper>
        
      <Left>
      <UserInfo>
          <UserInfoTop>
                <UserImage src = "https://i.picsum.photos/id/553/200/300.jpg?hmac=-A3VLW_dBmwUaXOe7bHhCt-lnmROrPFyTLslwNHVH1A"/>
                <UserShowTopTitle>
                <UserShowUsername>bikesh</UserShowUsername>
                <UserShowUserTitle>software developer</UserShowUserTitle>
                </UserShowTopTitle>
                </UserInfoTop>

    <UserInfoBottom>
               <UserDetails>
                   <UserAcctTitle>User Account Details</UserAcctTitle>
                
                <UserAcctDetails> 
                    <UserName>bikesh verma</UserName>
                    <UserDOB>13 june 1997</UserDOB>
                </UserAcctDetails>

                <UserContactTitle>User Account Details</UserContactTitle>
                <UserContactDetails>
                    <UserMonileNo>4242 432 342</UserMonileNo>
                    <UserEmail>Bikesh.vernma@gmail,com</UserEmail>
                    <UserLocation>india | Pune</UserLocation>
                </UserContactDetails>

                </UserDetails>
                </UserInfoBottom>
            </UserInfo>
          </Left>

          <Right>
            <RightTop>
                <EditRightTitle>Edit</EditRightTitle>
            </RightTop>

            <RightBottom>
                
                <UpdateUserLeft>
                <EditUser>
                    <Lable>Username</Lable>
                    <InputBox></InputBox>
                </EditUser>
                <EditUser>
                    <Lable>FullName</Lable>
                    <InputBox></InputBox>
                </EditUser>
                <EditUser>
                    <Lable>E-email</Lable>
                    <InputBox></InputBox>
                </EditUser>
                <EditUser>
                    <Lable>Phone</Lable>
                    <InputBox></InputBox>
                </EditUser>
                <EditUser>
                    <Lable>Address</Lable>
                    <InputBox placeholder="fsdfsdfsdf"></InputBox>
                </EditUser>
                </UpdateUserLeft>

                <UpdateUserRight>
                    <UpdateUploadImage>
                    <UploadImage src="https://i.picsum.photos/id/553/200/300.jpg?hmac=-A3VLW_dBmwUaXOe7bHhCt-lnmROrPFyTLslwNHVH1A"></UploadImage>
                    <UploadIcon htmlfor="uploadicon" ><CloudUploadIcon/></UploadIcon>
                    <InputBox type="file" id="uploadicon" style={{display: 'none'}}></InputBox>
                    </UpdateUploadImage>

                    <SubmitUpdateBtn>
                         <UpdateBtn>Update</UpdateBtn>
                    </SubmitUpdateBtn>
                   
                </UpdateUserRight>


            </RightBottom>
          </Right>
      </Wrapper>
  </Container>;
};

export default User;
