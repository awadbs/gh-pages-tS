import React, { useState, useEffect, useRef } from 'react';
type SectionTwoProps = {}

export const SectionFour: React.FC<SectionTwoProps> = (props) => {


  return (
    <>
    <div className='bg-primary-700 flex items-center justify-center'>
      <div className="container mx-auto">
      <h2 className=""> Ring in a better, smoother, pleasant, over-the-phone experience for your customers.</h2>
      </div>
    </div>
    <div className='bg-primary-900 flex items-center justify-center'>
      <div className="container mx-auto">
      <h2 className=""> Sign up now before our waitlist gets too big.</h2>
      <p>We promise to reach back within 24 hours, but due to high demand we can not promise acceptance into our pilot program. 
        We are currently only intaking pracites in the Washington D.C metropolitan area, but will reach out.</p>
      </div>
    </div>
    </>
  );
};
