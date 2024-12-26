import Link from "next/link";
import ReadMore from "./ReadMore";

const About = () => {
  return (
    <section id="about" className="w-full bg-[#F8F7FF] min-h-screen py-16 px-4">
      <div data-aos="fade-down" className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-1 mb-2">
            HOW DOES IT WORK?
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        {/* First Card */}
        <div  className="mx-auto p-2 grid grid-cols-1 lg:grid-cols-2 place-items-center w-fit  h-fit bg-main-gray-border rounded-[10px] gap-3 sm:gap-6 max-w-5xl max-lg:max-w-2xl">
          <div data-aos="fade-up-right" className=" py-0 h-[270px] lg:h-[370px] min-w-[120px] w-full rounded-[10px] overflow-y-hidden no-scrollbar">
            <img
              src={"/about1.webp"}
              alt="project-img"
              className="w-full h-full object-center "
            />
          </div>
          <div data-aos="fade-up-left" className=" pr-6 flex-1 flex flex-col max-lg:text-center w-full place-self-center gap-[8px] sm:gap-[15px] text-blue-1">
            <p className="font-montserrat text-base sm:text-lg text-white-400 break-words">
              The FloraPulse system is a microchip tensiometer
              (microtensiometer) that is embedded into the tree woody tissue and
              directly measures the water status, known as{" "}
              <Link
                className=" underline"
                href="https://www.dropbox.com/s/423xosby41bjxe4/Understanding%20tree%20water%20potential.pdf?dl=1"
                target="_blank"
              >
                water potential
              </Link>
              . Because the measurement is taken directly inside the
              water-carrying tissue, readings are very accurate and reliable.
              You receive daily midday stem water potential readings, along with
              science-backed irrigation recommendations.
            </p>
          </div>
        </div>

        {/* Second Card */}
        <div data-aos="fade-up-right" className="mx-auto p-2 grid grid-cols-1 lg:grid-cols-2 place-items-center w-fit  h-fit bg-main-gray-border rounded-[10px] gap-3 sm:gap-6 max-w-5xl max-lg:max-w-2xl">
          <div className=" py-0 h-[270px] lg:order-2 lg:h-[370px] min-w-[120px] w-full rounded-[10px] overflow-y-hidden no-scrollbar">
            <img
              src={"/about2.webp"}
              alt="project-img"
              className="w-full h-full object-center "
            />
          </div>
          <div className=" pr-6 flex-1 flex flex-col max-lg:text-center w-full place-self-center gap-[8px] sm:gap-[15px] text-blue-1">
            <h2 className=" text-xl sm:text-2xl font-bold break-words">
              Weekly reports{" "}
            </h2>
            <p className="font-montserrat text-base sm:text-lg text-white-400 break-words">
              Receive weekly reports on your crop's water-stress history,
              color-coded by stress level. Use clear, detailed data to adjust
              your irrigation and get that perfect vintage, that perfect yield.
              Every year.
            </p>
          </div>
        </div>

        {/* Third Card */}
        <div data-aos="fade-up-left" className="mx-auto p-2 grid grid-cols-1 lg:grid-cols-2 place-items-center w-fit  h-fit bg-main-gray-border rounded-[10px] gap-3 sm:gap-6 max-w-5xl max-lg:max-w-2xl">
          <div className=" py-0 h-[270px] lg:h-[370px] min-w-[120px] w-full rounded-[10px] overflow-y-hidden no-scrollbar">
            <img
              src={"/about3.webp"}
              alt="project-img"
              className="w-full h-full object-center "
            />
          </div>
          <div className=" pr-6 flex-1 flex flex-col max-lg:text-center w-full place-self-center gap-[8px] sm:gap-[15px] text-blue-1">
            <h2 className=" text-xl sm:text-2xl font-bold break-words">
              Scientific validation
            </h2>
            <p className="font-montserrat text-base sm:text-lg text-white-400 break-words">
              The sensor data has been validated against the Scholander chamber
              with good correlation in prune, almond, winegrape (and{" "}
              <Link
                className=" underline"
                href="https://www.florapulse.com/_files/ugd/98b0d2_3b253a9ce14840568e702ac98add3494.docx?dn=Crop%20validation%20database%20(2).docx"
                target="_blank"
              >
                others
              </Link>
              ).
            </p>
          </div>
        </div>
      </div>

      <ReadMore />
    </section>
  );
};

export default About;
