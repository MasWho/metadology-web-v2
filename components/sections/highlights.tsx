import React, { useState } from 'react';
import SectionLayout from '../layout/section-layout';
import GreenButton from '../buttons/green-button';
import ProgressBar from '../progress/SimpleProgress';
import DynamicReactPlayer from '../video/DynamicReactPlayer';
import SectionHeading from '../headings/section-heading';
import VideoSlider from '../sliders/video-slider';

const videos = [
  { url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/test' },
  { url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/test' },
  { url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/test' },
  { url: 'https://d1r0ovlr0podg3.cloudfront.net/videos/test' },
];

const initialiseVideoProgressLookup = () => {
  const progressLookup: any = {};
  videos.forEach((video, idx) => {
    progressLookup[idx] = 0
  });
  return progressLookup;
};

const Highlights = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [videoProgress, setVideoProgress] = useState(initialiseVideoProgressLookup);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

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
    const completedNormalised = Math.floor(played * 100) + 1
    setVideoProgress((prev: any) => {
      return {
        ...prev,
        [index]: completedNormalised,
      }
    });
  };

  const videoPlayers = videos.map((video, idx) => {
    let playing = false;
    if(idx === currentVideoIndex) {
      playing = isPlaying;
    }
    return <DynamicReactPlayer 
      url={video.url}
      playing={playing}
      onProgress={videoProgressHandler.bind(null, idx)}
      key={`highlight-video-${idx}-${video.url}`}
      volume={1}
      muted={true}
    />
  });

  return (
    <SectionLayout sectionName={'highlights'} bgColor="bg-c-secondary">
      <SectionHeading text="Get the highlights" />
      {videoPlayers}
      <VideoSlider
        numVideos={videos.length}
        currentVideoIndex={currentVideoIndex}
        currentVideoProgress={videoProgress[currentVideoIndex]}
        isPlaying={isPlaying}
        onPlayOrPause={playVideoHandler}
        onChangeVideo={changeVideoHandler}
      />
    </SectionLayout>
  );
};

export default Highlights;
