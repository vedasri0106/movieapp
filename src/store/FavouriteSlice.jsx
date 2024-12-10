import { createSlice } from "@reduxjs/toolkit";

const FavouriteSlice = createSlice({
    name:"favourite",
    initialState:[],
    reducers:{
        AddFavourite:(state , action)=>{
            console.log(action.payload)
            return [...state,{...action.payload}] 
        }
    }
})


export const { AddFavourite } = FavouriteSlice.actions

export default FavouriteSlice.reducer