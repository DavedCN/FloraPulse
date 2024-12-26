import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const LearnMore = () => {
  return (
    <section id="about" className="w-full bg-[#F8F7FF] h-full py-16 px-4">
      <div data-aos="fade-left" className="max-w-6xl mx-auto flex flex-col items-center justify-center text-blue-1 w-fit  place-self-center">
        <div className=" mb-10 lg:mb-15 flex flex-col gap-3 place-self-center w-full text-start ">
          <h2 className="text-2xl  md:text-3xl font-bold text-start">Learn More</h2>
        </div>

        <Table className="">
          <TableCaption className="max-sm:text-start">Learn more about FloraPulse.</TableCaption>

          <TableBody className=" text-start">
            <TableRow className="border-none">
              <TableCell className="font-medium ">
                <Link
                  href={
                    "https://www.dropbox.com/s/423xosby41bjxe4/Understanding%20tree%20water%20potential.pdf?dl=1"
                  }
                  className=" underline"
                >
                  • Understanding tree water potential
                </Link>
              </TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="font-medium ">
                <Link
                  href={"https://www.florapulse.com/our-story"}
                  className=" underline"
                >
                  • Read our story
                </Link>
              </TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="font-medium ">
                • See why FloraPulse is right for your{" "}
                <Link
                  href={"https://www.florapulse.com/why-orchards"}
                  className=" underline"
                >
                  orchard
                </Link>{" "}
                ,{" "}
                <Link
                  href={"https://www.florapulse.com/why-vineyards"}
                  className=" underline"
                >
                  vineyard
                </Link>{" "}
                , or{" "}
                <Link
                  href={"https://www.florapulse.com/why-scientists"}
                  className=" underline"
                >
                  scientific experiment
                </Link>
              </TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="font-medium ">
                <Link
                  href={"https://www.florapulse.com/case-study"}
                  className=" underline"
                >
                  • Learn how a customer increased revenues by $700/acre with
                  water potential data
                </Link>
              </TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="font-medium ">
                <Link
                  href={"https://www.florapulse.com/testimonials"}
                  className=" underline"
                >
                  • Read customer testimonials
                </Link>
              </TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="font-medium ">
                <Link
                  href={"https://www.florapulse.com/blog"}
                  className=" underline"
                >
                  • Read our blog
                </Link>
              </TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="font-medium ">
                <Link
                  href={"https://www.florapulse.com/faq"}
                  className=" underline"
                >
                  • See frequently asked questions
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default LearnMore;
