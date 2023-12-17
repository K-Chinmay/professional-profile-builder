import React from 'react';
import { NavLink } from 'react-router-dom';
import Pic3 from "../../images/pic3.jpg";
import Pic5 from "../../images/pic5.jpg";
import NavLogin from '../Student/navLogin';
import Footer from '../Footer';
import Nav from './Nav';

const ResumePage = ()=>{
    return (
        <div>
        <NavLogin/>
        <div className="grid grid-cols-2 m-20">
          <div className="max-w-lg bg-white ml-10 rounded-lg  shadow-2xl dark:bg-white dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={Pic3} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-[#4da8da]">
                  Template 1 
                </h5>
              </a>
              
              <NavLink
                to="/student/resume/template1"
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#4da8da] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  dark:focus:ring-blue-800"
              >
                Resume
                <svg
                  aria-hidden="true"
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </NavLink>
            </div>
          </div>

          <div className="max-w-lg bg-white ml-10 rounded-lg shadow-2xl dark:bg-white ">
            <a href="#">
              <img className="rounded-t-lg" src={Pic5} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-[#4da8da]">
                  Template 2
                </h5>
              </a>
              <NavLink
                to="/student/resume/template2"
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#4da8da] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  dark:focus:ring-blue-800"
              >
                Resume
                <svg
                  aria-hidden="true"
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </NavLink>
            </div>
          </div>

          
        </div>
        <Footer/>
        </div>

    )
}

export default ResumePage;