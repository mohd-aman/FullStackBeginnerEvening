import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = {
    SUCCESS:'success',
    ERROR:"error",
    LOADING:"loading"
}

const productSlice = createSlice({
    name:"product",
    initialState:{
        data:[],
        status:STATUSES.SUCCESS
    },
    reducers:{
        setProducts(state,action){
            state.data = action.payload;
        },

        setStatus(state,action){
            state.status = action.payload;
        }
    }
})

export const {setProducts,setStatus} = productSlice.actions

export default productSlice.reducer


//thunk
export function fetchProducts(){
   
    return async function (dispatch){
        dispatch(setStatus(STATUSES.LOADING));
        try{
            const res = await axios.get("https://fakestoreapi.com/products");
            dispatch(setProducts(res.data));
            dispatch(setStatus(STATUSES.SUCCESS));
        }catch(error){
            dispatch(setStatus(STATUSES.ERROR));
        }
    }
}