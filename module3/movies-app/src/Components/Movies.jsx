import MovieCard from "./MovieCard";
import axios from "axios"
import {useEffect, useState} from "react"
import Pagination from "./Pagination";

function Movies(){
    let [movies,setMovies] = useState([]);
    let [pageNo,setPageNo] = useState(1);
    let [watchList,setWatchList] = useState([]);

    let handleAddToWatchList = (movieId)=>{
        // console.log("Inside add to watchlist");
        // console.log(movieId);
        // watchList.push(movieId); // it will not work since the reference is same

        let newWatchList = [...watchList,movieId];
        localStorage.setItem("movieApp",JSON.stringify(newWatchList));
        setWatchList(newWatchList);
    }

    let handleRemoveFromWatchList = (movieId)=>{
        let filteredWatchList = watchList.filter((id)=>{
            return id != movieId;
        })
        localStorage.setItem("movieApp",JSON.stringify(filteredWatchList));
        setWatchList(filteredWatchList);
    }

    console.log(watchList);
    let handlePrev = ()=>{
        if(pageNo>1)
            setPageNo(pageNo-1)
    }

    let handleNext = ()=>{
        setPageNo(pageNo+1);
    }

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=7a14990db2f038e12eadc4125fe96763&page=${pageNo}`)
        .then(function(res){
        // console.log(res);
        // console.log(res.data.results);
        setMovies(res.data.results);
    })
    },[pageNo])

    useEffect(()=>{
        let moviesFromLocalStorage = localStorage.getItem("movieApp");
        setWatchList(JSON.parse(moviesFromLocalStorage));
    },[])

    return(
        <div className="p-5">
            <div className="text-2xl m-5 font-bold text-center">
                Trending Movies
            </div>
            <div className="flex flex-wrap justify-around gap-8">
                {movies.map((movieObj)=>{
                    // console.log(movieObj);
                    return <MovieCard key={movieObj.id}
                                    id={movieObj.id}
                                    name={movieObj.title} 
                                    poster_path={movieObj.poster_path}
                                    watchList = { watchList}
                                    handleAddToWatchList = {handleAddToWatchList}
                                    handleRemoveFromWatchList = {handleRemoveFromWatchList}/>
                })}
            </div>
            <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
        </div>
    )
}

export default Movies;