import './App.css';
import Footer from './components/Footer';
import Header  from './components/Header';
import MyComponent from './components/MyComponent';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

export default function App() {
  return (

    // <div>
    //   <Header/>
    //   <Header/>
    //   <Header/>
    //   <Header/>
    //   <Header/>
    //   <Header/>
    // </div>

    <>
      <Header/>
      <Counter/>
      <UserProfile name="Alex" age="30" occupation="Instructor"/>
      <Counter/>
      <UserProfile name="Adam" age="24" occupation="SDE"/>
      <Counter/>
      <UserProfile name="Anuj" age="No idea" occupation="Front End Dev"/>
      <UserProfile name="Aman" age='50' occupation="NO idea"/>
      <UserProfile name="Stokes" age="30" occupation="Cricketer"/>
      <MyComponent/>
      <Footer obj={{name:"IMDB Clone", copyright:"Illegal to use"}}/>
    </>
    
    // <h1>Hello, world!</h1>
  );
}


// export const a = 10;

// export const b = 20

// // export default App;
