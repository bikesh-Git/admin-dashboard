import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({

    name:"user",
    initialState:{
        CurrentUser:null,
        isFetchinf:false,
        error:false
    },
    reducers:{
        loginStart:(state)=>{
            state.isFetchinf =true;
        },
        loginSuccess:(state,action)=>{
            state.isFetchinf =false;
            state.CurrentUser=action.payload;
        },
        loginFailure:(state)=>{
            state.error = true;
        }
    }


})

export const {loginStart,loginSuccess,loginFailure} = userSlice.actions
export default userSlice.reducer