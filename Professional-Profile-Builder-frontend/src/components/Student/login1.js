import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {ToastContainer , toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import loginside from "../../images/loginside.jpg";
import loginlogo from "../../images/loginlogo.png";
import Nav from "./Nav";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/login", {
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
    if(email === ""){
      toast.error("Enter valid email");

    }
    if (res.status === 400 || !data) {
      toast.error("Invalid Credentials");
    } else {
      toast.success("Login Success");
      navigate("/student/home1");
    }
  };
  return (
    <div className="maindiv overflow-y-hidden">
      <Nav />
      <section className="bg-gray-100 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1">
          <div className="flex flex-col mx-24 px-6 py-8 m-20  md:h-screen lg:py-0 col-span-2 lg:col-span-1">
            <div className="w-full border-transparent rounded-lg shadow-sm md:mt-8 sm:max-w-md xl:p-0 dark:bg-gray-100">
              <div className="p-6 bg-gray-100 rounded-lg space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-[#4da8da]">
                  Login
                </h1>
                <hr className="w-20 border-4 rounded-lg border-blue-400" />

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
                      className="dark:bg-gray-100 dark:border-b-2 text-gray-900 sm:text-sm  block w-full p-2.5  dark:border-[#4da8da] dark:placeholder-gray-900 dark:text-black "
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
                      className="dark:bg-gray-100 dark:border-b-2 text-gray-900 sm:text-sm block w-full p-2.5 dark:border-[#4da8da] dark:placeholder-gray-900 dark:text-black"
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
                    onClick={loginUser}
                  >
                    Login
                  </button>
                  <p className="text-sm font-light text-gray-800 dark:text-gray-800">
                    dont have an account?{" "}
                    <NavLink
                      to="/student/signup"
                      className="font-medium text-primary-600 hover:underline dark:text-[#4da8da]"
                    >
                      Signup here
                    </NavLink>
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="col-span-2 col-start-0 lg:col-span-1 lg:col-start-2  flex bg-white ">
            <div className=" w-full h-full mt-60 mr-12 ml-20 text-center">
              {/*<img
                className="w-[100px] h-[100px] text-[#4da8da] border-transparent ml-64 mb-8 mt-8 "
                src={loginlogo}
                alt="sign up"
              />*/}
              <h2 className="font-sans font-semibold text-2xl text-center text-[#4da8da] mb-4">
                Nice to see you again
              </h2>

              <h1 className="font-sans font-bold text-6xl text-center text-[#4da8da] mb-8">
                Welcome Back!!!{" "}
              </h1>
              <h2 className="font-sans font-semibold text-xl text-center text-[#4da8da] mb-8">
                Login to your Account
              </h2>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Login;
