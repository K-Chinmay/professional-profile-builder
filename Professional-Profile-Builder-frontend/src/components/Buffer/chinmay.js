import React from "react";
import { useState, useEffect } from "react";
import studentHome from "../images/login.jpg";

const RegistrationForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    lastname: "",
    gender: "",
    address: "",
    city: "",
    phone: "",
    pincode: "",
    description: "",
    schoolname: "",
    ssc: "",
    jrcollegename: "",
    hsc: "",
    currentcgpa: "",
    collagename: "",
    skills: "",
    projects:
    {
      projecttitle:"",
      projectdescription:"",
      projectlink:""

    } ,
    acheivements: 
    {
        award:""
    },
    links: "",
    department: "",
    yearofstudy: "",
    qualification: "",
    yearofgraduation: "",
  });


  const userRegistration = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        lastname: data.lastname,
        gender: data.gender,
        address: data.address,
        city: data.city,
        phone: data.phone,
        pincode: data.pincode,
        description: data.description,
        schoolname: data.schoolname,
        ssc: data.ssc,
        jrcollegename: data.jrcollegename,
        hsc: data.hsc,
        collagename: data.collagename,
        currentcgpa: data.currentcgpa,
        skills: data.skills,
        projects: data.projects,
        acheivements: data.acheivements,
        links: data.links,
        department: data.department,
        yearofstudy: data.yearofstudy,
        qualification: data.qualification,
        yearofgraduation: data.yearofgraduation,
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    userRegistration();
  }, []);

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const RegistrationForm = async (e) => {
    e.preventDefault();

    const {
      name,
      email,
      lastname,
      gender,
      address,
      city,
      phone,
      pincode,
      description,
      schoolname,
      ssc,
      jrcollegename,
      hsc,
      collagename,
      currentcgpa,
      skills,
      projects,
      department,
      acheivements,
      links,
      yearofstudy,
      qualification,
      yearofgraduation,
    } = userData;
    const res = await fetch("/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        lastname,
        gender,
        address,
        city,
        phone,
        pincode,
        description,
        schoolname,
        ssc,
        jrcollegename,
        hsc,
        collagename,
        currentcgpa,
        skills,
        projects,
        department,
        acheivements,
        links,
        yearofstudy,
        qualification,
        yearofgraduation,
      }),
    });

    const data = await res.json();
    if (!data) {
      console.log("Form not send");
    } else {
      alert("Form  sent successfully ");
      setUserData({
        ...userData,
        name: "",
        email: "",
        lastname: "",
        gender: "",
        address: "",
        city: "",
        phone: "",
        pincode: "",
        description: "",
        schoolname: "",
        ssc: "",
        jrcollegename: "",
        hsc: "",
        currentcgpa: "",
        collagename: "",
        skills: "",
        projects:{
          projecttitle:"",
          projectdescription:"",
          projectlink:""
        } ,
        acheivements:{
          award:""
        } ,
        links: "",
        department: "",
        yearofstudy: "",
        qualification: "",
        yearofgraduation: "",
      });
    }
  };

  const handleProjectChange = (index, event) => {
    let data = [...projectFields];
    data[index][event.target.name] = event.target.value;
    setProjectFields(data);
  };

  const addProject = () => {
    let newProject = { title: "", description: "", link: "" };
    setProjectFields([...projectFields, newProject]);
  };

  const removeProject = (index) => {
    let data = [...projectFields];
    data.splice(index, 1);
    setProjectFields(data);
  };

  const [awardFields, setAwardFields] = useState([
    { award: "" },
  ]);

  const handleAwardChange = (index, event) => {
    let data = [...awardFields];
    data[index][event.target.name] = event.target.value;
    setAwardFields(data);
  };

  const addAward = () => {
    let newfield = { award: "" };
    setAwardFields([...awardFields, newfield]);
  };

  const removeAward = (index) => {
    let data = [...awardFields];
    data.splice(index, 1);
    setAwardFields(data);
  };

  

  return (
    <div>
      <form method="POST">
        <section className="flex md:flex-row flex-col sm:py-16 py-6 bg-[#4da8da]">
          <div class="flex-1 justify-center items-start flex-col">
            <div className="p-2 mx-3 h-auto lg:max-w-3xl sm:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-white dark:border-gray-700">
              <p className="text-lg text-gray-800 dark:text-black font-bold text-center mx-2 my-3">
                Personal Information
              </p>
              <hr />

              <div className="text-left mx-3 p-3 space-x-2 ">
                <div class="grid gap-6 mb-1 md:grid-cols-2">
                  <div className="my-3 space-y-2">
                    <label
                    htmlFor="first_name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="name"
                      className="bg-gray-50 border-b-2 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                      value={userData.name}
                      onChange={handleInputs}
                    />
                  </div>

                  <div className="my-3 space-y-2">
                    <label
                    htmlFor="last_name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="lastname"
                      className="bg-gray-50  border-b-2 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                      value={userData.lastname}
                      onChange={handleInputs}
                    />
                  </div>
                </div>
                <div class="grid gap-6 mb-1 md:grid-cols-2">
                  <div className="my-3 space-y-2">
                    <label
                    htmlFor="phone"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="bg-gray-50 border-b-2  text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      pattern="^[7-9]{1}[0-9]{9}$"
                      required
                      value={userData.phone}
                      onChange={handleInputs}
                    />
                  </div>

                  <div className="my-3 space-y-2">
                    <label
                    htmlFor="Gender"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Gender
                    </label>
                    <select
                      id="Gender"
                      name="gender"
                      class="bg-gray-50 border-b-2 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="bg-gray-50 border-b-2 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    pattern="[a-z]+[a-z0-9]"
                    required
                    value={userData.email}
                    onChange={handleInputs}
                  />
                </div>

                <div className="my-3 mb-6 space-y-2">
                  <label
                  htmlFor="describ"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Description about yourself
                  </label>
                  <textarea
                    type="text"
                    id="describ"
                    name="description"
                    rows="3"
                    className="bg-gray-50 border-b-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                    value={userData.description}
                    onChange={handleInputs}
                  />
                </div>

                <div className="my-3 space-y-2">
                  <label
                  htmlFor="Address"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="Address"
                    name="address"
                    class="bg-gray-50 border-b-2 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 h-20"
                    placeholder=""
                    required
                    value={userData.address}
                    onChange={handleInputs}
                  />
                </div>

                <div class="grid gap-6 mb-2 md:grid-cols-2">
                  <div className="my-3 space-y-2">
                    <label
                    htmlFor="city"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      class="bg-gray-50 border-b-2 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                      value={userData.city}
                      onChange={handleInputs}
                    />
                  </div>

                  <div className="my-3 space-y-2">
                    <label
                    htmlFor="Pincode"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Pin Code
                    </label>
                    <input
                      type="text"
                      id="Pincode"
                      name="pincode"
                      class="bg-gray-50 border-b-2 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      pattern="^[0-9]{6}"
                      required
                      value={userData.pincode}
                      onChange={handleInputs}
                    />
                  </div>
                </div>

                {/* <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> */}
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative">
            <img
              src={studentHome}
              alt="image"
              className="w-[90%] h-auto relative rounded-xl"
            />
          </div>
        </section>
        <section className="flex md:flex-row flex-col-reverse sm:py-16 py-6 bg-[#4da8da]">
          <div className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
            <img
              src={studentHome}
              alt="image"
              className="w-[90%] h-auto relative rounded-xl"
            />
          </div>
          <div className="flex-1 justify-center items-start flex-col ">
            <div className="p-2 mx-3 lg:max-w-3xl sm:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-white dark:border-black">
              <p className="text-lg text-gray-800 dark:text-black font-bold text-center mx-2 my-3">
                Eductional Details
              </p>
              <hr />

              <div className="text-left mx-3 p-3 space-x-2 ">
                <div class="grid gap-6 mb-1 md:grid-cols-2">
                  <div className="my-3 space-y-2">
                    <label
                    htmlFor="HighestQualification"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Highest Qualification
                    </label>
                    <select
                      id="HighestQualification"
                      name="qualification"
                      class="bg-gray-50 border-b-2 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    htmlFor="YearofGraduation"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Year of Graduation
                    </label>
                    <input
                      type="text"
                      id="YearofGraduation"
                      name="yearofgraduation"
                      class="bg-gray-50 border-b-2 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  htmlFor="schoolName"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    School Name
                  </label>
                  <input
                    type="text"
                    id="schoolname"
                    name="schoolname"
                    class="bg-gray-50 border-b-2 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                    value={userData.schoolname}
                    onChange={handleInputs}
                  />
                </div>
                <div className="my-3 space-y-2">
                  <label
                  htmlFor="10percent"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Percentage
                  </label>
                  <input
                    type="text"
                    id="ssc"
                    name="ssc"
                    class="bg-gray-50 border-b-2 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Jr College name
                  </label>
                  <input
                    type="text"
                    id="jrcollegename"
                    name="jrcollegename"
                    class="bg-gray-50 border-b-2 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                    value={userData.jrcollegename}
                    onChange={handleInputs}
                  />
                </div>
                <div className="my-3 space-y-2">
                  <label
                  htmlFor="12percent"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Percentage
                  </label>
                  <input
                    type="text"
                    id="hsc"
                    name="hsc"
                    class="bg-gray-50 border-b-2 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  htmlFor="collegeName"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    College Name
                  </label>
                  <input
                    type="text"
                    id="collagename"
                    name="collagename"
                    class="bg-gray-50 border-b-2 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                    value={userData.collagename}
                    onChange={handleInputs}
                  />
                </div>

                <div class="grid gap-6 mb-1 md:grid-cols-2">
                  <div className="my-3 space-y-2">
                    <label
                    htmlFor="Department"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Department
                    </label>
                    <select
                      id="Department"
                      name="department"
                      class="bg-gray-50 border-b-2 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      value={userData.department}
                      onChange={handleInputs}
                    >
                      <option selected=""></option>
                      <option value="M">
                        Computer Science and Engineering
                      </option>
                      <option value="F">Mechanical Engineering</option>
                      <option value="TG">Electrical Engineering</option>
                      <option value="G">Electronics Engineering</option>
                      <option value="T">Information Technology</option>
                      <option value="E">Civil Engineering</option>
                    </select>
                  </div>
                  <div className="my-3 space-y-2">
                    <label
                    htmlFor="Studyyear"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Study Year
                    </label>
                    <select
                      id="Studyyear"
                      name="yearofstudy"
                      class="bg-gray-50 border-b-2 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      value={userData.yearofstudy}
                      onChange={handleInputs}
                    >
                      <option selected=""></option>
                      <option value="M">1st Year</option>
                      <option value="F">2nd Year</option>
                      <option value="TG">3rd Year</option>
                      <option value="G">4th Year</option>
                      <option value="T">5th Year</option>
                      <option value="R">Not Applicable</option>
                    </select>
                  </div>
                  <div className="my-3 space-y-2">
                    <label
                    htmlFor="cgpa"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Current Year CGPA
                    </label>
                    <input
                      type="number"
                      id="cgpa"
                      name="cgpa"
                      class="bg-gray-50 border-b-2 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                      value={userData.cgpa}
                      onChange={handleInputs}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex md:flex-row flex-col sm:py-16 py-6 bg-[#4da8da]">
          <div className="flex flex-1 justify-center items-start flex-col">
            <div className="p-2 mx-3 lg:max-w-3xl sm:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-white dark:border-black">
              <p className="text-lg text-gray-800 dark:text-black font-bold text-center mx-2 my-3">
                Projects
              </p>
              <hr />
              {projects.map((field, index) => {
                return (
                  <div key={index} className="text-left mx-3 p-3 space-x-2">
                    <div className="my-3 space-y-2">
                      <label
                      htmlFor="projectTitle"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                      >
                        Project Title{" "}
                      </label>
                      <input
                        type="text"
                        id="projecttitle"
                        name="projecttitle"
                        class="bg-gray-50 border-b-2 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                        placeholder=""
                        value={userData.field.projecttitle}
                        onChange={(event) => handleProjectChange(index, event)}
                        required
                      />
                    </div>
                    <div className="my-3 space-y-2">
                      <label
                      htmlFor="description"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                      >
                        Project Description{" "}
                      </label>
                      <input
                        type="text"
                        id="projectdescription"
                        name="projectdescription"
                        class="bg-gray-50 border-b-2 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                        placeholder=""
                        value={userData.field.projectdescription}
                        onChange={(event) => handleProjectChange(index, event)}
                        required
                      />
                    </div>
                    <div className="my-3 space-y-2">
                      <label
                      htmlFor="link"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                      >
                        Project Link{" "}
                      </label>
                      <input
                        type="text"
                        id="projectlink"
                        name="projectlink"
                        class="bg-gray-50 border-b-2 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                        placeholder=""
                        value={userData.projects.projectlink}
                        onChange={(event) => handleProjectChange(index, event)}
                        required
                      />
                    </div>
                    <button
                      onClick={() => removeProject(index)}
                      className="border-2 border-solid px-2 rounded-lg border-gray-900"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
              <button
                onClick={addProject}
                className="border-2 border-solid px-2 rounded-lg border-gray-900"
              >
                Add
              </button>
              <p className="text-lg text-gray-800 dark:text-black font-bold text-center mx-2 my-3">
                Skills
              </p>
              <hr />
              <div className="text-left mx-3 p-3 space-x-2 ">
                <div className="my-3 space-y-2">
                  <label
                  htmlFor="Skills"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Enlist Technical Skills{" "}
                  </label>
                  <input
                    type="text"
                    id="techSkills"
                    name="techSkills"
                    class="bg-gray-50 border-b-2 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                    placeholder=""
                    required
                    value={userData.skills.techSkills}
                    onChange={handleInputs}
                  />
                </div>
                <div className="my-3 space-y-2">
                  <label
                    htmlFor="Skills"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >
                    Enlist Non-technical Skills{" "}
                  </label>
                  <input
                    type="text"
                    id="nontechSkills"
                    name="nontechSkills"
                    class="bg-gray-50 border-b-2 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                    placeholder=""
                    required
                    value={userData.skills.nontechSkills}
                    onChange={handleInputs}
                  />
                </div>
              </div>
              <p className="text-lg text-gray-800 dark:text-black font-bold text-center mx-2 my-3">
                Achievments
              </p>
              <hr />
              {awardFields.map((acheivements, index) => {
                return (
                  <div key={index} className="text-left mx-3 p-3 space-x-2">
                    <div class="grid gap-6 mb-1 md:grid-cols-2">
                      <div className="my-3 space-y-2">
                        <label
                          htmlFor="award"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                        >
                          Award
                        </label>
                        <input
                          type="text"
                          id="award"
                          name="award"
                          class="bg-gray-50 border-b-2 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder=""
                          value={userData.acheivements.award}
                          onChange={(event) => handleAwardChange(index, event)}
                          required
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => removeAward(index)}
                      className="border-2 border-solid px-2 rounded-lg border-gray-900"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
              <button
                onClick={addAward}
                className="border-2 border-solid px-2 rounded-lg border-gray-900"
              >
                Add
              </button>

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
                    class="bg-gray-50 border-b-2 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                    placeholder=""
                    required
                    value={userData.links.linkedin}
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
                    id="gitprofile"
                    name="gitprofile"
                    class="bg-gray-50 border-b-2 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                    placeholder=""
                    required
                    value={userData.links.gitprofile}
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
              src={studentHome}
              alt="image"
              className="w-[90%] h-auto relative rounded-xl"
            />
          </div>
        </section>

        <div className="my-3 space-y-2">
          <button
            type="submit"
            className="text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-400 font-medium rounded-full text-sm px-8 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
            onClick={RegistrationForm}
          >
            SUBMIT
          </button>
        </div>
      </form>
      {/* <div>
                <div className='bg-gray-700 h-14'>
                    <div className='text-center text-white '>
                        <h2>PROFESSIONAL PROFILE BUILDER</h2>
                    </div>
                </div>
            </div> */}
    </div>
  );
};

export default RegistrationForm;
