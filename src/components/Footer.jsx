import React, { useContext } from 'react'
import UserContext from '../utils/userContext'

export const Footer = () => {

  const {user} = useContext(UserContext)
  return (
    <div className='pt-5 pb-10 px-20'>
      <p>This site is developed By {user.name}, {user.email}</p>
    </div>
  )
}
