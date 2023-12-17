import { useState, useEffect } from "react";
import close from "../../images/close-icon.svg";
import menu from "../../images/menu.svg";
import navlinkslogin from "./navLinkLogin";
import resume2 from "../../images/resume2.png";
import admin from "../../images/admin4.png";
// import { Dropdown, Menu } from "semantic-ui-react";
import { Dropdown, IconButton } from "rsuite";
import PlusIcon from "@rsuite/icons/Plus";
import PageIcon from "@rsuite/icons/Page";
import FolderFillIcon from "@rsuite/icons/FolderFill";
import DetailIcon from "@rsuite/icons/Detail";
import FileDownloadIcon from "@rsuite/icons/FileDownload";

const NavLogin = () => {
  const [active, setActive] = useState("/");
  const [toggle, setToggle] = useState(false);
  const [drop, setDrop] = useState("");
  const [userData, setUserData] = useState({
    image: "",
  });
  // const [open, setOpen] = useState(true);
  // const Links = [
  //   {
  //     id: 1,
  //     link: "Your Profile",
  //   },
  //   {
  //     id: 2,
  //     link: "Log Out",
  //   },
  // ];

  const NavResponse = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setUserData({ ...userData, image: data.registrationform[0].image });
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    NavResponse();
  }, []);
  return (
    <div>
      <nav className="w-full bg-[#4da8da]  flex py-6 justify-between items-center navbar">
        <a href="/" className="flex items-center">
          <img
            src={resume2}
            className="mr-3 ml-8  w-16 lg:h-12 sm:h-9"
            alt=""
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Profile Builder
          </span>
        </a>

        <ul className="list-none sm:flex hidden justify-center items-center flex-1 bg-white rounded-lg mr-16 ml-80 ">
          {navlinkslogin.map((nav, index) => (
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
            } p-6 absolute bg-white top-20 right-0 mx-2 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navlinkslogin.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navlinkslogin.length - 1 ? "mb-0" : "mb-4"} `}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`${nav.id}`}>{nav.title}</a>
                  <hr />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col ">
          <div className="flex mx-3 ">
            <a className="flex items-center">
              <img
                src={userData.image}
                className="mr-8 h-12 w-12 rounded-full border-3 border-black shadow-xl"
                alt={admin}
              />
            </a>{" "}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavLogin;
