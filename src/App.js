import React, {useState} from "react";

const moviesData = [
    {"title": "3 Idiots", "actor": "Aamir Khan", "genre": "Comedy/Drama", "director": "Rajkumar Hirani"},
    {"title": "Dangal", "actor": "Aamir Khan", "genre": "Biographical/Sports", "director": "Nitesh Tiwari"},
    {"title": "Bahubali: The Beginning", "actor": "Prabhas", "genre": "Action/Fantasy", "director": "S.S. Rajamouli"},
    {"title": "Lagaan", "actor": "Aamir Khan", "genre": "Drama/Sports", "director": "Ashutosh Gowariker"},
    {"title": "PK", "actor": "Aamir Khan", "genre": "Comedy/Drama", "director": "Rajkumar Hirani"},
    {"title": "Sholay", "actor": "Amitabh Bachchan", "genre": "Action/Adventure", "director": "Ramesh Sippy"},
    {"title": "Bajrangi Bhaijaan", "actor": "Salman Khan", "genre": "Drama/Action", "director": "Kabir Khan"},
    {"title": "Gully Boy", "actor": "Ranveer Singh", "genre": "Musical/Drama", "director": "Zoya Akhtar"},
    {"title": "Queen", "actor": "Kangana Ranaut", "genre": "Comedy/Drama", "director": "Vikas Bahl"},
    {"title": "Andhadhun", "actor": "Ayushmann Khurrana", "genre": "Thriller/Comedy", "director": "Sriram Raghavan"}
  ]



const App = ()=>{

    const [selectedMovie, setSelectedMovie] = useState("");
    return (
        <div className="movies">
            <div className="movie-List">
                {
                    moviesData.map((data, index)=>(
                        <p key={index} onClick={()=> setSelectedMovie(data)}>{data.title}</p>
                    ))
                }
            </div>
            {selectedMovie && (
            <div className="movieDetails">
                <h1>Movie Details</h1>
                <h4>Title: {selectedMovie.title}</h4>
                <p>Genre: {selectedMovie.genre}</p>
                <p>Actor: {selectedMovie.actor}</p>
                <p>Director: {selectedMovie.director}</p>

            </div>)}
        </div>

    )
}
export default App;