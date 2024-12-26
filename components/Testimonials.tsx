"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useCallback } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import { useState } from "react";
import Image from "next/image";
import { carouselCards, testimonials } from "@/lib/constants";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
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
      }, 2000); // 4 seconds delay
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
    <section id="testimonials" className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto text-blue-1">
        <h1 className="text-lg md:text-2xl text-center mb-4">
          Customer testimonials
        </h1>

        <div>
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4 ">
              {testimonials.map(
                ({ imageSrc, name, title, testimonialText }) => (
                  <CarouselItem
                    key={name}
                    className="pl-4 md:basis-1/2 "
                  >
                    <TestimonialCard
                      key={imageSrc}
                      imageSrc={imageSrc}
                      name={name}
                      title={title}
                      testimonialText={testimonialText}
                    />
                  </CarouselItem>
                )
              )}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
