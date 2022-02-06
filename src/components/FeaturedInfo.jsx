import Styled from 'styled-components'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useEffect } from 'react';
import { adminRequest } from '../requestMethod';
import { useState } from 'react';

const Container = Styled.div`
   width: 100%;
   display: flex;
    justify-content: space-between;
   

`
const FeaturedItem = Styled.div`
    flex: 1;
    margin:0 20px ;
    padding:30px;
    border-radius:10px;
    cursor: pointer;
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);

    
`

const FeaturedTitle = Styled.span`
    font-size:20px;
    
`

const FeaturedCopntainer = Styled.div`
    display: flex;
  
`

const FeaturedMoney = Styled.span`
     font-size:30px;
    font-weight:600;
`
const FeaturedMoneyRate = Styled.span`
    display : flex;
    align-items : center;    
    font-size:10px;
    
`
const FeaturedSub = Styled.span`
    
    
`

const FeaturedInfo = () => {
    const [income, setIncome] = useState([])

   useEffect(() => {
    const getIncome = async () => {
        try {
            const { data } = await adminRequest.get("/orders/income")
           
            setIncome(data)
            console.log("asdasd",income)
        }
        catch (e) {
            alert('Error', e)
        }
    }
    getIncome();
   },[])


     
    return <Container>
        <FeaturedItem>
            <FeaturedTitle>    Revenue </FeaturedTitle>

            <FeaturedCopntainer>
                <FeaturedMoney>  23.234    </FeaturedMoney>
                <FeaturedMoneyRate>4234 <ArrowUpwardIcon color="success" /></FeaturedMoneyRate>
            </FeaturedCopntainer>
            <FeaturedSub>Compared to last month</FeaturedSub>
        </FeaturedItem>

        <FeaturedItem>
            <FeaturedTitle>    Sales </FeaturedTitle>

            <FeaturedCopntainer>
                <FeaturedMoney>  23.423423   </FeaturedMoney>
                <FeaturedMoneyRate>da432 <ArrowUpwardIcon color="success" /></FeaturedMoneyRate>

            </FeaturedCopntainer>
            <FeaturedSub>Compared to last month</FeaturedSub>
        </FeaturedItem>

        <FeaturedItem>
            <FeaturedTitle>    Cost </FeaturedTitle>

            <FeaturedCopntainer>
                <FeaturedMoney>23.32  </FeaturedMoney>

                <FeaturedMoneyRate>423 <ArrowDownwardIcon color="warning" /></FeaturedMoneyRate>

            </FeaturedCopntainer>
            <FeaturedSub>Compared to last month</FeaturedSub>
        </FeaturedItem>

    </Container>
};

export default FeaturedInfo;
