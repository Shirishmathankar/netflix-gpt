import React from 'react'

const Videotitle = ({title,overview}) => {
  return (
    <div className='absolute text-white pt-40 px-12 w-screen aspect-video bg-gradient-to-r from-black'>
      <h1 className="text-6xl font-bold  ">{title}</h1>
      <p className=" p-4 text-lg w-1/4">{overview}</p>
      <button className='mx-2 p-2 text-black m-2 bg-white rounded-md w-1/12 hover:opacity-70'>Play </button>
      <button className='p-2 text-black bg-gray-400 hover:opacity-50 rounded-md w-1/12'>More Info</button>
   </div>
    
  )
}

export default Videotitle
