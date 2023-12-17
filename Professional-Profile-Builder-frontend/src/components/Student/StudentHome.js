import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dhruva from "../../images/Dhruva.jpg";
import tcs from "../../images/TCS.jpg";
import FinIQ from "../../images/finlq.jpg";
import Placement from "../../images/placement.gif"
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../../images/fill.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import CarouselCard from "./carousel";
import { Autoplay, Navigation, Pagination } from "swiper";
import { NavLink } from "react-router-dom";
import fillform from "../../images/fillform.jpg";
import fill from "../../images/fill.png";

import update from "../../images/update.png";
import resume from "../../images/resume.png";
import Building from "../../images/Building.gif";
import Nav from "./Nav";
import Footer from "../Footer";
import NavLogin from "./navLogin";
function StudentHome() {
  const Navigate = useNavigate();
  const [userData, setUserData] = useState({ name: "" });
  const [userCompany, setUserCompany] = useState([]);
  const callStudentHomePage = async () => {
    try {
      const res = await fetch("/studenthome", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserData({ ...userData, name: data.name });
      console.log(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      Navigate("/student/login");
    }
  };
  const callCompanyPage = async () => {
    try {
      const res = await fetch("/companies", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserCompany(data);
            console.log(data);
      console.log(data.length);
      // for (var i = 0; i < data.length; i++) {
        // var temp=[...userCompany];
        // temp.push({
        //   companyname: data[i].companyname,
        //   dateofvisit: data[i].dateofvisit,
        //   companyhr: data[i].companyhr,
        //   companyphone: data[i].companyphone,
        //   collegecoordinator: data[i].collegecoordinator
        // });
        // console.log(temp);
        // setUserCompany(temp);
        // setUserCompany([...userCompany,
        //   {
        //     companyname: data[i].companyname,
        //     dateofvisit: data[i].dateofvisit,
        //     companyhr: data[i].companyhr,
        //     companyphone: data[i].companyphone,
        //     collegecoordinator: data[i].collegecoordinator
        //   },
        //   {
        //     companyname: "kjjjdsjd",
        //     dateofvisit: "jsdksej",
        //     companyhr: "ajdj",
        //     companyphone: "wjdjwjd",
        //     collegecoordinator: "sjdhsdkjs"
        //   },
        // ]);
        console.log(userCompany);
      // }

      console.log(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      // Navigate("/student/login");
    }
  };

  useEffect(() => {
    callStudentHomePage();
    callCompanyPage();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <NavLogin />
      <section>
        <div className="h-full inset-y-0 grid grid-cols-2 bg-white">
          <div
            id="header"
            className="header h-full  py-20  text-center md:pt-28 lg:text-center xl:pt-30 xl:pb-32 bg-white col-span-1"
          >
            <div className="container px-4 sm:px-8 lg:gap-x-8 ">
              <div className="mb-8 lg:mt-24 xl:mt-20 xl:mr-4 ">
                <h1 className="text-left font-sans font-bold pl-12 xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[50.8px] mb-8 text-[#4da8da]">
                  Hello {userData.name} !!!!
                </h1>
                <h1
                  name="name"
                  className="h1-large font-sans mb-5 font-bold text-2xl text-left"
                ></h1>
                <p className="p-large mb-8 font-bold text-lg text-left ml-12 text-[#4da8da]">
                  Welcome to Profile Builder Platform where you can Effortlessly
                  make a job-worthy resume and cover letter that gets you hired
                  faster . Fill the form and update your details as year by year
                  and also update your skills .
                </p>
              </div>
              <div className="justify-left mt-5 flex">
                <p className="mt-8 ml-0 justify-left ">
                  <NavLink
                    to="/student/registration"
                    className=" flex py-4 px-4 ml-12 font-poppins font-bold text-[18px] border-2 border-[#4da8da] text-[#4da8da] bg-gray-100 rounded-md outline-none "
                  >
                    <img src={fill} alt="student" className="w-8 h-8 mr-2" />
                    Fill Form
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
          <div className=" mt-8 xl:text-right h-[600px] w-[800px]  col-span-1 col-start-2 flex">
            <img
              src={fillform}
              alt="student"
              className=" inline w-[800px] h-[600px] "
            />
          </div>
        </div>
      </section>

      <section className="bg-[#4da8da]" >
        <div className="h-full inset-y-0 grid grid-cols-2 bg-[#4da8da]">
          <div className=" m-4 xl:text-right h-[600px] w-[800px] bg-[#4da8da] col-span-1 col-start-1 flex">
            <img
              src={fillform}
              alt="student"
              className=" inline w-[800px] h-[600px] "
            />
          </div>
          <div
            id="header"
            className="header h-full  py-8  text-center md:pt-8 lg:text-center xl:pt-8 xl:pb-32 bg-[#4da8da] col-span-1 col-start-2 flex"
          >
            <div className="container px-2 sm:px-8 lg:gap-x-8 ">
              <div className="mb-16 lg:mt-8 xl:mt-20 xl:mr-16 lg:mr-20 ">
                <h1 className="text-right font-sans font-bold  xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[50.8px] mb-4 text-white">
                  Get Your Resume Ready !!!
                </h1>
                <h1
                  name="name"
                  className="h1-large font-sans mb-5 font-bold text-2xl text-right"
                ></h1>
                <p className="p-large mt-12 font-bold text-lg text-left ml-28 text-white">
                  Click This Button and get your Resume Ready Automatically !! .
                  You will get many templates you can select any of it you want
                  .
                </p>
              </div>
              <div className="justify-left sm:ml-20 md:ml-28 mt-5 flex grid-cols-3">
                <p className="justify-left col-span-1">
                  <NavLink
                    to="/student/resume"
                    className=" flex py-4 px-6 font-poppins font-bold text-[18px] text-[#4da8da] bg-gray-100 border-2 border-white rounded-md outline-none "
                  >
                    <img src={fill} alt="student" className="w-8 h-8 mr-2" />
                    Resume
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="h-full inset-y-0 grid grid-cols-2 bg-white">
          <div
            id="header"
            className="header h-full  py-20  text-center md:pt-28 lg:text-center xl:pt-30 xl:pb-32 bg-white col-span-1"
          >
            <div className="container px-4 sm:px-8 lg:gap-x-8 ">
              <div className="mb-8 lg:mt-24 xl:mt-20 xl:mr-4 ">
                <h1 className="text-left font-sans font-bold pl-12 xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[50.8px] mb-8 text-[#4da8da]">
                  Update About Your Placement Status !!!
                </h1>
                <h1
                  name="name"
                  className="h1-large font-sans mb-5 font-bold text-2xl text-center"
                ></h1>
                <p className="p-large mb-8 font-bold text-lg text-left ml-12 text-[#4da8da]">
                  Welcome to Profile Builder Platform where you can Effortlessly
                  make a job-worthy resume and cover letter that gets you hired
                  faster .
                </p>
              </div>
              <div className="justify-left sm:ml-20 md:ml-12 mt-5 flex">
                <p className="mt-8 ml-0 justify-left ">
                  <NavLink
                    to="/student/placement"
                    className=" flex py-4 px-6 font-poppins font-bold text-[18px] text-[#4da8da] bg-gray-100 border-2 border-[#4da8da] rounded-md outline-none "
                  >
                    <img src={fill} alt="student" className="w-8 h-8 mr-2 mt-0" />
                    Update About Placement Status
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
          <div className=" mt-8 xl:text-right  h-[600px] w-[800px]  col-span-1 col-start-2 flex">
            <img
              src={Placement}
              alt="student"
              className=" inline w-[800px] h-[600px] "
            />
          </div>
        </div>
      </section>

      <section className="bg-[#4da8da]">
        <h1 className="text-white font-bold text-4xl ml-20 p-2">
          Companies to Visit at KK Wagh!!!
        </h1>
        <div className="h-screen flex items-center justify-center ">
          <div className="max-w-7xl">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              onSlideChange={() => console.log("slide change")}
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
              }}
              modules={[Autoplay, Navigation, Pagination]}
            >
              {console.log(userCompany)}
              {userCompany.map((card, i) => (
                
                <SwiperSlide key={i}>
                  <div className="max-w-sm bg-white rounded-lg shadow-2xl dark:bg-white pb-4 mb-2 mt-4">
                    <a href="#">
                      <img
                        className="m-8 w-[300px] h-[300px] rounded-xl shadow-sm "
                        src={Building}
                        alt=""
                      />
                    </a>
                    <div className="pl-5 pr-5  pb-2">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-[#4da8da]">
                          {card.companyname}
                        </h5>
                        <hr className="w-28 mb-2 border-4 rounded-lg border-blue-400" />
                      </a>
                      <div className="grid grid-cols-2">
                        <div className="col-span-1 col-start-1">
                          <p className="mt-3 text-[#4da8da]">
                            <b>Criteria : {card.companyhr} </b>
                          </p>
                          <p className="mt-3 text-[#4da8da]">
                            <b>Date : {card.dateofvisit}</b>
                          </p>
                        </div>
                        <div className="col-span-1 col-start-2">
                          <p className="mt-3 text-[#4da8da]">
                            <b>Contact : {card.companyphone}</b>
                          </p>
                          <p className="mt-3 text-[#4da8da]">
                            <b>Coordinator : {card.collegecoordinator}</b>
                          </p>
                        </div>
                      </div>

                      <a
                        href="https://www.tcs.com/"
                        className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#4da8da] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#4da8da] dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-8"
                      >
                        CheckOut
                        <svg
                          aria-hidden="true"
                          className="ml-2 -mr-1 w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      
      <Footer />
    </div>
  );
}

export default StudentHome;
