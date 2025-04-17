import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from "../pages/Home"
import Cart from "../pages/Cart"
import Favorite from "../pages/Favorite"
import Layout from '../components/Layout'
import Notfound from '../components/Notfound'
const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/favorite' element={<Favorite/>}/>
        </Route>
        <Route path='*' Component={<Notfound/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default Router