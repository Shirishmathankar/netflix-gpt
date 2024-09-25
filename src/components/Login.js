import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [islogin,setislogin]=useState(true);
    const isToggle=()=>{
        setislogin(!islogin);
    }

  return (
    <>
    <div >
       <Header/>
       <div className='absolute'> 
        <img className='min-w-full min-h-full'
         alt="bg" src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_small.jpg"
        />
       </div>
       <form className='absolute w-3/12  bg-black my-56 mx-auto left-0 right-0 p-12 text-white rounded-lg opacity-85'>
          <h1>{!islogin?"Sign In":"sign Up"}</h1>

          <input type="text" placeholder='user email' className='p-2 my-2 w-full rounded-lg bg-gray-700' ></input>
          {islogin&&<input type="text" placeholder='name' className='p-2 my-2 w-full rounded-lg bg-gray-700' ></input>}
          <input type="password" placeholder='password' className='p-2 my-2 w-full rounded-lg bg-gray-700'></input>
          <button className='w-full bg-red-700 my-4 p-4 rounded-lg'>{!islogin?"Sign In":"sign Up"}</button>
          <h1 className='text-center'>OR</h1>
          <button className='w-full bg-gray-700 my-4 p-4 rounded-lg'>use sign in code</button>
          
          <h1 className='cursor-pointer' onClick={isToggle}>{!islogin?"new to netflix? sign Up":"already a user Sign In"}</h1>
       </form>
    </div>
    

    </>
  )
}

export default Login