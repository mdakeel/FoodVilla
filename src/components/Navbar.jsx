import React from 'react'

const Title = () => {
    return(
      <a href="/">
    <h1 id="title" key="h2" className="text-[25px] text-primary font-extrabold">Food Villa</h1>
    </a>
    )
  }


export const Navbar = () => {
    return(
      <div className="flex items-center justify-between p-4 px-20 border-b border-gray-300">
           <Title  />
           <div className="">
            <ul className="flex space-x-10 text-[17px] font-semibold cursor-pointer text-tartiary ">
              <li className='hover:text-primary'>Home</li>
              <li className='hover:text-primary'>About</li>
              <li className='hover:text-primary'>Contact</li>
              <li className='hover:text-primary'>Cart</li>
            </ul>
           </div>
      </div>
    )
  }