import React from 'react'
import Movielist from './movielist'
import { useSelector } from 'react-redux'
import store from '../utils/store'
import usePopularMovies from '../hooks/usePopularMovies'

const Secondarycontainer = () => {
  const movies=useSelector((store)=>store?.movies)
  
  return (
    <div className='bg-black'>
    <div className='-mt-0 md:-mt-64 relative z-20 pl-3 md:pl-12'>
        
      {movies.PlayingMovies&&<Movielist  title={"now playing movies"} movies={movies?.PlayingMovies}/>}
      {movies.PopularMovies&&<Movielist  title={"popular movies"} movies={movies?.PopularMovies}/>}
      {movies.TopRatedMovies&&<Movielist  title={"Top Rated"} movies={movies?.TopRatedMovies}/>}
      {movies.UpcomingMovies&&<Movielist  title={"upcoming"} movies={movies?.UpcomingMovies}/>}   
    </div>
    </div>
  )
}

export default Secondarycontainer