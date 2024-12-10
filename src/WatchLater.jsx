import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar'; // Assuming Navbar component is imported

const WatchLater = () => {
    const watchLaterData = useSelector((state) => state.watchLater); // Ensure correct naming convention for variables
    console.log(watchLaterData);

    return (
        <div className='container-fluid watchLaternav'>
            <div>

            <Navbar /> {/* Assuming Navbar is a component you have defined */}
            </div>

            <div>
                {watchLaterData.length > 0 ? (
                    watchLaterData.map((item) => (
                        <div key={item.id}> 
                            <h1>{item.Title}</h1> 
                            <h2 style={{color:"red"}}>{item.Year}</h2> {/* Assuming item has a Year property */}
                            <img src={item.Poster} alt={item.Title} /> {/* Assuming item has a Poster property */}
                        </div>
                    ))
                ) : (
                    <p>No items to display</p> 
                )}
            </div>
        </div>
    );
};

export default WatchLater;
