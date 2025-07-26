import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import toast from 'react-hot-toast';

const initialState = {
    loading:false,
    products:[],
    specificProduct:null,
    error:null
}

export const getAllProducts=createAsyncThunk('products/getAllProducts',async(_,{rejectWithValue})=>{
    try{
        let {data} = await axios.get('https://fakestoreapi.com/products') ;
        console.log(data);
        return data
    }catch(error){
        console.log(error);
        
        return rejectWithValue(error)
    }
})

export const getSpecificProduct=createAsyncThunk('products/getSpecificProduct',async(id,{rejectWithValue})=>{
    try{
        let {data} = await axios.get(`https://fakestoreapi.com/products/${id}`) ;
        console.log(data);
        return data
    }catch(error){
        console.log(error);
        
        return rejectWithValue(error)
    }
})

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(getAllProducts.pending,(state)=>{
        state.loading = true
    })
    .addCase(getAllProducts.fulfilled,(state,action)=>{
        state.loading = false;
        state.products=action.payload
        state.error=null;
    })
    .addCase(getAllProducts.rejected,(state,action)=>{
        state.loading = false;
        state.products=[]
        state.error=action.payload.message;
        console.log(state.error);
        toast.error(state.error);
        
    });

    builder.addCase(getSpecificProduct.pending,(state)=>{
        state.loading = true
    })
    .addCase(getSpecificProduct.fulfilled,(state,action)=>{
        state.loading = false;
        state.specificProduct = action.payload;
        state.error = null;
    })
    .addCase(getSpecificProduct.rejected,(state,action)=>{
        state.loading = false;
        state.specificProduct = null;
        state.error=action.payload.message;
        console.log(state.error);
        toast.error(state.error);
    })
  }
})

export const productsReducer = productsSlice.reducer