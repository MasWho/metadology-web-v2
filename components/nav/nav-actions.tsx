import { useNavContext } from "@/contexts/NavContext";
import { AllSections } from "@/pages";
import { generateClasses } from "@/utils/styling";
import Link from "next/link";
import React from "react";

const NavActions = () => {
  const {currentPageId, setIsNavigating} = useNavContext();

  const changePageScrollHandler = (pageId: AllSections) => {
    const element = document.getElementById(pageId!);
    setIsNavigating(true);
    setTimeout(() => {
      element?.scrollIntoView({
        behavior: 'instant',
        block: 'center',
      });
      setIsNavigating(false);
    }, 800);
  };

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
        className={currentPageId === "closer-look" ? "text-c-accent-green" : ""}
        onClick={changePageScrollHandler.bind(null, 'closer-look')}
      >
        Closer look
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
        className={currentPageId === "explore" ? "text-c-accent-green" : ""}
        onClick={changePageScrollHandler.bind(null, 'explore')}
      >
        Explore
      </Link>
      <Link
        href=""
        className={currentPageId === "benefits" ? "text-c-accent-green" : ""}
        onClick={changePageScrollHandler.bind(null, 'benefits')}
      >
        Benefits
      </Link>
      <Link
        href=""
        className={currentPageId === "forefront" ? "text-c-accent-green" : ""}
        onClick={changePageScrollHandler.bind(null, 'forefront')}
      >
        Forefront
      </Link>
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
