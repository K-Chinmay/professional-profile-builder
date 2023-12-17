import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import personalinfo from "../../images/personalinfo.gif";
import education from "../../images/Education.gif";
import projects from "../../images/projects.gif";
import NavLogin from "./navLogin";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    // lastname: "",
    // phone: "",
    // gender: "",
    email: "",
    // image: "",
    // description: "",
    // address: "",
    // city: "",
    // pincode: "",
    // qualification: "",
    // yearofgraduation: "",
    // schoolname: "",
    // ssc: "",
    // jrcollegename: "",
    // hsc: "",
    // collegename: "",
    // department: "",
    // yearofstudy: "",
    // roll: "",
    // div: "",
    // prn: "",
    // currentcgpa: "",
    // technicalskills: "",
    // nontechnicalskills: "",
    // linkedin: "",
    // github: "",
    // placmentstatus: "",
    // companyname: "",
    // salary: "",
  });
  const [projectFields, setProjectFields] = useState([
    { title: "", projectdescription: "", projectlink: "" },
  ]);
  const [awardFields, setAwardFields] = useState([{ award: "" }]);
  const addProject = (e) => {
    e.preventDefault();
    let newProject = {
      title: "",
      projectdescription: "",
      projectlink: "",
    };
    setProjectFields([...projectFields, newProject]);
  };

  const removeProject = (e,index) => {
    e.preventDefault();
    let data = [...projectFields];
    data.splice(index, 1);
    setProjectFields(data);
  };

  const addAward = (e) => {
    e.preventDefault();

    let newfield = { award: "" };
    setAwardFields([...awardFields, newfield]);
  };

  const removeAward = (e, index) => {
    e.preventDefault();
    let data = [...awardFields];
    data.splice(index, 1);
    setAwardFields(data);
  };

  

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const handleProjectInputs = (e, index) => {
    const name = e.target.name;
    const value = e.target.value;
    // let index=0;
    setProjectFields([...projectFields,{ [name]: value }]);

    // const handleProjectChange = (index, e) => {
      let data = [...projectFields];
      data[index][e.target.name] = e.target.value;
      setProjectFields(data);
      
      
    // };
    console.log(projectFields)
    // handleProjectChange(index, e);
  };

  const handleAwardInputs = (e,index) => {
    const name = e.target.name;
    const value = e.target.value;
    // let index = 0;
    // setAwardFields([ ...awardFields,{ [name]: value }]);
    setAwardFields([ ...awardFields,{ [name]: value }]);
    // const handleAwardChange = (index, e) => {
      let data = [...awardFields];
      data[index][e.target.name] = e.target.value;
      setAwardFields(data);
    // };
    // handleAwardChange(index, e);
  };

  const RegistrationForm = async (e) => {
    e.preventDefault();

    const {
      name,
      lastname,
      phone,
      gender,
      email,
      image,
      description,
      address,
      city,
      pincode,
      qualification,
      yearofgraduation,
      schoolname,
      ssc,
      jrcollegename,
      hsc,
      collegename,
      department,
      yearofstudy,
      roll,
      div,
      prn,
      currentcgpa,
      technicalskills,
      nontechnicalskills,
      linkedin,
      github,
    
    } = userData;


    const res = await fetch("/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        lastname,
        phone,
        gender,
        email,
        image,
        description,
        address,
        city,
        pincode,
        qualification,
        yearofgraduation,
        schoolname,
        ssc,
        jrcollegename,
        hsc,
        collegename,
        department,
        yearofstudy,
        roll,
        div,
        prn,
        currentcgpa,
        technicalskills,
        nontechnicalskills,
        linkedin,
        github,
      
        projects: projectFields,
        acheivements: awardFields,
        
      }),
    });
    console.log({name,
      lastname,
      phone,
      gender,
      email,
      image,
      description,
      address,
      city,
      pincode,
      qualification,
      yearofgraduation,
      schoolname,
      ssc,
      jrcollegename,
      hsc,
      collegename,
      department,
      yearofstudy,
      roll,
      div,
      prn,
      currentcgpa,
      technicalskills,
      nontechnicalskills,
      linkedin,
      github,
      
      projects:projectFields,
      acheivements:awardFields
    })
    const data = await res.json();
    if (!data) {

      console.log("Form not send");
    } else {
      alert("Form  sent successfully ");
      navigate("/student/resume")
     
    }
  };
  return (
    <div className="bg-white">
    <NavLogin/>
      <form method="POST">
        <section className="flex md:flex-row flex-col sm:py-16 py-6 ">
          <div className="flex-1 justify-center items-start flex-col">
            <div className="p-2 mx-3 h-auto lg:max-w-3xl sm:max-w-sm bg-white rounded-lg   shadow-2xl dark:bg-white dark:border-gray-700">
              <p className="text-lg text-gray-800 dark:text-black font-bold text-center mx-2 my-3">
                Personal Information
              </p>
              <hr className="m-2 border-4 rounded-lg border-blue-400" />

              <div className="text-left mx-3 p-3 space-x-2 ">
                <div className="grid gap-6 mb-1 md:grid-cols-2">
                  <div className="my-3 space-y-2">
                    <label
                      htmlFor="firstname"
                      className="block mb-2 text-sm font-medium text-black dark:text-black"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="bg-gray-50 border-b-2 border-gray-300 text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      value={userData.name}
                      onChange={handleInputs}
                    />
                  </div>

                  <div className="my-3 space-y-2">
                    <label
                      htmlFor="lastname"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      value={userData.lastname}
                      onChange={handleInputs}
                    />
                  </div>
                </div>
                <div className="grid gap-6 mb-1 md:grid-cols-2">
                  <div className="my-3 space-y-2">
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      pattern="^[7-9]{1}[0-9]{9}$"
                      required
                      value={userData.phone}
                      onChange={handleInputs}
                    />
                  </div>

                  <div className="my-3 space-y-2">
                    <label
                      htmlFor="gender"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      value={userData.gender}
                      onChange={handleInputs}
                    >
                      <option selected=""></option>
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                      <option value="TG">Other</option>
                    </select>
                  </div>
                </div>
                <div className="my-3 mb-6 space-y-2">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    pattern="[a-z]+[a-z0-9]"
                    required
                    value={userData.email}
                    onChange={handleInputs}
                  />
                </div>
                <div className="my-3 mb-6 space-y-2">
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Image Url
                  </label>
                  <input
                    type="text"
                    id="image"
                    name="image"
                    className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                    value={userData.image}
                    onChange={handleInputs}
                  />
                </div>
                <div className="my-3 mb-6 space-y-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Description about yourself
                  </label>
                  <textarea
                    type="text"
                    id="description"
                    name="description"
                    rows="3"
                    className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                    value={userData.description}
                    onChange={handleInputs}
                  />
                </div>

                <div className="my-3 space-y-2">
                  <label
                    htmlFor="address"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 h-20"
                    placeholder=""
                    required
                    value={userData.address}
                    onChange={handleInputs}
                  />
                </div>

                <div className="grid gap-6 mb-2 md:grid-cols-2">
                  <div className="my-3 space-y-2">
                    <label
                      htmlFor="city"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                      value={userData.city}
                      onChange={handleInputs}
                    />
                  </div>

                  <div className="my-3 space-y-2">
                    <label
                      htmlFor="pincode"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Pin Code
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      pattern="^[0-9]{6}"
                      required
                      value={userData.pincode}
                      onChange={handleInputs}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative">
            <img
              src={personalinfo}
              alt="formimage"
              className="w-[90%] h-auto relative rounded-xl shadow-2xl"
            />
          </div>
        </section>
        <section className="flex md:flex-row flex-col-reverse sm:py-16 py-6">
          <div className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
            <img
              src={education}
              alt="formimage"
              className="w-[90%] h-auto relative rounded-xl shadow-2xl"
            />
          </div>
          <div className="flex-1 justify-center items-start flex-col">
            <div className="p-2 mx-3 lg:max-w-3xl sm:max-w-sm bg-white rounded-lg  shadow-2xl dark:bg-white dark:border-black">
              <p className="text-lg text-gray-800 dark:text-black font-bold text-center mx-2 my-3">
                Educational Details
              </p>
              <hr className="m-2 border-4 rounded-lg border-blue-400" />

              <div className="text-left mx-3 p-3 space-x-2 ">
                <div className="grid gap-6 mb-1 md:grid-cols-2">
                  <div className="my-3 space-y-2">
                    <label
                      htmlFor="qualification"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Highest Qualification
                    </label>
                    <select
                      id="qualification"
                      name="qualification"
                      className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      value={userData.qualification}
                      onChange={handleInputs}
                    >
                      <option selected=""></option>
                      <option value="M">High School</option>
                      <option value="F">Pre University(XII)</option>
                      <option value="TG">Diploma</option>
                    </select>
                  </div>

                  <div className="my-3 space-y-2">
                    <label
                      htmlFor="yearofgraduation"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Year of Graduation
                    </label>
                    <input
                      type="text"
                      id="yearofgraduation"
                      name="yearofgraduation"
                      className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                      value={userData.yearofgraduation}
                      onChange={handleInputs}
                    />
                  </div>
                </div>
                <p className="text-lg text-gray-800 dark:text-black font-bold text-left mx-2 my-3">
                  10th Standard
                </p>
                <hr />
                <div className="my-3 space-y-2">
                  <label
                    htmlFor="schoolname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    School Name
                  </label>
                  <input
                    type="text"
                    id="schoolname"
                    name="schoolname"
                    className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                    value={userData.schoolname}
                    onChange={handleInputs}
                  />
                </div>
                <div className="my-3 space-y-2">
                  <label
                    htmlFor="ssc"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Percentage
                  </label>
                  <input
                    type="text"
                    id="ssc"
                    name="ssc"
                    className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                    value={userData.ssc}
                    onChange={handleInputs}
                  />
                </div>
                <p className="text-lg text-gray-800 dark:text-black font-bold text-left mx-2 my-3">
                  12th Standard
                </p>
                <hr />
                <div className="my-3 space-y-2">
                  <label
                    htmlFor="jrcollegeName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Jr College name
                  </label>
                  <input
                    type="text"
                    id="jrcollegename"
                    name="jrcollegename"
                    className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                    value={userData.jrcollegename}
                    onChange={handleInputs}
                  />
                </div>
                <div className="my-3 space-y-2">
                  <label
                    htmlFor="hsc"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Percentage
                  </label>
                  <input
                    type="text"
                    id="hsc"
                    name="hsc"
                    className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                    value={userData.hsc}
                    onChange={handleInputs}
                  />
                </div>
                <p className="text-lg text-gray-800 dark:text-black font-bold text-left mx-2 my-3">
                  Undergrad
                </p>
                <hr />
                <div className="my-3 space-y-2">
                  <label
                    htmlFor="collegename"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    College Name
                  </label>
                  <input
                    type="text"
                    id="collegename"
                    name="collegename"
                    className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                    value={userData.collegename}
                    onChange={handleInputs}
                  />
                </div>

                <div className="grid gap-6 mb-1 md:grid-cols-2">
                  <div className="my-3 space-y-2">
                    <label
                      htmlFor="department"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Department
                    </label>
                    <select
                      id="department"
                      name="department"
                      className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      value={userData.department}
                      onChange={handleInputs}
                    >
                      <option selected=""></option>
                      <option value="Computer Engineering">
                        Computer Science and Engineering
                      </option>
                      <option value="Mechanical Engineering">Mechanical Engineering</option>
                      <option value="Electrical Engineering">Electrical Engineering</option>
                      <option value="Electronics Engineering">Electronics Engineering</option>
                      <option value="Information Technology">Information Technology</option>
                      <option value="Civil Engineering">Civil Engineering</option>
                    </select>
                  </div>
                  <div className="my-3 space-y-2">
                    <label
                      htmlFor="yearofstudy"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Study Year
                    </label>
                    <select
                      id="yearofstudy"
                      name="yearofstudy"
                      className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      value={userData.yearofstudy}
                      onChange={handleInputs}
                    >
                      <option selected=""></option>
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                      <option value="4">4th Year</option>
                     
                      <option value="5">Not Applicable</option>
                    </select>
                  </div>
                  <div className="my-3 space-y-2">
                    <label
                      htmlFor="rollno"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Roll Number
                    </label>
                    <input
                      type="text"
                      id="rollno"
                      name="roll"
                      className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                      value={userData.roll}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="my-3 space-y-2">
                    <label
                      htmlFor="division"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Division
                    </label>
                    <input
                      type="text"
                      id="div"
                      name="div"
                      className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                      value={userData.div}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="my-3 space-y-2">
                    <label
                      htmlFor="prn"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      PRN Number
                    </label>
                    <input
                      type="text"
                      id="prn"
                      name="prn"
                      className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                      value={userData.prn}
                      onChange={handleInputs}
                    />
                  </div>

                  <div className="my-3 space-y-2">
                    <label
                      htmlFor="cgpa"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Current Year CGPA
                    </label>
                    <input
                      type="text"
                      id="cgpa"
                      name="currentcgpa"
                      className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                      value={userData.currentcgpa}
                      onChange={handleInputs}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex md:flex-row flex-col sm:py-16 py-6">
          <div className="flex flex-1 justify-center items-start flex-col md:mr-4 md:mt-0 mt-10 lg:mr-0">
            <div className="p-2 mx-3 lg:max-w-3xl sm:max-w-sm bg-white rounded-lg  shadow-2xl dark:bg-white dark:border-gray-700">
              <p className="text-lg text-gray-800 dark:text-black font-bold text-center mx-2 my-3">
                Projects
              </p>
              <hr className="m-2 border-4 rounded-lg border-blue-400" />

              {projectFields.map((field, index) => {
                console.log(projectFields);
                return (
                  <div key={index} className="text-left mx-3 p-3 space-x-2">
                    <div className="my-3 space-y-2">
                      <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                      >
                        Project Title{" "}
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                        placeholder=""
                        value={field.title}
                        onChange={(e) => handleProjectInputs(e, index)}
                        
                      />
                    </div>
                    <div className="my-3 space-y-2">
                      <label
                        htmlFor="projectdescription"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                      >
                        Project Description{" "}
                      </label>
                      <input
                        type="text"
                        id="projectdescription"
                        name="projectdescription"
                        className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                        placeholder=""
                        value={field.projectdescription}
                        onChange={(e) => handleProjectInputs(e, index)}
                        
                      />
                    </div>
                    <div className="my-3 space-y-2">
                      <label
                        htmlFor="projectlink"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                      >
                        Project Link{" "}
                      </label>
                      <input
                        type="text"
                        id="projectlink"
                        name="projectlink"
                        className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                        placeholder=""
                        value={field.projectlink}
                        onChange={(e) => handleProjectInputs(e, index)}
                        
                      />
                    </div>
                    <div className="flex">
                      <button
                        onClick={(e) => removeProject(e, index)}
                        className="  px-4 border border-blue-600 rounded-lg  lg:m-2 bg-white"
                      >
                        -
                      </button>
                      <button
                        onClick={addProject}
                        className=" flex  px-4 border border-blue-600 rounded-lg lg:m-2 bg-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}

              <p className="text-lg text-gray-800 dark:text-black font-bold text-center mx-2 my-3">
                Skills
              </p>
              <hr />
              <div className="text-left mx-3 p-3 space-x-2 ">
                <div className="my-3 space-y-2">
                  <label
                    htmlFor="skills"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Enlist Technical Skills{" "}
                  </label>
                  <input
                    type="text"
                    id="technicalskills"
                    name="technicalskills"
                    className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                    placeholder=""
                    required
                    value={userData.technicalskills}
                    onChange={handleInputs}
                  />
                </div>
                <div className="my-3 space-y-2">
                  <label
                    htmlFor="skills"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Enlist Non-technical Skills{" "}
                  </label>
                  <input
                    type="text"
                    id="nontechnicalskills"
                    name="nontechnicalskills"
                    className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                    placeholder=""
                    required
                    value={userData.nontechnicalskills}
                    onChange={handleInputs}
                  />
                </div>
              </div>
              <p className="text-lg text-gray-800 dark:text-black font-bold text-center mx-2 my-3">
                Achievments
              </p>
              <hr />
              {awardFields.map((field, index) => {
               
                return (
                  <div key={index} className="text-left mx-3 p-3 space-x-2">
                    <div className="grid gap-6 mb-1 md:grid-cols-2">
                      <div className="my-3 space-y-2">
                        <label
                          htmlFor="award"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                        >
                          Award
                        </label>
                        <input
                          type="text"
                          id="award"
                          name="award"
                          className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder=""
                          value={field.award}
                          onChange={(e) => handleAwardInputs(e, index)}
                         
                        />
                      </div>
                    </div>
                    <div className="flex">
                      <button
                        onClick={(e) => removeAward(e, index)}
                        className="  px-4 border border-blue-600 rounded-lg  lg:m-2 bg-white"
                      >
                        -
                      </button>
                      <button
                        onClick={addAward}
                        className=" flex  px-4 border border-blue-600 rounded-lg lg:m-2 bg-white"
                      >
                        +
                      </button>
                    </div>
                    
                  </div>
                );
              })}
              

              <p className="text-lg text-gray-800 dark:text-black font-bold text-center mx-2 my-3">
                LinkedIn Profile
              </p>
              <hr />
              <div className="text-left mx-3 p-3 space-x-2">
                <div className="my-3 space-y-2">
                  <input
                    type="text"
                    id="linkedin"
                    name="linkedin"
                    className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                    placeholder=""
                    required
                    value={userData.linkedin}
                    onChange={handleInputs}
                  />
                  <p className="font-normal text-center text-[15px] leading-[27px] text-gray-500">
                    Don't have an account ?{" "}
                    <a
                      href="https://www.linkedin.com/signup"
                      className="text-blue-500"
                    >
                      Create account
                    </a>
                  </p>
                </div>
              </div>
              <p className="text-lg text-gray-800 dark:text-black font-bold text-center mx-2 my-3">
                Github Profile
              </p>
              <hr />
              <div className="text-left mx-3 p-3 space-x-2">
                <div className="my-3 space-y-2">
                  <input
                    type="text"
                    id="github"
                    name="github"
                    className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                    placeholder=""
                    required
                    value={userData.github}
                    onChange={handleInputs}
                  />
                  <p className="font-normal text-center text-[15px] leading-[27px] text-gray-500">
                    Don't have an account ?{" "}
                    <a
                      href="https://github.com/signup"
                      className="text-blue-500"
                    >
                      Create account
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative">
            <img
              src={projects}
              alt="formimage"
              className="w-[90%] h-auto relative rounded-xl shadow-2xl"
            />
          </div>
        </section>
        {/*
        <section className="flex md:flex-row flex-col-reverse sm:py-16 py-6">
          <div className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
            <img
              src={placement}
              alt="formimage"
              className="w-[90%] h-auto relative rounded-xl shadow-2xl"
            />
          </div>
          <div class="flex-1 justify-center items-start flex-col lg:mt-40">
            <div className="p-2 mx-3 h-auto lg:max-w-3xl sm:max-w-sm bg-white rounded-lg  shadow-2xl dark:bg-white dark:border-black">
              <p className="text-lg text-gray-800 dark:text-black font-bold text-center mx-2 my-3">
                Placement Record
              </p>
              <hr className="m-2 border-4 rounded-lg border-blue-400" />
              <div className="text-left mx-3 p-3 space-x-2 ">
                <div className="my-3 space-y-2">
                  <label
                    htmlFor="status"
                    className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Placement Status
                  </label>
                    <select
                      id="placmentstatus"
                      name="placmentstatus"
                      className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      value={userData.placmentstatus}
                      onChange={handleInputs}
                    >
                      <option selected=""></option>
                      <option value="Placed">Placed</option>
                      <option value="Unplaced">Unplaced</option>
                    </select>
                  
                </div>
                <div className="my-3 space-y-2">
                  <label
                    htmlFor="companyname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Company Name{" "}
                  </label>
                  <input
                    type="text"
                    id="companyname"
                    name="companyname"
                    className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                    placeholder=""
                    value={userData.companyname}
                    onChange={handleInputs}
                  />
                </div>
                <div className="my-3 space-y-2">
                  <label
                    htmlFor="package"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Package{" "}
                  </label>
                  <input
                    type="text"
                    id="salary"
                    name="salary"
                    className="bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                    placeholder=""
                    value={userData.salary}
                    onChange={handleInputs}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      */}
        

        <div className="container grid grid-cols-3 my-3 space-y-2 justify-self-center ">
        <div className="col-start-2 ml-32">
        
          <button
            type="submit"
            className="text-white text-bold bg-[#4da8da] shadow-2xl hover:bg-gray-200 focus:outline-none focus:ring-4 lg:px-20  focus:ring-gray-400 font-medium rounded-full text-sm px-8 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
            onClick={RegistrationForm}
          >
            SUBMIT
          </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
