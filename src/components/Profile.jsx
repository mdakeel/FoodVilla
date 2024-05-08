import React, { useEffect, useState } from 'react'

export const Profile = () => {
    const [profile, setProfile] = useState('');

    useEffect(() => {
        getProfileData();
    }, [])

    const getProfileData = async () => {
        const data = await fetch("https://api.github.com/users/mdakeel")
        const json = await data.json();
        // console.log(json)
        setProfile(json)
    }
  return (
    <div className='px-20 pt-10'>
     <h1 className='text-[30px] font-extrabold'>Profile Details</h1>
        <div className='flex  items-center w-[40%] mt-8 mb-8 border border-gray-300  w-[40%] shadow-xl max-h-[300px] min-h-[300px] hover:shadow-none transition-all duration-100 cursor-pointer '>
        
        <img src={profile.avatar_url} className='w-[300px] h-[300px] p-2' alt="" />
        <div className=' w-full pt-2 space-y-1 text-center '>
        <h1 className='text-[15px] font-medium text-gray-600'>{profile?.name}</h1>
        </div>
        </div>
    </div>
  )
}
