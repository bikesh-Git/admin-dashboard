import {configureStore} from '@reduxjs/toolkit'
import UserReducer from './userSlice'
import ProductRedux from './productRedux'


export default configureStore({
    reducer: {
        user:UserReducer,
        products:ProductRedux
    }
})