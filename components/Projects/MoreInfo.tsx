import { Arrow, Close } from "@/common/icons";
import { useIntl } from "react-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import TechnologyItem from "../TechnologyItem";
import { Project } from ".";
import { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper";

interface Props {
  project: Project;
  show: boolean;
  close: () => void;
  md: boolean;
}

export default function MoreInfo({ project, show, close, md }: Props) {
  const { formatMessage } = useIntl();

  const technologies = formatMessage({ id: "technologies" });

  const techSlider = useRef<any>(null);

  const [swiper, setSwiper] = useState<any>(null);
  const [showSliderBtns, setShowSliderBtns] = useState(true);
  const [realIndex, setRealIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (
      md &&
      techSlider?.current &&
      techSlider.current.clientWidth < techSlider.current.scrollWidth
    ) {
      setShowSliderBtns(true);
    } else {
      setShowSliderBtns(false);
    }
  }, [techSlider, md, swiper]);

  return (
    <div
      className={`flex flex-col absolute bottom-0 left-0 w-full h-full bg-primaryBg dark:bg-primaryBgDark p-[24px] text-textMain dark:text-textMainDark ${
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
        className="absolute top-[18px] right-[18px] cursor-pointer transition opacity-[1] hover:opacity-[0.8] active:opacity-[0.7]"
        onClick={close}
      >
        <Close className="w-[20px] h-[20px]" />
      </div>
      <div className="flex flex-col w-full">
        <h3 className="text-[20px] sm:text-[24px] font-medium mb-[18px]">
          {technologies}
        </h3>
        <Swiper
          ref={techSlider}
          slidesPerView={"auto"}
          spaceBetween={12}
          modules={[Navigation]}
          navigation={{ prevEl: "#tech-prev", nextEl: "#tech-next" }}
          breakpoints={{
            768: {
              spaceBetween: 18,
            },
          }}
          className="w-full relative px-[24px]"
          onSwiper={(swiper) => setSwiper(swiper)}
          onSlideChange={(e) => {
            setIsEnd(e.isEnd);
            setRealIndex(e.realIndex);
          }}
        >
          {project.technologies.map((el, i) => {
            return (
              <SwiperSlide key={i} style={{ width: "max-content" }}>
                <TechnologyItem
                  name={el.name}
                  imgSrc={el.imgSrc}
                  isSmall={true}
                />
              </SwiperSlide>
            );
          })}
          <div
            className={`absolute top-0 left-0 w-[24px] h-full bg-secondaryBg dark:bg-secondaryBgDark text-primaryBgDark dark:text-primaryBg border-r-[1px] border-primaryBgDark dark:border-primaryBg z-50 flex items-center justify-center cursor-pointer transition-default hover:rounded-r-[8px] hover:bg-primaryBgDark dark:hover:bg-primaryBg hover:text-primaryBg dark:hover:text-primaryBgDark ${
              showSliderBtns && realIndex
                ? "scale-[1] translate-x-[0%]"
                : "scale-[0] translate-x-[-100%]"
            }`}
            id="tech-prev"
          >
            <Arrow className="rotate-[-90deg] w-[14px]" />
          </div>
          <div
            className={`absolute top-0 right-0 w-[24px] h-full bg-secondaryBg dark:bg-secondaryBgDark text-primaryBgDark dark:text-primaryBg border-l-[1px] border-primaryBgDark dark:border-primaryBg z-50 flex items-center justify-center cursor-pointer transition-default hover:rounded-l-[8px] hover:bg-primaryBgDark dark:hover:bg-primaryBg hover:text-primaryBg dark:hover:text-primaryBgDark ${
              showSliderBtns && !isEnd
                ? "scale-[1] translate-x-[0%]"
                : "scale-[0] translate-x-[100%]"
            }`}
            id="tech-next"
            onClick={() => {
              setIsEnd(swiper.isEnd);
              setRealIndex(swiper.realIndex);
            }}
          >
            <Arrow className="rotate-[90deg] w-[14px]" />
          </div>
        </Swiper>
      </div>
    </div>
  );
}
