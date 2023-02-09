import Link from "next/link";
import { useIntl } from "react-intl";
import ToogleLang from "./ToogleLang";
import ToogleTheme from "./ToogleTheme";
import NavMenu from "./NavMenu";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export interface LinkItem {
  text: string;
  id: string;
}

interface Props {
  toogleTheme: () => void;
}

export default function Header({ toogleTheme }: Props) {
  const { formatMessage } = useIntl();

  const links: LinkItem[] = [
    {
      text: formatMessage({ id: "about-me" }),
      id: "#about-me",
    },
    {
      text: formatMessage({ id: "technologies" }),
      id: "#technologies",
    },
    {
      text: formatMessage({ id: "projects" }),
      id: "#projects",
    },
    {
      text: formatMessage({ id: "contacts" }),
      id: "#contacts",
    },
  ];

  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  function onLinkClick(id: string) {
    const activeEl = document.querySelector(id);

    activeEl &&
      window.scrollTo(
        0,
        window.scrollY +
          activeEl?.getBoundingClientRect().y -
          headerHeight +
          (id == "#technologies" ? 1 : 0)
      );
    activeEl?.classList.contains("scroll-animation")
      ? null
      : (activeEl?.classList.add("scroll-animation"),
        setTimeout(() => {
          activeEl?.classList.remove("scroll-animation");
        }, 1000));
  }

  useEffect(() => {
    headerRef?.current && setHeaderHeight(headerRef.current.clientHeight);
  }, [headerRef]);

  return (
    <header
      ref={headerRef}
      className="container py-[12px] lg:py-[30px] flex items-center justify-between bg-primaryBg dark:bg-primaryBgDark sticky top-0 z-50"
    >
      <div className="hidden lg:flex items-center gap-[40px]">
        {links.map((link, i) => {
          return (
            <button
              onClick={() => {
                onLinkClick(link.id);
              }}
              className={
                "text-[20px] text-linkColor dark:text-linkColorDark relative before:absolute before:bottom-[1px] before:left-[0] before:h-[1px] before:bg-linkColor dark:before:bg-linkColorDark before:w-[0%] lg:hover:before:w-[100%] before:duration-300 before:transition-all lg:active:opacity-[0.7] transition-opacity"
              }
              key={i}
            >
              {link.text}
            </button>
          );
        })}
      </div>
      <ToogleTheme className={"flex lg:hidden"} toogleTheme={toogleTheme} />
      <div className="flex items-center gap-[20px] lg:gap-[40px]">
        <ToogleLang />
        <ToogleTheme className={"hidden lg:flex"} toogleTheme={toogleTheme} />
        <NavMenu
          headerHeight={headerHeight}
          onLinkClick={onLinkClick}
          links={links}
        />
      </div>
    </header>
  );
}
