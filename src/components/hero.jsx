import HeroImg from "../assets/working.svg";
import Card from "./cards";

export default function Hero() {
  return (
    <>
      <div className="relative grid w-full bg-hero bg-no-repeat bg-cover top-[-80px] h-[35rem] items-center z-[-999] opacity-[100%]">
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
          </div>
        </div>
      </div>
      <p className="px-32 mt-[-40px] text-lg bg-white text-center text-gray-900  tracking-wider">
          We provide end to end Digital Transformation Consultancy Services to
          evolve your business and achieve agility. Every core team member has
          20+ years of experience in Information Technology with diverse
          industries and geography. We will take you to the cloud to meet your
          agility goals with lower cost, secure and scalable solutions and take
          away your day-to-day IT challenges.</p>
      <div className=" grid grid-cols-2 place-items-center">
      <div className="pl-32">
        <h1 className="text-3xl font-bold text-gray-800">What does agility mean to your <span className=" text-blue-500 ">Business?</span></h1><br />
          <p className="bg-white text-md text-left text-gray-900 ">
          If technology is not agile then we can’t have an agile business.
          Become responsive to customers/user needs, production needs,
          provisioning rapidly and bring down delivery of product and services
          from months to hours. Develop new services faster, imitate your
          competitor faster, and speed with higher quality. We can achieve
          agility by adopting Cloud Computing Solutions e.g., New Technology
          setup in Cloud, Cloud Migration, SaaS Business Solutions . </p>
          </div>
        <div className="w-full px-32 py-12 text-center">
          <img src={HeroImg} />
        </div>
      </div>
      <h1 class="pl-32 pt-8 text-2xl font-bold text-gray-800">
        Roadmap to better Decision-Making
      </h1>
      <p class="pl-32 bg-white text-justify text-gray-600">
        Get the right information at the Right time to enable your business to
        take the Right decision
      </p>

      <Card />
    </>
  );
}
