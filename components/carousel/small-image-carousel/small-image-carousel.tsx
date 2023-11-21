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

const CarouselItem = (props: {
  item: { url: string; text: string };
  itemIndex: number;
  getCarouselRef?: () => MutableRefObject<any>;
  setCurrentFocusedItemIndex: Function;
  currentFocusedItemIndex: number;
  carouselRef: any;
}) => {
  const { item, itemIndex, setCurrentFocusedItemIndex, currentFocusedItemIndex, carouselRef } =
    props;
  //   const prevIndexRef = useRef(currentFocusedItemIndex);
  const itemRef = useRef<any>(null);
  //   const { width } = useWindowDimensions();
  //   const offset = width! * 0.5 + pictureSize(width!) / 2; // Halft of image width
  //   const negOffset = width! * 0.5 - pictureSize(width!) / 2;
  //   const { scrollXProgress } = useScroll({
  //     container: carouselRef,
  //     target: itemRef,
  //     axis: 'x',
  //     offset: [`start ${offset}px`, `end ${offset}px`, `start ${negOffset}px`, `end ${negOffset}px`],
  //     layoutEffect: false,
  //   });
  //   const opacity = useTransform(scrollXProgress, [0, 0.35, 0.75, 1], [0.3, 1, 1, 0.3]);
  //   const pictureWidth = pictureSize(width!);
  //   const pictureHeight = pictureWidth / 1.3;
  //   const height = useTransform(
  //     scrollXProgress,
  //     [0, 0.35, 0.75, 1],
  //     [0.8 * pictureHeight, pictureHeight, pictureHeight, pictureHeight]
  //   );

  //   useEffect(() => {
  //     if (currentFocusedItemIndex !== prevIndexRef.current && currentFocusedItemIndex === itemIndex) {
  //       itemRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  //     }
  //     prevIndexRef.current = currentFocusedItemIndex;
  //   }, [currentFocusedItemIndex]);

  //   useMotionValueEvent(opacity, 'change', (latestOpacity) => {
  //     if (latestOpacity === 1) {
  //       setCurrentFocusedItemIndex(itemIndex);
  //       prevIndexRef.current = itemIndex;
  //     }
  //   });

  return (
    <li className="relative snap-center w-[250px] h-[250px]" ref={itemRef}>
      <Image
        src={item.url}
        alt={`carousel image with caption: ${item.text}`}
        fill
        sizes="600px, 600px"
        style={{
          objectFit: 'cover',
        }}
      />
    </li>
  );
};

type SmallImageCarouselProps = PropsWithChildren & {
  images: { url: string; text: string; title: string }[];
};
const SmallImageCarousel = (props: SmallImageCarouselProps) => {
  const { images } = props;
  const [currentFocusedItemIndex, setCurrentFocusedItemIndex] = useState(0);
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
    carouselRef.current.scrollLeft = width!;
  }, [carouselRef]);

  return (
    <div className="relative w-[100vw] left-[calc(-50vw+50%)] overflow-x-scroll no-scrollbar snap-mandatory snap-x" ref={carouselRef}>
      <ul className="flex justify-center w-[300vw] gap-[10px]">{itemList}</ul>
    </div>
  );
};

export default SmallImageCarousel;
