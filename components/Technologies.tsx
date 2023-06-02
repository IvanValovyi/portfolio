import { useIntl } from "react-intl";
import TechnologyItem, { TechnologyItemData } from "./TechnologyItem";

const technologiesList: TechnologyItemData[] = [
  {
    name: "HTML",
    imgSrc: "/images/technologies/html.webp",
  },
  {
    name: "CSS",
    imgSrc: "/images/technologies/css.webp",
  },
  {
    name: "SASS",
    imgSrc: "/images/technologies/sass.webp",
  },
  {
    name: "Bootstrap",
    imgSrc: "/images/technologies/bootstrap.webp",
  },
  {
    name: "Tailwind",
    imgSrc: "/images/technologies/tailwind.webp",
  },
  {
    name: "JavaScript",
    imgSrc: "/images/technologies/js.webp",
  },
  {
    name: "Vue.js",
    imgSrc: "/images/technologies/vue.webp",
  },
  {
    name: "Vuex",
    imgSrc: "/images/technologies/vuex.webp",
  },
  {
    name: "Vue Router",
    imgSrc: "/images/technologies/vue-router.webp",
  },
  {
    name: "Nuxt",
    imgSrc: "/images/technologies/nuxt.webp",
  },
  {
    name: "React",
    imgSrc: "/images/technologies/react.webp",
  },
  {
    name: "Redux",
    imgSrc: "/images/technologies/redux.webp",
  },
  {
    name: "React Router",
    imgSrc: "/images/technologies/react-router.webp",
  },
  {
    name: "Next",
    imgSrc: "/images/technologies/next.webp",
  },
  {
    name: "SWR",
    imgSrc: "/images/technologies/swr.webp",
  },
  {
    name: "Swiper",
    imgSrc: "/images/technologies/swiper.webp",
  },
  {
    name: "Slick",
    imgSrc: "/images/technologies/slick.webp",
  },
  {
    name: "Chart.js",
    imgSrc: "/images/technologies/chart.webp",
  },
  {
    name: "Angular",
    imgSrc: "/images/technologies/angular.webp",
  },
  {
    name: "Gulp",
    imgSrc: "/images/technologies/gulp.webp",
  },
  {
    name: "Google Maps",
    imgSrc: "/images/technologies/maps.webp",
  },
  {
    name: "Recaptcha",
    imgSrc: "/images/technologies/recaptcha.webp",
  },
];

export default function Technologies() {
  const { formatMessage } = useIntl();

  const technologies = formatMessage({ id: "technologies" });

  return (
    <div
      id={"technologies"}
      className="container py-[21px] lg:py-[26px] flex flex-col bg-secondaryBg dark:bg-secondaryBgDark relative before:absolute before:top-0 before:left-[50%] before:w-[calc(100%_-_40px)] lg:before:w-[calc(100%_-_80px)] before:h-[1px] before:translate-x-[-50%] before:bg-borderDefault dark:before:bg-borderDefaultDark after:absolute after:bottom-0 after:left-[50%] after:w-[calc(100%_-_40px)] lg:after:w-[calc(100%_-_80px)] after:h-[1px] after:translate-x-[-50%] after:bg-borderDefault dark:after:bg-borderDefaultDark"
    >
      <h1 className="text-[32px] font-bold family-roboto mb-[16px] lg:mb-[20px] text-textMain dark:text-textMainDark">
        {technologies}
      </h1>
      <div className="flex items-center flex-wrap gap-[16px] md:gap-[24px]">
        {technologiesList.map((technology, i) => {
          return (
            <TechnologyItem
              name={technology.name}
              imgSrc={technology.imgSrc}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}
