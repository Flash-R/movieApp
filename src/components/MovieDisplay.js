import React from "react";



const MovieDisplay = ({selectedMovie})=>{

    return (
        selectedMovie && (
            <div className="movieDetails">
                <h1>Movie Details</h1>
                <h4>Title: {selectedMovie.title}</h4>
                <p>Genre: {selectedMovie.genre}</p>
                <p>Actor: {selectedMovie.actor}</p>
                <p>Director: {selectedMovie.director}</p>

            </div>)
    )
}

export default MovieDisplay;