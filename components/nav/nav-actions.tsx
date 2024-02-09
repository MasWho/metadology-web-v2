import useChangePage from "@/hooks/use-change-page";
import { generateClasses } from "@/utils/styling";
import Link from "next/link";
import React from "react";

const NavActions = () => {
  const { currentPageId, changePageScrollHandler } = useChangePage();

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
        href=""
        className={currentPageId === "home" ? "text-c-accent-green" : ""}
        onClick={changePageScrollHandler.bind(null, 'home')}
      >
        Home
      </Link>
      <Link
        href=""
        className={currentPageId === "elevator-pitch" ? "text-c-accent-green" : ""}
        onClick={changePageScrollHandler.bind(null, 'elevator-pitch')}
      >
        Elevator pitch
      </Link>
      <Link
        href=""
        className={currentPageId === "challenges" ? "text-c-accent-green" : ""}
        onClick={changePageScrollHandler.bind(null, 'challenges')}
      >
        Challenges
      </Link>
      <Link
        href=""
        className={currentPageId === "highlights" ? "text-c-accent-green" : ""}
        onClick={changePageScrollHandler.bind(null, 'highlights')}
      >
        Highlights
      </Link>
      <Link
        href=""
        className={currentPageId === "sell-faster" ? "text-c-accent-green" : ""}
        onClick={changePageScrollHandler.bind(null, 'sell-faster')}
      >
        Sell Faster
      </Link>
      <Link
        href=""
        className={currentPageId === "features" ? "text-c-accent-green" : ""}
        onClick={changePageScrollHandler.bind(null, 'features')}
      >
        Features
      </Link>
      <Link
        href=""
        className={currentPageId === "ultra-realism" ? "text-c-accent-green" : ""}
        onClick={changePageScrollHandler.bind(null, 'ultra-realism')}
      >
        Ultra Realism
      </Link>
      <Link
        href=""
        className={currentPageId === "benefits" ? "text-c-accent-green" : ""}
        onClick={changePageScrollHandler.bind(null, 'benefits')}
      >
        Benefits
      </Link>
      {/* <Link
        href=""
        className={currentPageId === "forefront" ? "text-c-accent-green" : ""}
        onClick={changePageScrollHandler.bind(null, 'forefront')}
      >
        Forefront
      </Link> */}
      <Link
        href=""
        className={currentPageId === "portfolio" ? "text-c-accent-green" : ""}
        onClick={changePageScrollHandler.bind(null, 'portfolio')}
      >
        Portfolio
      </Link>
      <Link
        href=""
        className={currentPageId === "contact" ? "text-c-accent-green" : ""}
        onClick={changePageScrollHandler.bind(null, 'contact')}
      >
        Contact
      </Link>
    </div>
  );
};

export default NavActions;
