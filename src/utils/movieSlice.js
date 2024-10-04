import { createSlice } from "@reduxjs/toolkit";


const movieSlice=createSlice({
   
   name:"movies",
   initialState:{
     PlayingMovies:null,
     PlayingTrailor:null,
     PopularMovies:null,
     TopRatedMovies:null,
     UpcomingMovies:null
   },
   reducers:{
       addNowPlayingMovies(state,action)
       {
          state.PlayingMovies=action.payload;
       },
       addTrailor(state,action)
       {
          state.PlayingTrailor=action.payload;
       },
       addPopularMovies(state,action)
       {
         state.PopularMovies=action.payload;
       },
       addTopRated(state,action)
       {
         state.TopRatedMovies=action.payload;
       },
       addUpcoming(state,action)
       {
         state.UpcomingMovies=action.payload;
       }
   } 

});
export const { addNowPlayingMovies,addTrailor,addPopularMovies,addTopRated ,addUpcoming} = movieSlice.actions
export default movieSlice.reducer;
