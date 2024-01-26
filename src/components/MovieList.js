import React from "react";
import moviesData from "../data/MoviesData"

const MovieList = ({setSelectedMovie})=>{
    return(
        <div className="movie-List">
            {
                moviesData.map((data, index)=>(
                    <p key={index} onClick={()=> setSelectedMovie(data)}>{data.title}</p>
                ))
            }
        </div>
    )
}

export default MovieList;