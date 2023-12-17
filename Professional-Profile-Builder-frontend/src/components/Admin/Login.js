import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import loginside from "../../images/LoginGIF.gif";
import loginlogo from "../../images/signup.png";
import Nav from "./Nav";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginAdmin = async (e) => {
    e.preventDefault();
    const res = await fetch("/adminlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Insvlid Credentials");
    } else {
      window.alert("Login Successfull");
      navigate("/admin/dashboard");
    }
  };
  return (
    <div className="maindiv">
    <Nav/>
      <section className="bg-white ">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1">
      
        <div className="flex flex-col   mx-24 px-6 py-8  md:h-screen lg:py-0 col-span-2 lg:col-span-1">
          <p
            className="flex items-center   text-2xl font-semibold text-gray-900 dark:text-black px-44 py-8"
          >
            <img
              className="w-16 h-16 mr-12"
              src={loginlogo}
              alt="sign up"

            /> 
          </p>
          <div className="w-full rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white">
            <div className="p-6 bg-white rounded-lg space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-[#4da8da]">
                Login
              </h1>
              <form className="space-y-4 md:space-y-6" method="POST">
                
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#4da8da]"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="dark:bg-white dark:border-b-2 text-gray-900 sm:text-sm  block w-full p-2.5  dark:border-[#4da8da] dark:placeholder-gray-900 dark:text-black "
                    placeholder="name@company.com"
                    required=""
                    autoComplete="true"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#4da8da]"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="dark:bg-white dark:border-b-2 text-gray-900 sm:text-sm block w-full p-2.5 dark:border-[#4da8da] dark:placeholder-gray-900 dark:text-black"
                    required=""
                    autoComplete="true"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  name="signup"
                  id="signup"
                  value="register"
                  className="w-full text-white bg-gray-600 hover:bg-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#4da8da] dark:hover:bg-blue-200"
                  onClick={loginAdmin}
                >
                  Login
                </button>
                <p className="text-sm font-light text-gray-800 dark:text-gray-800">
                  dont have an account?{" "}
                  <NavLink
                    to="/admin/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-[#4da8da]"
                  >
                    Signup here
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="col-span-2 col-start-0 lg:col-span-1 lg:col-start-2  flex">
        <p
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-black mx-8 my-8"
          >
            <img
              className="w-full h-full  inset-y-0 right-0 border-transparent rounded-lg shadow-2xl"
              src={loginside}
              alt="sign up"

            /> 
            </p>

        </div>
        
        </div>
      </section>
      
    </div>
  );
};

export default Login;