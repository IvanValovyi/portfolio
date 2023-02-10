import { Gmail, Phone, Telegram } from "@/common/icons";
import Link from "next/link";
import { ReactNode } from "react";

interface socialMediaItem {
  link: string;
  icon: (className: string) => ReactNode;
}

const socialMedia: socialMediaItem[] = [
  {
    link: "mailto:pan.ivan.17.0@gmail.com",
    icon: (className: string) => <Gmail className={className} />,
  },
  {
    link: "https://t.me/ivan_valovyi_37",
    icon: (className: string) => <Telegram className={className} />,
  },
  {
    link: "tel:096 553 56 29",
    icon: (className: string) => <Phone className={className} />,
  },
];

interface Props {
  id?: string;
  className?: string;
}

export default function SocialMedia({ id, className }: Props) {
  return (
    <div
      id={id || ""}
      className={`flex items-center gap-[50px] ${className || ""}`}
    >
      {socialMedia.map((el, i) => {
        return (
          <Link
            href={el.link}
            target={"_blank"}
            className="flex items-center justify-center w-[50px] h-[50px] rounded-[100%] bg-accentBg dark:bg-accentBgDark lg:hover:scale-[1.1] active:scale-[0.9] transition-all"
            key={i}
          >
            {el.icon("text-textAccent dark:text-textAccentDark")}
          </Link>
        );
      })}
    </div>
  );
}
