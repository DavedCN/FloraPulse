import React from "react";

const Installation = () => {
  return (
    <section id="about" className="w-full bg-[#F8F7FF] h-full py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div data-aos="fade-down-right" className="text-blue-1 mb-10 lg:mb-15 flex flex-col gap-3">
          <h2 className="text-2xl text-center md:text-3xl font-bold ">
            Installation
          </h2>
          <p>Easy, 15 minute system installation.</p>
        </div>

        <div data-aos="fade-down-left" className="flex-1 w-full lg:max-w-xl rounded-lg  bg-gradient-to-br from-[#045080] to-[#4bccff]">
          <div className="relative w-full overflow-hidden p-2.5">
            <div className="relative w-full pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full "
                src="https://www.youtube.com/embed/FPGAKfkuMk4?si=poXjagCRxYU1jWvF"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Installation;
