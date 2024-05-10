import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as LogoSVG } from './../../../Assets/logoFull.svg'; 
import { cn } from '../../../Utils';
import { Button } from '../../../Components';
import WaveFormWithComments from '../../../Components/WaveFormWithComments';

type SectionTwoProps = {}

export const SectionThree: React.FC<SectionTwoProps> = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.5 // Trigger when half of the element is in view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timers = [
        setTimeout(() => setAnimationPhase(1), 100),
        setTimeout(() => setAnimationPhase(2), 1000),
        setTimeout(() => setAnimationPhase(3), 3000)
      ];
      return () => timers.forEach(timer => clearTimeout(timer));
    } else {
      setAnimationPhase(0); // Reset animation if element is out of view
    }
  }, [isVisible]);

  return (
    <div className='bg-tertiary-100 flex items-center justify-center pt-24 pb-24' ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-y-6">
            <div className='font-serif transition-all duration-500 text-center'>
                <h2 className={`${animationPhase === 1 ? 'animate-shake' : ''} ${animationPhase === 1 || animationPhase === 0 ? 'animate-fly-in' : 'animate-fly-away'} ${animationPhase === 0 || animationPhase === 1 ? 'opacity-100' : 'hidden'}`}>
                    ring ring
                </h2>
                <h2 className={`transition-all duration-500 ${animationPhase === 2 ? 'animate-fly-in' : animationPhase === 3 ? 'animate-strike-through line-through' : 'opacity-0'}`}>
                    "Hello. Please hold."
                </h2>
                <h2 className={`transition-all duration-500 ${animationPhase === 3 ? 'animate-fly-in' : 'opacity-0'}`}>
                    "Hi! How may I help?"
                </h2>
            </div>
        </div>
      </div>
    </div>
  );
};
