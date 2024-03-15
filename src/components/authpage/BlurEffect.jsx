import React from 'react'
import Register from './Register';
import Login from './Login';

function BlurEffect() {
  return <div className='w-screen h-screen  fixed top-0 left-0 bg-black bg-opacity-80 z-50 flex sm:justify-end justify-center sm:p-[50px] p-5 items-center'>
  <div className="auth-container sm:w-3/12 w-11/12">
  <Register/>
  
  </div>
  
  
  </div>;
}

export default BlurEffect;