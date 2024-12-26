"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { landingNavLinks } from "@/lib/constants";
import MobileNav from "./MobileNav";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Header = () => {
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    setCurrentHash(window.location.hash); // Get the current window hash location
  }, []);

  const handleLinkClick = (hash: string) => {
    setCurrentHash(hash);
  };

  return (
    <section className="fixed z-50  mx-auto w-full flex justify-center bg-white border shadow-sm">
      <nav className=" w-full max-w-6xl justify-self-center bg-transparent p-5 flex justify-between items-center ">
        <div className=" flex flex-row items-center  ">
          <Image src={"/floralpulse.webp"} alt="logo" width={40} height={25} />
          <span className="font-bold text-lg lg:text-xl">FloraPulse</span>
        </div>
        <ul className=" flex flex-center gap-3 max-md:hidden">
          {landingNavLinks.map((link, index) => {
            //check if window hash is equal to link href
            const isActive = currentHash === link.href;

            if (link.modal) {
              return (
                <HoverCard key={link.label}>
                  <HoverCardTrigger asChild className="p-0">
                    <Button variant="link" className="hover:text-blue-2 ">
                      {link.label}
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 ">
                    <div className="flex justify-between space-x-4 ">
                      <div className=" flex flex-col">
                        {link.modal?.map(({ label, href }) => (
                          <Link
                            key={label}
                            href={href}
                            className={` max-base:text-[12px] text-xs lg:text-sm hover:text-blue-2  text-black font-light ${
                              isActive && "text-blue-1"
                            }`}
                            onClick={() => handleLinkClick(href)}
                          >
                            {label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              );
            } else {
              return (
                <li
                  key={link.label}
                  className="duration-500 ease-in flex flex-col"
                >
                  <Link
                    href={link.href as string}
                    className={` my-auto max-base:text-[12px] text-sm lg:text-base hover:text-blue-2  text-black font-normal  ${
                      isActive && "text-blue-1"
                    }`}
                    onClick={() => handleLinkClick(link.href as string)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            }
          })}
        </ul>

        <div className="flex gap-3  items-center">
          <Link href={"http://iot.florapulse.com/"} target="_blank" className=" max-md:hidden">
            <Button className=" rounded-md shadow-sm px-8 max-lg:px-5 bg-white text-black border outline-none hover:bg-blue-2 hover:text-white ease-in duration-300">
              Log In
            </Button>
          </Link>
          <Link href={"/"} className=" max-md:hidden">
            <Button className=" rounded-md shadow-sm max-lg:px-5 hover:bg-blue-2 bg-blue-1 ease-in duration-300">
              Get Started
            </Button>
          </Link>

          <MobileNav />
        </div>
      </nav>
    </section>
  );
};

export default Header;
