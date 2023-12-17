import React from "react";
import { NavLink } from "react-router-dom";
import Signup from "../../images/finalsignup.png";
import loginlogo  from "../../images/finallogin.png";
import StudentHome from "../../images/studentsection.jpg";
import Nav from "./Nav";
import Footer from "../Footer";
const Home = () => {
  return (
    <div>
    <Nav></Nav>
      <header
        id="header"
        className="header py-20 text-center md:pt-28 lg:text-left xl:pt-20 xl:pb-32 bg-white"
      >
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8 ">
          <div className="mb-16 lg:mt-24 xl:mt-20 xl:mr-4 ">
            <h1 className="text-left font-sans font-bold xs:text-[48px] text-[72px] ml-16 xs:leading-[76.8px] leading-[60.8px] mb-4 text-[#4da8da]">
              Student Section
            </h1>
            <h1 className="h1-large font-sans mb-5 mt-8 font-semibold text-xl text-left ml-16 text-gray-400">
              Easily analyze data with just a few clicks
            </h1>
            <p className="p-large mb-8 font-bold text-lg text-left pl-16 text-gray-400">
              It is easy to view the summary of students who are using this
              website by entering the criteria you need. Giving the filtering
              criteria to the vast database of students allows you to extract
              valuable information in the form of tabulated summaries.
            </p>

            <div className="justify-left sm:ml-20 md:ml-auto mt-5 flex ">
              <p className="mt-4 ml-16 justify-left ">
                <NavLink
                  to="/student/login"
                  className=" flex py-4 px-6 font-poppins font-medium text-[18px] bg-[#4da8da] text-white rounded-[10px] outline-none shadow-2xl"
                >
                  <img src={loginlogo} alt="student" className="w-8 h-8 mr-2" />
                  Login
                </NavLink>
              </p>
              <p className="mt-4 ml-16 ">
                <NavLink
                  to="/student/signup"
                  className="flex py-4 pb-0 px-6 font-poppins font-bold text-[18px] border-[#4da8da] bg-white text-[#4da8da] rounded-[10px] outline-none "
                >
                  Signup
                </NavLink>
              </p>
            </div>
          </div>
          <div className="xl:text-right h-full w-full ml-0 mt-0">
            <img
              className="inline w-full h-full"
              src={StudentHome}
              alt="alternative "
            />
          </div>
        </div>
      </header>
      <Footer/>
    </div>
  );
};

export default Home;
