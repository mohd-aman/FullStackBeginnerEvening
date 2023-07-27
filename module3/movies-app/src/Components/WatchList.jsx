
function WatchList(props){
  let {watchList,handleRemoveFromWatchList} = props;

  const genreids = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

    return(
        <>
        <div className="flex justify-center">
            <div className="flex justify-center items-center w-[15rem] h-[3rem] bg-blue-400 rounded-xl text-white">All Genres</div>
         </div>


         <div className="flex justify-center my-4">
            <input className="h-[3rem] w-[18rem]
             border-none outline-none bg-gray-200
             px-4 text-lg " type="text" placeholder="Search for Movies" />
        </div>


        <div className="overflow-hidden rounded-lg shadow-md border border-gray-200 m-8">
            <table className="w-full text-gray-500 text-center ">
                <thead className="bg-gray-50 text-gray-900 border-b-2">
                    <tr>
                        <th>Name</th>
                        <th className="flex">
                            <div className="p-2"><i class="fa-solid fa-arrow-up"></i></div>
                           <div className="p-2">Ratings</div>
                           <div className="p-2"><i class="fa-solid fa-arrow-down"></i></div> 
                        </th>
                        <th>Popularity</th>
                        <th>Genre</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                {watchList.map((movieObj)=>{
                    return   <tr className="border-b-2">
                        <td className="flex items-center px-6 py-4">
                            <img className="h-[6rem] w-[10rem]" src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} alt="" />
                            <div className="mx-4  ">{movieObj.title}</div>
                        </td>
                        <td>{movieObj.vote_average}</td>
                        <td>{movieObj.popularity}</td>
                        <td>{genreids[movieObj.genre_ids[0]]}</td>
                        <td onClick={()=>handleRemoveFromWatchList(movieObj)} className=" text-red-600">Delete</td>
                    </tr>
                })}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default WatchList