import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Products from './Products';
import Login from './Login';
import About from './About';
let r=createBrowserRouter([
   {
    path:"/",
    element:<Layout/>,
    children:[
        {
            path:"/home",
            element:<Home/>

        },
        {
            path:"/products",
            element:<Products/>

        },
        {
            path:"/login",
            element:<Login/>

        },
        {
            path:"/about",
            element:<About/>

        }
    ]
   } 
]);

const AppRoute = () => {
  return (
    <RouterProvider router={r}></RouterProvider>
  )
}

export default AppRoute