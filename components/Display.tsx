"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useCallback } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import { useState } from "react";
import Image from "next/image";
import { carouselCards } from "@/lib/constants";

const Display = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] =  useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  // Handle autoplay
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (autoPlay && api) {
      intervalId = setInterval(() => {
        scrollNext();
      }, 4000); // 4 seconds delay
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [api, autoPlay, scrollNext]);

  // Update current slide index
  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="w-full md:h-screen bg-gradient-to-br  from-[#045080] to-[#77d4f8] p-8 pb-[100px]">
      <div className="max-w-7xl mx-auto">
        <div data-aos="fade-up" className="flex flex-row flexCenter mb-2">
          <Image src={"/floralpulse.webp"} alt="logo" width={40} height={25} />
          <span className="font-bold text-lg lg:text-xl text-blue-950">
            FloraPulse
          </span>
        </div>
        <h1 data-aos="fade-right" className="text-lg md:text-2xl font-bold text-white text-center mb-4">
          MOST ACCURATE IRRIGATION GUIDANCE FOR ORCHIDS AND VINEYARDS{" "}
        </h1>
        <h2 data-aos="fade-right" className="text-sm md:text-base text-white text-center mb-8">
          KNOW EXACTLY WHEN TO IRRIGATE, INCREASE YOUR CROP YIELD AND QUALITY!{" "}
        </h2>

        <div data-aos="fade-down">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4 ">
              {carouselCards.map((card, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-1/2 border-none lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
                >
                  <Card className="relative h-[250px] md:h-[400px] bg-transparent border-none">
                    <CardContent className="p-0 h-full">
                      <div className="relative h-full rounded-lg overflow-hidden">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full "
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                          <h3 className="text-white font-semibold text-base md:text-lg mb-2">
                            {card.title}
                          </h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Display;
