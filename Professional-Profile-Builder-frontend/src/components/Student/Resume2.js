import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import "./Resume.css";
import git from "../../images/git.png";
import linkedin from "../../images/linkedin.png";
import location from "../../images/location.png";
import phone from "../../images/phone.png";
import mail from "../../images/mail.png";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdContactPhone } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
function Resume2() {
  const [userData, setUserData] = useState({
    name: "",
    lastname: "",
    phone: "",
    gender: "",
    email: "",
    image: "",
    description: "",
    address: "",
    city: "",
    pincode: "",
    qualification: "",
    yearofgraduation: "",
    schoolname: "",
    ssc: "",
    jrcollegename: "",
    hsc: "",
    collegename: "",
    department: "",
    yearofstudy: "",
    roll: "",
    div: "",
    prn: "",
    currentcgpa: "",
    technicalskills: "",
    nontechnicalskills: "",
    linkedin: "",
    github: "",
    placmentstatus: "",
    companyname: "",
    salary: "",
  });

  const [projectFields, setProjectFields] = useState([]);
  const [awardFields, setAwardFields] = useState([{ award: "" }]);
  const userResume = async () => {
    try {
      const res = await fetch("/resume", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserData({
        ...userData,
        name: data.registrationform[0].name,
        lastname: data.registrationform[0].lastname,
        phone: data.registrationform[0].phone,
        gender: data.registrationform[0].gender,
        email: data.registrationform[0].email,
        image: data.registrationform[0].image,
        description: data.registrationform[0].description,
        address: data.registrationform[0].address,
        city: data.registrationform[0].city,
        pincode: data.registrationform[0].pincode,
        qualification: data.registrationform[0].qualification,
        yearofgraduation: data.registrationform[0].yearofgraduation,
        schoolname: data.registrationform[0].schoolname,
        ssc: data.registrationform[0].ssc,
        jrcollegename: data.registrationform[0].jrcollegename,
        hsc: data.registrationform[0].hsc,
        collegename: data.registrationform[0].collegename,
        department: data.registrationform[0].department,
        yearofstudy: data.registrationform[0].yearofstudy,
        roll: data.registrationform[0].roll,
        div: data.registrationform[0].div,
        prn: data.registrationform[0].prn,
        currentcgpa: data.registrationform[0].currentcgpa,
        technicalskills: data.registrationform[0].technicalskills,
        nontechnicalskills: data.registrationform[0].nontechnicalskills,
        linkedin: data.registrationform[0].linkedin,
        github: data.registrationform[0].github,
        placmentstatus: data.registrationform[0].placmentstatus,
        companyname: data.registrationform[0].companyname,
        salary: data.registrationform[0].salary,
      });
      let projectFieldData = [];
      for (let i = 0; i < data.projects.length; i++) {
        projectFieldData.push({
          title: data.projects[i].title,
          projectdescription: data.projects[i].projectdescription,
          projectlink: data.projects[i].projectlink,
        });

        console.log(data.projects[i]);
      }
      setProjectFields(projectFieldData);
      let awardFieldData = [];
      for (var i = 0; i < data.acheivements.length; i++) {
        awardFieldData.push({
          award: data.acheivements[i].award,
        });
        setAwardFields(awardFieldData);
      }

      // console.log(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    const input = document.getElementById("to_print");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("/student/resume");
      const pdf = new jsPDF();
      var width = pdf.internal.pageSize.getWidth();
      var height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 0, 0, width, height);
      pdf.save(Resume2.pdf);
    });
  };
  useEffect(() => {
    userResume();
  }, []);
  console.log(projectFields);
  return (
    <div>
      <Nav />
      <div className="ml-60 mr-60 mt-20  shadow-2xl" id="to_print">
        <div className="flex justify-center mt-5">
          <div className="bg-blue-900 w-1/8 p-10 h-auto">
            <div className="flex items-center justify-center mb-10">
              <img
                src={userData.image}
                alt="image"
                class="rounded-full w-32 border-2 border-gray-300"
              />
            </div>
            <h1 className="text-black uppercase  text-xl font-bold">Contact</h1>
            <hr className="w-1/6 mb-5" />
            <div className="grid grid-cols-6">
              <HiOutlineMail size={30} className="col-span-1 text-white" />
              <h1 className="text-white text-md py-1 ml-2.5 col-span-5">
                {userData.email}
              </h1>
            </div>
            <div className="grid grid-cols-6">
              <MdContactPhone size={30} className="col-span-1 text-white" />
              <h1 className="text-white text-md py-1 ml-2.5 col-span-5">
                {userData.phone}
              </h1>
            </div>
            <div className="grid grid-cols-6">
              <HiLocationMarker size={30} className="col-span-1 text-white" />
              <h1 className="text-white text-md py-1 ml-2.5 col-span-5">
                {userData.address}
              </h1>
            </div>

            <div className="grid grid-cols-6">
              <FaLinkedin size={30} className="col-span-1 text-white" />
              <h1 className="text-white py-1 text-md ml-2.5 col-span-5">
                {userData.linkedin}
              </h1>
            </div>
            <div className="grid grid-cols-6 mt-[5px]">
              <FaGithub size={30} className="col-span-1 text-white" />
              <h1 className="text-white pl-1 text-md  ml-2.5 col-span-5">
                {userData.github}
              </h1>
            </div>
            <hr className="my-5" />
            <h1 className="text-black text-xl uppercase  font-bold">
              Education
            </h1>
            <hr className="mb-5 w-1/3" />
            <h1 className="text-white pb-3 font-bold text-md uppercase tracking-wider">
              Undergraduation
            </h1>
            <h1 className="text-white">
              <span className="text-white text-md">{userData.collegename}</span>
              ,{" "}
              <span className="text-white text-md">{userData.yearofstudy}</span>{" "}
              / {userData.yearofgraduation}
            </h1>
            <h1 className="text-white text-md">
              CGPA : <span>{userData.currentcgpa}</span>
            </h1>
            <br />
            <h1 className="text-white pb-3 font-bold text-md uppercase tracking-wider">
              HSC
            </h1>
            <h1 className="text-white text-md">
              <span className="">{userData.jrcollegename}</span>,{" "}
            </h1>
            <h1 className="text-white text-md">
              Percentage : <span>{userData.hsc}</span>
            </h1>
            <br />
            <h1 className="text-white pb-3 font-bold text-md uppercase tracking-wider">
              SSC
            </h1>
            <h1 className="text-white text-md">
              <span className="">{userData.schoolname}</span>,{" "}
            </h1>
            <h1 className="text-white text-md ">
              Percentage : <span>{userData.ssc}</span>
            </h1>
            <br />
            <hr className="my-5" />
            <h1 className="text-black text-xl uppercase  font-bold">
              TECHNICAL SKILLS
            </h1>
            <hr className="w-1/6 mb-5" />
            <ul>
              <li className="text-white text-md list-disc ml-4">
                {userData.technicalskills}
              </li>
            </ul>
            <hr className="my-5" />
            <h1 className="uppercase text-black font-bold text-xl ">
              Non-Technical Skills
            </h1>
            <hr className="w-1/6 mb-5" />
            <ul>
              <li className="text-white text-md  list-disc ml-4">
                {userData.nontechnicalskills}
              </li>
            </ul>
          </div>

          <div className="bg-white w-7/12 p-10 h-auto">
            <h1 className="text-bold text-[50px] mb-5">
              {userData.name} {userData.lastname}
            </h1>
            <h1 className="text-gray-500">{userData.description}</h1>
            <h1 className="font-semibold uppercase tracking-wider my-6 text-gray-500">
              Experience / Projects
            </h1>
            {projectFields.map((field) => {
              return (
                <div>
                  <li className="text-gray-600 font-semibold">
                    <span>{field.title}</span>
                  </li>
                  <ul className="list-disc ml-5 text-gray-500">
                    <li>
                      Project description :{" "}
                      <span>{field.projectdescription}</span>
                    </li>
                    <li>
                      Project link : <span>{field.projectlink}</span>
                    </li>
                  </ul>
                </div>
              );
            })}
            <h1 className="font-semibold uppercase tracking-wider my-6 text-gray-500">
              Acheivements
            </h1>
            {awardFields.map((field,index) => {
              return (
                <div key={index}>
                  <h4 className="text-gray-500 font-semibold">
                    <span>{field.award}</span>
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container grid grid-cols-3 my-3 space-y-2 justify-self-center mt-20">
        <div className="col-start-2 ml-32 mb-40">
          <button
            type="submit"
            className="text-white text-bold bg-gray-800 shadow-2xl dark:hover:bg-gray-400 focus:outline-none focus:ring-4 lg:px-20  focus:ring-gray-400 font-medium rounded-full text-sm px-8 py-2.5 text-center mr-2 mb-2 dark:focus:ring-hidden"
            onClick={onButtonClick}
          >
            Download
          </button>
        </div>
      </div>{" "}
    </div>
  );
}

export default Resume2;
