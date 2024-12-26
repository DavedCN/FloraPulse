import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { readMoreCards } from "@/lib/constants";
import { title } from "process";

const ReadMore = () => {
  return (
    <div className="mt-20 flex flex-col md:flex-row flex-wrap gap-6 justify-center items-center">
      {readMoreCards.map(({ title, image, link }) => (
        <Card
          data-aos="zoom-in"
          key={title}
          className="flex flex-col items-center m-4 border-none bg-gray-2 w-[300px] max-sm:max-w-[250px] h-fit  gap-1 p-2 mx-0 bg-blue-2"
        >
          <CardHeader className="flex flex-row gap-1 w-full justify-center items-center px-1 sm:px-4 pt-4 pb-0 ">
            <p className="text-sm sm:text-base  font-bold leading-none max-lg:text-[12px]">
              For {title}
            </p>
            <Image
              alt="card image"
              src={image}
              width={25}
              height={25}
              className="pb-2"
            />
          </CardHeader>
          <CardContent className=" px-1 pt-2 sm:px-4 pb-3 flex flex-row items-center">
            <Link href={link} className=" w-full">
              <Button className=" rounded-md shadow-sm  hover:bg-blue- text-black bg-white hover:bg-gray-30 ease-in duration-300">
                Read more
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ReadMore;
