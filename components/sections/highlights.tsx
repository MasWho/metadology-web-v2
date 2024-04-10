import React, { useEffect, useRef, useState } from 'react';
import SectionLayout from '../layout/section-layout';
import SectionHeading from '../headings/section-heading';
import VideoSlider from '../sliders/video-slider';
import HighlightCarousel from '../carousel/highlight-carousel';
import useWindowDimensions, { carouselVideoSizeRatio } from '@/hooks/use-window-dimensions';
import { useInView } from 'framer-motion';

const videos = [
  { url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/highlights-video-1.mp4', headingText: "Explore the development online" },
  { url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/highlights-video-2.mp4', headingText: "Highlight key areas and amenities" },
  { url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/highlights-video-3.mp4', headingText: "Sell the surrounding area's attractions" },
  { url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/highlights-video-4.mp4', headingText: "Sales made easy" },
];

const initialiseVideoProgressLookup = () => {
  const progressLookup: any = {};
  videos.forEach((_, idx) => {
    progressLookup[idx] = 0;
  });
  return progressLookup;
};

const Highlights = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [videoProgress, setVideoProgress] = useState(initialiseVideoProgressLookup);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const {width} = useWindowDimensions();
  const carouselRef = useRef(null);
  const isCarouselInView = useInView(carouselRef, {amount: 0.7});

  useEffect(() => {
    if(isCarouselInView) {
      setIsPlaying(true)
    } else {
      setIsPlaying(false)
    }
  }, [isCarouselInView])

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
    if(played >= 1) {
      setCurrentVideoIndex(prev => {
        if(prev !== videos.length - 1) {
          return prev + 1;
        }
        return prev;
      });
      setIsPlaying(true);
    }

    setVideoProgress((prev: any) => {
      return {
        ...prev,
        [index]: completedNormalised,
      };
    });
  };

  const {carouselOffset, carouselElementMargin} = carouselVideoSizeRatio(width!);

  const carouselStyle = {
    left: carouselOffset
  }

  return (
    <SectionLayout sectionName={'highlights'} bgColor="bg-c-secondary" noPadding>
      <div className="py-14" ref={carouselRef}>
        <div className="flex flex-col gap-6 relative" style={carouselStyle}>
          <div style={{margin: `0 ${carouselElementMargin}`}}>
            <SectionHeading text="Get the highlights" />
          </div>
          <HighlightCarousel
            videos={videos}
            currentVideoIndex={currentVideoIndex}
            isPlaying={isPlaying}
            onVideoProgress={videoProgressHandler}
            onChangeVideo={changeVideoHandler}
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
