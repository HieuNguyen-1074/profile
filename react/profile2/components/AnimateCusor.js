'use client';

import { useTheme } from 'next-themes';
import React, { useEffect } from 'react';
import AnimatedCursor from 'react-animated-cursor';
export default function AnimateCusor({ children }) {
  const { theme, setTheme } = useTheme();
  //   useEffect(() => {
  //     window.onmousemove = function (e) {
  //       e.target.classList.add('font-red');
  //     };
  //     return () => {};
  //   }, []);
  return (
    <div>
      <AnimatedCursor
        innerSize={100}
        outerSize={100}
        innerScale={0.1}
        outerScale={0.1}
        outerAlpha={0}
        color={theme === 'dark' ? '#ffff' : '#000'}
        // hasBlendMode={true}
        innerStyle={{
          border: `1px solid ${theme === 'dark' ? '#ffff' : '#000'}`,
        }}
        outerStyle={{
          border: `1px solid ${theme === 'dark' ? '#ffff' : '#000'}`,
        }}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.scale-mouse',
        ]}
      />
      {children}
    </div>
  );
}
