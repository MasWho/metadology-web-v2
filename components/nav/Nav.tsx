import React, { useState } from "react";
import { generateClasses } from "@/utils/styling";
import logo from "../../public/imgs/logo.png";
import Image from "next/image";
import NavActions from "./NavActions";
import Hamburger from "./Hamburger";
import MobileNavActions from "./MobileNavActions";
import { AllPages } from "@/pages";

type Props = {
  currentPageId: AllPages
};

const Nav = (props: Props) => {
  const { currentPageId } = props;
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburgerHandler = () => {
    setHamburgerOpen((prevState) => !prevState);
  };

  return (
    <header
      id="nav"
      className={generateClasses({
        generic: [
          "sticky",
          "top-0",
          "z-[1000]",
          "mx-auto",
          "bg-gradient-to-b from-c-primary",
          "",
        ],
        mobile: [
          "px-5",
          "flex",
          "justify-between",
          "items-center",
          "py-3",
          "h-[70px]",
        ],
        web: ["tablet:px-10", "desktop:px-15"],
      })}
    >
      <div className="w-[50%]">
        <Image
          src={logo}
          alt="Metadology Logo"
          width={260}
          height={45}
          className={generateClasses({
            generic: ["hover:cursor-pointer"],
            mobile: ["w-[120px]", "md-phone:w-[140px]", "lg-phone:w-[160px]"],
            web: ["tablet:w-[180px]", "laptop:w-[200px]", "desktop:w-[220px]"],
          })}
        />
      </div>
      <Hamburger onClick={toggleHamburgerHandler} />
      <MobileNavActions
        currentPageId={currentPageId}
        isOpen={hamburgerOpen}
        onClose={() => setHamburgerOpen(false)}
      />
      <NavActions currentPageId={currentPageId} />
    </header>
  );
};

export default Nav;
