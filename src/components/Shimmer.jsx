import React from 'react'

export const Shimmer = () => {
  return (
    <>
    <div className='ps-20 pt-5'>
    <div className='bg-gray-100 h-[50px] w-[30.8%] '></div>
    </div>
    <div className='restaurants-list flex px-20  pt-6 grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 w-[100%]'>
        {Array(9).fill("").map((e, index) => (<div key={index} className='shimmer-card w-full h-[210px] bg-gray-100 '></div>))}
    </div>
    </>
    
  )
}
