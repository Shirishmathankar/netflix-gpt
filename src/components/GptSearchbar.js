import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/LanguageConstant'

const GptSearchbar = () => {
    const selector=useSelector(store=>store.lang.language)
    const handleGptSearch=()=>{
       
    }

  return (
    <div className='pt-[40%] md:pt-[10%] flex justify-center '>
      <form className='w-full md:w-1/2 bg-black grid grid-cols-12 p-2' onSubmit={(e)=>e.preventDefault()}>
         <input type="text" placeholder={lang[selector].placeholder} className='p-4 m-4  col-span-9'/>
         <button className=' m-2  text-white col-span-3 bg-red-600 rounded-md' onClick={handleGptSearch}>{lang[selector].search}</button>    
      </form>
    </div>
  )
}

export default GptSearchbar