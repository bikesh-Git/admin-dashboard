import Styled from 'styled-components'
import {Link} from 'react-router-dom'

const Conatainer = Styled.div`
        flex:1;
        background-color:pink;
        height: calc(100vh - 50px);
        top:50px;
        position: sticky;
`
const Wrapper = Styled.div`
        /* height: 100%;    */
        color: #555;
        padding:20px;
`
const SidebarMenu = Styled.div`
    margin-bottom:5px;
`
const SidebarTitle = Styled.h3`
    font-size:13px;
    color:lightgray;
`
const SidebarList = Styled.ul`
  list-style:none;
    padding:5px;

   
`
const SidebarListItem = Styled.li`
    padding:3px;
    cursor:pointer;
    &:hover{
        color:black;
    }
    
    
`


const Sidebar = () => {
    return <Conatainer>
        <Wrapper>
            <SidebarMenu>
            <SidebarTitle>DashBoard</SidebarTitle>
            <SidebarList>
         <Link to="/">  <SidebarListItem>Home</SidebarListItem> </Link>  
            <SidebarListItem>Analytics</SidebarListItem>
            <SidebarListItem>Sales</SidebarListItem>
            </SidebarList>
            </SidebarMenu>

            <SidebarMenu>
            <SidebarTitle>Quick Menu</SidebarTitle>
            <SidebarList>
            <Link to="/users">  <SidebarListItem>Users</SidebarListItem></Link>
           <Link to="/products"> <SidebarListItem>Products</SidebarListItem></Link>
            <SidebarListItem>Transaction</SidebarListItem>
            <SidebarListItem>Reports</SidebarListItem>        
            </SidebarList>
            </SidebarMenu>

            <SidebarMenu>
            <SidebarTitle>Notification</SidebarTitle>
            <SidebarList>
            <SidebarListItem>Mail</SidebarListItem>
            <SidebarListItem>FeedBack</SidebarListItem>
            <SidebarListItem>Messages</SidebarListItem>
            </SidebarList>
            </SidebarMenu>

            <SidebarMenu>
            <SidebarTitle>Staff</SidebarTitle>
            <SidebarList>
            <SidebarListItem>Manage</SidebarListItem>
            <SidebarListItem>Analytics</SidebarListItem>
            <SidebarListItem>Reports</SidebarListItem>
            </SidebarList>
            </SidebarMenu>
        </Wrapper>
    </Conatainer>;
};

export default Sidebar;
