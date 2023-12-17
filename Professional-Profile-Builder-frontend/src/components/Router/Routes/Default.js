import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Home";
import StudentHome from "../../Student/Home";
import AdminHome from "../../Admin/AdminHome";
import StudLogin from "../../Student/login1";
import StudSignup from "../../Student/Signup";
import RegistrationForm from "../../Student/RegistrationForm";
import Resume from "../../Student/Resume";
import About from "../../About";
import Contact from "../../Contact";
import AdminLogin from "../../Admin/Login";
import AdminSignup from "../../Admin/Signup";
import StudLogout from "../../Student/Logout";
import Home1 from "../../Admin/Home1";
import LoginHome from "../../Student/StudentHome";
import AdminLogout from "../../Admin/Logout";
import AdminCompany from "../../Admin/Company";
import Resume1 from "../../Admin/Resume";
import Mail from "../../Student/sendmail";
import Company from "../../Admin/Company";
import ResumePage from "../../Student/ResumePage";
import Resume2 from "../../Student/Resume2";
import News from "../../Admin/News";
import PlacementForm from "../../Student/PlacementForm";
import Dashboard from "../../Admin/Dashboard";
import Experience from "../../Student/Experience";
import FileUpload from "../../Admin/FileUpload";
import TestDashboard from "../../Admin/TestDashboard";
const Default = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<TestDashboard />} />

      <Route path="/student/home" element={<StudentHome />} />
      <Route path="/student/login" element={<StudLogin />} />
      <Route path="/student/logout" element={<StudLogout />} />
      <Route path="/student/home1" element={<LoginHome />} />

      <Route path="/student/signup" element={<StudSignup />} />
      <Route path="/student/registration" element={<RegistrationForm />} />
      <Route path="/student/resume/template1" element={<Resume />} />
      <Route path="/student/resume/template2" element={<Resume2 />} />
      <Route path="/student/resume" element={<ResumePage />} />
      <Route path="/student/mail" element={<Mail />} />
      <Route path="/student/placement" element={<PlacementForm />} />
      <Route path="/student/alumniaexperience" element={<Experience />} />

      <Route path="/admin/home" element={<AdminHome />} />
      <Route path="/admin/home1" element={<Home1 />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/signup" element={<AdminSignup />} />
      <Route path="/admin/logout" element={<AdminLogout />} />
      <Route path="/admin/company" element={<Company />} />
      <Route path="/admin/resume/:id" element={<Resume1 />} />
      <Route path="/admin/news" element={<News />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/fileupload" element={<FileUpload />} />
    </Routes>
  );
};

export default Default;
