// Sidebar.js

import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Mobile menu button */}
      <div className="sm:hidden">
        <button
          type="button"
          className="fixed z-50 bottom-4 right-4 p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          onClick={toggleSidebar}
        >
          <span className="sr-only">Open sidebar</span>
          <MenuIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed z-50 inset-y-0 left-0 w-64 ${
          isOpen ? "block" : "hidden"
        } sm:block bg-gray-700 shadow`}
      >
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={toggleSidebar}
            >
              <span className="sr-only">Close sidebar</span>
              <XIcon className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="mt-8">
          {/* Sidebar content */}
          <nav className="px-3 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50"
            >
              Team
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50"
            >
              Projects
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50"
            >
              Calendar
            </a>
          </nav>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 transition-opacity bg-black opacity-50"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};
export default Sidebar;
