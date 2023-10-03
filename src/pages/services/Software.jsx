import React from 'react'
import heroImg from "../../assets/working.svg";
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
        <br/><br/><br/><br/><br/><br/>
    </>
  )
}
