import { VideoPlayerProps } from 'models';
import YouTube from 'react-youtube';

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId }) => {
  const opts = {
    height: '450',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event: any) => {
    event.target.playVideo();
  };

  return <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
};

export default VideoPlayer;
