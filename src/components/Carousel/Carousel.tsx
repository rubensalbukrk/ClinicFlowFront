import "./style.css";
import React, { useState, useEffect, useRef, useCallback } from "react";
import classNames from "classnames";
import { CarouselItemProps, CarouselProps } from "./type";
import { CarouselItem } from "./CarouselItem/CarouselItem";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Carousel: React.FC<CarouselProps> = ({
  dataItems,
  autoplay = false,
  autoplayDelay = 7000,
  className = "",
  transitionDuration = 500, // Definido em milissegundos
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesToShow] = useState(1);
  const slideCount = dataItems.length;
  const autoPlayRef = useRef<number | null>(null);

  const totalPages = Math.ceil(slideCount / slidesToShow);

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => {
      const nextIndex = prevIndex + slidesToShow;
      return nextIndex >= slideCount ? 0 : nextIndex;
    });
  }, [slideCount, slidesToShow]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prevIndex) => {
      const prevIndexCalc = prevIndex - slidesToShow;
      return prevIndexCalc < 0 ? slideCount - slidesToShow : prevIndexCalc;
    });
  }, [slideCount, slidesToShow]);

  // Configurar o autoplay
  useEffect(() => {
    if (autoplay) {
      autoPlayRef.current = window.setInterval(nextSlide, autoplayDelay);

      return () => {
        if (autoPlayRef.current) {
          clearInterval(autoPlayRef.current);
        }
      };
    }
  }, [autoplay, autoplayDelay, nextSlide]);

  // Função para ir para uma página específica
  const goToPage = (pageIndex: number) => {
    setActiveIndex(pageIndex * slidesToShow);
  };

  return (
    <div
      className={classNames("carousel", className)}
      onMouseEnter={() =>
        autoPlayRef.current && clearInterval(autoPlayRef.current)
      }
      onMouseLeave={() =>
        autoplay &&
        (autoPlayRef.current = window.setInterval(nextSlide, autoplayDelay))
      }
    >
      <div
        className="carousel-inner" // Certifique-se de que o contêiner tenha overflow escondido
        style={{
          transition: `transform ${transitionDuration}ms ease-in-out`,
          transform: `translateX(-${(activeIndex * 100) / slidesToShow}%)`,
        }}
      >
        {dataItems.map(({ id, title, descrition, url }: CarouselItemProps) => {
          return (
            <CarouselItem
              id={id}
              key={id}
              title={title}
              descrition={descrition}
              url={url}
              activeIndexSlide={activeIndex + 1}
              className={classNames("carousel-items", {
                "animate-fade-up": id === activeIndex,
              })}
            />
          );
        })}
      </div>

      <button className="carousel-control-prev" onClick={prevSlide}>
        <IoIosArrowBack />
      </button>
      <button className="carousel-control-next" onClick={nextSlide}>
        <IoIosArrowForward />
      </button>

      {/* Indicadores de páginas */}
      <div className="carousel-indicators">
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <span
            key={pageIndex}
            className={classNames("indicator", {
              active: pageIndex === Math.floor(activeIndex / slidesToShow),
            })}
            onClick={() => goToPage(pageIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
