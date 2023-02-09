import { useIntl } from "react-intl";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  const { formatMessage } = useIntl();

  const footerText = formatMessage({ id: "footer-text" });

  return (
    <footer className="container flex items-center flex-col py-[20px] lg:py-[25px] gap-[20px] sm:gap-0 sm:flex-row sm:justify-between select-none">
      <SocialMedia id={"contacts"} />
      <h3 className="text-[20px] text-textMain dark:text-textMainDark">
        {footerText}
      </h3>
    </footer>
  );
}
