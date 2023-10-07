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
        <h1 className="text-2xl font-bold bg-white text-left">Cloud Solutions</h1>
        <p className="py-4 bg-white text-left">Get the right information at the Right time to enable your business to take the Right decision.
        </p>
        <BsArrowRight className='relative top-[6%] text-2xl left-[85%] text-[#3366CC] '/>
      </div>
      </a>
      <a href='/security' >
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out hover:scale-110 border-t-[16px] border-[#EA1179] "
      >
        <h1 className="text-2xl font-bold bg-white text-left">Cybersecurity Solutions</h1>
        <p className="py-4 bg-white text-left">Hands-on experience with diverse Industries, Geographies and new Technologies up to date with xyz.</p>
        <BsArrowRight className='relative top-[6%] text-2xl left-[85%] text-[#3366CC] '/>
      </div>
      </a>
      <a href='/software' >
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out hover:scale-110 border-t-[16px] border-[#9400FF] "
      >
        <h1 className="text-2xl font-bold bg-white text-left">Software Development</h1>
        <p className="py-4 bg-white text-left">Vast experience in complex business environments with diverse industries and their solutions.</p>
        
        <BsArrowRight className='relative top-[6%]  text-2xl left-[85%] text-[#3366CC] '/>
      </div>
      </a>

     
     
      <a href='/cloud' >
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out hover:scale-110 border-t-[16px] border-[#92D050] "
      >
        <h1 className="text-2xl font-bold bg-white text-left">Managed IT Services</h1>
        <p className="py-4 bg-white text-left">Get the right information at the Right time to enable your business to take the Right decision.
        </p>
        <BsArrowRight className='relative top-[6%] text-2xl left-[85%] text-[#3366CC] '/>
      </div>
      </a>
      <a href='/security' >
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out hover:scale-110 border-t-[16px] border-[#EA1179] "
      >
        <h1 className="text-2xl font-bold bg-white text-left">Security Audit & Assesment</h1>
        <p className="py-4 bg-white text-left">Hands-on experience with diverse Industries, Geographies and new Technologies up to date with xyz.</p>
        <BsArrowRight className='relative top-[6%] text-2xl left-[85%] text-[#3366CC] '/>
      </div>
      </a>
      <a href='/software' >
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out hover:scale-110 border-t-[16px] border-[#9400FF] "
      >
        <h1 className="text-2xl font-bold bg-white text-left">Risk & Compliance</h1>
        <p className="py-4 bg-white text-left">Vast experience in complex business environments with diverse industries and their solutions.</p>
        
        <BsArrowRight className='relative top-[6%]  text-2xl left-[85%] text-[#3366CC] '/>
      </div>
      </a>
      </div>
   
    
    
    </>
  );
}

export default Card;
