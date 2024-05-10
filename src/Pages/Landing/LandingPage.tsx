import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Header, SectionOne, SectionTwo, SectionThree, SectionFour, BottomSection, Footer } from "./Sections";

export const LandingPage: React.FC = () => {
  const signupRef = useRef<HTMLDivElement>(null);
  
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const scrollToSignup = useCallback(() => {
    signupRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle the visibility based on whether the signupRef is in view
        setIsHeaderVisible(!entry.isIntersecting);
      },
      {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
      }
    );

    const refCurrent = signupRef.current;
    if (refCurrent) {
      observer.observe(refCurrent);
    }

    return () => {
      if (refCurrent) {
        observer.unobserve(refCurrent);
      }
    };
  }, [signupRef]);

  return (
    <div>
      {isHeaderVisible && <Header scrollToSignup={scrollToSignup} classNames="h-16" />}
      <div className='min-height pt-16 overflow-hidden relative flex flex-col z-10 bg-primary-50' style={{backgroundColor: "#f8f7ea"}}>
        <SectionOne />
        <SectionTwo />
        {/* <SectionThree />
        <SectionFour /> */}
        <BottomSection ref={signupRef} />
      </div>
      {/* <BottomSection /> */}
      <Footer />
    </div>
  );
};
