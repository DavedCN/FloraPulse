import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  imageSrc: string;
  name: string;
  title?: string;
  testimonialText: string;
}

const TestimonialCard = ({
  imageSrc,
  name,
  title,
  testimonialText,
}: TestimonialCardProps) => {
  return (
    <Card className="max-w-2xl  py-6 bg-white ">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row  gap-6">
          {/* Left side - Profile Info */}
          <div className="flex flex-col justify-center items-center min-w-[150px]">
            <div className="w-[80px] h-[80px] rounded-full overflow-hidden mb-4">
              <img
                src={imageSrc}
                alt={`${name}'s profile`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h4 className="font-medium text-sm text-gray-900">{name}</h4>
              {title && <p className="text-xs text-gray-500">{title}</p>}
            </div>
          </div>

          {/* Right side - Testimonial Text */}
          <div className="sm:flex-1 h-[200px] overflow-y-auto hide-scrollbar">
            <p className="text-gray-700 leading-relaxed overflow-y-auto ">
              {testimonialText}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
