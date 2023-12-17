import React, { useState } from "react";
import { NavLink,useNavigate} from "react-router-dom";
import signup from "../../images/finalsignup.png";
 
import signupside from "../../images/signupGIF.gif";
import Nav from "./Nav";


const Signup = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setAdmin({ ...admin, [name]: value });
  };

  const PostData = async(e) =>{
      e.preventDefault();
      const {name,email,password} = admin;
      const res = await fetch("/adminregister",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,email,password
        })
      });

      const data = await res.json();

      if(data.status===422 ||!data)
      {
        window.alert("Invalid");
        console.log("Invalid");
      } else{
        window.alert("Success");
        console.log("Success");
        navigate("/admin/login")
      }
  }
  return (
    <div className="maindiv">
    <Nav/>
      <section className="bg-white ">
      <div className="grid grid-cols-2 ">
        
      <div className="col-span-2 col-start-0 lg:col-span-1 lg:col-start-1  flex bg-white">
        <p
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-black mx-8 my-8"
          >
            <img
              className="w-full h-full  inset-y-0 right-0 border-transparent rounded-lg shadow-2xl"
              src={signupside}
              alt="sign up"

            /> 
            </p>

        </div>

        <div className="flex flex-col  mx-24 px-6 py-8  md:h-screen lg:py-0 col-span-2 lg:col-span-1">
          <p
            className="flex items-center   text-2xl font-semibold text-gray-900 dark:text-black px-44 py-8"
          >
            <img
              className="w-8 h-8 mr-12 lg:w-16 lg:h-16"
              src={signup}
              alt="sign up"

            /> 
          </p>
          <div className="w-full rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white">
            <div className="p-6 bg-white rounded-lg space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-[#4da8da]">
                Signup
              </h1>
              <hr className="w-28 border-4 rounded-lg border-blue-400" />

              <form className="space-y-4 md:space-y-6" method="POST">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-[#4da8da]"
                  >
                    Name :
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    className="dark:bg-white dark:border-b-2 dark:border-[#4da8da] text-gray-900 sm:text-sm   block w-full p-2.5   dark:placeholder-gray-900 dark:text-black "
                    placeholder="name"
                    required=""
                    value={admin.name}
                    onChange={handleInputs}
                  />
                </div>
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
                    value={admin.email}
                    onChange={handleInputs}
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
                    value={admin.password}
                    onChange={handleInputs}
                    autoComplete="off"
                  />
                </div>

                <button
                  type="submit"
                  name="signup"
                  id="signup"
                  value="register"
                  className="w-full text-white bg-gray-600 hover:bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#4da8da] dark:hover:bg-blue-200"
                  onClick={PostData}
                >
                  Signup
                </button>
                <p className="text-sm font-light text-gray-800 dark:text-gray-800">
                  already have an account?{" "}
                  <NavLink
                    to="/admin/login"
                    className="font-medium text-primary-600 hover:underline dark:text-[#4da8da]"
                  >
                    Login here
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
        
        </div>
      </section>
      
    </div>
  );
};

export default Signup;