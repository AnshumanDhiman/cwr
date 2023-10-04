import React from 'react'
import heroImg from "../../assets/managed.svg";
export default function ManagedIT() {
  return (
    <>
        <div>
        <div className="relative grid w-full bg-gradient-to-r from-orange-600 to-orange-800 h-[30rem] items-center">
      <div className="px-28 py-8">
          <div className="items-center flex">
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl font-bold text-[#F5F5F5]">
               Managed IT Services
             
              </h1>

              <p className="mt-3 text-white">
              We build secure Cloud Solutions that target your business needs
              </p>
            </div>

            <div className="flex items-center justify-center w-full mt-0 lg:w-1/2">
              <img
                className="w-[500px] h-full lg:max-w-2xl"
                src={heroImg}
                alt="image showing working culture"
              />
            </div>
          </div>
        </div>

      </div>
        </div>
        <div className="grid grid-cols-1 px-32 gap-8 py-16 mt-20 ">
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out border-t-[16px] border-orange-700 "
      >
        <h1 className="text-2xl font-bold bg-white text-justifyt">Monitoring Services</h1>
       
        <p className="py-4 bg-white text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button className='text-sm px-4 py-2 font-sm text-white capitalize transition-colors duration-300 transform bg-orange-700 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'>Explore More</button>
      </div>
     
      </div>
        <br/><br/><br/><br/><br/><br/>
    </>
  )
}
