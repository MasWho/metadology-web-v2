import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const PlayPauseButton = (props: { isPlaying: boolean; onPlayOrPause: VoidFunction }) => {
  const { isPlaying, onPlayOrPause } = props;
  return (
    <div
      className="text-[24px] h-[100%] min-w-[18px] flex flex-col justify-center hover:cursor-pointer"
      onClick={onPlayOrPause}
    >
      <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} color="#1D1D1F" />
    </div>
  );
};

const SliderCircle = (props: { progress?: number; index: string; onClick: VoidFunction }) => {
  const { progress, index, onClick } = props;
  return (
    <div className="relative w-[30px] h-[30px] hover:cursor-pointer" onClick={onClick}>
      {progress ? <CircleProgress value={progress} /> : null}
      <SliderCircleIndex text={index} focused={!!progress} />
    </div>
  );
};

const CircleProgress = (props: { value: number }) => {
  const { value } = props;
  return (
    <div className="absolute w-[30px] h-[30px]">
      <CircularProgressbar
        value={value}
        styles={buildStyles({
          pathColor: 'black',
          trailColor: 'grey',
          pathTransitionDuration: 0.1,
        })}
      />
    </div>
  );
};

const SliderCircleIndex = (props: { text: string; focused: boolean }) => {
  const { text, focused } = props;
  return (
    <div
      className={`top-[4px] left-[4px] absolute rounded-[50%] w-[22px] leading-[22px] text-[12px] bg-[#1d1d1f] ${
        focused ? '' : 'opacity-60'
      } text-center text-[#e8e8ed]`}
    >
      {text}
    </div>
  );
};

type Props = {
  isPlaying: boolean;
  numVideos: number;
  currentVideoIndex: number;
  currentVideoProgress: number;
  onPlayOrPause: () => void;
  onChangeVideo: (index: number) => void;
};

const VideoSlider = (props: Props) => {
  const {
    isPlaying,
    numVideos,
    currentVideoIndex,
    currentVideoProgress,
    onPlayOrPause,
    onChangeVideo,
  } = props;

  const allProgressCircles = [];
  for (let i = 0; i < numVideos; i++) {
    const index = String(i + 1);
    const onClickCircle = onChangeVideo.bind(null, i);
    if (i === currentVideoIndex) {
      allProgressCircles.push(
        <SliderCircle
          key={`video-circle-${i}`}
          progress={currentVideoProgress}
          index={index}
          onClick={onClickCircle}
        />
      );
      continue;
    }

    allProgressCircles.push(
      <SliderCircle key={`video-circle-${i}`} index={index} onClick={onClickCircle} />
    );
  }

  return (
    <aside className="bg-[#E8E8ED] opacity-70 rounded-full flex items-center px-6 py-2 mb-10 justify-between max-w-[280px] mx-auto">
      <PlayPauseButton isPlaying={isPlaying} onPlayOrPause={onPlayOrPause} />
      {allProgressCircles}
    </aside>
  );
};

export default VideoSlider;
