import Image from 'next/image';
import React, { forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react';
import iphone_border from '../../public/imgs/iphone_border.svg';
import DynamicReactPlayer from './DynamicReactPlayer';
import useWindowDimensions, { screenToVideoSizeRatio } from '@/hooks/use-window-dimensions';
import { VIDEO_RATIO } from '../carousel/constants';
import ReactPlayer from 'react-player';

type Props = {
  videoUrl: string;
  play: boolean;
};

const VideoWithPhone = forwardRef<ReactPlayer, Props>(function VideoWithPhone(props: Props, ref) {
  const {videoUrl, play} = props;
  const {width} = useWindowDimensions();
  const {videoRatio} = screenToVideoSizeRatio(width!);

  let videoWith = width! * videoRatio;
  if(videoWith > 800) {
    videoWith = 800;
  }

  return (
    <div className='relative z-10 max-w-[800px] mx-auto mt-[30px] tablet:mt-[40px]' id="iphone">
      <Image src={iphone_border} alt="SVG for iphone to display videos" />
      <div className='absolute top-[2%] left-0 z-[-5] h-[95%] w-[99.5%] overflow-clip rounded-[30px] 
        lg-phone:w-[97%] lg-phone:left-[1%]
        laptop:w-[96.5%] laptop:left-[1.5%] laptop:rounded-[35px]
        desktop:rounded-[60px] max-w-[800px]
      '>
        <DynamicReactPlayer
          playerRef={ref}
          url={videoUrl}
          playing={play}
          volume={1}
          muted={true}
          width={`${videoWith}px`}
          height={`${videoWith / VIDEO_RATIO}px`}
        />
      </div>
    </div>
  );
});

export default VideoWithPhone;
