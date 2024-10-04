import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/contants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/movieSlice";
const usePopularMovies=()=>{
   const dispatch=useDispatch();
    const getPopularMovies= async ()=>{
        fetch('https://api.themoviedb.org/3/movie/popular', API_OPTIONS)
        .then(response => response.json())
        .then(response =>dispatch(addPopularMovies(response.results)))
        .catch(err => console.error(err));
        
    }
 
    useEffect(()=>{
        getPopularMovies();
    },[]);

}
export default usePopularMovies;