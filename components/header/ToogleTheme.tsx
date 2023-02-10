import { Moon, Sun } from "@/common/icons";
import { Theme } from "@/pages";
import { ReactNode, useEffect, useState } from "react";

interface Props {
  theme: Theme;
  toogleTheme: () => void;
  className: string;
}

export default function ToogleTheme({ theme, toogleTheme, className }: Props) {
  const [showAnim, setShowAnim] = useState(false);
  const [icon, setIcon] = useState<ReactNode>(null);

  function toogleIcon() {
    theme === Theme.light
      ? setIcon(<Sun className={"w-full h-full"} />)
      : setIcon(<Moon className={"w-full h-full"} />);
  }

  useEffect(() => {
    toogleIcon();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      toogleIcon();
      setShowAnim(false);
    }, 150);
  }, [theme]);

  return (
    <div
      className={`w-[82px] h-[40px] p-[5px] rounded-[100px] bg-[black] dark:bg-[white] select-none cursor-pointer ${
        className || ""
      }`}
      onClick={() => {
        !showAnim && (toogleTheme(), setShowAnim(true));
      }}
    >
      <div className="flex items-center justify-center ml-[0px] dark:ml-[36px] rounded-l-[34px] rounded-r-[12px] dark:rounded-r-[34px] dark:rounded-l-[12px] bg-[white] dark:bg-toogleBgDark duration-[0.3s] transition-all">
        <div
          className={`w-[36px] h-[30px] px-[6px] py-[3px] transition-all duration-[0.15s] ${
            showAnim ? "opacity-[0] scale-[0]" : "opacity-[1] scale-[1]"
          }`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}
