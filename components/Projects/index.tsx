import { useIntl } from "react-intl";
import ProjectsSlider from "./ProjectsSlider";
import { TechnologyItemData } from "../TechnologyItem";
import { useEffect } from "react";

export interface Project {
  name: string;
  link: string;
  imgSrc: string;
  mobImgSrc: string;
  gitHubLink: string;
  figmaLink: string;
  technologies: TechnologyItemData[];
}

const projectsList: Project[] = [
  {
    name: "Saviour Care",
    link: "https://saviour-care-seven.vercel.app/",
    imgSrc: "/images/projects/saviour-care.webp",
    mobImgSrc: "/images/projects/saviour-care-mob.webp",
    gitHubLink: "https://github.com/IvanValovyi/saviour-care",
    figmaLink:
      "https://www.figma.com/file/qVpK30bit4ah4SEFIwpp3z/Saviour-Care?type=design&t=9mO5xqQebJctCMMV-6",
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
    figmaLink:
      "https://www.figma.com/file/AK6N7RqW2EibPV3QDKlAql/Free-Travel-UI-Landing-Page-(Community)-(Copy)?type=design&t=EDpaBQRJKqapzsl1-6",
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
    figmaLink:
      "https://www.figma.com/file/UZCh58vq8MEzyQE95RLCsG/Besnik?type=design&t=EDpaBQRJKqapzsl1-6",
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

  function blockZoom() {
    document
      .querySelector('meta[name="viewport"]')
      ?.setAttribute(
        "content",
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      );
  }

  function allowZoom() {
    document
      .querySelector('meta[name="viewport"]')
      ?.setAttribute(
        "content",
        "width=device-width"
      );
  }

  function initBlockZoom() {
    const inputs = document.querySelectorAll(
      ".block-zoom-wrapper:not(.block-zoom-inited)"
    );

    console.log("inputs: ", inputs);

    inputs.forEach((wrapper) => {
      const input: any = wrapper.querySelector(".block-zoom-input");

		input.addEventListener("focus", () => {
			blockZoom();
			allowZoom();
		 });

      input.addEventListener("blur", () => {
        blockZoom();
		  allowZoom();
      });

      input.classList.add("block-zoom-inited");
    });
  }

  useEffect(() => {
    initBlockZoom();
  }, []);

  return (
    <div
      id={"projects"}
      className="container pt-[20px] pb-[70px] lg:pt-[25px] lg:pb-[100px] flex flex-col bg-secondaryBg dark:bg-secondaryBgDark block-zoom-wrapper"
    >
      <h1 className="text-[32px] font-bold family-roboto mb-[16px] lg:mb-[20px] text-textMain dark:text-textMainDark">
        {projects}
      </h1>
      <ProjectsSlider projectsList={projectsList} />
      <label className="block-zoom-trigger">
        <p className="mb-[32px]">Some text</p>
        <input
          type="text"
          placeholder="Text..."
          className="text-[12px] block-zoom-input touch-manipulation"
        />
      </label>
    </div>
  );
}
