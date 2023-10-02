import heroImg from "../assets/working.svg";
import Card from "./cards";
import card_data from "./card_data";

function createCard(card_data) {
  return (
    <Card
      title={card_data.title}
      info={card_data.info}
      color={card_data.color}
    />
  );
}

export default function Hero() {
  return (
    <>
      <div className="relative grid w-full bg-gradient-to-r from-blue-500 to-blue-800 h-[25rem] items-center">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-6xl font-semibold text-white uppercase">
            We are CWR
          </h1>

          <p className="mt-6 text-lg leading-5 text-white">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      <header className="bg-white">
        <div className="px-28 py-20">
          <div className="items-center flex">
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl font-semibold text-gray-800  ">
                Managed IT Solutions for
                <br />
                growing your<span className="text-blue-500 "> Business</span>
              </h1>

              <p className="mt-3 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                beatae error laborum ab amet sunt recusandae? Reiciendis natus
                perspiciatis optio.
              </p>

              <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Contact Us
              </button>
            </div>

            <div className="flex items-center justify-center w-full mt-0 lg:w-1/2">
              <img
                className="w-full h-full lg:max-w-2xl"
                src={heroImg}
                alt="image showing working culture"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-4 px-32 gap-8 py-16">
        {card_data.map(createCard)}
      </div>
    </>
  );
}
