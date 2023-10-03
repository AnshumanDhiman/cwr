import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.svg";
import logo1 from "../assets/logo1.png";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDropdownLinkClick = () => {
    closeMenu();
    toggleDropdown();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="bg-white sticky top-0 z-50 shadow-lg">
        <div className="container px-24 py-6 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <Link to="/">
              <img className="w-auto h-[3.5rem] inline" src={logo1} alt="" />
              <h1 className="text-2xl text-gray-800 font-bold space-x-4 inline ml-[10px]">
                CWR Technologies
              </h1>
            </Link>
          </div>

          <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  md:bg-transparent  md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
            <div className="flex flex-col md:flex-row md:mx-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "my-2 transition-colors duration-300 transform text-blue-500 md:mx-4 md:my-0"
                    : "my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "my-2 transition-colors duration-300 transform text-blue-500 md:mx-4 md:my-0"
                    : "my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0"
                }
              >
                About
              </NavLink>
              <NavLink
                onClick={toggleDropdown}
                className="my-2 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0"
              >
                <span className="relative">Services ▾</span>
              </NavLink>
              {isDropdownOpen && (
                <ul className="dropdown-list absolute  bg-white shadow-xl mt-10 ml-40 border-2 ">
                  <NavLink
                    to="/cloud"
                    onClick={handleDropdownLinkClick}
                  >
                    <li className=" bg-white hover:bg-blue-700 hover:text-white p-4">
                      Cloud Services
                    </li>
                  </NavLink>
                  <NavLink to="/managed-it" onClick={handleDropdownLinkClick}>
                    <li className=" bg-white hover:bg-blue-700 hover:text-white p-4">
                      Managed IT Services
                    </li>
                  </NavLink>
                  <NavLink
                    to="/security"
                    onClick={handleDropdownLinkClick}
                  >
                    <li className=" bg-white hover:bg-blue-700 hover:text-white p-4">
                      Security Services
                    </li>
                  </NavLink>
                  <NavLink
                    to="/software"
                    onClick={handleDropdownLinkClick}
                  >
                    <li className=" bg-white hover:bg-blue-700 hover:text-white p-4">
                      Software Development
                    </li>
                  </NavLink>
                </ul>
              )}

              <NavLink
                to="/trainings"
                className={({ isActive }) =>
                  isActive
                    ? "my-2 transition-colors duration-300 transform text-blue-500 md:mx-4 md:my-0"
                    : "my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0"
                }
              >
                Trainings
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "my-2 transition-colors duration-300 transform text-blue-500 md:mx-4 md:my-0"
                    : "my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0"
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
