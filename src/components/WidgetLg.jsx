import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Bikesh from '../images/bikeshPic.jpg'
import { adminRequest } from "../requestMethod";


const Conatainer = styled.div`
margin: 10px;
    flex: 2;
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
`

const WidgetLgTitle = styled.h2`
    /* margin: 20px; */
    margin-top:20px;
    margin-left: 20px;
`

const Wrapper = styled.div`
    
`

const WrapperLgTable = styled.table`
width: 100%;
border-spacing: 20px;
    
`
const WrapperLgTr = styled.tr`
    
`
const WrapperLgTh = styled.th`
    text-align: left;
`

const WrapperLgUser = styled.td`
    display: flex;
    align-items : center;
`
const WrapperLgImage = styled.img`
 width: 40px;
 height: 40px;
 border-radius:50%;
 object-fit:cover;   
margin-right: 10px;
`
const WrapperLgName = styled.td`
        font-weight: 600;
`
const WrapperLgData = styled.td`
    font-weight: 300;
`
const WrapperLgAmount = styled.td`
    font-weight: 300;
    
`

const WrapperLgStatus = styled.td`
    
`
const WrapperLgButton = styled.button`
    
`



const WidgetLg = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        const getOrder = async () => {
            try {
                const { data } = await adminRequest.get("/orders")
               
                setOrders(data)
            }
            catch (e) {
                alert('Error', e)
            }
        }
        getOrder();
    }, [])

    const ButtonStat = ({type})=>{
        return <WrapperLgButton type={type}>{type} </WrapperLgButton>
    }


  return <Conatainer>
      
      <WidgetLgTitle>Latest Transactions</WidgetLgTitle>
      <Wrapper>
          <WrapperLgTable>
              <WrapperLgTr>
                  <WrapperLgTh>Customer</WrapperLgTh>
                  <WrapperLgTh>DAte</WrapperLgTh>
                  <WrapperLgTh>Amount</WrapperLgTh>
                  <WrapperLgTh>Status</WrapperLgTh>
                 
              </WrapperLgTr>

        {orders.map(order =>
            
            <WrapperLgTr r key={order._id}>
            <WrapperLgUser>
                <WrapperLgImage src={Bikesh}></WrapperLgImage>
                <WrapperLgName>bikesh</WrapperLgName>
            </WrapperLgUser>
            <WrapperLgData>2 july 2020</WrapperLgData>
            <WrapperLgAmount>3423</WrapperLgAmount>
            <WrapperLgStatus>
                <ButtonStat type="Approved"/>
            </WrapperLgStatus>
        </WrapperLgTr>

            )}
                 
          </WrapperLgTable>
      </Wrapper>

      


  </Conatainer>;
};

export default WidgetLg;
