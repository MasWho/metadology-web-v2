import Image from 'next/image';
import React, { DOMElement, Dispatch, MutableRefObject, PropsWithChildren, SetStateAction, createContext, useCallback, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useScrollPosition } from '@/hooks/use-scroll-position';
import useWindowDimensions from '@/hooks/use-window-dimensions';

const isBrowser = typeof window !== `undefined`

function getScrollPosition(props: { element?: any, useWindow?: boolean }) {
  const {element, useWindow} = props;
    if (!isBrowser) return { x: 0, y: 0 }

  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top }
}

const CarouselItemText = (props: { text: string }) => {};

const CarouselItemCaption = (props: { text: string }) => {};

const CarouselNav = () => {};

const CarouselItem = (props: { item: { url: string; text: string }; itemIndex: number; getCarouselRef?: () => MutableRefObject<any> }) => {
  const { item, itemIndex, getCarouselRef } = props;
  const itemRef = useRef<any>(null);
  const {width} = useWindowDimensions();
  const offset = width! * 0.5 + 250 // Halft of image width
  const negOffset = width! * 0.5 - 250;
  const {carouselRef} = useCarouselContext();
  const [isFadeIn, setIsFadeIn] = useState(true);
  const {scrollXProgress} = useScroll({
    container: carouselRef,
    target: itemRef,
    axis: 'x',
    offset: [`start ${offset}px`, `end ${offset}px`]
  });
  const {scrollXProgress: x} = useScroll({
    container: carouselRef,
    target: itemRef,
    axis: 'x',
    offset: [`start ${negOffset}px`, `end ${negOffset}px`]
  });
  const opacity = useTransform(scrollXProgress, [0, 1], [0.3, 1]);
  const negOpacity = useTransform(x, [0, 1], [0.99, 1]);

  useMotionValueEvent(scrollXProgress, "animationStart", () => {
    setIsFadeIn(true);
  });

  useMotionValueEvent(x, "animationStart", () => {
    setIsFadeIn(false);
  });

  return (
    <motion.li style={{opacity: isFadeIn ? opacity : negOpacity}} className="snap-center" ref={itemRef} >
      <div className="relative tablet:w-[500px] tablet:h-[380px] desktop:w-[700px] desktop:h-[540px]">
        <Image
          src={item.url}
          alt={`carousel image with caption: ${item.text}`}
          fill
          sizes="700px, 540px"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
    </motion.li>
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
      <ul className="relative flex gap-3 w-fit tablet:pl-[calc(50%-250px)] tablet:pr-[calc(50%-250px)] desktop:pl-[calc(50%-350px)] desktop:pr-[calc(50%-350px)]">
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
