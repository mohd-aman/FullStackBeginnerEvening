// import {moviesData} from "./data"
import {lazy, Suspense, useState} from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import HOC from "./Components/CompA";
import Controlled from "./Components/Controlled";
import Navbar from "./Components/Navbar";
import Uncontrolled from "./Components/Uncontrolled";
// import About from "./Pages/About";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
// import Testimonials from "./Pages/Testimonial";


// const Home = lazy(()=>import("./Pages/Home"));
// const Products = lazy(()=>import("./Pages/Products"))
const About = lazy(()=>import("./Pages/About"))
const Testimonial = lazy(()=>import("./Pages/Testimonial"))

function App() {
  // let [movie,setMovies] = useState([]);
  // let handleClick = ()=>{
  //   import('./data').then((module)=>{
  //     console.log(module);
  //     setMovies(module.moviesData);
  //   }) //dynamic import
    
  // }

  return (
    // <div>
    //   <h1>Movies</h1>
    //   <button onClick={handleClick}>Show Movies</button>
    //   {movie.map((item)=>{
    //     return <div key={item.id}>{item.name}</div>
    //   })}
    // </div>
    // <Suspense fallback={<h2>...Loading</h2>}>
    //   <BrowserRouter>
    //   <Navbar/>
    //   <Routes>
    //       <Route path="/" element={<Home/>}></Route>
    //       <Route path="/products" element={<Products/>}></Route>
    //       <Route path="/testimonials" element={<Testimonial/>}></Route>
    //       <Route path="/about" element={<About/>}></Route>
    //   </Routes>
    // </BrowserRouter>
    // </Suspense>
    
    // <>
    //   <HOC dark/>
    //   <HOC yellow/>
    // </>

    <>
      <Controlled/>
      <Uncontrolled/>
    </>
    
    
  );
}

export default App;
