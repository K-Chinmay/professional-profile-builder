import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import "./Resume.css";
import git from "../../images/git.png";
import location from "../../images/location.png";
import phone from "../../images/phone.png";
import mail from "../../images/mail.png";
import linkedin from "../../images/linkedin.png";
import insta from "../../images/insta.png";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import NavLogin from "./navLogin";

function Resume() {
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
      }
      setProjectFields(projectFieldData);
      let awardFieldData=[];
      for (var i = 0; i < data.acheivements.length; i++) {
        awardFieldData.push({
          award: data.acheivements[i].award,
        })
        setAwardFields(awardFieldData);
      }
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
      pdf.save(Resume.pdf);
    });
  };
  useEffect(() => {
    userResume();
  }, []);
  console.log(projectFields);
  return (
    <div className="overflow-hidden-x">
      <NavLogin/>
      <div className="ml-60 mr-60 mt-20 border-2  shadow-2xl" id="to_print">
        <section>
          <div className="grid grid-cols-4 bg-gray-700 p-8">
            <div className="grid col-span-3 col-start-0 items-center">
              <h1 className="text-bold text-white text-4xl">
                {userData.name} {userData.lastname}
              </h1>
              <p className="text-md text-white">{userData.description}</p>
            </div>
            <div className="grid col-span-1 col-start-4 ml-28">
              <img
                className="image w-44 h-36 rounded-lg  border-white"
                src={userData.image}
                alt="image"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-2 bg-gray-800 p-8">
            <div className="grid col-span-1 ml-8 mt-4 mb-4 space-y-2">
              <h1 className="text-md text-white flex space-x-2">
                <img src={mail}></img>
                <h1>{userData.email}</h1>
              </h1>
              <p className="text-md text-white flex space-x-2">
                <img src={location}></img>
                <h1>{userData.address}</h1>
              </p>
              <h1 className="text-md text-white flex space-x-2">
                <img src={git}></img>
                <h1>{userData.github}</h1>
              </h1>
            </div>
            <div className="grid col-span-1 ml-8 mt-4 mb-4 space-y-2">
              <h1 className="text-md text-white flex space-x-2">
                <h1>
                  <img src={linkedin}></img>
                </h1>
                <h1>{userData.linkedin}</h1>
              </h1>
              <h1 className="text-md text-white flex space-x-2">
                <h1>
                  <img src={phone}></img>
                </h1>
                <h1>{userData.phone}</h1>
              </h1>
              <h1 className="text-md text-white flex space-x-2">
                <h1>
                  <img src={insta}></img>
                </h1>
                <h1>yash_06.insta</h1>
              </h1>
            </div>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-2 p-4 mx-16 my-4">
            <div className="grid col-span-1">
              <section className="grid">
                <label className="font-bold text-black text-2xl justify-items-start">
                  Education
                </label>
                <hr class="w-32 h-1 bg-gray-100 rounded justify-left border-0 md:my-2 dark:bg-black "/>
                <section>
                  <label className="text-bold text-black text-2xl pt-10">
                    Undergraduation
                  </label>
                  <h1 className="ml-8 mt-2.5 text-lg text-black">
                    {userData.collegename}
                  </h1>
                  <li className="ml-8 mt-1">
                    Year : <span>{userData.yearofstudy}</span>
                  </li>
                  <li className="ml-8 mt-1 mb-2">
                    Cgpa : <span>{userData.currentcgpa}</span>
                  </li>
                </section>
                <section>
                  <label className="text-bold text-black text-2xl ">HSC</label>
                  <h1 className="ml-8 mt-2.5  text-md text-black">
                    {userData.jrcollegename}
                  </h1>
                  <li className="ml-8 mt-1 mb-2">
                    Percentage : <span>{userData.hsc}</span>
                  </li>
                </section>
                <section>
                  <label className="text-bold text-black text-2xl">SSC</label>
                  <h1 className="ml-8 mt-2.5 text-md text-black">
                    {userData.schoolname}
                  </h1>
                  <li className="ml-8 mt-1 mb-2">
                    Percentage : <span>{userData.ssc}</span>
                  </li>
                </section>
              </section>
              <section className="">

                <div>
                  <label className="pt-5 font-bold text-black text-2xl justify-items-start">Acheivements</label>
                  <hr class="w-48 h-1 bg-gray-100 rounded justify-left border-0 md:my-2 dark:bg-black "/>

                  {awardFields.map((field, index) => {
                    return (
                      <div key={index}>
                        <li className="text-lg text-black">
                          <span>{field.award}</span>
                        </li>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
            <div className="grid col-span-1">
              <section className="grid">
                <label className="pt-5 font-bold text-black text-2xl justify-items-start">Technical Skills</label>
                <hr class="w-48 h-1 bg-gray-100 rounded justify-left border-0 md:my-2 dark:bg-black "/>
                <li className="text-black text-lg ml-8 mt-2 mb-2">
                  {userData.technicalskills}
                </li>
              </section>
              <section className="">
                <label className="pt-5 font-bold text-black text-2xl justify-items-start">Non Technical Skills</label>
                <hr class="w-56 h-1 bg-gray-100 rounded justify-left border-0 md:my-2 dark:bg-black "/>
                <li className="text-black text-lg ml-8 mt-2 mb-2">
                  {userData.nontechnicalskills}
                </li>
              </section>
              <section>
                <div>
                  <label className="pt-5 font-bold text-black text-2xl justify-items-start">
                    Projects
                  </label>
                  <hr class="w-32 h-1 bg-gray-100 rounded justify-left border-0 md:my-2 dark:bg-black "/>

                  {projectFields.map((field) => {
                    return (
                      <div> 
                        <li className="ml-8 mt-2 text-lg ">
                          Project Title : <span>{field.title}</span>
                        </li>
                        <li className="ml-8 mt-2 text-lg">
                          Project description :{" "}
                          <span>{field.projectdescription}</span>
                        </li>
                        <li className="ml-8 mt-2 text-lg">
                          Project link : <span>{field.projectlink}</span>
                        </li>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
      <div className="container grid grid-cols-3 my-3 space-y-2 justify-self-center mt-20">
        <div className="col-start-2 ml-32 mb-40">
          <button
            type="submit"
            className="text-white text-bold bg-gray-800 shadow-2xl hover:bg-gray-200 focus:outline-none focus:ring-4 lg:px-20  focus:ring-gray-400 font-medium rounded-full text-sm px-8 py-2.5 text-center mr-2 mb-2 dark:focus:ring-gray-400"
            onClick={onButtonClick}
          >
            Download
          </button>
        </div>
      </div>{" "}
    </div>
  );
}

export default Resume;
