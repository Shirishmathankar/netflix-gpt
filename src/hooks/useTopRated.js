import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/contants";
import { useEffect } from "react";
import {  addTopRated } from "../utils/movieSlice";
const useTopRatedMovies=()=>{
   const dispatch=useDispatch();
    const getTopRatedMovies= async ()=>{
        fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS)
        .then(response => response.json())
        .then(response =>dispatch(addTopRated(response.results)))
        .catch(err => console.error(err));
        
    }
 
    useEffect(()=>{
        getTopRatedMovies();
    },[]);

}
export default useTopRatedMovies;