import React from 'react'

export const validation = (email,password,name,islogin) => {
    if(!/^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email)){
        return "email is not valid"
    }
    if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password))
    {
        return "password is not valid"
    }
    if(islogin&&!/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name))
    {
        return "name is not valid"
    }
   return null;
}

