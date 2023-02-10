import { useIntl } from "react-intl";
import SocialMedia from "./SocialMedia";
import Link from "next/link";

export default function Footer() {
  const { formatMessage } = useIntl();

  const projectOnGitHub = formatMessage({ id: "project-on-git-hub" });

  return (
    <footer className="container flex items-center flex-col py-[20px] lg:py-[25px] gap-[20px] sm:gap-0 sm:flex-row sm:justify-between select-none">
      <SocialMedia id={"contacts"} />
      <Link
        href={"https://github.com/IvanValovyi/portfolio"}
        target={"_blank"}
        className="text-[20px] text-textMain dark:text-textMainDark relative before:absolute before:bottom-[1px] before:left-[0] before:h-[1px] before:bg-textMain dark:before:bg-textMainDark before:w-[0%] lg:hover:before:w-[100%] before:duration-300 before:transition-all lg:active:opacity-[0.7] transition-opacity"
      >
        {projectOnGitHub}
      </Link>
    </footer>
  );
}
