import SiteMainLayout from "@/components/layout/site-layout";
const Highlights = dynamic(() => import("@/components/sections/highlights"), {ssr: false});
const ElevatorPitch = dynamic(() => import("@/components/sections/elevator-pitch"), {ssr: false});
import Sellfaster from "@/components/sections/sellfaster/sellfaster";
import Forefront from "@/components/sections/forefront";
import Benefits from "@/components/sections/benefits";
const Portfolio = dynamic(() => import("@/components/sections/portfolio"), {ssr: false});
import Home from "@/components/sections/home";
import NavContextProvider from "@/contexts/NavContext";
import dynamic from "next/dynamic";
import SellfasterSubsectionOne from "@/components/sections/sellfaster/sub-section-one";
import SellfasterSubsectionTwo from "@/components/sections/sellfaster/sub-section-two";
import Challenges from "@/components/sections/challenges";
const UltraRealismOne = dynamic(() => import("@/components/sections/ultra-realism/ultra-realism-one"), {ssr: false});
const UltraRealismTwo = dynamic(() => import("@/components/sections/ultra-realism/ultra-realism-two"), {ssr: false});
import UltraRealismThree from "@/components/sections/ultra-realism/ultra-realism-three";
import Contact from "@/components/sections/contact/contact";
import Features from "@/components/sections/features";
import Footer from "@/components/footer/footer";

export type AllSections = "home" | "elevator-pitch" | "challenges" | "highlights" | "sell-faster" | "features" | "ultra-realism" | "benefits" | "forefront" | "portfolio" | "contact" | null;

const IndexPage = () => {
  return (
    <NavContextProvider>
      <SiteMainLayout initialPageId="home" >
        <Home />
        <ElevatorPitch />
        <Challenges />
        <Highlights />
        <Sellfaster />
          <SellfasterSubsectionOne />
          <SellfasterSubsectionTwo />
        <Features />
        <UltraRealismOne />
          <UltraRealismTwo />
          <UltraRealismThree />
        <Benefits />
        {/* <Forefront /> */}
        <Portfolio />
        <Contact />
        <Footer />
      </SiteMainLayout>
    </NavContextProvider>
  )
};

export default IndexPage;
