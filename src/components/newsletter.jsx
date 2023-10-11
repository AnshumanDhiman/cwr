export default function Newsletter() {
    return (
      <>
        <section className="px-28 shadow-xl border-2 bg-gradient-to-r from-blue-700 to-blue-900">
          <div className="container px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
            <div className="">
              <h2 className="text-3xl font-semibold tracking-tight text-white xl:text-3xl ">Need our Help ?   </h2>
              <p className="mt-3 text-lg text-white">
            We’d love to hear from you. Reach out our team.
              </p>
            </div>
            
          
  
            <div className="mt-8 lg:mt-0">
              <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
                {/* <input
                  id="email"
                  type="text"
                  className="px-4 py-2 text-white bg-white border border-gray-200 rounded-lg sm:mx-2    focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email Address"
                /> */}
  
                <button className="px-6 py-2 text-sm tracking-wide text-white border-2 border-white capitalize transition-colors duration-300 transform rounded-lg focus:ring focus:ring-blue-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  Contact Us
                </button>
              </div>
  
              
            </div>
          </div>
        </section>
      </>
    );
  }
  