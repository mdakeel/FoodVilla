import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'

const Title = () => {
    return(
      <a href="/">
    <h1 id="title" key="h2" className="text-[25px] text-primary font-extrabold">Food Villa</h1>
    </a>
    )
  }


export const Navbar = () => {
     
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
      <div className="flex items-center justify-between p-4 px-20 border-b border-gray-300">
           <Title  />
           <div className="">
            <ul className="flex space-x-10 text-[17px] font-semibold cursor-pointer text-tartiary ">
              <NavLink to={"/"}><li className='hover:text-primary'>Home</li></NavLink>
              <NavLink to={"/about"}><li className='hover:text-primary'>About</li></NavLink>
              <NavLink to={"/contact"}><li className='hover:text-primary'>Contact</li></NavLink>
              <NavLink to={"/cart"}> <li className='hover:text-primary'>Cart</li></NavLink>
            </ul>
           </div>
           <div className='flex space-x-10 text-[17px] w-[50px] font-semibold cursor-pointer text-tartiary'>
            {
             isLoggedIn ? ( 
             <button onClick = {() => setIsLoggedIn(false) } className='hover:text-primary '>Logout</button> ) 
             : 
             (<button onClick={() => setIsLoggedIn(true)} className='hover:text-primary  '>Login</button> )
            }
           </div>
      </div>
    )
  }