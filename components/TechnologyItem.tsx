import Image from "next/image";

export interface TechnologyItemData {
  name: string;
  imgSrc: string;
  className?: string;
}

export default function TechnologyItem({
  name,
  imgSrc,
  className,
}: TechnologyItemData) {
  return (
    <div
      className={`flex items-center w-max select-none gap-[10px] p-[14px] rounded-[20px] border-[1px] border-borderDefault dark:border-borderDefaultDark bg-[white] dark:bg-[black] ${
        className || ""
      }`}
    >
      <p className="text-[18px] text-textMain dark:text-textMainDark">{name}</p>
      <Image
        src={imgSrc}
        alt={name}
        width={30}
        height={30}
		  priority
		  className="rounded-[5px] max-w-[30px] max-h-[30px]"
      />
    </div>
  );
}
