import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({

    name: "products",
    initialState: {
        Products: [],
        isFetching: false,
        error: false
    },
    reducers: {
        getProductStart: (state) => {
            state.isFetching = true;
        },
        getProductSuccess: (state, action) => {
            state.isFetching = false;
            state.Products = action.payload;
        },
        getProductFailure: (state) => {
            state.error = true;
        },

        //DELETE
        deleteProductStart: (state) => {
            state.isFetching = true;
        },
        deleteProductSuccess: (state, action) => {
            state.isFetching = false;
            // state.Products.splice(
            //     state.Products.findIndex(item => item._id === action.payload), 1
            // )
            state.Products = action.payload;
        },
        deleteProductFailure: (state) => {
            state.error = true;
        },

        //UPDATE
        updateProductStart: (state) => {
            state.isFetching = true;
        },
        updateProductSuccess: (state, action) => {
            state.isFetching = false;
            state.Products[state.Products.findIndex(item => item._id === action.payload.id)] = action.payload.product 
        },
        updateProductFailure: (state) => {
            state.error = true;
        },

        //ADD PRODUCT
        addProductStart: (state) => {
            state.isFetching = true;
        },
        addProductSuccess: (state, action) => {
            state.isFetching = false;
            state.Products.push( action.payload.product)
            // [state.Products.findIndex(item => item._id === action.payload.id)] = action.payload.user
        },
        addProductFailure: (state) => {
            state.error = true;
        }
    }


})

export const { getProductStart, getProductSuccess, getProductFailure,
    deleteProductStart, deleteProductSuccess, deleteProductFailure,
    updateProductStart, updateProductSuccess, updateProductFailure,
    addProductStart, addProductSuccess, addProductFailure
} = productSlice.actions
export default productSlice.reducer