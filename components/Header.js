'use client';

import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
//icon
import { CiDark } from 'react-icons/ci';
import { CiLight } from 'react-icons/ci';
//
import { useTheme } from 'next-themes';
import { LoadingContext } from '@/loaddingState';
import { usePathname } from 'next/navigation';
const Header = () => {
  //hook
  const { theme, setTheme } = useTheme();
  const [state, dispatch] = useContext(LoadingContext);
  const pathName = usePathname();

  // effect
  useEffect(() => {
    setTheme('light');
  }, []);

  // handle event

  const changeMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    dispatch({ type: 'open', payload: { timeout: 2000 } });
  };
  const pathOptions = {
    '/profile': 'Profile',
    '/': 'Introduction',
    '/cv': 'My CV',
  };

  return (
    <div className='header flex  justify-between items-center mt-5 mb-10'>
      <h1 className='text-[1.5rem]'>
        {pathName === '/' ? (
          <p className='scale-mouse'>
            HIEU - {pathOptions[pathName] ?? 'Unkow'}
          </p>
        ) : (
          <Link
            onClick={() =>
              dispatch({ type: 'open', payload: { timeout: 2000 } })
            }
            href={'/'}>
            HIEU - {pathOptions[pathName] ?? 'Unkow'}
          </Link>
        )}
      </h1>
      <div className='header-right flex justify-center items-center gap-2'>
        <div
          className='header-switch-mode text-[1.5rem] flex justify-center items-center relative  cursor-pointer scale-mouse'
          onClick={changeMode}>
          <CiDark
            className={`absolute top-0 left-0 ${
              theme === 'light' ? 'opacity-1' : 'opacity-0'
            }  transition-all`}
          />
          <CiLight
            className={`${
              theme === 'light' ? 'opacity-0' : 'opacity-1'
            } transition-all`}
          />
        </div>
        {pathName === '/profile' ? (
          <p> Résumé</p>
        ) : (
          <Link
            onClick={() =>
              dispatch({ type: 'open', payload: { timeout: 2000 } })
            }
            href={'/profile'}>
            Résumé
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
