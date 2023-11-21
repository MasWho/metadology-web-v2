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
    return 200;
  }

  if (width < DESKTOP_SCREEN_SIZE) {
    return 250;
  }

  return 300;
};

const CarouselItem = (props: {
  item: { url: string; text: string; title: string };
  itemIndex: number;
  getCarouselRef?: () => MutableRefObject<any>;
  setCurrentFocusedItemIndex: Function;
  currentFocusedItemIndex: number;
  carouselRef: any;
}) => {
  const { item, itemIndex, setCurrentFocusedItemIndex, currentFocusedItemIndex, carouselRef } =
    props;
  const prevIndexRef = useRef(currentFocusedItemIndex);
  const itemRef = useRef<any>(null);
  const { width } = useWindowDimensions();
  const offset = width! * 0.5 + pictureSize(width!) / 2; // Halft of image width
  const negOffset = width! * 0.5 - pictureSize(width!) / 2;
  const { scrollXProgress } = useScroll({
    container: carouselRef,
    target: itemRef,
    axis: 'x',
    offset: [`start ${offset}px`, `end ${offset}px`, `start ${negOffset}px`, `end ${negOffset}px`],
    layoutEffect: false,
  });
  const opacity = useTransform(scrollXProgress, [0, 0.35, 0.75, 1], [0.2, 1, 1, 0.2]);
  const scale = useTransform(scrollXProgress, [0, 0.35, 0.75, 1], [0.85, 1, 1, 0.85]);

  useEffect(() => {
    if (currentFocusedItemIndex !== prevIndexRef.current && currentFocusedItemIndex === itemIndex) {
      itemRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
    prevIndexRef.current = currentFocusedItemIndex;
  }, [currentFocusedItemIndex]);

  useMotionValueEvent(opacity, 'change', (latestOpacity) => {
    if (latestOpacity >= 0.9) {
      setCurrentFocusedItemIndex(itemIndex);
      prevIndexRef.current = itemIndex;
    }
  });

  return (
    <li className="snap-center" ref={itemRef}>
      <motion.div
        style={{ opacity, scale }}
        className="relative flex flex-col gap-3 max-w-[200px] tablet:max-w-[250px] desktop:max-w-[300px]"
      >
        <div className="relative w-[200px] h-[200px] tablet:w-[250px] tablet:h-[250px] desktop:w-[300px] desktop:h-[300px]">
          <Image
            src={item.url}
            alt={`carousel image with caption: ${item.text}`}
            fill
            sizes="600px, 600px"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <h3 className="text-c-section-heading text-[18px] tablet:text-[20px]">{item.title}</h3>
        <article className="text-c-heading text-[14px] tablet:text-[16px]">{item.text}</article>
      </motion.div>
    </li>
  );
};

type SmallImageCarouselProps = PropsWithChildren & {
  images: { url: string; text: string; title: string }[];
  setCurrentFocusedItemIndex: any;
  currentFocusedItemIndex: number;
};
const SmallImageCarousel = (props: SmallImageCarouselProps) => {
  const { images, currentFocusedItemIndex, setCurrentFocusedItemIndex } = props;
  // const [currentFocusedItemIndex, setCurrentFocusedItemIndex] = useState(0);
  const carouselRef = useRef<any>(null);
  const { width } = useWindowDimensions();

  const itemList = images.map((item, idx) => {
    return (
      <CarouselItem
        key={`small-img-carousel-item-${idx}`}
        item={item}
        itemIndex={idx}
        currentFocusedItemIndex={currentFocusedItemIndex}
        setCurrentFocusedItemIndex={setCurrentFocusedItemIndex}
        carouselRef={carouselRef}
      />
    );
  });

  // Pull scroll container to middle position
  useEffect(() => {
    const middleIndex = Math.floor(images.length / 2);
    const containerWidth = width! < TABLET_SCREEN_SIZE ? 5 * width! : 2 * width!;
    const pictureWidth = pictureSize(width!);
    const edgeOffset = containerWidth - images.length * pictureWidth;
    const scrollPix = edgeOffset / 2 + middleIndex * pictureWidth;
    console.log(scrollPix);
    carouselRef.current.scrollLeft = scrollPix;
  }, [carouselRef]);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
        amount: 0.8,
      }}
      transition={{
        delay: 0.5,
        duration: 1,
      }}
      className="relative w-[100vw] left-[calc(-50vw+50%)] overflow-x-scroll no-scrollbar snap-mandatory snap-x"
      ref={carouselRef}
    >
      <ul className="flex justify-center gap-[10px] w-[500vw] tablet:w-[300vw] tablet:gap-[10px]">
        {itemList}
      </ul>
    </motion.div>
  );
};

export default SmallImageCarousel;
