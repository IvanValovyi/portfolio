import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Navigation } from "swiper";
import { useIntl } from "react-intl";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Arrow } from "@/common/icons";
import { Project } from "./Projects";

interface Props {
  projectsList: Project[];
}

export default function ProjectsSlider({ projectsList }: Props) {
  const { formatMessage } = useIntl();

  const goToTheSite = formatMessage({ id: "go-to-the-site" });

  const loadImage = formatMessage({ id: "load-image" });

  const [currentSlide, setCurrentSlide] = useState(0);

  const [swiper, setSwiper] = useState<any>(null);

  return (
    <div className="flext items-center justify-center flex-col w-full lg:w-[800px] mx-auto">
      <Swiper
        onSwiper={(swiper) => setSwiper(swiper)}
        effect={'coverflow'}
        modules={[EffectCoverflow, Navigation]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={{
          prevEl: "#prev-project-btn",
          nextEl: "#next-project-btn",
        }}
        autoHeight={true}
        onSlideChange={(e) => {
          setCurrentSlide(e.realIndex);
        }}
        className="projectSwiper select-none rounded-[10px]"
      >
        {projectsList.map((project, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="flex flex-col w-full bg-primaryBg dark:bg-primaryBgDark">
                <div
                  className={"overflow-hidden relative h-[50vw] md:h-[450px]"}
                  key={Math.random()}
                >
                  <Image
                    src={project.imgSrc}
                    alt={project.name}
                    width={1920}
                    height={1080}
                    priority={i == 0}
                    className="w-full h-full"
                  />

                  <div className="animate-pulse bg-[#d1cfcf] dark:bg-[black] h-full w-full flex items-center justify-center">
                    <p className="text-textMain dark:text-textMainDark">
                      {loadImage}...
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row p-[16px] md:p-[25px] border-t-[1px] border-t-borderSecondary dark:border-t-borderSecondaryDark">
                  <span className="text-[24px] sm:text-[32px] font-medium text-textMain dark:text-textMainDark">
                    {project.name}
                  </span>
                  <Link
                    href={project.link}
                    target={"_blank"}
                    className="flex items-center justify-center w-max mt-[16px] sm:mt-0 ml-auto sm:ml-0 py-[10px] px-[20px] rounded-[20px] text-[16px] sm:text-[18px] font-medium cursor-pointer bg-accentBg dark:bg-accentBgDark text-textAccent dark:text-textAccentDark lg:hover:text-textAccentDark dark:lg:hover:text-textAccent lg:hover:bg-primaryBg dark:lg:hover:bg-primaryBgDark lg:hover:border-[1px] lg:hover:border-accentBg dark:lg:hover:border-accentBgDark lg:hover:scale-[1.05] active:scale-[0.9] transition-all"
                  >
                    {goToTheSite}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex items-center justify-center sm:justify-between mt-[30px] sm:mt-[50px] relative">
        <div className="hidden sm:block  text-[32px] text-textMain dark:text-textMainDark">
          {currentSlide + 1}/{projectsList.length}
        </div>
        <div className="flex items-center justify-between gap-[10px] sm:absolute sm:top-[50%] sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%]">
          {projectsList.map((el, i) => {
            return (
              <div
                className={`w-[10px] h-[10px] rounded-[100%] transition-all ${
                  currentSlide == i
                    ? "bg-[black] dark:bg-[white] pointer-events-none"
                    : "bg-[white] dark:bg-[black] cursor-pointer lg:hover:scale-[1.2] active:opacity-[0.7]"
                }`}
                onClick={() => {
                  swiper.slideTo(i);
                }}
                key={i}
              />
            );
          })}
        </div>
        <div className="hidden sm:flex items-center gap-[20px]">
          <div
            id={"prev-project-btn"}
            className="w-[50px] h-[50px] flex items-center justify-center rounded-[100%] border-[1px] border-[black] dark:border-[white] lg:hover:bg-[white] dark:lg:hover:bg-[black] active:opacity-[0.7] cursor-pointer transition-all"
          >
            <Arrow className="rotate-[-90deg] text-[black] dark:text-[white]" />
          </div>
          <div
            id={"next-project-btn"}
            className="w-[50px] h-[50px] flex items-center justify-center rounded-[100%] border-[1px] border-[black] dark:border-[white] lg:hover:bg-[white] dark:lg:hover:bg-[black] active:opacity-[0.7] cursor-pointer transition-all"
          >
            <Arrow className="rotate-[90deg] text-[black] dark:text-[white]" />
          </div>
        </div>
      </div>
    </div>
  );
}
