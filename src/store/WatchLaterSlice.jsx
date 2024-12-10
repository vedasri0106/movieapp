import { createSlice } from "@reduxjs/toolkit";

const WatchLaterSlice = createSlice({
    name:"watchLater",
    initialState:[],
    reducers:{
        AddWatchLater:(state , action)=>{
            console.log(action.payload)
            return [...state,{...action.payload}]

        }
    }

})


export const { AddWatchLater } = WatchLaterSlice.actions

export default WatchLaterSlice.reducer