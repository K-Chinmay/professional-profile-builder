import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

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

    if (res.status === 400 || !data) {
      window.alert("Insvlid Credentials");
    } else {
      window.alert("Login Successfull");
      navigate("/");
    }
  };
  return (
    <>
      <div className="grid grid-cols-3 divide-x ">
        <div className="col-span-1 overflowY-hidden">
          <section className="bg-white">
            <div className="flex flex-col mt-10 items-center justify-center px-8 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-full bg-[#D3D3D3] rounded-xl shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#D3D3D3]  dark:border-white">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-500">
                    Sign in to your account
                  </h1>
                  <form className="space-y-4 md:space-y-6" method="POST">
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required=""
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-white border border-gray-300 text-gray-900 sm:text-sm shadow-gray rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
                        required=""
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            aria-describedby="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                            required=""
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="remember"
                            className="text-gray-400 dark:text-gray-400"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <p
                        href="#"
                        className="text-sm font-medium text-gray-400 hover:underline dark:text-gray-400"
                      >
                        Forgot password?
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white bg-gray-900 hover:bg-brown-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-500 dark:hover:bg-gray-600 "
                      onClick={loginUser}
                    >
                      Sign in
                    </button>
                    <p className="text-sm font-light text-brown-500 dark:text-brown-200">
                      Don’t have an account yet?{" "}
                      <NavLink
                        to="/signup"
                        className="font-medium text-gray-400 hover:underline dark:text-gray-400"
                      >
                        Sign up
                      </NavLink>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>
          
        </div>
        <div className="border-transparent  col-span-2">
            <img
              src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=800"
              className="inset-y-0 right-0 border-transparent m-20"
              alt=""
            />
        </div>
        
      </div>
    </>
  );
};

export default Login;
