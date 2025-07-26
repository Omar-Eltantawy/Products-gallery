import { createSlice } from "@reduxjs/toolkit"


const initialState={
    isDark:false
}

export const themeSlice=createSlice({
    name:'theme',
    initialState,
    reducers:{
        toggleDark:(state)=>{
            state.isDark = !state.isDark;
        },
        setDark: (state, action) => {
            state.isDark = action.payload;
        },
    }
})
export const { toggleDark ,setDark } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;