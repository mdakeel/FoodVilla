import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

export const Error = () => {
    // const err = useRouteError();
    const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back one step in history
  };

  return (
    <div className='h-screen flex flex-col items-center space-y-2 justify-center'>
      <h1 className='text-5xl font-extrabold'>Oops!!</h1>
      <h2 className='text-2xl font-medium'>Something went wrong!!</h2>
      
        <h2 className='text-lg font-medium'>
          {/* {err.status + " "  + err.statusText} */}
        </h2>
 
      <button onClick={handleGoBack} className='text-lg text-blue-500 hover:text-blue-700 font-medium underline cursor-pointer'>
        Go Back
      </button>
    </div>
  );
};

