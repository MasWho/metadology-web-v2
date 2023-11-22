import useWindowDimensions, { carouselVideoSizeRatio } from '@/hooks/use-window-dimensions';
import React, { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

type Props = PropsWithChildren & {
  index: number;
  focusedIndex: number;
  videoHeadingText: string;
};

const CarouselElement = (props: Props) => {
  const { children, index, focusedIndex, videoHeadingText } = props;
  const { width } = useWindowDimensions();

  const castOverlay = index !== focusedIndex;
  const { videoRatio, carouselElementMargin } = carouselVideoSizeRatio(width!);
  return (
    <>
      <li
        id={`highlight-video-${index}`}
        className={`relative`}
        style={{ width: `${videoRatio * 100}vw`, margin: `0 ${carouselElementMargin}` }}
      >
        {children}
        {/* Overlay */}
        {castOverlay ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: castOverlay ? 0.75 : 0 }}
            transition={{ duration: 1 }}
            className="absolute w-[100%] h-[100%] top-0 bg-c-secondary"
          />
        ) : null}
        {!!videoHeadingText ? (
          <h1 className="text-c-heading absolute top-[3%] left-[3%] text-[14px] tablet:text-[16px] laptop:text-[20px]">{`${
            index + 1
          }. ${videoHeadingText}`}</h1>
        ) : null}
      </li>
    </>
  );
};

export default CarouselElement;
