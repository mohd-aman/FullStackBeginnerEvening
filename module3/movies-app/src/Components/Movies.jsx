import MovieCard from "./MovieCard";
import axios from "axios"
import {useEffect, useState} from "react"

function Movies(){
    let [movies,setMovies] = useState([]);
    
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=7a14990db2f038e12eadc4125fe96763`)
        .then(function(res){
        // console.log(res);
        // console.log(res.data.results);
        setMovies(res.data.results);
    })
    },[])

    

    return(
        <div className="p-5">
            <div className="text-2xl m-5 font-bold text-center">
                Trending Movies
            </div>
            <div className="flex flex-wrap justify-around gap-8">
                {movies.map((movieObj)=>{
                    console.log(movieObj);
                    return <MovieCard key={movieObj.id} name={movieObj.title} poster_path={movieObj.poster_path}/>
                })}
            </div>
        </div>
    )
}

export default Movies;