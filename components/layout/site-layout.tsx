import { generateClasses } from "@/utils/styling";
import Head from "next/head";
import React from "react";
import Nav from "../nav/nav-bar";
import { AllSections } from "@/pages";

type Props = {
  children: React.ReactNode;
  pageId: AllSections;
};

const SiteMainLayout = (props: Props) => {
  const { children, pageId } = props;

  return (
    <>
      <Head>
        <meta name="description" content="Informational site for Metadology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Metadology</title>
      </Head>
      <main
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
        <Nav currentPageId={pageId} />
        {children}
      </main>
    </>
  );
};

export default SiteMainLayout;
