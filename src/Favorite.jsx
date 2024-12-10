import React from 'react'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'

const Favorite = () => {

    const FavouritesData = useSelector((state)=>state.favourite)
    console.log(FavouritesData)
  return (
    <div className='container-fluid d-flex flex-column favouriteNav'>
        <div>

        <Navbar/>
        </div>
        <div>

        {FavouritesData.map((item)=>{
            return (<div>
                <h1>{item.Year}</h1>
                <img src={item.Poster}/>
                <h2 style={{color:"red"}}>{item.Title}</h2>
            </div>
                )
        })}
        </div>
        
      
    </div>
  )
}

export default Favorite
