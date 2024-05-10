import React, { useEffect, useState, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

interface Comment {
  time: number; // in seconds
  text: string;
  position?: 'top' | 'bottom';
}

interface WaveformPlayerProps {
  url: string; // URL of the audio file
  comments: Comment[];
  isPlaying: boolean;
}

const WaveformPlayer: React.FC<WaveformPlayerProps> = ({ url, comments, isPlaying }) => {
  const waveformRef = useRef<HTMLDivElement>(null);
  const [waveSurfer, setWaveSurfer] = useState<WaveSurfer | null>(null);

  useEffect(() => {
    if (waveSurfer) {
      if (isPlaying) {
        waveSurfer.play();
      } else {
        waveSurfer.pause();
      }
    }
  }, [isPlaying, waveSurfer]);

  useEffect(() => {
    if (waveformRef.current) {
      const ws = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: '#41682c',
        progressColor: '#87b24f',
        cursorColor: '#83893b',
        barWidth: 5,
        barRadius: 3,
        cursorWidth: 2.5,
      });
      ws.on('error', (e) => {
        console.error("WaveSurfer error:", e);
      });
      ws.load(url);

      setWaveSurfer(ws);
      return () => {
        ws.destroy();
        setWaveSurfer(null);
      };
    }
  }, [url, waveformRef]);

  useEffect(() => {
    if (waveSurfer) {
      const displayComments = () => {
        waveformRef.current?.querySelectorAll('.comment').forEach(el => el.remove());
        const currentTime = waveSurfer.getCurrentTime();
        const duration = waveSurfer.getDuration();
        
        comments.forEach(comment => {
          if (currentTime >= comment.time && currentTime < comment.time + 5) {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.textContent = comment.text;
            commentElement.style.position = 'absolute';
            commentElement.style.left = waveformRef.current ? `${(comment.time / duration) * waveformRef.current.offsetWidth}px` : '';
            commentElement.style.bottom = comment.position === 'top' ? '160px' : '40px';
            commentElement.style.zIndex = '20';
            commentElement.style.backgroundColor = '#edebca';
            commentElement.style.padding = '5px';
            commentElement.style.borderRadius = '4px';
            commentElement.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
            commentElement.style.transition = 'opacity 0.5s';
            commentElement.style.opacity = '1';

            if (waveformRef.current) {
              waveformRef.current.appendChild(commentElement);
            }

            setTimeout(() => commentElement.style.opacity = '0', 50000);
          }
        });
      };

      waveSurfer.on('audioprocess', displayComments);
      waveSurfer.on('seeking', displayComments);


      return () => {
        waveSurfer.un('audioprocess', displayComments);
        waveSurfer.un('seeking', displayComments);

      };
    }
  }, [waveSurfer, comments]);

  return <div ref={waveformRef} />;
};

export default WaveformPlayer;
