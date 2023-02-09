import { Arrow } from "@/common/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

interface LangItem {
  text: string;
  locale: string;
}

export default function ToogleLang() {
  const { locale } = useRouter();

  const langs: LangItem[] = [
    {
      text: "EN",
      locale: "en",
    },
    {
      text: "UK",
      locale: "uk",
    },
  ];

  const [show, setShow] = useState(false);

  const triggerRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: any) =>
      popupRef?.current?.contains(e.target) ||
      triggerRef?.current?.contains(e.target) ||
      setShow(false);

    window.matchMedia("(pointer: fine)").matches
      ? document.addEventListener("click", onClick)
      : document.addEventListener("touchstart", onClick);

    return () => {
      window.matchMedia("(pointer: fine)").matches
        ? document.removeEventListener("click", onClick)
        : document.removeEventListener("touchstart", onClick);
    };
  }, []);

  return (
    <div className={"relative flex items-center select-none"}>
      <div
        ref={triggerRef}
        className="flex items-center cursor-pointer transition-opacity active:opacity-[0.8]"
        onClick={(e: any) => {
          setShow(!show);
        }}
      >
        <span
          className={
            "text-[20px] font-medium family-roboto text-textMain dark:text-textMainDark"
          }
        >
          {locale == "en" ? "EN" : "UK"}
        </span>
        <Arrow
          className={`ml-[8px] transition text-textMain dark:text-textMainDark ${
            show ? "rotate-[180deg]" : "rotate-0"
          }`}
        />
      </div>
      <div
        ref={popupRef}
        className={`flex flex-col absolute z-50 top-[100%] left-[50%] translate-x-[-50%] translate-y-[8px] p-[15px] gap-[15px] rounded-[15px] bg-primaryBg dark:bg-primaryBgDark border-[1px] border-borderSecondary dark:border-borderSecondaryDark shadow-xl transition-all ${
          show ? "opacity-1 scale-1" : "opacity-0 scale-0"
        }`}
      >
        {langs.map((lang, i) => {
          return (
            <Link
              href={"/"}
              locale={lang.locale}
              scroll={false}
              className={`leading-none text-textMain dark:text-textMainDark ${
                locale == lang.locale
                  ? "font-bold border-b-[1px]"
                  : "font-light"
              } ${show ? "" : "cursor-default"}`}
              key={i}
            >
              {lang.text}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
