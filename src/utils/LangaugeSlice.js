import { createSlice } from "@reduxjs/toolkit";

const LanguageSlice=createSlice({
    name:"lang",
    initialState:{
        language:"en"
    },
    reducers:{
        addLanguages:(state,action)=>{
        state.language=action.payload;
        }
    }
})
export const {addLanguages}=LanguageSlice.actions
export default LanguageSlice.reducer