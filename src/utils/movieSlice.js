import { createSlice } from "@reduxjs/toolkit";


const movieSlice=createSlice({
   
   name:"movies",
   initialState:{
     PlayingMovies:null,
     PlayingTrailor:null
   },
   reducers:{
       addNowPlayingMovies(state,action)
       {
          state.PlayingMovies=action.payload;
       },
       addTrailor(state,action)
       {
          state.PlayingTrailor=action.payload;
       }
   } 

});
export const { addNowPlayingMovies,addTrailor } = movieSlice.actions
export default movieSlice.reducer;
