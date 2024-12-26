import Image from "next/image";
import React from "react";

const Sponsors = () => {
  return (
    <section className="w-full  bg-gradient-to-br  from-[#045080] to-[#77d4f8] p-8 pb-[80px]">
      <div className="flex flex-col justify-center items-center gap-3">
        <div data-aos="fade-down" className="text-center text-white mb-8 lg:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Sponsors </h2>
          <p className=" text-sm md:text-base">
            Our technology has been funded by the NSF and USDA, and was
            originally developed at Cornell University.
          </p>
        </div>

        <img data-aos="fade-up"
          alt="sponsors"
          src="/sponsors.webp"
          className=" w-full min-h-[100px] max-w-[700px]"
        />
      </div>
    </section>
  );
};

export default Sponsors;
