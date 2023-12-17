

import React from 'react'
import { Route, Routes } from "react-router-dom";




import Login from "../../Student/login1";
import Signup from "../../Student/Signup";
// import Logout from "../../Logout";
// import RegistrationForm from "../RegistrationForm";
// import Resume from "../../Student/Resume";
import Home from '../../Student/Home';
// import RegistrationForm from '../../Student/chinmay2';
function Student() {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/student/home" element={<Home/>}/>
        <Route path="/student/login" element={<Login />} />
        <Route path="/student/signup" element={<Signup />} />


      </Routes>
  )
}

export default Student;