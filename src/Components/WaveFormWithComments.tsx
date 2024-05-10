import React, { useCallback, useState } from 'react';
import WaveformPlayer from './WaveForm'; // Import your WaveformPlayer component
import audioFile from './audioDemo.mp3'; // Adjust the path according to your project structure
import { Button } from './Base';
import { RxPlay } from "react-icons/rx";
import { RxPause } from "react-icons/rx";

interface WaveFormWithCommentsCommentsProps {
  // url: string; // URL of the audio file
  comments: { time: number; text: string }[];
}

const WaveFormWithComments: React.FC<WaveFormWithCommentsCommentsProps> = ({
  // url,
  comments,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = useCallback(
    () => {
      setIsPlaying(!isPlaying);
    },
    [setIsPlaying, isPlaying],
  )
  

  return (
    <div className="flex items-center space-x-4">
      <Button
        variant='primary'
        className="border-0"
        onPress={togglePlayPause}
      >
        {isPlaying ? <RxPause /> : <RxPlay/>}
      </Button>
      <div className="flex-1 cursor-pointer">
        <WaveformPlayer url={audioFile} comments={comments} isPlaying={isPlaying} />
      </div>
    </div>
  );
};

export default WaveFormWithComments;
