import React from 'react'
import useTrailor from '../hooks/useTrailor'
import { useSelector } from 'react-redux';
import store from '../utils/store';

const Backgroundvideo = ({id}) => {
   useTrailor(id);
   const Trailor=useSelector(store=>store.movies.PlayingTrailor);
   const key=Trailor?.key;

  return (
    <div className='h-full' >
      <iframe className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/"+key+"?&autoplay=1&mute=1&?modestbranding=1&rel=0&iv_load_policy=3"} 
        
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
        allowfullscreen>
        
      </iframe>
          
    </div>
  )
}

export default Backgroundvideo