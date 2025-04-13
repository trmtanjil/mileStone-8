import React, { useState } from 'react';
import Links from './Links';
import { Menu, X } from 'lucide-react'
 
 

const navLinks = [
    {
      id: 1,
      name: "Home",
      path: "/",
      icon: "🏠",
      isLocked: false,
    },
    {
      id: 2,
      name: "About",
      path: "/about",
      icon: "ℹ️",
      isLocked: false,
    },
    {
      id: 3,
      name: "Services",
      path: "/services",
      icon: "🛠️",
      isLocked: true,
    },
    {
      id: 4,
      name: "Projects",
      path: "/projects",
      icon: "📁",
      isLocked: true,
    },
    {
      id: 5,
      name: "Blog",
      path: "/blog",
      icon: "📝",
      isLocked: false,
    },
    {
      id: 6,
      name: "Contact",
      path: "/contact",
      icon: "📞",
      isLocked: false,
    },
  ];
  

const Navbar = () => {
    const [menue, setmenue]= useState(false)

const links =   navLinks.map(rounter=> <Links rounter={rounter}></Links> )

    return (
        <div>
            
     <nav  className='flex justify-between mx-6'>
     <span className='flex gap-3' onClick={()=>setmenue(!menue)}>
        { 
            menue ? <X  className='md:hidden'></X> : <Menu className='md:hidden' ></Menu>
        }
      
        <ul className='md:hidden'>
            {links}
        </ul>

      <h2>Navbar</h2>
    </span>
             
           <ul className='md:flex hidden  '>
            {
              links
            }
 
           </ul>
        
          <button className="btn"> button</button>
     </nav>


            {/* <ul className='flex'>
                <li className='mx-[10px]'><a href="/about">about</a></li>
                <li className='mx-[10px]'><a href="/home">home</a></li>
                <li className='mx-[10px]'><a href="/contact">contact</a></li>
            </ul> */}
        </div>
    );
};

export default Navbar;