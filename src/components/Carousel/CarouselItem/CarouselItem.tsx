import { useEffect, useState } from "react";
import Text from "../../Text/text";
import { CarouselItemProps } from "../type";
import "../style.css"

const CarouselItem: React.FC<CarouselItemProps> = ({
    id,
    title,
    descrition,
    url,
    activeIndexSlide,
    className,
    style
  }) => {
    const [triggerAnimation, setTriggerAnimation] = useState(false); // Estado para controlar a animação
    const isActive = id === activeIndexSlide;
  
    // Efeito para disparar a animação quando o slide se torna ativo
    useEffect(() => {
      if (isActive) {
        // Reseta o estado de animação para garantir que será aplicado sempre que o slide estiver ativo
        setTriggerAnimation(false); 
        const timeout = setTimeout(() => {
          setTriggerAnimation(true); // Ativa a animação após o reset
        }, 100); // Pequeno delay para garantir a reinicialização da animação
        return () => clearTimeout(timeout); // Limpa o timeout quando o slide não está mais ativo
      }
    }, [isActive]);
  
    return (
      <div
        key={id}
        className={`${className} ` + `min-w-full flex justify-between flex-col
        sm:justify-center
        `}
        style={style}
      >
        <img
          src={url}
          alt={title}
          className="absolute brightness-50 object-fill w-full shadow-inner shadow-black h-full z-0"
        />
        <Text
          size="large"
          text={title}
          className={`flex bebas-font-medium tracking-widest line-clamp-1 top-0 z-10 px-4 py-2 shadow-black/20 shadow-md backdrop-blur-lg bg-black/20 
            ${id % 2 === 0 ? "self-end rounded-bl-md sm:self-auto" : "self-start rounded-br-md sm:self-auto"} 
            ${triggerAnimation ? "animate-fade-down animate-duration-[2000ms] animate-delay-[500ms]" : ""}
            sm:font-extrabold sm:text-6xl sm:bg-transparent sm:shadow-none sm:backdrop-blur-none
            sm:px-28 sm:text-start sm:w-7/12
            `}
        />
        <Text
          color="primary"
          text={descrition}
          className={`flex bebas-font-light flex-wrap w-full px-8 py-4 backdrop-blur-md bg-black/20 z-10 text-white text-md sm:text-xl
            ${triggerAnimation ? "animate-fade-up animate-duration-[2000ms] animate-delay-[300ms]" : ""}
            sm:text-5xl sm:bg-transparent sm:backdrop-blur-none sm:w-7/12
            sm:px-28 sm:text-start
            `}
        />
      </div>
    );
  };
  
  export { CarouselItem };