import { loginStart,loginSuccess,loginFailure } from "./userSlice"
import { adminRequest } from "../requestMethod"
import { deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, 
    addProductFailure, addProductStart, addProductSuccess,
     updateProductFailure, updateProductStart, updateProductSuccess } from "./productRedux"


export const login = async(dispatch ,user)=>{
    dispatch(loginStart())
    try{
        const res = await adminRequest.post('auth/login',user)
        sessionStorage.setItem("user",JSON.stringify(res.data))
        dispatch(loginSuccess(res.data))
    }
    catch(e){
        dispatch(loginFailure())
    }
}

export const products = async(dispatch )=>{
    dispatch(getProductStart())
    try{
        const res = await adminRequest.get('/products')
        dispatch(getProductSuccess(res.data))
    }
    catch(e){
        dispatch(getProductFailure())
    }
}


export const deleteProduct = async(dispatch,id )=>{
    dispatch(deleteProductStart())
    try{
        const res = await adminRequest.delete(`/products/${id}`)
        // dispatch(deleteProductSuccess(id))
        dispatch(deleteProductSuccess(res.data))

    }
    catch(e){
        dispatch(deleteProductFailure())
    }
}

export const updateProduct = async(dispatch,id,product )=>{
    dispatch(updateProductStart())
    try{
        // const res = await adminRequest.put(`/products/${id}`)
        dispatch(updateProductSuccess({id ,product}))
        // dispatch(updateProductSuccess(res.data))
    }
    catch(e){
        dispatch(updateProductFailure())
    }
}

export const addProduct = async(dispatch,product )=>{
    dispatch(addProductStart())
    try{
        const res = await adminRequest.post(`/products`,product)
        dispatch(addProductSuccess(res.data))
    }
    catch(e){
        dispatch(addProductFailure())
    }
}