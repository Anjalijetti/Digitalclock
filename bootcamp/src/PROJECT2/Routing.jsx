import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import LayOut from './LayOut';
import Product from './Product';
import Cart from './Cart';
import Order from './Order';
import CheckOut from './CheckOut';

let router=createBrowserRouter([
    {
        path:"/",
        element:<LayOut/>,
        children:[
            {
                index:true,
                element:<Product/>
            },
            {
                path:"/cart/:id",
                element:<Cart/>
            },
            {
                path:"/order",
                element:<Order/> 
            },
            {
                path:"/checkout",
                element:<CheckOut/>
            }
        ]
    }
])
const Routing = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default Routing