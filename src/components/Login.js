import React, { useRef, useState } from 'react'
import Header from './Header'
import { validation } from '../utils/validation'
import {auth} from '../utils/firebase'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';



const Login = () => {
    const dispatch=useDispatch();
    const [islogin,setislogin]=useState(true);
    const password=useRef(null);
    const email=useRef(null);
    const name=useRef(null);
    const [errmessage,seterrormessage]=useState(null)

    const isValid=()=>{
       const message= validation(email?.current?.value,
        password?.current?.value,
        name?.current?.value,
        !islogin)
       seterrormessage(message);

       if(message)return;
       
       if(!islogin)
        {
           
            createUserWithEmailAndPassword(auth,email?.current?.value,
                password?.current?.value)
              .then((userCredential) => {
                
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name?.current?.value,
                     photoURL: "https://example.com/jane-q-user/profile.jpg"
                  }).then(() => {
                    
                    const {uid,email,displayName,photURl} = auth.currentUser;
                    dispatch(addUser({uid:uid,email:email,displayName:displayName,photURl:photURl}));
                  }).catch((error) => {
                    
                  });
                 
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                seterrormessage(errorCode+" "+errorMessage)
              });
            
         
        }
        else
        {
            signInWithEmailAndPassword(auth,
                email?.current?.value,
                password?.current?.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user)
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              seterrormessage(errorCode+" "+errorMessage)
            });
        }    
    }

    const isToggle=()=>{
        setislogin(!islogin); 

    }
   
   
  return (
    <>
    <div className='relative h-screen bg-black'>
       <Header/>
       <div className=' hidden sm:inline-flex absolute inset-0'> 
          <img className=' min-w-full h-full'
           alt="bg" src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_small.jpg"
          />
       </div>
       <div className='absolute  inset-0 flex justify-center flex-wrap items-center '>
          <form onSubmit={(e)=>e.preventDefault()} className=' w-full sm:w-3/12  bg-black  p-4 md:p-6 lg:p-12 text-white rounded-lg opacity-85'>
             <h1 className='font-bold text-lg'>{islogin?"Sign In":"Sign Up"}</h1>

                <input
                 type="text"
                 placeholder='user email' 
                 className=' p-2 my-2 w-full rounded-lg h-1/3 bg-gray-700 placeholder:capitalize' 
                 ref={email}
                 ></input>

                {!islogin&&<input 
                ref={name}
                type="text" 
                placeholder='name'
                className='p-2 my-2 w-full rounded-lg h-1/3 bg-gray-700 placeholder:capitalize' 
                ></input>}

                <input 
                type="password"
                placeholder='password'
                className='p-2 my-2 w-full rounded-lg bg-gray-700 h-1/3 placeholder:capitalize'
                ref={password}
                ></input>
              
               <p className='text-red-500 font-bold '>{errmessage}</p>
          
               <button 
               className='w-full bg-red-700 my-4 p-4 rounded-lg h-1/3 '  
               onClick={isValid}>
               {islogin?"Sign In":"sign Up"}
               </button>

              <h1 className='text-center'>OR</h1>

              <button 
              className='w-full bg-gray-700 my-4 p-4 rounded-lg h-1/3'>
              use sign in code
              </button>

              <h1 className='cursor-pointer' onClick={isToggle}>{islogin?"new to netflix? sign Up":"already a user Sign In"}</h1>
       </form>
      </div>
    </div>
    

    </>
  )
}

export default Login