import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";


import aboutus from "../images/aboutus.jpg";
function About() {
  const Navigate = useNavigate();
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      Navigate("/");
    }
  };
  useEffect(() => {
    callAboutPage();
  }, []);
  return (
    <div className="bg-white ">
    <Nav/>
      <section className="text-black body-font h-full bg-white">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              src={aboutus}
              alt=""
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="lg:flex md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#4da8da]">
              About Us
            </h1>
            <h3 className="mb-3 leading-relaxed font-semibold font-lg">
              Profile Builder make it easy for you to create a resume profile.
            </h3>
            <p className="mb-8 leading-relaxed text-center ">
              Using our resume building service, you will generate job leads and
              be able to reach your potential employers. you can apply to the
              job openings that match your profile and stand the best chance of
              landing your dream job.
            </p>
            <div className="space-x-8">
              <i className="fa-brands fa-square-instagram text-3xl"></i>
              <i className="fa-brands fa-linkedin text-3xl"></i>
              <i className="fa-brands fa-square-twitter text-3xl"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
