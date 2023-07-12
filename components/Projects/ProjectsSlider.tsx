import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Arrow } from "@/common/icons";
import { Project } from ".";
import ProjectSlide from "./ProjectSlide";

interface Props {
  projectsList: Project[];
}

export default function ProjectsSlider({ projectsList }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [swiper, setSwiper] = useState<any>(null);

  const [md, setMd] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMd(window.matchMedia("(min-width: 768px)").matches);
    };

    window.addEventListener("resize", handleResize);

    setMd(window.matchMedia("(min-width: 768px)").matches);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flext items-center justify-center flex-col w-full lg:w-[800px] mx-auto">
      <Swiper
        onSwiper={(swiper) => setSwiper(swiper)}
        effect={"coverflow"}
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
        className="projectSwiper select-none"
      >
        {projectsList.map((project, i) => {
          return (
            <SwiperSlide key={i}>
              <ProjectSlide project={project} isPriority={i == 0} md={md} index={i} />
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
