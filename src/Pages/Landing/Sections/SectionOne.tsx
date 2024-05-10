import React from 'react';
import { ReactComponent as LogoSVG } from './../../../Assets/logoFull.svg'; 
import { cn } from '../../../Utils';
import { Button, Form, TextField, Input, Label  } from '../../../Components';
import WaveFormWithComments from '../../../Components/WaveFormWithComments';

type FirstSectionProps = {
}
export const SectionOne: React.FC<FirstSectionProps> = (props) => {
    const waveFormPlayerComments = [
        { time: 0, text: 'This is a REAL conversation between our augmented assistant and a client.', position: "top" },
        { time: 8, text: 'Intelligently responds to the clients questions',  position: "bottom" },
        { time: 18, text: 'Integrates with your Electronic Record system to find good time slots', position: "top"  },
        { time: 22, text: 'Can handle any questions appropriately', position: "bottom"  },
        { time: 29, text: 'Voice coached to properly handle and respond to the client', position: "top"  },
        { time: 37, text: 'Natural voice and human-like responses',  position: "bottom" },
        { time: 41, text: 'Fully customizable to fit your needs',  position: "top" },
        { time: 60, text: 'Voice sounds peaceful, helpful, and calm',  position: "bottom" },
        { time: 64, text: 'HIPAA compliant',  position: "top" },
    ];

  return (
    <div className={"p-5 mx-auto container pt-12 pb-4 relative flex flex-col gap-y-6 bg-tertiary-50"}>
        <h1 className="">The best assistant for your front desk.</h1>
        <p className="md:text-lg max-w-xl pt-6"> TalkScaled's augmented assistant works around the clock to handle your phone calls. <br/>It can schedule appointments, provide updates, answer questions, and assist with any other requests that you get over the phone. </p>

        <div className="gap-x-10 mr-[12%] pt-6 md:pt-0 pb-12">
            <WaveFormWithComments comments={waveFormPlayerComments} />
        </div>
    </div>
  );
};
