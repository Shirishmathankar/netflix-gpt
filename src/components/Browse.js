import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowplayingmovies';
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcoming';
import { useSelector } from 'react-redux';
import store from '../utils/store';
import GptSearch from './GptSearch';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const selector=useSelector(store=>store.GPT.ToggleGpt)
  return (
    <div>
    <Header/>
    
     {(selector) ? <GptSearch/>:
      (<>
      <Maincontainer/>
      <Secondarycontainer/>
      </>
      )}
  
    
    </div>
  )
}

export default Browse