import ReactPlayer, { ReactPlayerProps } from 'react-player/lazy';

function VideoPlayer(props: ReactPlayerProps & { playerRef?: any }) {
  return <ReactPlayer ref={props.playerRef} {...props} />;
}

export default VideoPlayer;