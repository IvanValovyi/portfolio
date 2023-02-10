import Image from "next/image";
import { useIntl } from "react-intl";

export default function AboutMe() {
  const { formatMessage } = useIntl();

  const aboutMe = formatMessage({ id: "about-me" });

  const ivanValovyi = formatMessage({ id: "ivan-valovyi" });
  const juniorFrontendDev = formatMessage({ id: "junior-frontend-dev" });

  const aboutMeParagraph1 = formatMessage({ id: "about-me-paragraph-1" });
  const aboutMeParagraph2 = formatMessage({ id: "about-me-paragraph-2" });

  return (
    <div id={"about-me"} className="container py-[20px] lg:py-[25px] flex flex-col bg-secondaryBg dark:bg-secondaryBgDark">
      <h1 className="text-[32px] font-bold family-roboto mb-[16px] lg:mb-[20px] text-textMain dark:text-textMainDark">
        {aboutMe}
      </h1>
      <div className="flex flex-col md:block">
        <div className="w-full min-[350px]:w-max lg:w-[330px] h-[100px] p-[15px] min-[340px]:p-[20px] md:mr-[16px] lg:mr-0 lg:ml-[45px] mb-[16px] lg:mb-[45px] bg-accentBg dark:bg-accentBgDark md:float-left lg:float-right rounded-[32px] flex items-center">
          <Image
            src={"/images/ivan-valovyi.png"}
            alt="Ivan Valovyi"
            width={60}
            height={60}
            className="rounded-[100%] shadow-lg shadow-secondaryBgDark"
          />
          <div className="flex flex-col items-center flex-auto mx-[15px] min-[340px]:mx-[20px] lg:mx-0">
            <h2 className="text-[24px] text-textAccent dark:text-textAccentDark leading-none mb-[8px]">
              {ivanValovyi}
            </h2>
            <p className="text-[12px] text-textAccent dark:text-textAccentDark leading-none">
              {juniorFrontendDev}
            </p>
          </div>
        </div>
        <p className="mb-[16px] lg:mb-[20px] text-[16px] text-textMain dark:text-textMainDark">
          {aboutMeParagraph1}
        </p>
        <p className="text-[16px] text-textMain dark:text-textMainDark">
          {aboutMeParagraph2}
        </p>
      </div>
    </div>
  );
}
