import { useState, useEffect } from "react";
import './App.css'
import SearchIcon from "./assets/search.svg";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";
const API_URL = "http://www.omdbapi.com?apikey=b169cf0";

function App() {
  const [movies, setMovies] = useState([])
  const [serachTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);


  return (
    <>
      <div className="app">
        <div>

        <Navbar/>
         <div style={{display:'flex',justifyContent:"center", marginTop:"32px"}}>

        <h1>MovieSpace</h1>
         </div>
         <div style={{display:"flex", justifyContent:"center"}}>

        <div className="search">
          <input placeholder="Search for movies"
            value={serachTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />

          <img src={SearchIcon} alt="search" onClick={() => searchMovies(serachTerm)} />
        </div>
         </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />

            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}
        </div>

      </div>
    </>
  )
}

export default App
