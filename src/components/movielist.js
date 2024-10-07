import React from 'react'
import Moviecard from './moviecard'


const Movielist = ({title,movies}) => {
  
   
  return movies&&(
    <div className="p-2 bg-black">
      <h1 className="font-bold text:lg md:text-xl mb-4 text-white capitalize">{title}</h1>
      <div className='flex overflow-x-scroll'>
       <div className="flex">
    
        {movies.map((movie) => (
       
            <Moviecard key={movie?.id} Poster_Path={movie?.poster_path}/>
          
        ))}
      </div>
      </div>
    </div>
  )
}

export default Movielist