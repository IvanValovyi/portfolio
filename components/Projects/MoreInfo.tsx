import { Close } from "@/common/icons";
import { useIntl } from "react-intl";
import TechnologyItem from "../TechnologyItem";
import { Project } from ".";
import Image from "next/image";
import Link from "next/link";

interface Props {
  project: Project;
  show: boolean;
  close: () => void;
  md: boolean;
}

export default function MoreInfo({ project, show, close, md }: Props) {
  const { formatMessage } = useIntl();

  const technologies = formatMessage({ id: "technologies" });
  const links = formatMessage({ id: "links" });

  return (
    <div
      className={`flex flex-col absolute z-30 bottom-0 left-0 w-full h-full bg-primaryBg dark:bg-primaryBgDark py-[16px] pl-[16px] pr-[4px] md:pr-[2px] md:py-[25px] md:pl-[25px] text-textMain dark:text-textMainDark more-info overflow-y-auto touch-pan-y ${
        show
          ? "cursor-default pointer-events-auto opacity-1"
          : "cursor-none pointer-events-none opacity-0"
      }`}
      style={
        show
          ? { transform: "rotateX(0deg)", transition: "all 0.3s linear" }
          : { transform: "rotateX(90deg)", transition: "all 0.3s linear" }
      }
    >
      <div
        className="absolute top-[16px] right-[16px] md:top-[18px] md:right-[18px] cursor-pointer transition-default opacity-[1] hover:opacity-[0.8] active:opacity-[0.7]"
        onClick={close}
      >
        <Close className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col pb-[6px]">
          <h3 className="text-[18px] sm:text-[24px] font-medium mb-[18px]">
            {technologies}
          </h3>
          <div className="flex items-center flex-wrap">
            {project.technologies.map((el, i) => {
              return (
                <TechnologyItem
                  name={el.name}
                  imgSrc={el.imgSrc}
                  isSmall={true}
                  className="mr-[12px] mb-[12px] md:mr-[18px] md:mb-[18px]"
                  key={i}
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col pt-[18px] md:pt-[24px] mr-[12px] md:mr-[18px] border-t-[1px] border-t-borderSecondary dark:border-t-borderSecondaryDark">
          <h3 className="text-[18px] sm:text-[24px] font-medium mb-[18px]">
            {links}
          </h3>
          <div className="flex items-center">
            <Link
              href={project.gitHubLink}
              target={"_blank"}
              className="flex items-center rounded-[12px] border-textMain dark:border-textMainDark border-[1px] mr-[18px] md:mr-[24px] px-[12px] py-[6px] hover:bg-[#00000015] dark:hover:bg-[#0000006b] hover:rounded-[8px] active:bg-[#0000002a] dark:active:bg-[#000000a8] active:rounded-[10px]"
            >
              <Image
                src={"/images/projects/icons/git-hub.webp"}
                alt="GitHub logo"
                width={md ? 28 : 24}
                height={md ? 28 : 24}
                className="mr-[4px] rounded-[100%]"
              />
              <span className="text-[16px] md:text-[20px] text-textMain dark:text-textMainDark">
                GitHub
              </span>
            </Link>
            <Link
              href={project.figmaLink}
              target={"_blank"}
              className="flex items-center rounded-[12px] border-textMain dark:border-textMainDark border-[1px] px-[12px] py-[6px] hover:bg-[#00000015] dark:hover:bg-[#0000006b] hover:rounded-[8px] active:bg-[#0000002a] dark:active:bg-[#000000a8] active:rounded-[10px]"
            >
              <Image
                src={"/images/projects/icons/figma.webp"}
                alt="Figma logo"
                width={md ? 28 : 24}
                height={md ? 28 : 24}
                className="mr-[4px]"
              />
              <span className="text-[16px] md:text-[20px] text-textMain dark:text-textMainDark">
                Figma
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
