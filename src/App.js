// import logo from './logo.svg';
// import './App.css';

// import { Router } from "react-router-dom";
// import Dropdown from "./Components/Dropdown";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

// import {FaToggleOn} from react-icons/fa
// import { FaToggleOn } from "react-icons/fa";
import { useState,useEffect} from "react";

function App() {
  const [theme, setTheme]= useState(false);

  
   useEffect (()=>{
    localStorage.setItem("theme",JSON.stringify(theme))
  },[theme])
      

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

<div className="top">
<Navbar/>
<div className={theme?"toggle-theme":""} >         
                    
{/* <FaToggleOn onClick={switchTheme} size="2em"/> */}
<input type="checkbox" onChange={()=>setTheme(!theme)}/>  
                </div></div>
                <div className="content">

                </div>

<Footer/>

    </div>



  );
}

export default App;
