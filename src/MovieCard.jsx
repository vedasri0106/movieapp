import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddFavourite } from './store/FavouriteSlice';
import { AddWatchLater } from './store/WatchLaterSlice';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
    const [favourite , setFavourite] = useState(false)
    const [watchLater , setWatchLater] = useState(false)
    const dispatch = useDispatch();
    return (
        <div className="movie" key={imdbID}>
            <div>
                <p>{Year}</p>
            </div>
            <div>
                <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
            </div>
            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>

                <button onClick={()=>{setWatchLater(true);dispatch(AddWatchLater({Year,Poster,Title}))}}>{watchLater === true ? "Added" : "watch later"}</button>
                
                <button style={{marginLeft:'60px'}} onClick={()=>{setFavourite(true);dispatch(AddFavourite({Year,Poster,Title}))}}>

                <i class={favourite === true ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
                </button>
            </div>
        </div>
    )
}

export default MovieCard