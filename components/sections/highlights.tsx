// TODO: refine main section

import React, { useEffect, useState } from 'react';
import SectionLayout from '../layout/section-layout';
import ReactPlayer from 'react-player';
import GreenButton from '../buttons/green-button';

const Highlights = () => {
  const [play, setPlay] = useState<boolean>(false);

  const playVideoHandler = () => {
    setPlay((prev) => {
      return !prev;
    })
  }

  return (
    <SectionLayout sectionName={'highlights'}>
      <div className="rounded-md w-full h-[80vh] bg-c-subtext flex justify-center items-center">
        <ReactPlayer url="https://d1r0ovlr0podg3.cloudfront.net/videos/test" controls playing={play} />
        <GreenButton text={play ? 'Pause' : 'Play'} onClick={playVideoHandler}/>
      </div>
    </SectionLayout>
  );
};

export default Highlights;
