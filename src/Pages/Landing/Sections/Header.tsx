import React, { useCallback } from 'react';
import { ReactComponent as LogoSVG } from './../../../Assets/logoFull.svg'; 
import { cn } from '../../../Utils';
import { Button } from "./../../../Components"
type HeaderProps = {
  scrollToSignup: () => void;
  classNames?: string;
}
/**
 * 
 *  <Button variant='secondary'>
              Live Phonecall Demo
            </Button>
            <Button variant='primary'>
              Sign Up
            </Button>
 */
export const Header: React.FC<HeaderProps> = (props) => {
  const { classNames, scrollToSignup} = props;
  const scrollToBottom = useCallback(
    () => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    },
    [],
  )
  
  return (
    <div className={cn(classNames, "z-50 fixed top-0 backdrop-blur-xl left-0 right-0 border-b-2 border-shade-900 border-opacity-90 flex flex-col items-stretch justify-center w-full")}>
      {/* <div className="bg-primary-50"> backdrop-blur-xl"> */}
      <div className="bg-tertiary-50">
        <div className="flex items-center justify-between h-full px-4 md:px-6">
          {/* Logo */}
          <a href="/" aria-label="Home" className="flex items-center">
            <LogoSVG className="h-[40px] w-auto" />
          </a>
          <div className="flex space-x-4">
            <Button variant='primary' onPress={scrollToSignup}>
              Sign Up
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu and Other Elements */}
      {/* Include mobile menu and other elements here as needed */}
    </div>
  );
};
