import SiteMainLayout from "@/components/layout/site-layout";
import MainPage from "@/components/layout/site-layout";
const Highlights = dynamic(() => import("@/components/sections/highlights"), {ssr: false});
import CloserLook from "@/components/sections/closer-look";
import Explore from "@/components/sections/explore/explore";
import Forefront from "@/components/sections/forefront";
import Benefits from "@/components/sections/benefits";
import Portfolio from "@/components/sections/portfolio";
import Home from "@/components/sections/home";
import NavContextProvider from "@/contexts/NavContext";
import dynamic from "next/dynamic";

export type AllSections = "home" | "highlights" | "closer-look" | "explore" | "benefits" | "forefront" | "portfolio" | "contact" | null;

const IndexPage = () => {
  return (
    <NavContextProvider>
      <SiteMainLayout initialPageId="home" >
        <Home />
        <Highlights />
        <CloserLook />
        {/* <Explore /> */}
        {/* <Benefits /> */}
        {/* <Forefront /> */}
        {/* <Portfolio /> */}
      </SiteMainLayout>
    </NavContextProvider>
  )
};

export default IndexPage;
