import styled from "styled-components";
import Bikesh from '../images/bikeshPic.jpg'
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import { useState } from "react";
import { useEffect } from "react";
import { adminRequest } from "../requestMethod";


const Conatainer = styled.div`
    flex: 1;
    margin:10px;
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
`

const Wrapper = styled.div`
    display: flex;
    justify-content:space-around;
    margin:10px 0;
`

const WidgetSmTitle = styled.h2`
margin:20px;
    
`
const WidgetSmImage = styled.img`
    width: 40px;height: 40px;border-radius:50%;
`
const WidgetSmUser = styled.div`
    display: flex;
    flex-direction: column;
`
const WidgetSmUserUsername = styled.span`
    font-weight: 600;

`

const WidgetSmUserTitle = styled.span`
        font-weight: 300;

`

const WidgetSmButton = styled.button`
    padding:7px 10px;
    display : flex;
    align-items : center;
   background:transparent ;
   border-radius:10px;
`

const WidgetSm = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUser = async () => {
            try {
                const { data } = await adminRequest.get("/users/?new=true")
                setUsers(data)
            }
            catch (e) {
                alert('Error', e)
            }
        }
        getUser();
    }, [])



    return <Conatainer>
        <WidgetSmTitle>New Join Members</WidgetSmTitle>
        {users.map(newUser => 
            <Wrapper key={newUser._id}>
                <WidgetSmImage src={newUser.img || "https://i.picsum.photos/id/957/200/300.jpg?hmac=F3765loitD9t1J1HkajK7dC62S6Y_joBxXZPm5uAiSE"} />
                <WidgetSmUser>
                    <WidgetSmUserUsername>{newUser.username}</WidgetSmUserUsername>
                    <WidgetSmUserTitle>Software Developer</WidgetSmUserTitle>
                </WidgetSmUser>
                <WidgetSmButton>Display</WidgetSmButton>
            </Wrapper>

        )}


    </Conatainer>;
};

export default WidgetSm;
