import { useEffect } from "react";
import { API_OPTIONS } from "../utils/contants"
import { useDispatch } from "react-redux";
import { addTrailor } from "../utils/movieSlice";
const useTrailor=(id)=>{
  const dispatch=useDispatch();
   const getTrailor=  async ()=>{

             const data=await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US',API_OPTIONS)
            const json=await data.json();
            const filter=json.results.filter((video)=>video.type==="Trailer")
            const trailor=filter.length?filter[0]:json.result[0];
            dispatch(addTrailor(trailor));

    }

    useEffect(()=>{
        getTrailor()
    },[])
  
}
export default useTrailor 