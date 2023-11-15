import useWindowDimensions, { screenToVideoSizeRatio } from '@/hooks/use-window-dimensions';
import React, { PropsWithChildren, useEffect } from 'react';

type Props = PropsWithChildren & {
  index: number;
  focusedIndex: number;
};

const CarouselElement = (props: Props) => {
  const { children, index, focusedIndex } = props;
  const { width } = useWindowDimensions();

  const castOverlay = index !== focusedIndex;
  const {videoRatio, carouselElementMargin} = screenToVideoSizeRatio(width!);
  return (
    <>
      <li id={`highlight-video-${index}`} className={`relative`} style={{width: `${videoRatio * 100}vw`, margin: `0 ${carouselElementMargin}`}}>
        {children}
      {/* Overlay */}
      {castOverlay ? <div className='absolute w-[100%] h-[100%] top-0 opacity-75 bg-c-secondary'></div> : null}
      </li>
    </>
  );
};

export default CarouselElement;
