import React, { useState, useEffect } from "react";
import { RadialBarChart, PolarAngleAxis, RadialBar } from "recharts";
import { NavLink, useNavigate } from "react-router-dom";
import { render } from "react-dom";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Chart = () => {
  const Navigate = useNavigate();
  const [userData, setUserData] = useState([
    {
      placementstatus: "",
    },
  ]);
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
      setUserData(data);

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
  useEffect(() => {
    callAdminHomePage();
  });
var percentage = 66;
  return (
    <div>
      <div label="Default">
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
    </div>
  );
};

export default Chart;
