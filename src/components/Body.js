import React from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Body = () => {
    const Approuter=createBrowserRouter([
       {
         path:"/",
         element:<Login/>
       },
       {
        path:"/browser",
        element:<Browse/>
       }
    ])
  return (
   <div>
    <RouterProvider router={Approuter}/>
  </div>
  )
}

export default Body