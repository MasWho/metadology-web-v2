import SiteMainLayout from "@/components/layout/site-layout";
import MainPage from "@/components/layout/site-layout";
import Highlights from "@/components/sections/highlights";
import CloserLook from "@/components/sections/closer-look";
import Explore from "@/components/sections/explore/explore";
import Forefront from "@/components/sections/forefront";
import Benefits from "@/components/sections/benefits";
import Portfolio from "@/components/sections/portfolio";

export type AllSections = "home" | "highlights" | "closer-look" | "explore" | "benefits" | "forefront" | "portfolio" | null;

const IndexPage = () => {
  return <SiteMainLayout pageId="home" >
    <Highlights sectionName="highlights" />
    <CloserLook sectionName="closer-look" />
    <Explore sectionName="explore" />
    <Benefits sectionName="benefits" />
    <Forefront sectionName="forefront" />
    <Portfolio sectionName="portfolio" />
  </SiteMainLayout>
};

export default IndexPage;
