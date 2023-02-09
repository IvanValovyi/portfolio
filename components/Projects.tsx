import { useIntl } from "react-intl";
import ProjectsSlider from "./ProjectsSlider";

export interface Project {
  name: string;
  link: string;
  imgSrc: string;
}

const projectsList: Project[] = [
  {
    name: "Travel",
    link: "https://travel-three-tawny.vercel.app/",
    imgSrc: "/images/projects/travel.webp",
  },
  {
    name: "Weather",
    link: "https://ivanvalovyi.github.io/weather/",
    imgSrc: "/images/projects/weather.webp",
  },
  {
    name: "Jane Doe",
    link: "https://ivanvalovyi.github.io/jane_doe/",
    imgSrc: "/images/projects/jane-doe.webp",
  },
];

export default function Projects() {
  const { formatMessage } = useIntl();

  const projects = formatMessage({ id: "projects" });

  return (
    <div
      id={"projects"}
      className="container pt-[20px] pb-[70px] lg:pt-[25px] lg:pb-[100px] flex flex-col bg-secondaryBg dark:bg-secondaryBgDark"
    >
      <h1 className="text-[32px] font-bold family-roboto mb-[16px] lg:mb-[20px] text-textMain dark:text-textMainDark">
        {projects}
      </h1>
      <ProjectsSlider projectsList={projectsList} />
    </div>
  );
}
