import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Companyimage from "../../images/Company.gif";

import Nav from "./Nav";
import NavLogin from "./NavLogin";

const Company = () => {
  const navigate = useNavigate();

  const [userCompany, setUserCompany] = useState({});

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserCompany({ ...userCompany, [name]: value });
  };

  const CompanyForm = async (e) => {
    e.preventDefault();

    const {
      companyname,
      dateofvisit,
      companyhr,
      companyphone,
      collegecoordinator,
    } = userCompany;

    const res = await fetch("/company", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        companyname,
        dateofvisit,
        companyhr,
        companyphone,
        collegecoordinator,
      }),
    });
    console.log({
      companyname,
      dateofvisit,
      companyhr,
      companyphone,
      collegecoordinator,
    });
    const data = await res.json();
    if (!data) {
      console.log("Form not send");
    } else {
      alert("Form  sent successfully ");
      navigate("/admin/home1");
    }
    
  };
  const mailHandler = async (e) => {
    try {

      const { companyname,
        dateofvisit,
        companyhr,
        companyphone,
        collegecoordinator } = userCompany;
      const res = await fetch("/companymail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyname,
        dateofvisit,
        companyhr,
        companyphone,
        collegecoordinator
        }),
      });
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      } else {
        window.alert("Mail Sent ");
        console.log("Success");
        navigate("/admin/dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <NavLogin />
      <div className="mb-40 mr-32 ml-32 mt-20 ">
        <form method="POST">
          <section className="flex md:flex-row flex-col sm:py-16 py-6 ">
            <div className=" flex-1 justify-center items-start flex-col">
              <div className="p-2 mx-3 h-auto lg:max-w-3xl sm:max-w-sm bg-white rounded-2xl shadow-2xl  dark:bg-white dark:border-gray-700">
                <p className="text-lg text-gray-800 dark:text-black font-bold text-center mx-2 my-3">
                  Placement Record
                </p>
                <hr />
                <div className="text-left mx-3 p-3 space-x-2">
                  <div className="my-3 mb-6 space-y-2">
                    <label
                      for="companyname"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyname"
                      id="companyname"
                      className="bg-gray-50 border-b-2 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=" "
                      required
                      value={userCompany.companyname}
                      onChange={handleInputs}
                    />
                  </div>
                </div>
                <div className="text-left mx-3 p-3 space-x-2">
                  <div className="my-3 mb-6 space-y-2">
                    <label
                      for="dateofvisit"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Date of Visit(DD-MM-YYYY)
                    </label>
                    <input
                      type="text"
                      name="dateofvisit"
                      id="dateofvisit"
                      className="bg-gray-50 border-b-2 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=" "
                      required
                      value={userCompany.dateofvisit}
                      onChange={handleInputs}
                    />
                  </div>
                </div>
                <div className="text-left mx-3 p-3 space-x-2">
                  <div className="my-3 mb-6 space-y-2">
                    <label
                      for="companyhr"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Company Criteria
                    </label>
                    <input
                      type="text"
                      name="companyhr"
                      id="companyhr"
                      className="bg-gray-50 border-b-2 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=" "
                      required
                      value={userCompany.companyhr}
                      onChange={handleInputs}
                    />
                  </div>
                </div>
                <div className="text-left mx-3 p-3 space-x-2">
                  <div className="my-3 mb-6 space-y-2">
                    <label
                      for="companyphone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      Phone number (123-456-7890)
                    </label>
                    <input
                      type="text"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      name="companyphone"
                      id="companyphone"
                      className="bg-gray-50 border-b-2 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=" "
                      required
                      value={userCompany.companyphone}
                      onChange={handleInputs}
                    />
                  </div>
                </div>
                <div className="text-left mx-3 p-3 space-x-2">
                  <div className="my-3 mb-6 space-y-2">
                    <label
                      for="collegecoordinator"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                      College Coordinator
                    </label>
                    <input
                      type="text"
                      name="collegecoordinator"
                      id="collegecoordinator"
                      className="bg-gray-50 border-b-2 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-black dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=" "
                      required
                      value={userCompany.collegecoordinator}
                      onChange={handleInputs}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative rounded-2xl shadow-2xl">
              <img
                src={Companyimage}
                alt="image"
                className="w-[90%] h-auto relative rounded-xl"
              />
            </div>
          </section>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={()=>{CompanyForm();mailHandler();}}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Company;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import Nav from "./Nav";
// import NavLogin from "./NavLogin";

// const Company = () => {
//   const navigate = useNavigate();


//   const [userCompany, setUserCompany] = useState({
    
//   });

//   const handleInputs = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setUserCompany({ ...userCompany, [name]: value });
//   };

//   const CompanyForm = async (e) => {
//     e.preventDefault();

//     const {
//       companyname,
//       dateofvisit,
//       companylink,
//       companyhr,
//       companyphone,
//       collegecoordinator,
//     } = userCompany;

//     const res = await fetch("/company", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         companyname,
//         dateofvisit,
//         companylink,
//         companyhr,
//         companyphone,
//         collegecoordinator,
//       }),
//     });
//     console.log({
//       companyname,
//       dateofvisit,
//       companylink,
//       companyhr,
//       companyphone,
//       collegecoordinator,
//     });
//     const data = await res.json();
//     if (!data) {
//       console.log("Form not send");
//     } else {
//       alert("Form  sent successfully ");
//       navigate("/admin/home1")
//     }
//   }
//     return (
//       <div>
//       <NavLogin/>
//         <div className="mb-40 mr-40 ml-40 mt-20 rounded-2xl shadow-2xl p-20">
//           <form method="POST">
//             <div className="relative z-0 mb-6 w-full group">
//               <input
//                 type="text"
//                 name="companyname"
//                 id="companyname"
//                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                 placeholder=" "
//                 required
//                 value={userCompany.companyname}
//                 onChange={handleInputs}
//               />
//               <label
//                 for="companyname"
//                 className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//               >
//                 Company Name
//               </label>
//             </div>

//             <div className="relative z-0 mb-6 w-full group">
//               <input
//                 type="text"
//                 name="dateofvisit"
//                 id="dateofvisit"
//                 className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                 placeholder=""
//                 required
//                 value={userCompany.dateofvisit}
//                 onChange={handleInputs}
//               />
//               <label
//                 for="dateofvisit"
//                 className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//               >
//                 Date of Visit(DD-MM-YYYY)
//               </label>
//             </div>

//             <div className="grid md:grid-cols-2 md:gap-6">
//               <div className="relative z-0 mb-6 w-full group">
//                 <input
//                   type="text"
//                   name="companylink"
//                   id="companylink"
//                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                   placeholder=" "
//                   required
//                   value={userCompany.companylink}
//                   onChange={handleInputs}
//                 />
//                 <label
//                   for="companylink"
//                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                 >
//                   Companny Link
//                 </label>
//               </div>
//               <div className="relative z-0 mb-6 w-full group">
//                 <input
//                   type="text"
//                   name="companyhr"
//                   id="companyhr"
//                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                   placeholder=" "
//                   required
//                   value={userCompany.companyhr}
//                   onChange={handleInputs}
//                 />
//                 <label
//                   for="companyhr"
//                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                 >
//                   Company Hr
//                 </label>
//               </div>
//             </div>
//             <div className="grid md:grid-cols-2 md:gap-6">
//               <div className="relative z-0 mb-6 w-full group">
//                 <input
//                   type="text"
//                   pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
//                   name="companyphone"
//                   id="companyphone"
//                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                   placeholder=" "
//                   required
//                   value={userCompany.companyphone}
//                   onChange={handleInputs}
//                 />
//                 <label
//                   for="companyphone"
//                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                 >
//                   Phone number (123-456-7890)
//                 </label>
//               </div>
//               <div className="relative z-0 mb-6 w-full group">
//                 <input
//                   type="text"
//                   name="collegecoordinator"
//                   id="collegecoordinator"
//                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                   placeholder=" "
//                   required
//                   value={userCompany.collegecoordinator}
//                   onChange={handleInputs}
//                 />
//                 <label
//                   for="collegecoordinator"
//                   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                 >
//                   College Co-ordinator
//                 </label>
//               </div>
//             </div>
//             <button
//               type="submit"
//               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               onClick={CompanyForm}
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     );
  
// };
// export default Company;
