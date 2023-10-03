import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import logo1 from "../assets/l.png";

export default function Navbar() {
  return (
    <>
      <nav className="bg-white sticky top-0 z-50 shadow-lg">
        <div className="container px-24 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <Link to="/">
              <img className="w-auto h-[4rem] inline mb-[10px]" src={logo1} alt="" />
              <h1 className="text-2xl text-gray-800 font-bold space-x-4 inline ml-[10px]">CWR Technologies</h1>
            </Link>

            {/* <div className="flex md:hidden">
                    <button x-cloak onClick="isOpen = !isOpen" type="button" className="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 " aria-label="toggle menu">
                        <svg x-show="!isOpen" xlin xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
                            <path strokeWidth="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                        </svg>

                        <svg  x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            strokeWidth={2}>
                            <path strokeWidth="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div> */}
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
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "my-2 transition-colors duration-300 transform text-blue-500 md:mx-4 md:my-0"
                    : "my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0"
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/solutions"
                className={({ isActive }) =>
                  isActive
                    ? "my-2 transition-colors duration-300 transform text-blue-500 md:mx-4 md:my-0"
                    : "my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0"
                }
              >
                Solutions
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
