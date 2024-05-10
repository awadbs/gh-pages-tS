import React, { useMemo } from 'react';
import { composeRenderProps, Button as RACButton, ButtonProps as RACButtonProps } from 'react-aria-components';
import { tv } from 'tailwind-variants';
import { focusRing } from './utils';

export interface ButtonProps extends RACButtonProps {
  variant?: 'primary' | 'secondary' | 'destructive' | 'icon'
}

let button = tv({
  extend: focusRing,
  base: 'px-6 text-center text-sm	h-10 m-2.5 transition-all duration-500 rounded-full block border-2 border-black font-semibold shadow-md shadow-amber-500 cursor-pointer select-none touch-manipulation hover:bg-right hover:no-underline active:bg-right hover:no-underline active:no-underline active:scale-95',
  variants: {
    variant: {
      primary: '...', // define primary variant styles here
      secondary: '...', // define secondary variant styles here
      destructive: '...', // define destructive variant styles here
      icon: '...' // define icon variant styles here
    },
    isDisabled: {
      true: 'opacity-50 cursor-not-allowed'
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
});

const primaryStyles = {
  backgroundImage: "linear-gradient(45deg, #739e45 0%, #a5cb70  51%, #608a3c  100%)",
  backgroundSize: '180% auto',
}
const secondaryStyles = {
  backgroundImage: "linear-gradient(45deg, #d5d288 0%, #f8f7ea  51%, #d5d288  100%)",
  color: 'black',
  textColor: 'black',
  backgroundSize: '180% auto',
}
const tertiaryStyles = {
  backgroundImage: "linear-gradient(45deg, #739e45 0%, #a5cb70  51%, #608a3c  100%)",
  backgroundSize: '180% auto',
}

export function Button(props: ButtonProps) {
  const style = useMemo(() => props.variant === "primary" ? primaryStyles : secondaryStyles, [primaryStyles, secondaryStyles, props.variant]);
  
  return (
    <RACButton
    style={style}
      {...props}
      className={composeRenderProps(
        props.className,
        (className, renderProps) => button({
          ...renderProps, 
          variant: props.variant, 
          className
        })
      )} />
  );
}
