interface CarouselProps {
  dataItems: Array<CarouselItemProps>;
  autoplay?: boolean;
  autoplayDelay?: number;
  className?: string;
  transitionDuration?: number; // Duração da transição (em milissegundos)
}

interface CarouselItemProps {
  id: number;
  title: string;
  descrition: string;
  url: string;
  activeIndexSlide?: number;
  className?: string;
  style?: React.CSSProperties; 
}

export type {CarouselProps, CarouselItemProps};

