import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowplayingmovies';
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcoming';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
    <Header/>
    <Maincontainer/>
    <Secondarycontainer/>
    </div>
  )
}

export default Browse