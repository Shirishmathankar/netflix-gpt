import React from 'react'
import Videotitle from './videotitle'
import Backgroundvideo from './backgroundvideo'
import { useSelector } from 'react-redux'
import store from '../utils/store'

const Maincontainer = () => {
  const movie=useSelector(store=>store.movies?.PlayingMovies);
  if(!movie) return null;
  const mainmovie=movie[0];
  
  
  return (
    <div>
      <Videotitle title={mainmovie.title} overview={mainmovie.overview}/>
      <Backgroundvideo id={mainmovie.id}/>
    </div>
  )
}

export default Maincontainer