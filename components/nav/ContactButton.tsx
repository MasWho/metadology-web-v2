import React from "react";
import { generateClasses } from "@/utils/styling";
import Link from "next/link";
import { AllPages } from "@/pages";

type Props = {
  onClick?: () => void;
  pageId: AllPages
};

const GetStartedButton = (props: Props) => {
  const { onClick, pageId } = props;
  return (
    <button
      className={generateClasses({
        generic: [
          "text-c-primary",
          "font-medium",
          "rounded-full",
          "py-2",
          "px-4",
          "hover:scale-[1.05] transition-scale duration-150 ease-linear",
          "bg-c-heading",
        ],
        mobile: [],
        web: [],
      })}
    >
      <Link
        href="#contact"
        onClick={onClick}
      >
        Get in Touch
      </Link>
    </button>
  );
};

export default GetStartedButton;
