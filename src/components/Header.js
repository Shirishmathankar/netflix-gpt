import { onAuthStateChanged,signOut} from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import {  useNavigate } from 'react-router-dom';

const Header = () => {
    const Navigate=useNavigate();
    const dispatch=useDispatch();
    const selector=useSelector(store=>store.user);
    const signout=()=>{
        
        signOut(auth).then(() => {
      
       }).catch((error) => {
        Navigate("/error")
      });

    }
    useEffect(()=>{
        
            onAuthStateChanged(auth, (user) => {
             if (user) {
    
              const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
              Navigate("/browser")
    
              } else {
               dispatch(removeUser());
                Navigate("/")
              }
       });

    }, []);
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
        <img className=' md:w-44 sm:w-30 w-24'
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        />
        {selector&&<button className='text-red-700 font-bold text-lg' onClick={signout}>(sign out)</button>}
    </div>
  )
}

export default Header