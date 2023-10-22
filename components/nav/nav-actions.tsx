import { AllPages } from "@/pages";
import { generateClasses } from "@/utils/styling";
import Link from "next/link";
import React from "react";

type Props = {
  currentPageId: AllPages;
};

const NavActions = (props: Props) => {
  const { currentPageId } = props;
  return (
    <div
      className={generateClasses({
        generic: ["text-c-heading", "w-[100%]"],
        mobile: ["hidden"],
        web: [
          "tablet:flex",
          "tablet:justify-center",
          "tablet:items-center",
          "tablet:gap-8",
          "tablet:text-[14px]",
          "laptop:text-[16px]",
          "desktop:text-[18px]",
        ],
      })}
    >
      <Link
        href="/#home"
        className={currentPageId === "home" ? "text-c-accent-green" : ""}
      >
        Home
      </Link>
      <Link
        href="/#about"
        className={currentPageId === "about" ? "text-c-accent-green" : ""}
      >
        Who are we
      </Link>
      <Link
        href="/#product"
        className={currentPageId === "product" ? "text-c-accent-green" : ""}
      >
        Product
      </Link>
      <Link
        href="/#features"
        className={currentPageId === "features" ? "text-c-accent-green" : ""}
      >
        Features
      </Link>
    </div>
  );
};

export default NavActions;
