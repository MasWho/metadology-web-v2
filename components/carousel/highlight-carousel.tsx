import React, { useEffect, useRef, useCallback } from 'react';
import DynamicReactPlayer from '../video/DynamicReactPlayer';
import CarouselElement from './carousel-element';
import useWindowDimensions, { carouselVideoSizeRatio } from '@/hooks/use-window-dimensions';
import { useAnimate } from 'framer-motion';
import { VIDEO_RATIO } from './constants';

type Props = {
  videos: { url: string, headingText?: string }[];
  currentVideoIndex: number;
  isPlaying: boolean;
  onVideoProgress: (index: number, progress: { played: number; loaded: number }) => void;
  onChangeVideo: (index: number) => void;
};

const HighlightCarousel = (props: Props) => {
  const { videos, currentVideoIndex, isPlaying, onVideoProgress, onChangeVideo } = props;
  const prevVideoIndexRef = useRef(currentVideoIndex);
  const offsetRef = useRef(0);
  const { width } = useWindowDimensions();

  const [scope, animate] = useAnimate();

  const slide = useCallback(async (offset: number) => {
    await animate(`li`, { x: `${offset}vw` }, { duration: 0.5 });
  }, [animate]);

  useEffect(() => {
    if (currentVideoIndex === 0 && prevVideoIndexRef.current === 0) {
      return;
    }

    const {sliderOffset} = carouselVideoSizeRatio(width!);

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
  }, [currentVideoIndex, width, slide]);

  const videoPlayers = videos.map((video, idx) => {
    let playing = false;
    if (idx === currentVideoIndex) {
      playing = isPlaying;
    }

    const {videoRatio} = carouselVideoSizeRatio(width!);
    return (
      <CarouselElement index={idx} focusedIndex={currentVideoIndex} key={`highlight-video-${idx}-${video.url}`} onClick={onChangeVideo.bind(null, idx)}>
        <DynamicReactPlayer
          controls
          url={video.url}
          playing={playing}
          onProgress={onVideoProgress.bind(null, idx)}
          volume={1}
          muted={true}
          width={`${width! * videoRatio}px`}
          height={`${(width! * videoRatio) / VIDEO_RATIO}px`}
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
