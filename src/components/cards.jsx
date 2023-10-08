/* eslint-disable react/prop-types */
// border-[${props.color}]
import {AiOutlineArrowRight} from 'react-icons/ai'
import {BsArrowRight} from 'react-icons/bs'

function Card() {
  return (
    <>

      <div className="grid grid-cols-3 px-32 gap-12 py-16">
      <a href='/cloud' >
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out hover:scale-110 border-t-[16px] border-[#92D050] "
      >
        <h1 className="text-2xl font-semibold text-gray-700 capitalize">Cloud Solutions</h1>
        <p className="py-4 bg-white text-left text-gray-500">Get the right information at the Right time to enable your business to take the Right decision.
        </p>
        <BsArrowRight className='relative top-[6%] text-2xl left-[85%] text-[#3366CC] '/>
      </div>
      </a>
      <a href='/security' >
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out hover:scale-110 border-t-[16px] border-[#EA1179] "
      >
        <h1 className="text-2xl font-semibold text-gray-700 capitalize">Cybersecurity Solutions</h1>
        <p className="py-4 bg-white text-left text-gray-500">Hands-on experience with diverse Industries, Geographies and new Technologies up to date with xyz.</p>
        <BsArrowRight className='relative top-[6%] text-2xl left-[85%] text-[#3366CC] '/>
      </div>
      </a>
      <a href='/software' >
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out hover:scale-110 border-t-[16px] border-[#9400FF] "
      >
        <h1 className="text-2xl font-semibold text-gray-700 capitalize">Software Development</h1>
        <p className="py-4 bg-white text-left text-gray-500">Vast experience in complex business environments with diverse industries and their solutions.</p>
        
        <BsArrowRight className='relative top-[6%]  text-2xl left-[85%] text-[#3366CC] '/>
      </div>
      </a>

     
     
      <a href='/cloud' >
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out hover:scale-110 border-t-[16px] border-[#92D050] "
      >
        <h1 className="text-2xl font-semibold text-gray-700 capitalize">Managed IT Services</h1>
        <p className="py-4 bg-white text-left text-gray-500">Get the right information at the Right time to enable your business to take the Right decision.
        </p>
        <BsArrowRight className='relative top-[6%] text-2xl left-[85%] text-[#3366CC] '/>
      </div>
      </a>
      <a href='/security' >
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out hover:scale-110 border-t-[16px] border-[#EA1179] "
      >
        <h1 className="text-2xl font-semibold text-gray-700 capitalize">Security Audit & Assesment</h1>
        <p className="py-4 bg-white text-left text-gray-500">Hands-on experience with diverse Industries, Geographies and new Technologies up to date with xyz.</p>
        <BsArrowRight className='relative top-[6%] text-2xl left-[85%] text-[#3366CC] '/>
      </div>
      </a>
      <a href='/software' >
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out hover:scale-110 border-t-[16px] border-[#9400FF] "
      >
        <h1 className="text-2xl font-semibold text-gray-700 capitalize">Risk & Compliance</h1>
        <p className="py-4 bg-white text-left text-gray-500">Vast experience in complex business environments with diverse industries and their solutions.</p>
        
        <BsArrowRight className='relative top-[6%]  text-2xl left-[85%] text-[#3366CC] '/>
      </div>
      </a>
      </div>
   
    
    
    </>
  );
}

export default Card;
