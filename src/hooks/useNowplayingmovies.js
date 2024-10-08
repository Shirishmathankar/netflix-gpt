import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/contants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
const useNowPlayingMovies=()=>{
   const dispatch=useDispatch();
    const getNowPlayingMovies= async ()=>{
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
        .then(response => response.json())
        .then(response =>dispatch(addNowPlayingMovies(response.results)))
        .catch(err => console.error(err));
      
    }
 
    useEffect(()=>{
        getNowPlayingMovies();
    },[]);

}
export default useNowPlayingMovies;