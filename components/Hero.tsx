import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row "
      id="home"
    >
      <div className="w-full bg-white py-12 max-lg:mt-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="flex-1 text-left" data-aos="fade-right">
              <h1 className="text-[#045080] text-2xl sm:text-3xl font-bold leading-tight mb-6">
                Accurate Irrigation Guidance for Orchids and Vineyards.
              </h1>
              <p className="text-gray-600 text-base sm:text-lg mb-4 max-w-2xl">
                Retire the pressure chamber with FloraPulse, know exactly when
                to irrigate, increase your crop yield and quality.
              </p>
              <div className="flex flex-col gap-4">
                <button className="inline-flex items-center justify-center w-fit px-6 py-3 text-sm sm:text-base font-medium rounded-md outline-none border-none text-white bg-blue-1 transition-colors duration-200 ease-in hover:bg-gradient-to-br   from-[#045080] to-[#4bccff]">
                  Get Started with FloraPulse{" "}
                </button>
              </div>
            </div>

            {/* Right Content - YouTube Video */}
            <div data-aos="fade-left" className="flex-1 w-full lg:max-w-xl rounded-lg  bg-gradient-to-br from-[#045080] to-[#4bccff]">
              <div className="relative w-full overflow-hidden p-2.5">
                <div className="relative w-full pb-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full "
                    src="https://www.youtube.com/embed/Q4UbwQpj9Sg"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
