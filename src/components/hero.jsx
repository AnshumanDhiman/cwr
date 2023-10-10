
  import Card from "./cards";


  export default function Hero() {
    return (
      <>
      {/* <div>
        <img src={HeroImg} />
      </div> */}

        <div className="relative grid w-full bg-hero bg-no-repeat bg-cover h-[35rem] items-center z-[-999]">
        
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

              {/* <div className="flex items-center justify-center mt-[-2.35%] w-full mr-[-5.58%] ml-[25%]">
                <img
                  className="w-full h-[35rem] object-cover"
                  src={Building}
                  alt="image showing working culture"
                />
              </div> */}
            </div>
          </div>
        </div>
       
      
          {/* <div className="grid grid-cols-2 place-items-center mt-[-11%] gap-16 px-32">
            <div class="max-w-2xl px-8 py-8 bg-white rounded-lg shadow-md  border-blue-800 border-t-[16px] ">
              

              <div class="mt-2 ">
                <h1
                
                  class="text-xl font-bold text-gray-700  hover:text-gray-600  hover:underline  p-2 "
                  
                
                >
                  Roadmap to better Decision-Making
                </h1>
                <p class="mt-2 text-gray-600  p-2">
                Get the right information at the Right time to enable your business to
              take the Right decision
              <br/><br/><br/><br/><br/>
                </p>
              </div>

            
            </div>
            <div class="max-w-2xl px-8 py-8 bg-white  rounded-lg shadow-md border-blue-800 border-t-[16px] ">
              

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
              <br/>
                </p>
              </div>
              

              
            </div>
            
          </div> */}

    
        
        <Card />
      </>
    );
  }
