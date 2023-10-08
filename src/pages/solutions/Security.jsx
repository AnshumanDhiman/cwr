import React from 'react'
import heroImg from "../../assets/security.svg";
import {BsArrowRight} from 'react-icons/bs'
export default function Security() {
  return (
    <>
        <div>
        <div className="relative grid w-full bg-gradient-to-r from-violet-600 to-violet-900 h-[30rem] items-center">
      <div className="px-28 py-8">
          <div className="items-center flex">
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl font-bold text-[#F5F5F5]">
               Cybersecurity Solutions
             
              </h1>

              {/* <p className="mt-3 text-white">
              We build secure Cloud Solutions that target your business needs
              </p> */}
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
        <div className="grid grid-cols-4 px-24 gap-8 py-16 mt-20">
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out hover:scale-110 border-t-[16px] border-[#00C0E8]  "
      >
        <h1 className="text-2xl font-semibold text-gray-700 capitalize">Endpoint Security</h1>
       <br/>
        <p className="py-4 bg-white text-left text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <BsArrowRight className='relative top-[6%] h-[25px] w-[25px] left-[85%] text-[#3366CC] '/>
      </div>
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out hover:scale-110 border-t-[16px] border-[#EA1179] "
      >
        <h1 className="text-2xl font-semibold text-gray-700 capitalize">Data Loss Prevention</h1>
        <br/>
        <p className="py-4 bg-white text-left text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <BsArrowRight className='relative top-[6%] h-[25px] w-[25px] left-[85%] text-[#3366CC] '/>
      </div>
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out hover:scale-110  border-t-[16px] border-[#9400FF]"
      >
        <h1 className="text-2xl font-semibold text-gray-700 capitalize">Web Control</h1>
        <br/>
        <p className="py-4 bg-white text-left text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <BsArrowRight className='relative top-[6%] h-[25px] w-[25px] left-[85%] text-[#3366CC] '/>
      </div>
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out hover:scale-110  border-t-[16px] border-[#92D050]"
      >
        <h1 className="text-2xl font-semibold text-gray-700 capitalize">Disk Encryption</h1>
        <br/> 
        <p className="py-4 bg-white text-left text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <BsArrowRight className='relative top-[6%] h-[25px] w-[25px] left-[85%] text-[#3366CC] '/>
      
      </div>
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out hover:scale-110  border-t-[16px] border-[#00C0E8] mt-12"
      >
        <h1 className="text-2xl font-semibold text-gray-700 capitalize">Patch  Management</h1>
        <br/> 
        <p className="py-4 bg-white text-left text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <BsArrowRight className='relative top-[6%] h-[25px] w-[25px] left-[85%] text-[#3366CC] '/>
      
      </div>
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out hover:scale-110  border-t-[16px] border-[#EA1179] mt-12"
      >
        <h1 className="text-2xl font-semibold text-gray-700 capitalize">Mobile Device Management</h1>
       
        <p className="py-4 bg-white text-left text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <BsArrowRight className='relative top-[6%] h-[25px] w-[25px] left-[85%] text-[#3366CC] '/>
      
      </div>
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out hover:scale-110  border-t-[16px] border-[#9400FF] mt-12"
      >
        <h1 className="text-2xl font-semibold text-gray-700 capitalize">Vulnerability and Penetration Testing </h1>

        <p className="py-4 bg-white text-left text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <BsArrowRight className='relative top-[6%] h-[25px] w-[25px] left-[85%] text-[#3366CC] '/>
      
      </div>
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out hover:scale-110  border-t-[16px] border-[#92D050] mt-12"
      >
        <h1 className="text-2xl font-semibold text-gray-700 capitalize">Security Awareness Solutions</h1>
      
        <p className="py-4 bg-white text-left text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <BsArrowRight className='relative top-[6%] h-[25px] w-[25px] left-[85%] text-[#3366CC] '/>
      
      </div>
      </div>  
            
        <br/><br/><br/><br/><br/><br/>
    </>
  )
}
