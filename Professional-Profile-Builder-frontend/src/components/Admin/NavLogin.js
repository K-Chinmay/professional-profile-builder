import { useState } from "react";

import profile from "../../images/profile.png";
import close from "../../images/close-icon.svg";
import menu from "../../images/menu.svg";
import navlinkLogin from "./navLinkLogin";
import admin from "../../images/admin4.png";

const NavLogin = () => {
  const [active, setActive] = useState("/");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full bg-[#4da8da]  flex py-6 justify-between items-center navbar">
      <a href="/" className="flex items-center">
        <img src={profile} className="mr-3 ml-8 h-6 sm:h-9" alt="" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">
          Profile Builder
        </span>
      </a>

      <ul className="list-none sm:flex hidden justify-center items-center flex-1 bg-white rounded-lg mr-16 lg:ml-80 lg:pl-4">
        {navlinkLogin.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-semibold cursor-pointer text-[16px] ${
              active === nav.title ? "text-gray-800" : "text-[#4da8da]"
            } mr-8 border-1  p-4  `}
            onClick={() => setActive(nav.title)}
          >
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain mr-4"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 absolute bg-white top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navlinkLogin.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navlinkLogin.length - 1 ? "mb-0" : "mb-4"} `}
                onClick={() => setActive(nav.title)}
              >
                <a href={`${nav.id}`}>{nav.title}</a>
                <hr />
              </li>
            ))}
          </ul>
        </div>
        
      </div>
      <a href="/" className="flex items-center">
        <img src={admin} className="mr-8 sm:h-9  rounded-full border-3 border-[#4da8da] bg-white" alt="" />
        
      </a>
    </nav>
  );
};

export default NavLogin;
