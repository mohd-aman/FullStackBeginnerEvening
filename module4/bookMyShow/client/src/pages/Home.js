import {useEffect, useState} from 'react'

import {Row , Col , message} from 'antd'
import { GetAllMovies } from '../apicalls/movies';
import { useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../redux/loadersSlice';
import {useNavigate} from "react-router-dom"

export default function Home(){
    const [searchText, setSearchText] =useState("");
    const [movies, setMovies] = useState([]);

    let dispatch = useDispatch();
    let navigate = useNavigate();
    const getData = async()=>{
        try{
            dispatch(ShowLoading());
            const response = await GetAllMovies();
            console.log(response)
            if(response.success){
                setMovies(response.data)
            }else{
                message.error(response.message);
            }
            dispatch(HideLoading());
        }catch(err){
            message.error(err.message);
            dispatch(HideLoading());
        }
    }

    useEffect(()=>{
        getData();
    },[])
    return (
        <div>
         <input type='text' placeholder='Search For Currenty Showing Movies' 
         className='search-input' onChange={(e)=> setSearchText(e.target.value)}/>

         <Row gutter={[20]} className="mt-2">
            {movies
            .filter((movie) => movie.title.toLowerCase().includes(searchText.toLowerCase()))
            .map((movie) => (
              <Col span={6}>
                <div
                  className="card flex flex-col gap-1 cursor-pointer"
                  onClick={() =>
                    navigate(
                      `/movie/${movie._id}`
                    )
                  }
                >
                  <img src={movie.poster} alt="" height={200} />
    
                  <div className="flex justify-center p-1">
                    <h1 className="text-md uppercase">{movie.title}</h1>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
    
    
        </div>
      )
    }