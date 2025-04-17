import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Favorite from "../pages/Favorite";
import Cart from "../pages/Cart";
import Notfound from "../components/Notfound";

export const router=createBrowserRouter([
    {
        path:"/",
        Component:Layout,
        children:[
            {
                path:'/',
                Component:Home
            },
            {
                path:'/favorite',
                Component:Favorite
            },
            {
                path:"/cart",
                Component:Cart
            }
        ]
    },
    {
        path:"*",
        Component:Notfound
    }
])