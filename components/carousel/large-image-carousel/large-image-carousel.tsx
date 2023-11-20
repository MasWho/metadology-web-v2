import Image from 'next/image';
import React, {
  Dispatch,
  MutableRefObject,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import useWindowDimensions from '@/hooks/use-window-dimensions';
import { DESKTOP_SCREEN_SIZE, TABLET_SCREEN_SIZE } from '../constants';
import ChevronArrow from '@/components/arrows/chevron-arrow';

const pictureSize = (width: number) => {
  if (width < TABLET_SCREEN_SIZE) {
    return 250;
  }
  
  if (width < DESKTOP_SCREEN_SIZE) {
    return 400;
  }

  return 600;
};

const CarouselItemText = (props: { items: { text: string }[] }) => {
  const { items } = props;
  const { currentFocusedItemIndex } = useCarouselContext();
  const itemTexts = items.map((item, idx) => {
    const itemOpacity = idx === currentFocusedItemIndex ? 1 : 0;
    return (
      <motion.p
        key={`carousel-item-text-${idx}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: itemOpacity }}
        transition={{ duration: 0.5 }}
        className="absolute text-[14px] tablet:text-[16px]"
      >
        {item.text}
      </motion.p>
    );
  });
  return (
    <article className="relative text-c-section-heading mb-[10px] w-[90vw] mx-auto lg-phone:mx-0 lg-phone:w-[300px] lg-phone:left-[calc(50vw-125px)] h-[100px] tablet:mb-[20px] tablet:w-[300px] tablet:h-[100px] tablet:left-[calc(50vw-200px)] desktop:left-[calc(50vw-305px)]">
      {itemTexts}
    </article>
  );
};

const CarouselItemCaption = (props: { items: { caption: string }[] }) => {
  const { items } = props;
  const { currentFocusedItemIndex } = useCarouselContext();
  const itemCaptions = items.map((item, idx) => {
    const itemOpacity = idx === currentFocusedItemIndex ? 1 : 0;
    return (
      <motion.p
        key={`carousel-item-caption-${idx}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: itemOpacity }}
        transition={{ duration: 0.5 }}
        className="absolute text-[16px]"
      >
        {item.caption}
      </motion.p>
    );
  });
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 1.7}} className='absolute w-[100vw] mt-[20px]'>
      <article className="relative text-c-section-heading h-[24px] mx-auto flex justify-center">
        {itemCaptions}
      </article>
    </motion.div>
  );
};

const CarouselNav = (props: { items: { caption: string }[] }) => {
  const { items } = props;
  const { currentFocusedItemIndex, setCurrentFocusedItemIndex } = useCarouselContext();
  const isFirstImage = currentFocusedItemIndex === 0;
  const isLastImage = currentFocusedItemIndex === items.length - 1;

  const changeImageHandler = (type: 'inc' | 'dec') => {
    setCurrentFocusedItemIndex((prev: number) => {
      let nextIndex = prev;
      if (type === 'inc') {
        nextIndex++;
        return Math.min(nextIndex, items.length - 1);
      } else {
        nextIndex--;
        return Math.max(0, nextIndex);
      }
    });
  };

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1, delay: 1.7}} className="relative w-[100vw] mt-[55px] desktop:left-[72vw] tablet:left-[75vw] tablet:mt-[15px] flex justify-center gap-10 tablet:gap-3 tablet:w-[10%]">
      <ChevronArrow
        direction="left"
        size="30px"
        inactive={isFirstImage}
        onClick={changeImageHandler.bind(null, 'dec')}
      />
      <ChevronArrow
        direction="right"
        size="30px"
        inactive={isLastImage}
        onClick={changeImageHandler.bind(null, 'inc')}
      />
    </motion.div>
  );
};

const CarouselItem = (props: {
  item: { url: string; text: string };
  itemIndex: number;
  getCarouselRef?: () => MutableRefObject<any>;
}) => {
  const { item, itemIndex } = props;
  const { setCurrentFocusedItemIndex, currentFocusedItemIndex } = useCarouselContext();
  const prevIndexRef = useRef(currentFocusedItemIndex);
  const itemRef = useRef<any>(null);
  const { width } = useWindowDimensions();
  const offset = width! * 0.5 + pictureSize(width!) / 2; // Halft of image width
  const negOffset = width! * 0.5 - pictureSize(width!) / 2;
  const { carouselRef } = useCarouselContext();
  const { scrollXProgress } = useScroll({
    container: carouselRef,
    target: itemRef,
    axis: 'x',
    offset: [`start ${offset}px`, `end ${offset}px`, `start ${negOffset}px`, `end ${negOffset}px`],
    layoutEffect: false,
  });
  const opacity = useTransform(scrollXProgress, [0, 0.35, 0.75, 1], [0.3, 1, 1, 0.3]);
  const pictureWidth = pictureSize(width!);
  const pictureHeight = pictureWidth / 1.3;
  const height = useTransform(
    scrollXProgress,
    [0, 0.35, 0.75, 1],
    [0.8 * pictureHeight, pictureHeight, pictureHeight, pictureHeight]
  );

  useEffect(() => {
    if (currentFocusedItemIndex !== prevIndexRef.current && currentFocusedItemIndex === itemIndex) {
      itemRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
    prevIndexRef.current = currentFocusedItemIndex;
  }, [currentFocusedItemIndex]);

  useMotionValueEvent(opacity, 'change', (latestOpacity) => {
    if (latestOpacity === 1) {
      setCurrentFocusedItemIndex(itemIndex);
      prevIndexRef.current = itemIndex;
    }
  });

  return (
    <li
      className="flex items-center snap-center w-[250px] h-[300px] tablet:w-[400px] tablet:h-[308px] desktop:w-[600px] desktop:h-[460px]"
      ref={itemRef}
      style={{
        zIndex: 100 - itemIndex
      }}
    >
      <motion.div
        initial={{
          left: `-${itemIndex * pictureWidth}px`,
          opacity: itemIndex === 0 ? 1 : 0,
          scaleX: itemIndex === 0 ? 0.7 : 0.3,
          scaleY: 0.7,
        }}
        whileInView={{
          left: '0px',
          opacity: itemIndex === 0 ? 1 : 0.3,
          scaleX: 1,
          scaleY: 1,
        }}
        viewport={{
          once: true,
          amount: 0.8
        }}
        transition={{
          duration: 0.7,
          delay: itemIndex === 0 ? 0 : 1
        }}
        style={{ opacity, height: width! >= TABLET_SCREEN_SIZE ? height : undefined }}
        className="relative origin-center w-[100%] h-[100%]"
      >
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
  const { carouselRef } = useCarouselContext();

  const itemList = images.map((item, idx) => {
    return <CarouselItem key={`explore-four-carousel-item-${idx}`} item={item} itemIndex={idx} />;
  });

  return (
    // Scroll container
    <div
      id="large-image-carousel"
      className="overflow-scroll no-scrollbar snap-mandatory snap-x"
      ref={carouselRef}
    >
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
    carouselRef,
  };
  return (
    <carouselContext.Provider value={ctxValue}>
      <section className='pb-14'>{children}</section>
    </carouselContext.Provider>
  );
};

const useCarouselContext = () => useContext(carouselContext);
LargeImageCarousel.CarouselItemText = CarouselItemText;
LargeImageCarousel.CarouselItemCaption = CarouselItemCaption;
LargeImageCarousel.CarouselNav = CarouselNav;
LargeImageCarousel.CarouselItems = CarouselItems;

export default LargeImageCarousel;
