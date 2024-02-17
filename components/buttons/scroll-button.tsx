import React from "react";
import { generateClasses } from "@/utils/styling";
import { FiArrowDown } from "react-icons/fi";

const ScrollButton = () => {
  return (
    <div
      className={generateClasses({
        generic: [
          'bg-c-primary',
          'text-c-heading',
          'font-medium',
          'rounded-full',
          'flex justify-center items-center gap-2',
        ],
        mobile: [
          'py-2',
          'px-4',
          'text-[0.6rem]',
        ],
        web: [
          'tablet:text-[0.8rem]',
          'laptop:text-[1.2rem]'
        ],
      })}
    >
      <span>Scroll to Explore</span>
      <FiArrowDown className="animate-bounce"/>
    </div>
  );
};

export default ScrollButton;
