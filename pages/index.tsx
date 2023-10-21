import SiteMainLayout from "@/components/layout/site-layout";
import MainPage from "@/components/layout/site-layout";

export type AllPages = "home" | "about" | "product" | "features" | null;

const IndexPage = () => {
  return <SiteMainLayout pageId="home">
    <section>Hello</section>
  </SiteMainLayout>
};

export default IndexPage;
