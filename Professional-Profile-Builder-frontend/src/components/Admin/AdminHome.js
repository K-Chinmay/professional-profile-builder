import React from "react";
import { NavLink } from "react-router-dom";

import Admin  from "../../images/Admin.gif";
import loginlogo from "../../images/loginlogo.png";
import signuplogo from "../../images/signup.png";
import Footer from "../Footer";
import Nav from "./Nav";
import { Sidebar } from "rsuite";
const Home = () => {
  return (
    <div>
    <Nav/>
    <Sidebar/>
      <header
        id="header"
        className="header py-20 text-center md:pt-28 lg:text-left xl:pt-30 xl:pb-32 bg-white p-8"
      >
      
        <div className="container  sm:px-8 lg:grid lg:grid-cols-3 lg:gap-x-2 ">
        <div className="xl:text-left col-span-1">
            <img
              className="inline w-[600px] h-full "
              src={Admin}
              alt="alternative "
            />
          </div>
          <div className="mb-16 lg:mt-24 xl:mt-20 xl:mr-4 col-span-2">
            <h1 className="text-left ml-32 font-sans-serif text-[#4da8da] font-bold xs:text-[48px] text-[76px] xs:leading-[76.8px] leading-[60.8px] mb-8">
              Admin Section
            </h1>
            <h1 className="h1-large font-serif mb-5 font-semibold text-xl text-left ml-32 text-gray-400">
              Easily analyze data with just a few clicks
            </h1>
            <p className="p-large mb-8 font-serif font-bold text-lg text-left text-gray-400 ml-32">
              It is easy to view the summary of students who are using this
              website by entering the criteria you need. Giving the filtering
              criteria to the vast database of students allows you to extract
              valuable information in the form of tabulated summaries.
            </p>

            <div className="justify-left sm:ml-20 md:ml-auto mt-5 flex ml-16">
              <p className="m-8 ml-32 justify-left ">
                <NavLink
                  to="/admin/login"
                  className=" flex py-4 px-12 font-poppins font-bold text-[20px] bg-[#4da8da] text-white rounded-[10px] outline-none "
                >
                  Login
                </NavLink>
              </p>
              <p className="m-8 ">
                <NavLink
                  to="/admin/signup"
                  className="flex py-4 px-6 font-poppins font-bold text-[20px] bg-white text-[#4da8da] rounded-[10px] outline-none "
                >
                  Signup
                </NavLink>
              </p>
            </div>
          </div>
          
        </div>
      </header>
      <Footer/>
    </div>
  );
};

export default Home;
