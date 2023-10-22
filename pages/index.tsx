import SiteMainLayout from "@/components/layout/site-layout";
import MainPage from "@/components/layout/site-layout";
import ExampleSection from "@/components/sections/example-section";

export type AllPages = "home" | "about" | "product" | "features" | null;

const IndexPage = () => {
  return <SiteMainLayout pageId="home" >
    <ExampleSection sectionName="product" />
    <ExampleSection sectionName="services" />
    <ExampleSection sectionName="features" />
  </SiteMainLayout>
};

export default IndexPage;
