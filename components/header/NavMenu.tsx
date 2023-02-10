import { Close, Menu } from "@/common/icons";
import { LinkItem } from ".";
import { useEffect, useState } from "react";
import Link from "next/link";
import SocialMedia from "../SocialMedia";

interface Props {
  headerHeight: number;
  onLinkClick: (id: string) => void;
  links: LinkItem[];
}

export default function NavMenu({ headerHeight, onLinkClick, links }: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    show
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [show]);

  return (
    <>
      <div
        className="flex items-center lg:hidden"
        onClick={() => {
          setShow(!show);
        }}
      >
        <Menu
          className={`text-textMain dark:text-textMainDark transition-all ${
            show ? "w-0 opacity-0 scale-0" : "opacity-[1] scale-1 w-[24px]"
          }`}
        />
        <Close
          className={`text-textMain dark:text-textMainDark transition-all ${
            show ? "opacity-[1] scale-1 w-[24px]" : "opacity-0 scale-0 w-0"
          }`}
        />
      </div>
      <div
        style={{
          height: `calc(100vh - ${headerHeight}px)`,
          top: `${headerHeight}px`,
        }}
        className={`fixed z-40 pb-[50px] flex flex-col items-center justify-between bg-primaryBg dark:bg-primaryBgDark w-full transition-all ${
          show ? "left-[0%]" : "left-[100%]"
        }`}
      >
        <div className="container flex flex-col border-t-[1px] border-t-borderDefault dark:border-t-borderDefaultDark">
          {links.map((link, i) => {
            return (
              <button
                className={
                  "text-[28px] text-start leading-none px-[10px] py-[20px] text-linkColor dark:text-linkColorDark first:mt-[12px] border-b-[1px] border-borderSecondary dark:border-borderSecondaryDark"
                }
                onClick={() => {
                  setShow(false);
                  onLinkClick(link.id);
                }}
                key={i}
              >
                {link.text}
              </button>
            );
          })}
        </div>
        <SocialMedia className="absolute bottom-[50px] left-[50%] translate-x-[-50%]"/>
      </div>
    </>
  );
}
