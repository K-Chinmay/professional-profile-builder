import React from "react";
import NavLogin from "./NavLogin";
import { NavLink, useNavigate } from "react-router-dom";

import { Autoplay, Navigation, Pagination } from "swiper";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { AiOutlineForm } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import adminlogo from "../../images/adminlogo.jpg";
import administrator from "../../images/administrator.png";
import { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import Footer from "../Footer";
import dash from "../../images/dash.png";

import { Sidebar } from "rsuite";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Chart from "./Chart";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Dashboard = () => {
  const Navigate = useNavigate();
  const [userData, setUserData] = useState([
    {
      name: "",
      image: "",
      lastname: "",
    },
  ]);
  const [perData, setPerData] = useState({
    Percent: "100",
  });
  const [graphName, setGraphName] = useState("Analytics");
  const [cgpaActive, setCgpaActive] = useState(false);
  const [typeActive, setTypeActive] = useState(false);
  const [deptActive, setDeptActive] = useState(false);
  const [statusActive, setStatusActive] = useState(false);
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", href: "/admin/dashboard", current: true },
    {
      title: "Filters",
      icon: <FiSearch />,
      href: "/admin/home1",
      current: true,
    },
    {
      title: "ComapanyForm",
      icon: <AiOutlineForm />,
      href: "/admin/company",
      current: true,
    },
    {
      title: "Logout",
      icon: <MdLogout />,
      href: "/admin/logout",
      current: true,
    },
  ];

  const callAdminHomePage = async () => {
    try {
      const res = await fetch("/getadmindata1", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      console.log(data);
      // console.log(data[i].name);

      // setUserData([
      //   {

      //     name:data[48].registrationform[0].name,
      //     image:data[48].registrationform[0].image,
      //     lastname:data[48].registrationform[0].lastname

      // }]);

      setUserData(data);

      // setUserRegistration([{
      //   name:data.registrationform.name,
      //   name:data.name,
      //   lastname:data[index].registrationform[0].lastname
      // }])

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      Navigate("/admin/login");
    }
  };
  const callcgpa9 = async () => {
    try {
      const res = await fetch("/getCgpa9", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserData(data.userData);
      setPerData({ Percent: data.cgpa9Percent });
      setGraphName("Cgpa Greater than 9");
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      Navigate("/admin/login");
    }
  };
  const callcgpa8 = async () => {
    try {
      const res = await fetch("/getCgpa8", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserData(data.userData);
      setPerData({ Percent: data.cgpa8Percent });
      setGraphName("Cgpa Greater than 8");
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      Navigate("/admin/login");
    }
  };
  const callcgpa7 = async () => {
    try {
      const res = await fetch("/getCgpa7", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserData(data.userData);
      setPerData({ Percent: data.cgpa7Percent });
      setGraphName("Cgpa Greater than 7");
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      Navigate("/admin/login");
    }
  };
  const divA = async () => {
    try {
      const res = await fetch("/getdivA", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserData(data.userData);
      setPerData({ Percent: data.divAPercent });
      setGraphName("Division A");
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      Navigate("/admin/login");
    }
  };
  const divB = async () => {
    try {
      const res = await fetch("/getdivB", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserData(data.userData);
      setPerData({ Percent: data.divBPercent });
      setGraphName("Division B");
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      Navigate("/admin/login");
    }
  };
  const soft = async () => {
    try {
      const res = await fetch("/getSoft", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setUserData(data.userData);
      setPerData({ Percent: data.softPercent });
      setGraphName("Soft Branch");
      console.log(perData);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      Navigate("/admin/login");
    }
  };
  const core = async () => {
    try {
      const res = await fetch("/getCore", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserData(data.userData);
      setPerData({ Percent: data.corePercent });
      setGraphName("Core Branch");
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      Navigate("/admin/login");
    }
  };
  const comp = async () => {
    try {
      const res = await fetch("/getcomp", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserData(data.userData);
      setPerData({ Percent: data.getCompPercent });
      setGraphName("Computer Branch");
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      Navigate("/admin/login");
    }
  };
  const civil = async () => {
    try {
      const res = await fetch("/getcivil", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserData(data.userData);
      setPerData({ Percent: data.getCivilPercent });
      setGraphName("Civil Branch");
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      Navigate("/admin/login");
    }
  };
  const electrical = async () => {
    try {
      const res = await fetch("/getelectrical", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserData(data.userData);
      setPerData({ Percent: data.getElectricalPercent });
      setGraphName("Electrical Branch");
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      Navigate("/admin/login");
    }
  };
  const mechanical = async () => {
    try {
      const res = await fetch("/getmechanical", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserData(data.userData);
      setPerData({ Percent: data.getMechanicalPercent });
      setGraphName("Mechanical Branch");
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      Navigate("/admin/login");
    }
  };
  const it = async () => {
    try {
      const res = await fetch("/getit", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserData(data.userData);
      setPerData({ Percent: data.getItPercent });
      setGraphName("It Branch");
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      Navigate("/admin/login");
    }
  };
  const entc = async () => {
    try {
      const res = await fetch("/getelectronics", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserData(data.userData);
      setPerData({ Percent: data.getElectronicsPercent });
      setGraphName("Entc Branch");
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      Navigate("/admin/login");
    }
  };
  const placed = async () => {
    try {
      const res = await fetch("/getplaced", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserData(data.userData);
      setPerData({ Percent: data.getPlacedPercent });
      setGraphName("Placed Students");
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      Navigate("/admin/login");
    }
  };
  const unplaced = async () => {
    try {
      const res = await fetch("/getunplaced", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserData(data.userData);
      setPerData({ Percent: data.getUnplacedPercent });
      setGraphName("Unplaced Students");
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      Navigate("/admin/login");
    }
  };

  const ResumePage = async (id) => {
    Navigate(`/admin/resume/${id}`);
  };
  useEffect(() => {
    callAdminHomePage();
  }, []);

  return (
    <div>
      <NavLogin />

      <div className="flex h-screen bg-blue-100">
        <div
          className={`bg-blue-100 h-screen pt-8 p-8 shadow-2xl ${
            open ? "w-80" : "w-20"
          } duration-300 relative`}
        >
          <FaRegArrowAltCircleLeft
            className={`bg-white text-[#4da8da] text-3xl rounded-full absolute -right-3 top-9 border 
            border-[#4da8da] cursor-pointer ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
          <h1
            className={`text-2xl font-bold dark:text-[#4da8da] justify-centre pb-4 ${
              !open && "hidden"
            } `}
          >
            Dashboard
          </h1>

          <div className="inline-flex">
            <img
              className={`w-8 h-8 rounded cursor-pointer block float-left mr-2 text-[#4da8da] `}
              src={administrator}
              alt=""
            ></img>
            <h1
              className={`text-[#4da8da] origin-center font-bold text-lg duration-300 mt-1 ${
                !open && "scale-0"
              } `}
            >
              ADMIN
            </h1>
          </div>
          <ul className="pt-4">
            {Menus.map((menu, index) => (
              <div>
                <li
                  key={index}
                  className="text-blue-600 text-md flex items-centre gap-x-4 cursor-pointer p-2 bg-blue-300 shadow-2xl hover:bg-blue rounded-md mt-4"
                  onClick={() => {
                    var temp = menu.href;
                    Navigate(temp);
                  }}
                >
                  <span className="text-2xl block float-left">
                    {menu.icon ? menu.icon : <MdDashboard />}
                  </span>
                  <span
                    className={`text-base font-medium flex-1 duration-200 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                </li>
              </div>
            ))}
          </ul>
        </div>

        <div className="p-7 h-screen">
          <div className="grid grid-cols-2">
            <div
              id="header"
              className="header h-full  py-10  text-left md:pt-28 lg:text-center xl:pt-10 xl:pb-32 bg-white col-span-1 mt-20 "
            >
              <div className="container px-4 sm:px-8 lg:gap-x-8 ">
                <div className="mb-16 lg:mt-10 xl:mt-10 xl:mr-4 ">
                  <h1 className="text-left font-sans font-bold ml-8 xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[50.8px] mb-4 text-[#4da8da]">
                    Hello Admin!!!
                  </h1>

                  <p className="p-large mb-8 font-bold text-lg text-left ml-8 mt-16">
                    Welcome to Profile Builder Platform where you can
                    Effortlessly sort the student resume as per the crieteria
                    and also inform them about the upcoming companies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1 col-start-2 ">
              <img
                src={adminlogo}
                alt="student"
                className=" inline w-[600px] h-[600px] rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" class="flex items-center">
              <img src={dash} class="h-8 mr-3" alt="Flowbite Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                DashBoard
              </span>
            </a>
            <div class="flex md:order-2">
              <button
                type="button"
                data-collapse-toggle="navbar-search"
                aria-controls="navbar-search"
                aria-expanded="false"
                class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
              >
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Search</span>
              </button>
              <div class="relative hidden md:block">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    class="w-5 h-5 text-gray-500"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Search icon</span>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </div>
              <button
                data-collapse-toggle="navbar-search"
                type="button"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-search"
                aria-expanded="false"
              >
                <span class="sr-only">Open menu</span>
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-search"
            >
              <div class="relative mt-3 md:hidden">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    class="w-5 h-5 text-gray-500"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>
        </nav>
        <section>
          <div className="mt-4 ml-28">
            <h3 className="font-bold text-lg">Filter Students </h3>
            <div className="grid grid-cols-10 m-4">
              <div className="grid col-span-2 ">
                <button
                  id="cgpafilter"
                  className="text-white w-40 p-2 focus:outline-none  font-medium rounded-lg  text-center flex items-center dark:bg-[#4da8da] dark:hover:bg-gray-300 "
                  type="button"
                  onClick={(e) => setCgpaActive(!cgpaActive)}
                >
                  <p className="ml-12">CGPA </p>

                  <svg
                    class="ml-2 w-4 h-4"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {cgpaActive && (
                  <div
                    id="dropdown"
                    class="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-white"
                  >
                    <ul class="py-1 text-md  text-gray-700 dark:text-black">
                      <NavLink
                        onClick={callcgpa9}
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Above 9
                      </NavLink>
                      <NavLink
                        onClick={callcgpa8}
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Above 8
                      </NavLink>
                      <NavLink
                        onClick={callcgpa7}
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Above 7
                      </NavLink>
                    </ul>
                  </div>
                )}
              </div>
              <div className="grid col-span-2">
                <button
                  id="depttype"
                  class="text-white focus:outline-none p-2 font-medium rounded-lg  text-center inline-flex items-center dark:bg-[#4da8da] w-40 dark:hover:bg-gray-300"
                  type="button"
                  onClick={(e) => setTypeActive(!typeActive)}
                >
                  <p className="ml-4">Dept. Type </p>
                  <svg
                    class="ml-2 w-4 h-4"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {typeActive && (
                  <div
                    id="dropdown"
                    class="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                  >
                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
                      <NavLink
                        onClick={soft}
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Soft
                      </NavLink>
                      <NavLink
                        onClick={core}
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Core
                      </NavLink>
                    </ul>
                  </div>
                )}
              </div>
              <div className="grid col-span-2">
                <button
                  id="dept"
                  class="text-white p-2 focus:outline-none  font-medium rounded-lg  text-center inline-flex items-center dark:bg-[#4da8da] dark:hover:bg-gray-300 w-40"
                  type="button"
                  onClick={(e) => setDeptActive(!deptActive)}
                >
                  <p className="ml-4">Deptartment </p>
                  <svg
                    class="ml-2 w-4 h-4"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {deptActive && (
                  <div
                    id="dropdown"
                    class="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                  >
                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
                      <NavLink
                        onClick={comp}
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Computer
                      </NavLink>
                      <NavLink
                        onClick={it}
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        IT
                      </NavLink>
                      <NavLink
                        onClick={entc}
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        EnTC
                      </NavLink>
                      <NavLink
                        onClick={mechanical}
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Mechanical
                      </NavLink>
                      <NavLink
                        onClick={civil}
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Civil
                      </NavLink>
                      <NavLink
                        onClick={electrical}
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Electrical
                      </NavLink>
                    </ul>
                  </div>
                )}
              </div>
              <div className="grid col-span-2">
                <button
                  id="divtype"
                  class="text-white  focus:outline-none  font-medium rounded-lg  text-center inline-flex items-center p-2 dark:bg-[#4da8da] dark:hover:bg-gray-300 w-40"
                  type="button"
                  onClick={(e) => setStatusActive(!statusActive)}
                >
                  <p className="ml-8">Divison </p>
                  <svg
                    class="ml-2 w-4 h-4"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {statusActive && (
                  <div
                    id="dropdown"
                    class="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                  >
                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
                      <NavLink
                        onClick={divA}
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Div A
                      </NavLink>
                      <NavLink
                        onClick={divB}
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Div B
                      </NavLink>
                    </ul>
                  </div>
                )}
              </div>
              <div className="grid col-span-2">
                <button
                  id="depttype"
                  class="text-white  focus:outline-none font-medium rounded-lg  text-center inline-flex items-center p-2 dark:bg-[#4da8da] dark:hover:bg-gray-300 w-44"
                  type="button"
                  onClick={(e) => setStatusActive(!statusActive)}
                >
                  Placement Status{" "}
                  <svg
                    class="ml-2 w-4 h-4"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {statusActive && (
                  <div
                    id="dropdown"
                    class="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                  >
                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
                      <NavLink
                        onClick={placed}
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Placed
                      </NavLink>
                      <NavLink
                        onClick={unplaced}
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Unplaced
                      </NavLink>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <div className="m-12">
          <div className="p-8 rounded-lg shadow-xl  m-4 bg-gray-100">
            <div className="grid grid-cols-12">
              <div className="grid col-span-4 col-start-1 border-r-2 border-gray-400 ">
                <h2 className="text-black font-bold text-lg text-centre">
                  {graphName}
                </h2>
                <div className="grid grid-cols-3">
                  <div className="grid col-span-2 w-40 ml-4">
                    <div label="Default">
                      <div
                        className="radial-progress text-primary"
                        style={{
                          "--value": `${perData.Percent}`,
                          "--size": "8rem",
                        }}
                      >
                        {perData.Percent}%
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <h1> 🟢 Placed </h1>
                    <h1> 🔴 Unplaced </h1>
                  </div>
                </div>
              </div>
              <div className="grid col-span-4 text-center border-r-2 border-gray-400">
                <h2 className="text-black font-bold text-lg ">
                  Placed Students{" "}
                </h2>

                <div className="grid grid-cols-3">
                  <div className="grid col-span-2 w-40 ml-4">
                    <div label="Default">
                      <div
                        className="radial-progress text-primary"
                        style={{ "--value": 70, "--size": "8rem" }}
                      >
                        70%
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <h1> 🟢 Placed </h1>
                    <h1> 🔴 Unplaced </h1>
                  </div>
                </div>
              </div>
              <div className="grid col-span-4 text-center">
                <h2 className="text-black font-bold text-lg ">
                  Placed Students{" "}
                </h2>
                <div className="grid grid-cols-3">
                  <div className="grid col-span-2 w-40 ml-4">
                    <div label="Default">
                      <div
                        className="radial-progress text-primary"
                        style={{ "--value": 70, "--size": "8rem" }}
                      >
                        70%
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <h1> 🟢 Placed </h1>
                    <h1> 🔴 Unplaced </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 mr-12 ml-32 w-full">
          <div className="grid grid-cols-12">
            <div className="grid col-span-2 col-start-1">
              <button className="w-40 h-12 rounded-lg bg-[#4da8da] text-white text-md font-bold">
                Filter
              </button>
            </div>
            <div className="grid col-span-2 col-start-3">
              <button className="w-40 h-12 rounded-lg bg-[#4da8da] text-white text-md font-bold">
                Filter
              </button>
            </div>
            <div clasName="grid col-span-2 ">
              <input
                type="text"
                id="search-navbar"
                class="block w-80 ml-96 p-2 pl-10 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50  dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>

        <div className="mt-12 mr-24 ml-32 ">
          <div className="grid grid-cols-12">
            <div className="grid col-span-1  h-16 text-center items-center  font-bold">
              Photo
            </div>
            <div className="grid col-span-4  h-16 text-center items-center  font-bold">
              Name
            </div>
            <div className="grid col-span-6  h-16 text-center items-center  font-bold">
              Department
            </div>
            <div className="grid col-span-1  h-16 text-center items-center  font-bold">
              Resume
            </div>
          </div>
          {userData.map((field, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-12 mt-2 bg-gray-200 rounded-lg shadow-lg"
              >
                <div className="grid col-span-1  h-16 text-center items-center border-2">
                  {field.registrationform && field.registrationform[0] ? (
                    <img
                      className="ml-4 w-12 h-12 rounded-full shadow-lg"
                      src={dash}
                      alt="Student"
                    />
                  ) : (
                    <h1>hello</h1>
                  )}
                </div>
                <div className="grid col-span-4  h-16 text-center items-center border-2 font-bold">
                  {field.registrationform && field.registrationform[0] ? (
                    <h4 className="mb-1 text-md font-bold text-gray-900 dark:text-black">
                      {field.name} {field.registrationform[0].lastname}
                    </h4>
                  ) : (
                    <h4>hello</h4>
                  )}
                </div>
                <div className="grid col-span-6  h-16 text-center items-center border-2 font-bold">
                  {field.registrationform && field.registrationform[0] ? (
                    <h6 class="text-sm text-gray-700 font-bold dark:text-black">
                      {field.registrationform[0].department}
                    </h6>
                  ) : (
                    <h6>hello</h6>
                  )}
                </div>
                <div className="grid col-span-1  h-16 text-center items-center border-2 font-bold">
                  <button
                    className="rounded-lg shadow-2xl text-gray-800 border-2 border-gray-400 w-20 h-8"
                    onClick={() => ResumePage(field._id)}
                  >
                    Resume
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
