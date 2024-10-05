import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/LanguageConstant'

const GptSearchbar = () => {
    const selector=useSelector(store=>store.lang.language)

  return (
    <div className='pt-[10%] flex justify-center '>
      <form className='bg-black grid grid-cols-12'>
         <input type="text" placeholder={lang[selector].placeholder} className='p-4 m-4 pr-7 col-span-9'/>
         <button className='p-4 m-4 py-4 text-white col-span-3 bg-red-600 rounded-md'>{lang[selector].search}</button>    
      </form>
    </div>
  )
}

export default GptSearchbar