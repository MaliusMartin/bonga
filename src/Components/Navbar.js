// import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png"
import Dropdown from "./Dropdown";


const navItem=[
    { id:0,
        path:"/",
        name:'Bonga Bongo',
        cName: 'nav-items'
     
    },
    { id:1,
        path:"/economy",
        name:'Economy',
        cName: 'nav-items'
       
    },
 
    { id:2,
        path:"/sports",
        name:'Sports',
        cName: 'nav-items'
        
    },
    { id:3,
        path:"/entertinement",
        name:'Entertinement',
        cName: 'nav-items'
      
    }, 
    { id:4,
        path:"/technology",
        name:'Technology',
        cName: 'nav-items'
      
    },

    {  id:5,
        path:"/education",
        name:'Education',
        cName: 'nav-items'
      
    },
    {   id:6,
        path:"/news",
        name:'News',
        cName: 'nav-items'
        
    }


]


function Navbar  ()  {

    // const [dropdown,setDropdown]= useState(false);
    return ( 
        <div className="all">
           
            <img src={logo}  alt="logo"  className="app-logo" />
<nav className="navbar">
   
   
    
<div className="navbar-links">
{/* 
    <Link to="/">Bonga Bongo</Link>
  
    <Link to="/economy">Economy</Link>
    <Link to="/Sports">Sports</Link>
    <Link to="/entertinement">Entertinement</Link>
    <Link to="/technology">Technology</Link>
    <Link to="/education">Education</Link>
    <Link to="/news">News</Link> */}

    {navItem.map((item)=>{
        if (item.name==="Economy") {
             <Link>
                <Link to={item.path} className={item.cName}   >
                {item.name}
                <Dropdown/>
                </Link>
                
                </Link>
            
        }
        return <Link>
            <Link to={item.path} className={item.cName}   >
            {item.name}
            </Link></Link>
        
    })}
   
    

</div>

</nav> 

</div>


     );
}
 
export default Navbar;