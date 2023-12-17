import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Footer from "../Footer";
import NavLogin from "./NavLogin";



const News = () => {
  const Navigate = useNavigate();
 
  const [newsData, setNewsData] = useState(
    {
      companyname:"",
      companylink: "",
      companyhr:"",
      companyphone:"",
      collegecoordinator: "",
    },
);

  const callNewsPage = async () => {
    try {
      const res = await fetch("/company", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setNewsData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      Navigate("/admin/home1");
    }
  };
  
  useEffect(() => {
    callNewsPage();
  }, []);

  return (
    <div>
    <NavLogin/>
      <div className="grid grid-cols-4 bg-white " >
        <div className="grid col-span-4 indicator">
          <section className="grid lg:grid-cols-3 grid-cols-1">
          <div className="w-full max-w-sm bg-[#4da8da] rounded-xl  shadow-2xl dark:bg-white dark:border-gray-700 col-span-1 col-start-2 pt-10">
                    <div className="flex justify-center items-center pb-10 ">
                      
                      <div>
                          <h4 className="mb-1 text-xl font-bold text-gray-900 dark:text-black">
                            {newsData.companyname} 
                          </h4>
                       
                          <h6 class="text-sm text-gray-700 font-bold dark:text-black">
                            {newsData.companylink}
                          </h6>
                      
                       
                      </div>
                    </div>
                  </div>
            
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;
