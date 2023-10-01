import logo from '../assets/logo.svg'

export default function Navbar() {
    return (
      <>
       <nav className="relative bg-white shadow-sm">
        <div className="container px-36 py-8 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
                <a href="#">
                    <img className="w-auto h-15 sm:h-12" src={logo} alt="" />
                </a>
    
              
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
                    <a className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0" href="#">Home</a>
                    <a className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0" href="#">Services</a>
                    <a className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0" href="#">Solutions</a>
                    <a className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0" href="#">About</a>
                    <a className="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0" href="#">Contact</a>
                </div>
    
              
            </div>
        </div>
    </nav>
      </>
    );
  }
  