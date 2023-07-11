import Image from "next/image";

export interface TechnologyItemData {
  name: string;
  imgSrc: string;
  className?: string;
  isSmall?: boolean;
}

export default function TechnologyItem({
  name,
  imgSrc,
  className,
  isSmall,
}: TechnologyItemData) {
  return (
    <div
      className={`flex items-center w-max select-none gap-[10px] rounded-[20px] border-[1px] border-borderDefault dark:border-borderDefaultDark bg-[white] dark:bg-[black] ${
        className || ""
      } ${isSmall ? "py-[8px] px-[12px]" : "p-[14px]"}`}
    >
      <p
        className={`text-textMain dark:text-textMainDark ${
          isSmall ? "text-[16px]" : "text-[18px]"
        }`}
      >
        {name}
      </p>
      <Image
        src={imgSrc}
        alt={name}
        width={isSmall ? 22 : 30}
        height={isSmall ? 22 : 30}
        priority
        className="rounded-[5px] max-w-[30px] max-h-[30px]"
      />
    </div>
  );
}
