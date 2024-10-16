import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects/index";
import Technologies from "@/components/Technologies";
import Header from "@/components/header";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

export enum Theme {
  init = "init",
  light = "light",
  dark = "dark",
}

export default function Home({ url }: { url: any }) {
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
        <link rel={"icon"} href="/images/my-photo.png?v=2" />
        <meta name="google-site-verification" content="cZ8LPR6Sl2-YasKGNLYYtHsMzoIHerwPt4NRguln8hg" />
        <meta name="title" content={"Ivan Valovyi"} />
        <meta
          name="description"
          content={
            "Frontend developer with 12 months of commercial experience."
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={"Ivan Valovyi"} />
        <meta
          property="og:description"
          content={
            "Frontend developer with 12 months of commercial experience."
          }
        />
        <meta property="og:image" content="/site-preview.webp" />
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
