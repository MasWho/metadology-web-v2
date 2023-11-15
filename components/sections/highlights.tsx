import React, { useState } from 'react';
import SectionLayout from '../layout/section-layout';
import GreenButton from '../buttons/green-button';
import ProgressBar from '../progress/SimpleProgress';
import DynamicReactPlayer from '../video/DynamicReactPlayer';

const Highlights = () => {
  const [play, setPlay] = useState<boolean>(false);
  const [progress, setProgress] = useState(0);

  const playVideoHandler = () => {
    setPlay((prev) => {
      return !prev;
    })
  };

  const videoProgressHandler = (progress: {played: number, loaded: number}) => {
    const {played} = progress;
    setProgress(played);
  };

  return (
    <SectionLayout sectionName={'highlights'}>
      <div className="flex-col rounded-md w-full h-[80vh] bg-c-subtext flex justify-center items-center" suppressHydrationWarning>
        <DynamicReactPlayer url="https://d1r0ovlr0podg3.cloudfront.net/videos/test" controls playing={play} onProgress={videoProgressHandler} />
        <GreenButton text={play ? 'Pause' : 'Play'} onClick={playVideoHandler}/>
        <ProgressBar  bgcolor={"#6a1b9a"} completed={progress}/>
      </div>
    </SectionLayout>
  );
};

export default Highlights;
