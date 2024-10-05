import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import Gptslice from "./Gptslice";
import LangaugeSlice from "./LangaugeSlice";

const store=configureStore(
    {
        reducer:{
           user:userSlice,
           movies:movieSlice,
           GPT:Gptslice,
           lang:LangaugeSlice
        }
    }
)
export default store