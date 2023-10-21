import { AllPages } from "@/pages";
import { generateClasses } from "@/utils/styling";
import Link from "next/link";
import React from "react";
import GetStartedButton from "./ContactButton";

type Props = {
  currentPageId: AllPages;
};

const NavActions = (props: Props) => {
  const { currentPageId } = props;
  return (
    <div
      className={generateClasses({
        generic: ["text-c-heading"],
        mobile: ["hidden"],
        web: [
          "tablet:w-[50%]",
          "laptop:w-[40%]",
          "desktop:w-[35%]",
          "tablet:flex",
          "tablet:justify-between",
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
        href="/#services"
        className={currentPageId === "product" ? "text-c-accent-green" : ""}
      >
        Product
      </Link>
      <Link
        href="/about/#about"
        className={currentPageId === "about" ? "text-c-accent-green" : ""}
      >
        About
      </Link>
      {/* <Link
        href="/pricing/#pricing"
        className={currentPageId === "pricing" ? "text-c-accent-green" : ""}
      >
        Pricing
      </Link> */}
      <GetStartedButton pageId={currentPageId} />
    </div>
  );
};

export default NavActions;
