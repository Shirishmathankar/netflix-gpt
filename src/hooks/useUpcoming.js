import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/contants";
import { useEffect } from "react";
import {   addUpcoming } from "../utils/movieSlice";
const useUpcomingMovies=()=>{
   const dispatch=useDispatch();
    const getUpcomingMovies= async ()=>{
        fetch('https://api.themoviedb.org/3/movie/upcoming', API_OPTIONS)
        .then(response => response.json())
        .then(response =>dispatch(addUpcoming(response.results)))
        .catch(err => console.error(err));
        
    }
 
    useEffect(()=>{
        getUpcomingMovies();
    },[]);

}
export default useUpcomingMovies;