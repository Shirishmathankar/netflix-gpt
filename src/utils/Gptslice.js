import { createSlice } from "@reduxjs/toolkit";

const Gptslice=createSlice(
  {  
  name:"GPT",
  initialState:{
    ToggleGpt:false,
  },
  reducers:{
    getGpt(state)
    {
      state.ToggleGpt=!state.ToggleGpt
    }
  }

  }
)
export const {getGpt} = Gptslice.actions
export default Gptslice.reducer
