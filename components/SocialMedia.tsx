import { Gmail, Phone, Telegram } from "@/common/icons";
import Link from "next/link";
import { ReactNode } from "react";

interface socialMediaItem {
  link: string;
  icon: (className: string) => ReactNode;
}

const socialMedia: socialMediaItem[] = [
  {
    link: "#",
    icon: (className: string) => <Gmail className={className} />,
  },
  {
    link: "#",
    icon: (className: string) => <Telegram className={className} />,
  },
  {
    link: "#",
    icon: (className: string) => <Phone className={className} />,
  },
];

interface Props {
  id?: string;
}

export default function SocialMedia({ id }: Props) {
  return (
    <div id={id || ""} className={`flex items-center gap-[50px]`}>
      {socialMedia.map((el, i) => {
        return (
          <Link
            href={el.link}
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
