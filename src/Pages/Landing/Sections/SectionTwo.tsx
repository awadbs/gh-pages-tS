import React from 'react';
// import { ReactComponent as HelpImage } from '../../../Assets/helpImage.svg'; 
import { ReactComponent as HelpImage } from '../../../Assets/Testttt.svg'; 
import robotHandShake from  '../../../Assets/robotHandShake.jpg'; 
import calendar from  '../../../Assets/calendar.png'; 
import phone from  '../../../Assets/phonephone.png'; 
import sandwatch from  '../../../Assets/sandwatch.png'; 

type SectionTwoProps = {}

type FeatureCardProps = {
  description: string;
  imageUrl?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ description, imageUrl }) => {
    let image = <HelpImage className="w-52 h-52 mb-2 rounded-full" aria-label="Feature icon" />;
    if(imageUrl){
        image = <img className='w-52 h-52 mb-2 rounded-full' src={imageUrl} aria-label="Feature icon"></img>
    }
  return (
    <div className="flex flex-col items-center text-center p-2 w-full">
      <div className="flex-shrink-0"> 
        {image}
      </div>
      <div className="flex-grow pt-4">
        <p>{description}</p>
      </div>
    </div>
  );
};

export const SectionTwo: React.FC<SectionTwoProps> = () => {
  return (
    <div className='bg-primary-900 text-white'>
      <div className="container p-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center content-center">
          <FeatureCard imageUrl={robotHandShake}
            description="Voice coached and speech trained to deliver a great impression and pleasant experience every call"
          />
          <FeatureCard  imageUrl={phone}
            description="Handles multiple calls at the same time, so your patients will never get frustrated of getting put on hold"
          />
          <FeatureCard imageUrl={sandwatch}
            description="Available 24 hours a day, so your office is reachable any time of the day"
          />
          <FeatureCard imageUrl={calendar}
            description="Automated appointment booking, and patient intaking means less work for your office"
          />
        </div>
      </div>
    </div>
  );
};
