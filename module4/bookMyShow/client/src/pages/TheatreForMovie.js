import { message } from "antd";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import { GetMovieById } from "../apicalls/movies";

export default function TheatreForMovie(){
    let [movie,setMovie] = useState()
    const params = useParams();

    const getData = async()=>{
        try{
            const response = await GetMovieById(params.id)
            if(response.success){
                setMovie(response.data);
            }else{
                message.error(response.message);
            }
        }catch(err){
            message.error(err.message)
        }
    }

    useEffect(()=>{
        getData();
    },[])
    return(
        <div>
        {movie && (<h1>{movie.title}</h1>)}
       </div>
    )
}