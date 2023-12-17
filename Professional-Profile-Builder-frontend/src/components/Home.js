import React from "react";
import landing from "../images/landing.jpg";
import admin from "../images/finaladmin.png";
import student from "../images/student.png";
import newadmin from "../images/newadmin.png";
import courosal1 from "../images/courosal1.png";
import courosal2 from "../images/courosal2.png";
import { NavLink } from "react-router-dom";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Nav from "./Nav";
import Footer from "./Footer";
function Home() {
  const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={courosal1} onDragStart={handleDragStart} role="presentation" />,
  <img src={courosal2} onDragStart={handleDragStart} role="presentation" />,
];
  return (
    <div className="overflow-x-hidden">
      <Nav />

      <section
        id="header"
        className="header py-20 text-center md:pt-28 lg:text-left xl:pt-20 xl:pb-32 bg-gray-100"
      >
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8 ">
          <div className="mb-16 lg:mt-24 xl:mt-20 xl:mr-4 ">
            <h1 className="text-left font-sans font-bold xs:text-[48px] text-[72px] ml-16 xs:leading-[76.8px] leading-[80.8px] mb-0 text-[#4da8da]">
              Profestional Profile Builder
            </h1>
            <h1 className="h1-large font-sans mt-8 mb-5 text-gray-400 text-lg text-left ml-16 ">
              We make it easy for you to create a resume profile
            </h1>
            <p className="p-large text-gray-400 mb-8 font-sans   text-lg text-left pl-16 ">
              our service, you will generate job leads and be able to reach your
              potential employers. you can apply to the job openings that match
              your profile and stand the best chance of landing your dream job.
            </p>

            <div className="justify-left sm:ml-20 md:ml-auto mt-5 ml-16 flex ">
              <p className="ml-16 mt-8 justify-left ">
                <NavLink
                  to="/student/home"
                  className=" flex py-4 px-6 font-poppins font-medium text-[18px] text-[#4da8da] bg-white border-2 border-[#4da8da] rounded-[10px] outline-none "
                >
                  Student Section
                </NavLink>
              </p>
              <p className="m-8 rounded-xl">
                <NavLink
                  to="/admin/home"
                  className="flex py-4 px-6 font-poppins font-medium text-[18px] text-white  bg-[#4da8da] rounded-[10px] outline-none shadow-2xl border-2 border-white "
                >
                  Admin Section
                </NavLink>
              </p>
            </div>
          </div>
          <div className="xl:text-right h-[600px] w-[600px] justify-end ml-24 mr-8 rounded-xl">
            <img
              className="inline w-[600px] h-[600px] rounded-xl"
              src={landing}
              alt="alternative "
            />
          </div>
        </div>
      </section>
      <section className="pl-60 pr-60 pt-20">
      <h1 className="mt-8 mb-8 font-bold font-sans text-gray-500 text-4xl">Our Recruters</h1>
      <AliceCarousel mouseTracking items={items} />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
