import Styled from "styled-components";
import { DataGrid } from '@mui/x-data-grid';
import { productData } from '../DummyData'
import { useState } from 'react'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { products,deleteProduct } from "../redux/apiCalls";

const Conatainer = Styled.div`
    flex:4;
    background-color: white;
    height: calc(100vh -50px);
`
const Product = Styled.div`
display: flex;
align-items: center;
`
const ProductImage = Styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`

const Productname = Styled.div`
 
`


const Users = () => {
  const dispatch = useDispatch()
  const productList = useSelector(state=>state.products.Products)

  // const [data, setData] = useState(productData)

  const handleDelete = (id) => {
    // setData(data => data.filter(el => el.id !== id))
    // console.log("delete", id)

    deleteProduct(dispatch , id)
  }

  useEffect(() => {
   products(dispatch)
  }, [])

  console.log("productList",productList)


  const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    {
      field: 'Product',
      headerName: "Product",
      width: 150,
      renderCell: (param) => {
        // console.log(param)
        return (
          <Product>
            <ProductImage src={param.row.img} alt="" />
            <Productname>{param.row.title}</Productname>
          </Product>
        )
      },
    },
    {
      field: 'inStock',
      headerName: "Stock",

      width: 150,

    },
  
    {
      field: 'price',
      headerName: "Price",
      width: 150,

    },
    {
      field: 'action',
      headerName: "action",
      width: 150,

      renderCell: (param) => {
        return (
          <div>

            <Link to={"/product/" + param.row._id}>
              <button>edit</button>
            </Link>
            <button onClick={() => handleDelete(param.row._id)}>delete</button>
          </div>
        )
      },
    },


  ];


  return <Conatainer>
   {productList &&  <DataGrid
      rows={productList}
      columns={columns}
      getRowId={(row)=>row._id}
      pageSize={10}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
    />
   }
  </Conatainer>;
};

export default Users;
