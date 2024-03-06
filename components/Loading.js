'use client';

import { LoadingContext } from '@/loaddingState';
import React, { useContext, useEffect, useReducer, useState } from 'react';

const Loading = () => {
  const [state, dispatch] = useContext(LoadingContext);
  const [classAc, setClassAc] = useState('-translate-x-full');
  useEffect(() => {
    const time = setTimeout(() => {
      if (state.isOn) {
        dispatch({
          type: 'close',
        });
      }
    }, state.timeout);
    return () => clearTimeout(time);
  }, [state, dispatch]);
  return (
    <>
      <div
        className={
          (state.isOn
            ? 'translate-x-0'
            : '-translate-x-full pointer-events-none') +
          ' fixed duration-800 w-full h-full top-0 left-0 dark:bg-[#323030] bg-[#eef2ec] flex justify-center items-center scale-mouse'
        }></div>
      <p
        className={
          (state.isOn
            ? 'opacity-1 animate-ping '
            : 'opacity-0  pointer-events-none') +
          ' text-[2rem] duration-800 fixed  w-full h-full top-0 left-0  bg-transparent flex justify-center items-center'
        }>
        H
      </p>
    </>
  );
};

export default Loading;
