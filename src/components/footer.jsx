// import logo from '../assets/logo.svg'

export default function footer() {
  return (
    <>
        <footer className="bg-white shadow-xl border-t-2">
    <div className="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
        {/* <a href="#">
            <img className="w-auto h-7" src={logo} alt="Logo here" />
        </a> */}

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0 px-16">
            <a href="#" className="text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 ">
                Home
            </a>

            <a href="#" className="text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 ">
                Services
            </a>

            <a href="#" className="text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 ">
               Solutions
            </a>
            <a href="#" className="text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 ">
                Privacy Policy
            </a>

            <a href="#" className="text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 ">
                Licensing
            </a>

            <a href="#" className="text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 ">
                Careers
            </a>
        </div>

        <p className="mt-6 text-sm text-gray-500 lg:mt-0 dark:text-gray-400">© Copyright 2023 CWR Technologies. </p>
    </div>
</footer>
    </>
  )
}
