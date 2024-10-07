import React from 'react'
import { THUMBNAIL } from '../utils/contants'
const Moviecard = ({Poster_Path}) => {
   
  return (
        <div className='h-45 w-20 md:w-40 p-1'>
            <img className='h-full w-full' alt="card" src={THUMBNAIL+Poster_Path}/>
        </div>
  )
}

export default Moviecard