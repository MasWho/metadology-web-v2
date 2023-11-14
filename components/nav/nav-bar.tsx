import React, { useState } from "react";
import { generateClasses } from "@/utils/styling";
import NavActions from "./nav-actions";
import Hamburger from "./hamberger";
import MobileNavActions from "./mobile-nav-actions";
import { AllSections } from "@/pages";

type Props = {
  currentPageId: AllSections
};

const Nav = (props: Props) => {
  const { currentPageId } = props;
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburgerHandler = () => {
    setHamburgerOpen((prevState) => !prevState);
  };

  return (
    <nav
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
      <Hamburger onClick={toggleHamburgerHandler} />
      <MobileNavActions
        isOpen={hamburgerOpen}
        onClose={() => setHamburgerOpen(false)}
      />
      <NavActions />
    </nav>
  );
};

export default Nav;
