import Image from "next/image";
import { Project } from ".";
import { Close, Info } from "@/common/icons";
import Link from "next/link";
import { useIntl } from "react-intl";
import { useEffect, useState } from "react";
import MoreInfo from "./MoreInfo";

interface Props {
  project: Project;
  isPriority: boolean;
  md: boolean;
  index: number;
}

export default function ProjectSlide({
  project,
  isPriority,
  md,
  index,
}: Props) {
  const { formatMessage } = useIntl();

  const goToTheSite = formatMessage({ id: "go-to-the-site" });
  const moreInfo = formatMessage({ id: "more-info" });

  const [showMore, setShowMore] = useState(false);
  const [showInfoIcon, setShowInfoIcon] = useState(true);
  const [showInfoIconAnim, setShowInfoIconAnim] = useState(false);

  function handleInfoClick({ show }: { show: boolean }) {
    setShowMore(show);
    setShowInfoIconAnim(true);

    setTimeout(() => {
      setShowInfoIcon(!show);
      setShowInfoIconAnim(false);
    }, 150);
  }

  return (
    <div className="flex flex-col w-full bg-primaryBg dark:bg-primaryBgDark rounded-[10px]">
      <div
        className={
          "overflow-hidden relative h-max max-h-[50vh] md:h-[450px] md:max-h-[450px]"
        }
        key={index}
      >
        <Image
          src={md ? project.imgSrc : project.mobImgSrc}
          alt={project.name}
          width={1920}
          height={1080}
          priority={isPriority}
          className="w-full h-full object-cover"
        />
        <MoreInfo
          project={project}
          show={showMore}
          close={() => {
            handleInfoClick({ show: false });
          }}
			 md={md}
        />
      </div>
      <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row p-[16px] md:p-[25px] border-t-[1px] border-t-borderSecondary dark:border-t-borderSecondaryDark">
        <span className="text-[22px] sm:text-[32px] font-medium text-textMain dark:text-textMainDark">
          {project.name}
        </span>
        <div className="flex items-center justify-between gap-[12px] sm:gap-[24px] mt-[16px] sm:mt-0 flex-wrap">
          <button
            className="flex items-center gap-[4px]"
            onClick={() => {
              handleInfoClick({ show: !showMore });
            }}
          >
            <span className="text-[14px] sm:text-[18px] font-normal text-textMain dark:text-textMainDark">
              {moreInfo}
            </span>
            <div
              className={`flex items-center justify-center w-[10px] h-[10px] min-[330px]:w-[12px] min-[330px]:h-[12px] sm:w-[15px] sm:h-[15px] transition-default ${
                showInfoIconAnim
                  ? "opacity-[0.3] rotate-[45deg] scale-[0.7]"
                  : "opacity-[1] rotate-[0deg] scale-[1]"
              }`}
            >
              {showInfoIcon ? (
                <Info className="w-[10px] h-[10px] min-[330px]:w-[12px] min-[330px]:h-[12px] sm:w-[15px] sm:h-[15px] text-textMain dark:text-textMainDark" />
              ) : (
                <Close className="w-[6px] h-[6px] min-[330px]:w-[8px] min-[330px]:h-[8px] sm:h-[10px] text-textMain dark:text-textMainDark" />
              )}
            </div>
          </button>
          <Link
            href={project.link}
            target={"_blank"}
            className="flex items-center justify-center w-max sm:mt-0 sm:ml-0 py-[6px] px-[12px] min-[330px]:py-[8px] min-[330px]:px-[16px] sm:py-[10px] sm:px-[20px] rounded-[20px] text-[14px] sm:text-[18px] font-medium cursor-pointer bg-accentBg dark:bg-accentBgDark text-textAccent dark:text-textAccentDark lg:border-[1px] lg:border-[transparent] lg:hover:text-textAccentDark dark:lg:hover:text-textAccent lg:hover:bg-primaryBg dark:lg:hover:bg-primaryBgDark lg:hover:border-accentBg dark:lg:hover:border-accentBgDark lg:hover:scale-[1.05] active:scale-[0.9] transition-all"
          >
            {goToTheSite}
          </Link>
        </div>
      </div>
    </div>
  );
}
