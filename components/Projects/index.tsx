import { useIntl } from "react-intl";
import ProjectsSlider from "./ProjectsSlider";
import { TechnologyItemData } from "../TechnologyItem";

export interface Project {
  name: string;
  link: string;
  imgSrc: string;
  mobImgSrc: string;
  gitHubLink: string;
  technologies: TechnologyItemData[];
}

const projectsList: Project[] = [
  {
    name: "Saviour Care",
    link: "https://saviour-care-seven.vercel.app/",
    imgSrc: "/images/projects/saviour-care.webp",
    mobImgSrc: "/images/projects/saviour-care-mob.webp",
    gitHubLink: "https://github.com/IvanValovyi/saviour-care",
    technologies: [
      {
        name: "Next",
        imgSrc: "/images/technologies/next.webp",
      },
		{
		  name: "TypeScript",
		  imgSrc: "/images/technologies/ts.webp",
		},
      {
        name: "Tailwind",
        imgSrc: "/images/technologies/tailwind.webp",
      },
      {
        name: "Swiper",
        imgSrc: "/images/technologies/swiper.webp",
      },
    ],
  },
  {
    name: "Travel",
    link: "https://travel-three-tawny.vercel.app/",
    imgSrc: "/images/projects/travel.webp",
    mobImgSrc: "/images/projects/travel-mob.webp",
    gitHubLink: "https://github.com/TimaVol/travel",
    technologies: [
      {
        name: "Next",
        imgSrc: "/images/technologies/next.webp",
      },
		{
		  name: "TypeScript",
		  imgSrc: "/images/technologies/ts.webp",
		},
      {
        name: "Tailwind",
        imgSrc: "/images/technologies/tailwind.webp",
      },
      {
        name: "SASS",
        imgSrc: "/images/technologies/sass.webp",
      },
      {
        name: "Swiper",
        imgSrc: "/images/technologies/swiper.webp",
      },
    ],
  },
  {
    name: "Besnik",
    link: "https://besnik-zeta.vercel.app/",
    imgSrc: "/images/projects/besnik.webp",
    mobImgSrc: "/images/projects/besnik-mob.webp",
    gitHubLink: "https://github.com/IvanValovyi/besnik",
    technologies: [
      {
        name: "Next",
        imgSrc: "/images/technologies/next.webp",
      },
		{
		  name: "TypeScript",
		  imgSrc: "/images/technologies/ts.webp",
		},
      {
        name: "Tailwind",
        imgSrc: "/images/technologies/tailwind.webp",
      },
      {
        name: "Swiper",
        imgSrc: "/images/technologies/swiper.webp",
      },
    ],
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
