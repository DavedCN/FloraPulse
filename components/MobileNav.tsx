"use client";

import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import Image from "next/image";
import Link from "next/link";
import { landingNavLinks } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { DialogTitle } from "@radix-ui/react-dialog";

const MobileNav = () => {
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    setCurrentHash(window.location.hash); // Get the current window hash location
  }, []);

  const handleLinkClick = (hash: string) => {
    setCurrentHash(hash);
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/hamburger.svg"
            width={36}
            height={36}
            alt="Hamburger icon"
            className="cursor-pointer md:hidden"
          />
        </SheetTrigger>
        <SheetContent side="right" className="border-none bg-white md:hidden">
          <div className="h-screen p-5 border shadow-sm flex flex-col">
            <DialogTitle>
              <div className="flex flex-row items-center ">
                <Image
                  src={"/floralpulse.webp"}
                  alt="logo"
                  width={40}
                  height={25}
                />
                <span className="font-bold text-xl">FloraPulse</span>
              </div>
            </DialogTitle>
            <div className="mt-5 flex flex-col gap-3">
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
                              <SheetClose asChild key={label}>
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
                              </SheetClose>
                            ))}
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  );
                } else {
                  return (
                    <SheetClose asChild key={link.label}>
                      <Link
                        href={link.href as string}
                        className={` place-self-center  hover:text-blue-2  ${
                          isActive && "text-blue-1"
                        }`}
                        onClick={() => handleLinkClick(link.href as string)}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  );
                }
              })}
              {/* {landingNavLinks.map((link) => {
                //check if window hash is equal to link href
                const isActive = currentHash === link.href;

                return (
                  <SheetClose asChild key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => handleLinkClick(link.href)}
                    >
                      <h2
                        className={`regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-blue-2 
                   
                    ${isActive && "text-blue-1"}`}
                      >
                        {link.label}
                      </h2>
                    </Link>
                  </SheetClose>
                );
              })} */}
            </div>
            <div
              className="w-full  p-5 flex flex-col justify-self-end gap-2
            items-center"
            >
              <Link href={"/"} className=" w-full">
                <Button className="w-full  rounded-md shadow-sm px-8 bg-white text-black border outline-none hover:bg-blue-2 hover:text-white ease-in duration-300">
                  Sign In
                </Button>
              </Link>
              <Link href={"/"} className=" w-full">
                <Button className="w-full rounded-md shadow-sm hover:bg-blue-2 bg-blue-1  ease-in duration-300">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
