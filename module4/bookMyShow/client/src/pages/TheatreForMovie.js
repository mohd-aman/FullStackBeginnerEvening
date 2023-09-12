import { message } from "antd";
import { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom"
import { GetMovieById } from "../apicalls/movies";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../redux/loadersSlice";
import {GetTheatresByMovie} from "../apicalls/theatres"
import moment from "moment";

export default function TheatreForMovie(){
    let [movie,setMovie] = useState()
    let [date,setDate] = useState(moment().format("YYYY-MM-DD"));
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getData = async()=>{
        try{
            dispatch(ShowLoading());
            const response = await GetMovieById(params.id)
            if(response.success){
                setMovie(response.data);
            }else{
                message.error(response.message);
            }
            dispatch(HideLoading());
        }catch(err){
            dispatch(HideLoading());
            message.error(err.message)
        }
    }

    const getTheatres = async ()=>{
        const response = await GetTheatresByMovie({date,movie:params.id})
        console.log(response.data);
    }

    useEffect(()=>{
        getData();
    },[])

    useEffect(()=>{
        getTheatres()
    },[date])

    return(
        <div>
        {movie && (
             <div>
             {/* movie information */}
             <div className="flex justify-between items-center mb-2">
                 <div>
                     <h1 className="text-2xl uppercase">
                         {movie.title} ({movie.language})
                     </h1>
                     <h1 className="text-md">Duration : {movie.duration} mins</h1>
                     <h1 className="text-md">
                         Release Date : {moment(movie.releaseDate).format("MMM Do yyyy")}
                     </h1>
                     <h1 className="text-md">Genre : {movie.genre}</h1>
                 </div>
                 <div>
                 <h1 className="text-md">Select Date</h1>
                 <input
                     type="date"
                     min={moment().format("YYYY-MM-DD")}
                     value={date}
                     onChange={(e) => {
                         setDate(e.target.value);
                         navigate(`/movie/${params.id}?date=${e.target.value}`);
                     }}
                 />
             </div>
             </div>

         </div>
     )
 }
</div>
    )
}