'use client';

import React, { useEffect, useState } from 'react';

// constant
import { endIntroduce, hobbit, introduceName, titleWelcome } from '@/consant';

// image
import Image from 'next/image';
import hanoiIcon from '@/assets/image/vietnamese-culture.png';
import vietNameIcon from '@/assets/image/vietnam.png';
import { FaThinkPeaks } from 'react-icons/fa';

const Introduce = () => {
  // hook
  //index of hobbit in hobit object
  const [currentHobbit, setCurrentHobbit] = useState(0);
  // index of current length appear to the page
  const [currentLength, setCurrentLength] = useState(0);
  //
  const [isBack, setIsBack] = useState(false);
  useEffect(() => {
    const loop = setInterval(() => {
      setCurrentLength((oldState) => {
        return oldState + (isBack ? -1 : 1);
      });
    }, 100);

    return () => {
      clearInterval(loop);
    };
  }, [isBack]);

  useEffect(() => {
    if (currentLength <= hobbit[currentHobbit].length) {
      if (currentLength === hobbit[currentHobbit].length) {
        if (!isBack) setIsBack(true);
      }
      if (currentLength === 0 && isBack) {
        setIsBack(false);
        setCurrentHobbit((oldState2) =>
          oldState2 === hobbit.length - 1 ? 0 : oldState2 + 1
        );
        setCurrentLength(0);
      }
    }
  }, [currentLength]);

  return (
    <div className='introduce max-w-[600px] mb-28'>
      <div className='introduce-welcome  lg:h-[40px] h-[32px] overflow-hidden mb-10'>
        <div className='h-fit lg:text-[2rem] text-[1.5rem] '>
          {titleWelcome.map((title, index) => (
            <p key={index}>{title}</p>
          ))}
        </div>
      </div>
      <div className='introduce-name '>
        <div className='h-[25px] overflow-hidden flex  items-start gap-2 my-3'>
          My name is
          <div className='introduce-name-bound h-fit '>
            {introduceName.map((title, index) => (
              <p key={index}>{title}</p>
            ))}
          </div>
        </div>
      </div>
      <div className='introduce-content '>
        <p>
          I was born in 2000, I currently live in Ha Noi
          <Image
            className='w-[23px] inline-block mr-1 mt-[-10px]'
            src={hanoiIcon}
            alt='ha noi'
          />
          <Image
            src={vietNameIcon}
            className='w-[23px]  inline-block mr-2  mt-[-10px]'
            alt='viet nam'
          />
          and i have graduated from Ha Noi University of Natural Recourse and
          Environment with a bachelor 's degree.
          <br /> Now I have been a front-end developer for 1.5 years i had my
          partime jobs as a intern when I been Junior at University and i lost 3
          months to be a freelancer and i have been official employee when i was
          gradueated.
        </p>
        <p className='my-2'>
          I love
          <span className='font-bold ml-1'>
            {hobbit[currentHobbit].slice(0, currentLength)}
          </span>
          <span className='font-bold '>|</span>
        </p>
        <p>{endIntroduce}</p>
      </div>
    </div>
  );
};

export default Introduce;
