import React from 'react';
import Links from './Links';
 

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
    return (
        <div>
            
        
 
           <ul className='flex'>
           {
                navLinks.map(rounter=> <Links rounter={rounter}></Links> )
            }
 
           </ul>
        


            {/* <ul className='flex'>
                <li className='mx-[10px]'><a href="/about">about</a></li>
                <li className='mx-[10px]'><a href="/home">home</a></li>
                <li className='mx-[10px]'><a href="/contact">contact</a></li>
            </ul> */}
        </div>
    );
};

export default Navbar;