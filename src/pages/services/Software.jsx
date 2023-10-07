import React from 'react'
import heroImg from "../../assets/software.svg";
import {BsArrowRight} from 'react-icons/bs'
export default function Software() {
  return (
    <>
        <div>
        <div className="relative grid w-full bg-gradient-to-r from-rose-600 to-rose-800 h-[30rem] items-center">
      <div className="px-28 py-8">
          <div className="items-center flex">
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl font-bold text-[#F5F5F5]">
               Software Development
             
              </h1>

              {/* <p className="mt-3 text-white">
              We build secure Cloud Solutions that target your business needs
              </p> */}
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
        <div className="grid grid-cols-4 px-32 gap-8 py-16 mt-20">
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out border-t-[16px] hover:scale-110 border-[#00C0E8]"
      >
        <h1 className="text-2xl font-bold bg-white text-justifyt">Software Development</h1>
       
        <p className="py-4 bg-white text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <BsArrowRight className='relative top-[6%] h-[25px] w-[25px] left-[85%] text-[#3366CC] '/>
      </div>
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out border-t-[16px] hover:scale-110 border-[#EA1179]  "
      >
        <h1 className="text-2xl font-bold bg-white text-left">Web Designing and Development</h1>
        
        <p className="py-4 bg-white text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <BsArrowRight className='relative top-[6%] h-[25px] w-[25px] left-[85%] text-[#3366CC] '/>
      </div>
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out  border-t-[16px] hover:scale-110 border-[#9400FF]"
      >
        <h1 className="text-2xl font-bold bg-white text-left">Mobile App development</h1>
      
        <p className="py-4 bg-white text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <BsArrowRight className='relative top-[6%] h-[25px] w-[25px] left-[85%] text-[#3366CC] '/>
      </div>
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out  border-t-[16px] hover:scale-110 border-[#92D050]"
      >
        <h1 className="text-2xl font-bold bg-white text-left">UI / UX Designing</h1>
        <br/> 
        <p className="py-4 bg-white text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <BsArrowRight className='relative top-[6%] h-[25px] w-[25px] left-[85%] text-[#3366CC] '/>
      
      </div>
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out  border-t-[16px] hover:scale-110 border-[#00C0E8] mt-12"
      >
        <h1 className="text-2xl font-bold bg-white text-left">WordPress Website Development</h1>
        
        <p className="py-4 bg-white text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <BsArrowRight className='relative top-[6%] h-[25px] w-[25px] left-[85%] text-[#3366CC] '/>
      
      </div>
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out  border-t-[16px] hover:scale-110 border-[#EA1179] mt-12"
      >
        <h1 className="text-2xl font-bold bg-white text-left">Web Hosting Services</h1>

        <p className="py-4 bg-white text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <BsArrowRight className='relative top-[6%] h-[25px] w-[25px] left-[85%] text-[#3366CC] '/>
      
      </div>
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out  border-t-[16px] hover:scale-110 border-[#9400FF] mt-12"
      >
        <h1 className="text-2xl font-bold bg-white text-left">SEO Services</h1>
        <br/> 
        <p className="py-4 bg-white text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <BsArrowRight className='relative top-[6%] h-[25px] w-[25px] left-[85%] text-[#3366CC] '/>
      
      </div>
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out  border-t-[16px] hover:scale-110 border-[#92D050] mt-12"
      >
        <h1 className="text-2xl font-bold bg-white text-left">Quality Assurance (QA) Testing</h1>
       
        <p className="py-4 bg-white text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <BsArrowRight className='relative top-[6%] h-[25px] w-[25px] left-[85%] text-[#3366CC] '/>
      
      </div>
      </div>
        <br/><br/><br/><br/><br/><br/>
    </>
  )
}
