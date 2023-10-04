import React from 'react'
import heroImg from "../../assets/cloud.svg";
import {AiOutlineArrowRight} from 'react-icons/ai'
export default function Cloud() {
  return (
    <>
        <div>
        <div className="relative grid w-full bg-gradient-to-r from-green-600 to-green-800 h-[30rem] items-center">
      <div className="px-28 py-8">
          <div className="items-center flex">
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl font-bold text-[#F5F5F5]">
               Cloud Services
             
              </h1>

              <p className="mt-3 text-white">
              We build secure Cloud Solutions that target your business needs
              </p>
            </div>

            <div className="flex items-center justify-center w-full mt-0 lg:w-1/2">
              <img
                className="w-[350px] h-full lg:max-w-2xl"
                src={heroImg}
                alt="image showing working culture"
              />
            </div>
          </div>
        </div>

      </div>
        </div>
  
      <div className="grid grid-cols-4 px-32 gap-8 py-16 mt-20">
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out border-t-[16px] border-green-700 "
      >
        <h1 className="text-2xl font-bold bg-white text-justifyt">Cloud Design and Implementation</h1>
       
        <p className="py-4 bg-white text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button className='text-sm px-4 py-2 font-sm text-white capitalize transition-colors duration-300 transform bg-green-700 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'>Explore More</button>
      </div>
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out border-t-[16px] border-green-700 "
      >
        <h1 className="text-2xl font-bold bg-white text-left">Cloud Migration</h1>
        <br/>
        <p className="py-4 bg-white text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button className='text-sm px-4 py-2 font-sm text-white capitalize transition-colors duration-300 transform bg-green-700 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'>Explore More</button>
      </div>
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out  border-t-[16px] border-green-700"
      >
        <h1 className="text-2xl font-bold bg-white text-left">Cloud Management</h1>
        <br/>
        <p className="py-4 bg-white text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button className='text-sm px-4 py-2 font-sm text-white capitalize transition-colors duration-300 transform bg-green-700 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'>Explore More</button>
      </div>
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out  border-t-[16px] border-green-700"
      >
        <h1 className="text-2xl font-bold bg-white text-left">Cloud Security</h1>
        <br/> 
        <p className="py-4 bg-white text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button className='text-sm px-4 py-2 font-sm text-white capitalize transition-colors duration-300 transform bg-green-700 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'>Explore More</button>
      
      </div>
      </div>

      <br/><br/><br/><br/><br/><br/>
    </>
  )
}
