import React, { useEffect, useState } from "react";

const CarouselCard =()=>{
  const [userCompany, setUserCompany] = useState([{
    companyname: "",
    dateofvisit: "",
    companyhr: "",
    companyphone: "",
    collegecoordinator: "",
  }]);
  const callCompanyPage = async () => {
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
      setUserCompany(
        [...userCompany,{
        companyname: data.companyname,
        dateofvisit: data.dateofvisit,
        companyhr: data.companyhr,
        companyphone: data.companyphone,
        collegecoordinator: data.collegecoordinator,
      }]);
      
      console.log(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
      return userCompany;
    } catch (err) {
      console.log(err);
      // Navigate("/student/login");
    }
  };
  useEffect(() => {
    return () => {
      callCompanyPage();
    };
  }, []);
}






export default CarouselCard;
