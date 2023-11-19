import Image from 'next/image';
import React, { DOMElement, Dispatch, MutableRefObject, PropsWithChildren, SetStateAction, createContext, useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import useWindowDimensions from '@/hooks/use-window-dimensions';
import { DESKTOP_SCREEN_SIZE, TABLET_SCREEN_SIZE } from '../constants';

const pictureSize = (width: number) => {
  if(width < DESKTOP_SCREEN_SIZE) {
    return 400;
  }

  if(width < TABLET_SCREEN_SIZE) {
    return 250;
  }

  return 600;
}

const CarouselItemText = (props: { text: string }) => {};

const CarouselItemCaption = (props: { text: string }) => {};

const CarouselNav = () => {};

const CarouselItem = (props: { item: { url: string; text: string }; itemIndex: number; getCarouselRef?: () => MutableRefObject<any> }) => {
  const { item, itemIndex } = props;
  const itemRef = useRef<any>(null);
  const {width} = useWindowDimensions();
  const offset = width! * 0.5 + pictureSize(width!) / 2 // Halft of image width
  const negOffset = width! * 0.5 - pictureSize(width!) / 2;
  const {carouselRef} = useCarouselContext();
  const {scrollXProgress} = useScroll({
    container: carouselRef,
    target: itemRef,
    axis: 'x',
    offset: [`start ${offset}px`, `end ${offset}px`, `start ${negOffset}px`, `end ${negOffset}px`],
    layoutEffect: false
  });
  const opacity = useTransform(scrollXProgress, [0, 0.35, 0.75, 1], [0.3, 1, 1, 0.3]);
  const pictureWidth = pictureSize(width!);
  const pictureHeight = pictureWidth / 1.3;
  const height = useTransform(scrollXProgress, [0, 0.35, 0.75, 1], [0.8 * pictureHeight, pictureHeight, pictureHeight, pictureHeight]);

  return (
    <li className="flex items-center snap-center w-[250px] h-[300px] tablet:w-[400px] tablet:h-[308px] desktop:w-[600px] desktop:h-[460px]" ref={itemRef} >
      <motion.div style={{opacity, height: width! >= TABLET_SCREEN_SIZE ? height : undefined }} className="relative origin-left w-[100%] h-[100%]">
        <Image
          src={item.url}
          alt={`carousel image with caption: ${item.text}`}
          fill
          sizes="600, 460px"
          style={{
            objectFit: 'cover',
          }}
        />
      </motion.div>
    </li>
  );
};

type CarouselItemsProps = {
  images: { url: string; text: string }[];
};
const CarouselItems = (props: CarouselItemsProps) => {
  const { images } = props;
  const {carouselRef} = useCarouselContext();

  const itemList = images.map((item, idx) => {
    return (
      <CarouselItem
        key={`explore-four-carousel-item-${idx}`}
        item={item}
        itemIndex={idx}
      />
    );
  });

  return (
    // Scroll container
    <div id="large-image-carousel" className="overflow-scroll no-scrollbar snap-mandatory snap-x" ref={carouselRef}>
      <ul className="relative flex w-fit gap-[10px] pl-[calc(50%-125px)] pr-[calc(50%-125px)] tablet:gap-[20px] tablet:pl-[calc(50%-200px)] tablet:pr-[calc(50%-200px)] desktop:pl-[calc(50%-300px)] desktop:pr-[calc(50%-300px)]">
        {itemList}
      </ul>
    </div>
  );
};

type LargeImageCarouselProps = PropsWithChildren & {};
const carouselContext = createContext<{
  currentFocusedItemIndex: number;
  setCurrentFocusedItemIndex: Dispatch<SetStateAction<number>>;
  carouselRef: any;
}>({
  currentFocusedItemIndex: 0,
  setCurrentFocusedItemIndex: () => {},
  carouselRef: null,
});
const LargeImageCarousel = (props: LargeImageCarouselProps) => {
  const { children } = props;
  const [currentFocusedItemIndex, setCurrentFocusedItemIndex] = useState(0);
  const carouselRef = useRef(null);

  const ctxValue = {
    currentFocusedItemIndex,
    setCurrentFocusedItemIndex,
    carouselRef
  };
  return (
    <carouselContext.Provider value={ctxValue}>
      <section>{children}</section>
    </carouselContext.Provider>
  );
};

const useCarouselContext = () => useContext(carouselContext);
LargeImageCarousel.CarouselItemText = CarouselItemText;
LargeImageCarousel.CarouselItemCaption = CarouselItemCaption;
LargeImageCarousel.CarouselNav = CarouselNav;
LargeImageCarousel.CarouselItems = CarouselItems;

export default LargeImageCarousel;
