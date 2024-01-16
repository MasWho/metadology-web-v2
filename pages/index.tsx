import SiteMainLayout from "@/components/layout/site-layout";
import MainPage from "@/components/layout/site-layout";
const Highlights = dynamic(() => import("@/components/sections/highlights"), {ssr: false});
const CloserLook = dynamic(() => import("@/components/sections/closer-look"), {ssr: false});
import Explore from "@/components/sections/explore/explore";
import Forefront from "@/components/sections/forefront";
import Benefits from "@/components/sections/benefits";
const Portfolio = dynamic(() => import("@/components/sections/portfolio"), {ssr: false});
import Home from "@/components/sections/home";
import NavContextProvider from "@/contexts/NavContext";
import dynamic from "next/dynamic";
import ExploreSubsectionOne from "@/components/sections/explore/sub-section-one";
import ExploreSubsectionTwo from "@/components/sections/explore/sub-section-two";
const ExploreSubsectionThree = dynamic(() => import("@/components/sections/explore/sub-section-three"), {ssr: false});
const ExploreSubsectionFour = dynamic(() => import("@/components/sections/explore/sub-section-four"), {ssr: false});

export type AllSections = "home" | "highlights" | "closer-look" | "explore" | "benefits" | "forefront" | "portfolio" | "contact" | null;

const IndexPage = () => {
  return (
    <NavContextProvider>
      <SiteMainLayout initialPageId="home" >
        <Home />
        <CloserLook />
        <Highlights />
        <Explore />
          <ExploreSubsectionOne />
          <ExploreSubsectionTwo />
          <ExploreSubsectionThree />
          <ExploreSubsectionFour />
        <Benefits />
        <Forefront />
        <Portfolio />
      </SiteMainLayout>
    </NavContextProvider>
  )
};

export default IndexPage;
