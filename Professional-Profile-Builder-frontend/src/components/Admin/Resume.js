import React, { useState ,useEffect} from "react";
import Nav from "./Nav";
import "./Resume.css";
import admin from "../../images/admin.png";
import git from "../../images/git.png";
import location from "../../images/location.png";
import phone from "../../images/phone.png";
import mail from "../../images/mail.png";
import linkedin from "../../images/linkedin.png";
import insta from "../../images/insta.png";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useParams } from "react-router-dom";
const Test = () => {
  const [userData, setUserData] = useState([
    {
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
    },
  ]);
  const [projectFields, setProjectFields] = useState([]);
  const [awardFields, setAwardFields] = useState([{ award: "" }]);
  const {id}=useParams();

  const userResume = async () => {

    console.log(id);
    try {
      const res = await fetch(`/getresumedata/${id}`, {
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
      for (var i = 0; i < data.projects.length; i++) {
        setProjectFields([
          ...projectFields,
          {
            title: data.projects[i].title,
            projectdescription: data.projects[i].projectdescription,
            projectlink: data.projects[i].projectlink,
          },
        ]);
        console.log(data.projects[i]);
      }
      setAwardFields([
        ...awardFields,
        {
          award: data.acheivements[0].award,
        },
      ]);
      // console.log(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    userResume();
  }, []);
  return (
    <div>
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
              <h1 className="text-gray-400 uppercase tracking-widest text-lg font-bold">
                Contact
              </h1>
              <hr className="w-1/6 mb-5" />
              <div className="flex">
                <h1 className="w-5 h-5">
                  <img src={mail} alt="mail" />
                </h1>
                <h1 className="text-gray-400 text-sm ml-2.5">
                  {userData.email}
                </h1>
              </div>
              <div className="flex">
                <h1 className="w-5 h-5">
                  <img src={phone} alt="phone" />
                </h1>
                <h1 className="text-gray-400 text-sm ml-2.5">
                  {userData.phone}
                </h1>
              </div>
              <div className="flex">
                <h1 className="w-5 h-5">
                  <img src={location} alt="location" />
                </h1>
                <h1 className="text-gray-400 text-sm ml-2.5">
                  {userData.address}
                </h1>
              </div>

              <div className="flex">
                <h1 className="w-5 h-5">
                  <img src={linkedin} alt="linkedin" />
                </h1>
                <h1 className="text-gray-400 text-sm ml-2.5">
                  {userData.linkedin}
                </h1>
              </div>
              <div className="flex mt-[5px]">
                <h1 className="w-5 h-5">
                  <img src={git} alt="git" />
                </h1>
                <h1 className="text-gray-400 text-sm ml-2.5">
                  {userData.github}
                </h1>
              </div>
              <hr className="my-5" />
              <h1 className="text-gray-400 mt-2 uppercase tracking-widest text-lg font-bold">
                EDUCATION
              </h1>
              <hr className="w-1/6 mb-5" />
              <h1 className="text-gray-400 text-sm uppercase font-semibold tracking-wider">
                Undergraduation
              </h1>
              <h1 className="text-gray-500 text-sm">
                <span className="italic">{userData.collegename}</span>,{" "}
                <span className="text-gray-400 font-semibold italic">
                  {userData.yearofstudy}
                </span>{" "}
                / {userData.yearofgraduation}
              </h1>
              <h1 className="text-gray-500 text-sm">
                CGPA : <span>{userData.currentcgpa}</span>
              </h1>
              <br />
              <h1 className="text-gray-400 text-sm uppercase font-semibold tracking-wider">
                HSC
              </h1>
              <h1 className="text-gray-500 text-sm">
                <span className="italic">{userData.jrcollegename}</span>,{" "}
              </h1>
              <h1 className="text-gray-500 text-sm">
                Percentage : <span>{userData.hsc}</span>
              </h1>
              <br />
              <h1 className="text-gray-400 text-sm uppercase font-semibold tracking-wider">
                SSC
              </h1>
              <h1 className="text-gray-500 text-sm">
                <span className="italic">{userData.schoolname}</span>,{" "}
              </h1>
              <h1 className="text-gray-500 text-sm">
                Percentage : <span>{userData.ssc}</span>
              </h1>
              <br />
              <hr className="my-5" />
              <h1 className="text-gray-400 mt-2 uppercase tracking-widest text-lg font-bold">
                TECHNICAL SKILLS
              </h1>
              <hr className="w-1/6 mb-5" />
              <ul>
                <li className="text-gray-500 text-sm list-disc ml-4">
                  {userData.technicalskills}
                </li>
              </ul>
              <hr className="my-5" />
              <h1 classname="text-gray-400 mt-2 uppercase tracking-widest text-lg font-bold">
                NON TECHNICAL SKILLS
              </h1>
              <hr className="w-1/6 mb-5" />
              <ul>
                <li className="text-gray-500 text-sm list-disc ml-4">
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
                    <h1 className="text-gray-600 font-semibold">
                      <span>{field.title}</span>
                    </h1>
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
              {awardFields.map((field) => {
                return (
                  <div>
                    <h4 className="text-gray-500 font-semibold">
                      <span>{field.award}</span>
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Test;
