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
      <section>
        <div className="relative grid w-full bg-gradient-to-r from-blue-500 to-blue-800 h-96 lg:h-[32rem] place-items-center">
          <div className="flex flex-col items-center mx-auto text-center">
            <h1 className="text-4xl font-semibold text-white uppercase md:text-6xl">
              We are CWR
            </h1>

            <p className="mt-6 text-lg leading-5 text-white">
              Lorem ipsum dolor sit amet.
            </p>

            <a href="#about" className="mt-8 cursor-pointer animate-bounce">
              <svg
                width="53"
                height="53"
                viewBox="0 0 53 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="27" cy="26" r="18" stroke="white" />
                <path
                  d="M22.41 23.2875L27 27.8675L31.59 23.2875L33 24.6975L27 30.6975L21 24.6975L22.41 23.2875Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <header className="bg-white mt-10" id="about">
        <div className="container px-28 py-20 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-gray-800  lg:text-4xl">
                  Managed IT Solutions for
                  <br />
                  growing your<span className="text-blue-500 "> Business</span>
                </h1>

                <p className="mt-3 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro beatae error laborum ab amet sunt recusandae? Reiciendis
                  natus perspiciatis optio.
                </p>

                <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  Contact Us
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full lg:max-w-2xl"
                src={heroImg}
                alt="Catalogue-pana.svg"
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
