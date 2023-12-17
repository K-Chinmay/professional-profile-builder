import React,{useState} from "react";
import {useNavigate } from "react-router-dom";
import placementimg from "../../images/placement.gif";
import NavLogin from "./navLogin";

const PlacementForm = () => {
  const navigate = useNavigate();

    const [placement,setplacement] =useState({
        placmentstatus:"",
        companyname:"",
        salary:""
    })
    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setplacement({ ...placement, [name]: value });
      };
      const PlacementForm = async (e) => {
        e.preventDefault();
    
        const {
          placmentstatus,
          companyname,
          salary
        } = placement;
    
    
        const res = await fetch("/place", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            placmentstatus,
            companyname,
            salary
          }),
        });
        console.log({
          placmentstatus,
          companyname,
          salary,
        })

        const data = await res.json();
        if (!data) {
    
          console.log("Form not send");
        } else {
          alert("Form  sent successfully ");
          navigate("/student/home")
         
        }
      };
  return (
    <div>
    <NavLogin/>
    <form method="POST">
      <section className="flex md:flex-row flex-col-reverse sm:py-16 py-6">
        <div className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
          <img
            src={placementimg}
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
                  value={placement.placmentstatus}
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
                  value={placement.companyname}
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
                  value={placement.salary}
                  onChange={handleInputs}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container grid grid-cols-3 my-3 space-y-2 justify-self-center ">
        <div className="col-start-2 ml-32">
        
          <button
            type="submit"
            className="text-white text-bold bg-[#4da8da] shadow-2xl hover:bg-gray-200 focus:outline-none focus:ring-4 lg:px-20  focus:ring-gray-400 font-medium rounded-full text-sm px-8 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
            onClick={PlacementForm}
          >
            SUBMIT
          </button>
          </div>
        </div>
        </form>
    </div>
  );
};

export default PlacementForm;
