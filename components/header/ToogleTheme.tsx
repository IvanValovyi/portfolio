import { Moon, Sun } from "@/common/icons";

interface Props {
  toogleTheme: () => void;
  className: string;
}

export default function ToogleTheme({ toogleTheme, className }: Props) {
  return (
    <div
      className={`relative w-[82px] h-[40px] p-[5px] rounded-[100px] bg-[black] dark:bg-[white] select-none cursor-pointer ${
        className || ""
      }`}
      onClick={toogleTheme}
    >
      <div className="flex items-center justify-center absolute top-[50%] translate-y-[-50%] left-[5px] rounded-l-[34px] rounded-r-[12px] dark:left-[calc(100%_-_5px)] dark:translate-x-[-100%] dark:rounded-r-[34px] dark:rounded-l-[12px] bg-[white] dark:bg-toogleBgDark transition-all">
        <Moon
          className={
            "px-0 py-0 w-0 h-0 opacity-0 dark:opacity-[1] dark:w-[36px] dark:h-[30px] dark:px-[6px] dark:py-[3px] transition-all"
          }
        />
        <Sun className="px-[6px] py-[3px] w-[36px] h-[30px] opacity-[1] dark:opacity-0 dark:w-0 dark:h-0 dark:px-0 dark:py-0 transition-all" />
      </div>
    </div>
  );
}
