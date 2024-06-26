import { generateClasses } from "@/utils/styling";
import Head from "next/head";
import React from "react";
import Nav from "../nav/nav-bar";
import { AllSections } from "@/pages";

type Props = {
  children: React.ReactNode;
  initialPageId: AllSections;
};

const SiteMainLayout = (props: Props) => {
  const { children, initialPageId } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Elevating real estate experiences with 3D immersion" />
        <title>Meta-dology</title>
      </Head>
      <main
        id="app-main"
        className={generateClasses({
          generic: [
            "bg-c-primary",
            "h-screen",
            "overflow-y-scroll",
            "overflow-x-hidden",
            "relative",
          ],
          mobile: [],
          web: [],
        })}
      >
        <Nav currentPageId={initialPageId} />
        {children}
      </main>
    </>
  );
};

export default SiteMainLayout;
