// import {moviesData} from "./data"
import {useState} from "react"

import './App.css';

function App() {
  let [movie,setMovies] = useState([]);
  let handleClick = ()=>{
    import('./data').then((module)=>{
      console.log(module);
      setMovies(module.moviesData);
    }) //dynamic import
    
  }

  return (
    <div>
      <h1>Movies</h1>
      <button onClick={handleClick}>Show Movies</button>
      {movie.map((item)=>{
        return <div key={item.id}>{item.name}</div>
      })}
    </div>
  );
}

export default App;
