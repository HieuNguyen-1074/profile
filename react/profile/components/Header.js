'use client';

import React from 'react';
import Link from 'next/link';
//icon
import { CiDark } from 'react-icons/ci';
import { CiLight } from 'react-icons/ci';
//

import { useTheme } from 'next-themes';
const Header = () => {
  //hook
  const { theme, setTheme } = useTheme();

  return (
    <div className='header flex  justify-between items-center px-10'>
      <h1>HIEU</h1>
      <div className='header-right flex justify-center items-center'>
        <div
          className='header-switch-mode text-[2rem] flex justify-center items-center relative '
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          <CiDark
            className={`absolute top-0 left-0  ${
              theme === 'light' ? 'opacity-1' : 'opacity-0'
            }  transition-all`}
          />
          <CiLight
            className={`${
              theme === 'light' ? 'opacity-0' : 'opacity-1'
            } transition-all`}
          />
        </div>
        <Link href={'/profile'}>Résumé</Link>
      </div>
    </div>
  );
};

export default Header;
