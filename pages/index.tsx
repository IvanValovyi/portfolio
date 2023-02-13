import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Header from "@/components/header";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useIntl } from "react-intl";

export enum Theme {
  init = "init",
  light = "light",
  dark = "dark",
}

export default function Home({ url }: { url: any }) {
  const { formatMessage } = useIntl();

  const title = formatMessage({ id: "meta-title" });
  const description = formatMessage({ id: "meta-description" });

  const [theme, setTheme] = useState<Theme>(Theme.init);

  function loadTheme() {
    "theme" in localStorage
      ? localStorage.getItem("theme") === Theme.dark
        ? setTheme(Theme.dark)
        : setTheme(Theme.light)
      : (setTheme(Theme.dark), localStorage.setItem("theme", Theme.dark));
  }

  useEffect(() => {
    loadTheme();
  }, []);

  function toogleTheme(): Theme {
    if (localStorage.theme === Theme.dark) {
      localStorage.setItem("theme", Theme.light);
      setTheme(Theme.light);
      return Theme.light;
    }
    localStorage.setItem("theme", Theme.dark);
    setTheme(Theme.dark);
    return Theme.dark;
  }

  return (
    <>
      <Head>
        <title>Ivan Valovyi</title>
        <link rel={"icon"} href="/images/ivan-valovyi.png" />
        <meta
          name="title"
          content={
            "Frontend developer on React/Next with 7 months of work experience."
          }
        />
        <meta
          name="description"
          content={
            "Junior frontend developer with 7 months of commercial experience."
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={"Ivan Valovyi"} />
        <meta
          property="og:description"
          content={
            "Junior frontend developer with 7 months of commercial experience."
          }
        />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/82437628/218511491-57481db7-d07f-4e2b-8c4b-d5d1006b57ce.png"
        />
      </Head>
      {theme !== Theme.init ? (
        <div className={theme === Theme.dark ? "dark" : ""}>
          <div className="bg-primaryBg dark:bg-primaryBgDark">
            <Header theme={theme} toogleTheme={toogleTheme} />
            <AboutMe />
            <Technologies />
            <Projects />
            <Footer />
          </div>
        </div>
      ) : null}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const url = `https://${req?.headers?.host}`;
  return {
    props: { url },
  };
};
