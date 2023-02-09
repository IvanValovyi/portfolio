import { Moon, Sun } from "@/common/icons";

interface Props {
  toogleTheme: () => void;
  className: string;
}

export default function ToogleTheme({ toogleTheme, className }: Props) {
  return (
    <div
      className={`w-[82px] h-[40px] p-[5px] rounded-[100px] bg-[black] dark:bg-[white] select-none cursor-pointer ${
        className || ""
      }`}
      onClick={toogleTheme}
    >
      <div className="flex items-center justify-center ml-[0px] dark:ml-[36px] rounded-l-[34px] rounded-r-[12px] dark:rounded-r-[34px] dark:rounded-l-[12px] bg-[white] dark:bg-toogleBgDark transition-all">
        <div className="w-[36px] h-[30px] px-[6px] py-[3px]">
          <Moon className={"w-full h-full hidden dark:block"} />
          <Sun className={"w-full h-full block dark:hidden"} />
        </div>
      </div>
    </div>
  );
}
