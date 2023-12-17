

import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../../Admin/AdminHome';

function Admin() {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path='/admin/home' element={<Home/>}/>
        <Route path='/admin/login' element={<Login/>}/>
        <Route path='/admin/signup' element={<Signup/>}/>
        
      </Routes>
  )
}

export default Admin