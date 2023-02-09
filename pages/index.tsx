import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Header from "@/components/header";
import { useEffect, useState } from "react";

export enum Theme {
  init = "init",
  light = "light",
  dark = "dark",
}

export default function Home() {
  const [theme, setTheme] = useState<Theme>(Theme.init);

  function loadTheme() {
	'theme' in localStorage
      ? localStorage.getItem("theme") === "dark"
        ? setTheme(Theme.dark)
        : setTheme(Theme.light)
      : setTheme(Theme.dark);
  }

  useEffect(() => {
	loadTheme();
  }, []);

  function toogleTheme() {
    localStorage.theme === "dark"
      ? (localStorage.setItem("theme", ""), setTheme(Theme.light))
      : (localStorage.setItem("theme", "dark"), setTheme(Theme.dark));
  }

  return theme !== Theme.init ? (
    <div className={theme === Theme.dark ? "dark" : ""}>
      <div className="bg-primaryBg dark:bg-primaryBgDark">
        <Header toogleTheme={toogleTheme} />
        <AboutMe />
        <Technologies />
        <Projects />
        <Footer />
      </div>
    </div>
  ) : null;
}
