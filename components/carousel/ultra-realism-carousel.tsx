import React, { useEffect, useRef } from 'react';
import DynamicReactPlayer from '../video/DynamicReactPlayer';
import CarouselElement from './carousel-element';
import useWindowDimensions, { carouselVideoSizeRatio } from '@/hooks/use-window-dimensions';
import { useAnimate } from 'framer-motion';
import { VIDEO_RATIO } from './constants';
import ChevronArrow from '../arrows/chevron-arrow';
import { motion } from 'framer-motion';

type Props = {
  videos: { url: string; headingText?: string; text: string }[];
  currentVideoIndex: number;
  isPlaying: boolean;
  onVideoProgress: (index: number, progress: { played: number; loaded: number }) => void;
  onChangeVideo: (index: number) => void;
};

const UltraRealismCarousel = (props: Props) => {
  const { videos, currentVideoIndex, isPlaying, onVideoProgress, onChangeVideo } = props;
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

    const { sliderOffset } = carouselVideoSizeRatio(width!);

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

    const { videoRatio } = carouselVideoSizeRatio(width!);
    return (
      <CarouselElement
        index={idx}
        focusedIndex={currentVideoIndex}
        videoHeadingText={video.headingText!}
        key={`highlight-video-${idx}-${video.url}`}
      >
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

  const isFirstVideo = currentVideoIndex === 0;
  const isLastVideo = currentVideoIndex === videos.length - 1;
  const allVideoTexts = videos.map((video, idx) => {
    return (
      <motion.p
        key={`realism-video-text-${idx}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: currentVideoIndex === idx ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0"
      >
        {video.text}
      </motion.p>
    );
  });

  return (
    <>
      <ul ref={scope} className={`flex items-center`}>
        {videoPlayers}
      </ul>
      <div className="relative flex flex-col-reverse w-[90vw] left-[2.5vw] tablet:flex-row justify-between tablet:w-[50vw] tablet:left-[5vw]">
        <div className="relative text-c-section-heading w-[100%] h-[10vh] px-[10px] mt-[20px] tablet:mt-0 tablet:px-0 tablet:w-[70%] desktop:w-[50%]">
          {allVideoTexts}
        </div>
        <div className="flex justify-center gap-10 tablet:gap-3 tablet:justify-end tablet:w-[30%] desktop:w-[50%]">
          <ChevronArrow
            direction="left"
            size="30px"
            inactive={isFirstVideo}
            onClick={onChangeVideo.bind(null, currentVideoIndex - 1)}
          />
          <ChevronArrow
            direction="right"
            size="30px"
            inactive={isLastVideo}
            onClick={onChangeVideo.bind(null, currentVideoIndex + 1)}
          />
        </div>
      </div>
    </>
  );
};

export default UltraRealismCarousel;
