import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import admin3 from "../../images/admin.png";
import file from "../../images/file.png";
import Footer from "../Footer";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { AiOutlineForm } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import logo from "../../images/logo.png";

import NavLogin from "./NavLogin";

const Home1 = () => {
  const Navigate = useNavigate();
  const [cgpaActive, setCgpaActive] = useState(false);
  const [typeActive, setTypeActive] = useState(false);
  const [deptActive, setDeptActive] = useState(false);
  const [statusActive, setStatusActive] = useState(false);
  const [userData, setUserData] = useState([
    {
      name: "",
      image: "",
      lastname: "",
    },
  ]);
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

      for (let i = 0; i < data.length; i++) {
        console.log(data[i].name);
      }

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
      setUserData(data);
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
      setUserData(data);
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
      setUserData(data);
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
      setUserData(data);
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
      setUserData(data);
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
      setUserData(data);
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
      setUserData(data);
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
      setUserData(data);
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
      setUserData(data);
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
      setUserData(data);
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
      setUserData(data);
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
      setUserData(data);
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
      setUserData(data);
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
      setUserData(data);
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
      setUserData(data);
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
      
      <div className="grid grid-cols-4 bg-white ">
        <section className="grid col-span-1 w-64">
          <aside className="w-64" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded shadow-xl dark:bg-white">
              <h4 className="font-semibold text-left text-lg">Filters</h4>
              <div className="my-3 mb-6 space-y-2">
                <button
                  id="cgpafilter"
                  class="text-black focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-gray-300 "
                  type="button"
                  onClick={(e) => setCgpaActive(!cgpaActive)}
                >
                  CGPA{" "}
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
              <div className="my-3 mb-6 space-y-2">
                <button
                  id="depttype"
                  class="text-black focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-white"
                  type="button"
                  onClick={(e) => setTypeActive(!typeActive)}
                >
                  Dept. Type{" "}
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
              <div className="my-3 mb-6 space-y-2">
                <button
                  id="dept"
                  class="text-black focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-white "
                  type="button"
                  onClick={(e) => setDeptActive(!deptActive)}
                >
                  Deptartment{" "}
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
              <div className="my-3 mb-6 space-y-2">
                <button
                  id="depttype"
                  class="text-black focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-white "
                  type="button"
                  onClick={(e) => setStatusActive(!statusActive)}
                >
                  Divison{" "}
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
              <div className="my-3 mb-6 space-y-2">
                <button
                  id="depttype"
                  class="text-black  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-white "
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
          </aside>
        </section>
        <div className="grid col-span-3 indicator">
          <section className="grid lg:grid-cols-3 grid-cols-1">
            {userData.map((field, index) => {
              console.log(field);
              return (
                <div key={index} className="m-4 ">
                  <div className="w-full max-w-sm bg-[#4da8da] rounded-xl  shadow-2xl dark:bg-white dark:border-gray-700 col-span-1 col-start-2 pt-10">
                    <div className="flex justify-center items-center pb-10 ">
                      {field.registrationform && field.registrationform[0] ? (
                        <img
                          className="m-4 w-24 h-24 rounded-full shadow-lg"
                          src={field.registrationform[0].image}
                          alt="Student"
                        />
                      ) : (
                        <h1>hello</h1>
                      )}
                      <div>
                        {field.registrationform && field.registrationform[0] ? (
                          <h4 className="mb-1 text-xl font-bold text-gray-900 dark:text-black">
                            {field.name} {field.registrationform[0].lastname}
                          </h4>
                        ) : (
                          <h4>hello</h4>
                        )}
                        {field.registrationform && field.registrationform[0] ? (
                          <h6 class="text-sm text-gray-700 font-bold dark:text-black">
                            {field.registrationform[0].department}
                          </h6>
                        ) : (
                          <h6>hello</h6>
                        )}
                        <button
                          className="bg-[#4da8da] rounded-lg shadow-2xl text-black text-semibold m-8 p-2"
                          onClick={() => ResumePage(field._id)}
                        >
                          Resume
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home1;
