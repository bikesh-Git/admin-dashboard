import React from 'react';
import Styled from 'styled-components'
import Bikesh from '../images/bikeshPic.jpg'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';

const Conatainer = Styled.div`
        width: 100%;
        height: 50px;
        background-color:white;
        position: sticky;
        top: 0;
        z-index: 999;
`
const Wrapper = Styled.div`
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        justify-content: center;
`
const LeftTop = Styled.h1`
        flex: 1;
        color: blue;
`
const RightTop = Styled.div`
        flex   : 1;
        display : flex;
        justify-content: end;
`
const TopBarIcons = Styled.div`
  display: flex;
  
`
const TopBarIconConatainer = Styled.div`
position: relative;
margin: 10px;
`

const TopIconBadge = Styled.div`
        height: :15px;
        width :15px;
        border-radius :50%;
        background-color : red;
        position: absolute;
        top: 0;
        right:0;
        display : flex;
        font-size : 12px;
        display : flex;
        justify-content : center;
        align-items : center;
        color : white;
        cursor : pointer;
       
`

const Logo = Styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
`


const Topbar = () => {
    return <Conatainer>
        <Wrapper>

            <LeftTop>Bikesh Dashboard</LeftTop>

            <RightTop>
                <TopBarIcons>
                    <TopBarIconConatainer>
                        <NotificationsNoneIcon />
                        
                        <TopIconBadge>2</TopIconBadge>
                    </TopBarIconConatainer>

                    <TopBarIconConatainer>
                        <LanguageIcon />
                        
                        <TopIconBadge>9</TopIconBadge>
                    </TopBarIconConatainer>

                    <TopBarIconConatainer>
                        <SettingsIcon />
                        
                        <TopIconBadge>4</TopIconBadge>
                    </TopBarIconConatainer>
                <Logo src={Bikesh} alt=""  />
                </TopBarIcons>
            </RightTop>
        </Wrapper>
    </Conatainer>;
};

export default Topbar;
