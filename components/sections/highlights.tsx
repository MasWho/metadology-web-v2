import React, { useState } from 'react';
import SectionLayout from '../layout/section-layout';
import SectionHeading from '../headings/section-heading';
import VideoSlider from '../sliders/video-slider';
import HighlightCarousel from '../carousel/highlight-carousel';
import useWindowDimensions, { screenToVideoSizeRatio } from '@/hooks/use-window-dimensions';

const videos = [
  { url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/test' },
  { url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/test' },
  { url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/test' },
  { url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/test' },
];

const initialiseVideoProgressLookup = () => {
  const progressLookup: any = {};
  videos.forEach((_, idx) => {
    progressLookup[idx] = 0;
  });
  return progressLookup;
};

const Highlights = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [videoProgress, setVideoProgress] = useState(initialiseVideoProgressLookup);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const {width} = useWindowDimensions();

  const playVideoHandler = () => {
    setIsPlaying((prev) => {
      return !prev;
    });
  };

  const changeVideoHandler = (index: number) => {
    setIsPlaying(true);
    setCurrentVideoIndex(index);
  };

  const videoProgressHandler = (index: number, progress: { played: number; loaded: number }) => {
    const { played } = progress;
    const completedNormalised = Math.floor(played * 100) + 1;
    setVideoProgress((prev: any) => {
      return {
        ...prev,
        [index]: completedNormalised,
      };
    });
  };

  const {carouselOffset, carouselElementMargin} = screenToVideoSizeRatio(width!);

  return (
    <SectionLayout sectionName={'highlights'} bgColor="bg-c-secondary" noPadding>
      <div className="py-14">
        <div className="flex flex-col gap-6 relative " style={{left: carouselOffset}}>
          <div style={{margin: `0 ${carouselElementMargin}`}}>
            <SectionHeading text="Get the highlights" />
          </div>
          <HighlightCarousel
            videos={videos}
            currentVideoIndex={currentVideoIndex}
            isPlaying={isPlaying}
            onVideoProgress={videoProgressHandler}
          />
        </div>
        <VideoSlider
          numVideos={videos.length}
          currentVideoIndex={currentVideoIndex}
          currentVideoProgress={videoProgress[currentVideoIndex]}
          isPlaying={isPlaying}
          onPlayOrPause={playVideoHandler}
          onChangeVideo={changeVideoHandler}
        />
      </div>
    </SectionLayout>
  );
};

export default Highlights;
