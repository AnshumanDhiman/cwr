/* eslint-disable react/prop-types */
// border-[${props.color}]
import {AiOutlineArrowRight} from 'react-icons/ai'
import {BsArrowRight} from 'react-icons/bs'

function Card() {
  return (
    <>

      <div className="grid grid-cols-4 px-32 gap-8 py-16 mt-20">
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out hover:scale-110 border-t-[16px] border-gray-300 "
      >
        <h1 className="text-2xl font-bold bg-white text-left">Roadmap to Better Decision-Making</h1>
        <p className="py-4 bg-white text-left">Get the right information at the Right time to enable your business to take the Right decision.
        </p>
        <BsArrowRight className='relative top-[6%] text-2xl left-[85%] text-[#3366CC] '/>
      </div>
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out hover:scale-110 border-t-[16px] border-[#EA1179] "
      >
        <h1 className="text-2xl font-bold bg-white text-left">Industry experts in Cloud Solutions</h1>
        <p className="py-4 bg-white text-left">Hands-on experience with diverse Industries, Geographies and new Technologies up to date.</p>
        <BsArrowRight className='relative top-[6%]  text-2xl left-[85%] text-[#3366CC] '/>
      </div>
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out hover:scale-110 border-t-[16px] border-[#9400FF] "
      >
        <h1 className="text-2xl font-bold bg-white text-left">Industry experts in Cybersecurity</h1>
        <p className="py-4 bg-white text-left">Vast experience in complex business environments with diverse industries and their solutions.</p>
        
        <BsArrowRight className='relative top-[6%]  text-2xl left-[85%] text-[#3366CC] '/>
      </div>
      <div
        className="p-8 rounded-2xl shadow-xl bg-white cursor-pointer transition ease-in-out hover:scale-110 border-t-[16px] border-[#92D050] "
      >
        <h1 className="text-2xl font-bold bg-white text-left">Roadmap to Better Decision-Making</h1>
        <p className="py-4 bg-white text-left">Get the right information at the Right time to enable your business to take the Right decision.</p>
        <BsArrowRight className='relative top-[6%]  text-2xl left-[85%] text-[#3366CC] '/>
      </div>
      </div>
    
    </>
  );
}

export default Card;
