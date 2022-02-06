import { useSelector } from "react-redux";
import {useLocation} from 'react-router-dom'
import styled from "styled-components";
import { Line } from 'react-chartjs-2';
import { Link } from "react-router-dom";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const Container = styled.div`
flex: 4;
`
const ProductHeader = styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductTitle = styled.h1`
/* margin:20px; */
`
const CreateButton = styled.button`
    padding:5px 10px;
    background-color:green;
    color:white;
    cursor:pointer;
`


const WrapperTop = styled.div`
display: flex;

`
const WrapperTopLeft = styled.div`
flex: 1;
margin: 20px;

box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);

`

const WrapperTopRight = styled.div`
flex: 1;
margin: 20px;
box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);

`
const ProductInfo = styled.div``

const ProductTop = styled.div`
display: flex;
align-items : center;
margin:20px;
`

const ProductImage = styled.img`
width: 40px;
height: 40px;
border-radius:50%;
`


const ProductName = styled.span``


const ProductBottom = styled.div``
const ProducID = styled.div``
const ProductSale = styled.div``
const ProductStatus = styled.div``
const ProductStock = styled.div``

const WrapperBottom = styled.div`
    display: flex ;
    justify-content : end;
    margin:20px;
    padding: 10px;
    box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 15px -10px rgba(0,0,0,0.75);

`
const WrapperBottomLeft = styled.div`
      flex:1;
      display : flex;
      flex-direction: column;
      padding:10px;
`
const UpdateProduc = styled.input`
    
`
const ProductStatusSelector = styled.select`
    
`
const ProductStatusOption = styled.option`
    
`
const ProductStockSelector = styled.select`
    
`
const ProductStockOption = styled.option`
    
`
const Label = styled.label``

const WrapperBottomRight = styled.div`
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
const UploadIcon = styled.label``

const UpdateBtn = styled.button`
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



const Product = () => {
    const location = useLocation();
    const productId= location.pathname.split("/")[2]
    const singleProduct = useSelector(start => start.products.Products.find(product=> product._id === productId))
   
    console.log("singleProduct", singleProduct)

    const data = {
        labels: ['January', 'February', 'March',
            'April', 'May'],
        datasets: [
            {
                label: 'Rainfall',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56]
            }
        ]
    }


    return <Container>
        <ProductHeader>
            <ProductTitle>Edit User</ProductTitle>
            <Link to="/newProduct">   <CreateButton>Create </CreateButton>  </Link>
        </ProductHeader>
        <WrapperTop>
            <WrapperTopLeft>
                <Line
                    data={data}
                    options={{
                        title: {
                            display: true,
                            text: 'Average Rainfall per month',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        },
                        responsive: true,
                    }}
                />
            </WrapperTopLeft>

            <WrapperTopRight>
                <ProductInfo>
                    <ProductTop>
                        <ProductImage src={singleProduct.img}></ProductImage>
                        <ProductName>{singleProduct.title}</ProductName>
                    </ProductTop>
                    <ProductBottom>
                        <ProducID>{singleProduct._id}</ProducID>
                        <ProductSale>kfjskfdd</ProductSale>
                        {/* <ProductStatus>Active</ProductStatus> */}
                        <ProductStock>{singleProduct.inStock}</ProductStock>
                    </ProductBottom>
                </ProductInfo>
            </WrapperTopRight>

        </WrapperTop>

        <WrapperBottom>

            <WrapperBottomLeft>
                <Label>edit Name</Label>
                <UpdateProduc placeholder="fotball" />

                <Label>prodyuct Desc</Label>
                <UpdateProduc placeholder="Description" />

                <Label>Price</Label>
                <UpdateProduc placeholder="Price" />

                <Label>Status</Label>
                <ProductStatusSelector>
                    <ProductStatusOption value="true">Yes</ProductStatusOption>
                    <ProductStatusOption value="false">No</ProductStatusOption>
                </ProductStatusSelector>

                <Label>In Stock</Label>
                <ProductStockSelector>
                    <ProductStockOption value="true">Yes</ProductStockOption>
                    <ProductStockOption value="false">No</ProductStockOption>
                </ProductStockSelector>

            </WrapperBottomLeft>

            <WrapperBottomRight>


            </WrapperBottomRight>
            <UpdateUploadImage>
                <UploadImage src={singleProduct.img}></UploadImage>
                <UploadIcon htmlfor="uploadicon" ><CloudUploadIcon /></UploadIcon>
                <UpdateProduc type="file" id="uploadicon" style={{ display: 'none' }}  />
            </UpdateUploadImage>

            <SubmitUpdateBtn>
                <UpdateBtn>Update</UpdateBtn>
            </SubmitUpdateBtn>
        </WrapperBottom>

    </Container>;
};

export default Product;

