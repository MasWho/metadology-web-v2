import React, { useEffect, useRef } from 'react';
import DynamicReactPlayer from '../video/DynamicReactPlayer';
import CarouselElement from './carousel-element';
import useWindowDimensions, { screenToVideoSizeRatio } from '@/hooks/use-window-dimensions';
import { useAnimate } from 'framer-motion';

type Props = {
  videos: { url: string }[];
  currentVideoIndex: number;
  isPlaying: boolean;
  onVideoProgress: (index: number, progress: { played: number; loaded: number }) => void;
};

const VIDEO_RATIO = 16 / 9; // width / height

const HighlightCarousel = (props: Props) => {
  const { videos, currentVideoIndex, isPlaying, onVideoProgress } = props;
  const prevVideoIndexRef = useRef(currentVideoIndex);
  const offsetRef = useRef(0);
  const { width } = useWindowDimensions();

  const [scope, animate] = useAnimate();

  const slide = async (offset: number) => {
    await animate(`li`, { x: `${offset}vw` }, { duration: 0.5 });
  };

  useEffect(() => {
    if (currentVideoIndex === 0 && prevVideoIndexRef.current === 0) {
      return;
    }

    const {sliderOffset} = screenToVideoSizeRatio(width!);

    if (currentVideoIndex > prevVideoIndexRef.current) {
      const interval = currentVideoIndex - prevVideoIndexRef.current;
      offsetRef.current -= interval * sliderOffset;
    }

    if (currentVideoIndex < prevVideoIndexRef.current) {
      const interval = prevVideoIndexRef.current - currentVideoIndex;
      offsetRef.current += interval * sliderOffset;
    }

    slide(offsetRef.current);
    prevVideoIndexRef.current = currentVideoIndex;
  }, [currentVideoIndex]);

  const videoPlayers = videos.map((video, idx) => {
    let playing = false;
    if (idx === currentVideoIndex) {
      playing = isPlaying;
    }

    const {videoRatio} = screenToVideoSizeRatio(width!);
    return (
      <CarouselElement index={idx} focusedIndex={currentVideoIndex}>
        <DynamicReactPlayer
          controls
          url={video.url}
          playing={playing}
          onProgress={onVideoProgress.bind(null, idx)}
          key={`highlight-video-${idx}-${video.url}`}
          volume={1}
          muted={true}
          width={`${width! * videoRatio}px`}
          height={`${(width! * videoRatio) / VIDEO_RATIO}px`}
          style={{
            borderRadius: '15px',
          }}
        />
      </CarouselElement>
    );
  });
  return (
    <ul ref={scope} className={`flex items-center`}>
      {videoPlayers}
    </ul>
  );
};

export default HighlightCarousel;
