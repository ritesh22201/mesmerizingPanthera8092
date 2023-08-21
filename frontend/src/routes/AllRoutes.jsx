import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Home from '../pages/Home';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
    </Routes>
  )
}

export default AllRoutes;