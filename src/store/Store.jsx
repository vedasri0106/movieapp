import { configureStore } from '@reduxjs/toolkit'
import FavouriteSlice from './FavouriteSlice'
import WatchLaterSlice from './WatchLaterSlice'


const Store = configureStore({
    reducer:{
        favourite: FavouriteSlice,
        watchLater: WatchLaterSlice
    }
})


export default Store;