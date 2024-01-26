import React,{useState} from "react";
import MovieList from "./components/MovieList";
import MovieDisplay from "./components/MovieDisplay";


const App = ()=>{
    const [selectedMovie, setSelectedMovie] = useState("")
    return (
        <div className="movies">
            <MovieList setSelectedMovie={setSelectedMovie}/>
            <MovieDisplay selectedMovie={selectedMovie}/>
        </div>
    )
}


export default App;