import { onAuthStateChanged,signOut} from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import {  useNavigate } from 'react-router-dom';
import { getGpt } from '../utils/Gptslice';
import { LANGUAGES } from '../utils/contants';
import { addLanguages } from '../utils/LangaugeSlice';

const Header = () => {
    const Navigate=useNavigate();
    const dispatch=useDispatch();
    const isThere=useSelector(store=>store.GPT.ToggleGpt)
    const SelectedLang=(e)=>{
      dispatch(addLanguages(e.target.value))
    } 
    const Gptsearch=()=>{
        dispatch(getGpt())
    }
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
        alt="logo"        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        
        />
        <div>
         { isThere&&
          <select className='bg-gray-600 p-3 m-2 rounded-md' onChange={SelectedLang}>
            { 
              LANGUAGES.map(language=><option  key={language.identifier} value={language.identifier}>{language.name}</option>)  
            }
            
          </select> 
         } 
        {selector&&<button className='bg-purple-500 text-white p-2 m-2 my-2 rounded-md font-bold text-lg z-10' onClick={Gptsearch}>{isThere?"Homepage":"GptSearch"}</button>}
        {selector&&<button className='text-white bg-red-600 p-2 m-2 rounded-md font-bold text-lg z-10' onClick={signout}>(sign out)</button>}
        </div>
    </div>
  )
}

export default Header