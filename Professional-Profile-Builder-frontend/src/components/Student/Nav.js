import { useState } from "react";
import close from "../../images/close-icon.svg";
import menu from "../../images/menu.svg";
import navlinks from "./navlinks";
import resume2 from "../../images/resume2.png";

const Nav = () => {
  const [active, setActive] = useState("/");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full bg-[#4da8da]  flex py-6 justify-between items-center navbar">
      <a href="/" className="flex items-center">
        <img src={resume2} className="mr-3 ml-8  w-16 lg:h-12 sm:h-9" alt="" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Profile Builder
        </span>
      </a>

      <ul className="list-none sm:flex hidden justify-center items-center flex-1 bg-white rounded-lg mr-16 ml-80 ">
        {navlinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-semibold cursor-pointer text-[16px] ${
              active === nav.title ? "text-gray-800" : "text-[#4da8da]"
            } mr-8 border-1 p-4 `}
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
            {navlinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navlinks.length - 1 ? "mb-0" : "mb-4"} `}
                onClick={() => setActive(nav.title)}
              >
                <a href={`${nav.id}`}>{nav.title}</a>
                <hr/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
