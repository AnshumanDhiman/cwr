import heroImg from "../assets/working.svg";
import Card from "./cards";

export default function Hero() {
  return (
    <>
      <div className="relative grid w-full bg-gradient-to-r from-blue-500 to-blue-800 h-[30rem] items-center">
        <div className="px-[5%] py-8">
          <div className="items-center flex">
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl font-bold text-[#F5F5F5]">
                Managed IT Solutions for
                <br />
                growing your<span className="text-white"> Business</span>
              </h1>

              <p className="mt-3 text-white">
                Providing Consulting Services & build Cloud Solutions that{" "}
                <br /> target your business needs
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
     
      <div className="grid grid-cols-2 place-items-center mt-[-1%] z-[999]">
        <div class="max-w-2xl px-8 py-8 bg-white rounded-b-lg shadow-md border-b border-r border-l border-blue-800 ">
          

          <div class="mt-2">
            <h1
             
              class="text-xl font-bold text-gray-700  hover:text-gray-600  hover:underline  p-2"
              
             
            >
              Roadmap to better Decision-Making
            </h1>
            <p class="mt-2 text-gray-600  p-2">
            Get the right information at the Right time to enable your business to
          take the Right decision
          <br/><br/><br/>
            </p>
          </div>

        
        </div>
        <div class="max-w-2xl px-8 py-8 bg-white  rounded-b-lg shadow-md border-b border-r border-l border-blue-800 ">
          

          <div class="">
            <h1
            
              class="text-xl font-bold text-gray-700  hover:text-gray-600  hover:underline p-2"
             
            >
              Is a lack of efficiency preventing your business from growing?
            </h1>
            <p class="mt-2 text-gray-600  p-2">
            CWR provides end-to-end Digital Transformation Consultancy Services to
          evolve your business and achieve agility.
          <br /> We will take you to the cloud to meet your agility goals with
          lower-cost, secure and scalable solutions and take away your
          day-to-day IT challenges.
            </p>
          </div>

          
        </div>
      </div>

   
      
      <Card />
    </>
  );
}
