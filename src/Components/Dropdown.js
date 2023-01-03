import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const menuItem=[
    { id:0,
        path:"/business",
        name:'Business',
        cName: 'submenu-items'
     
    },
    { id:1,
        path:"/services",
        name:'Services',
        cName: 'submenu-items'
       
    },
 
    { id:2,
        path:"/About",
        name:'About',
        cName: 'submenu-items'
        
    },
    { id:3,
        path:"/contact",
        name:'Contact',
        cName: 'submenu-items'
      
    }, 
    { id:4,
        path:"/contact",
        name:'Location',
        cName: 'submenu-items'
      
    },

    {  id:5,
        path:"/feedback",
        name:'Feedback',
        cName: 'submenu-items'
      
    },
    {   id:6,
        path:"/comment",
        name:'Comments',
        cName: 'submenu-items'
        
    }


]


const Dropdown =()=> {
    const [dropdown, setDropdown]= useState(false);
  return (
   <ul className={dropdown? 'dropmenu clicked':'dropmenu'}  onClick={()=>setDropdown(!dropdown)}>
    {menuItem.map((item)=>{
        return<li>
            <Link to={item.path} className={item.cName}    onClick={()=>setDropdown(false)}>
            {item.name}
            </Link>
        </li>
    })}

   </ul>
  )
}

export default Dropdown