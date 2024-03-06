'use client';

import React, { useEffect, useState } from 'react';

// constant
import { endIntroduce, hobbit, introduceName, titleWelcome } from '@/consant';

// image
import Image from 'next/image';
import hanoiIcon from '@/assets/image/vietnamese-culture.png';
import vietNameIcon from '@/assets/image/vietnam.png';

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
      setCurrentLength(currentLength + 1);
    }, 500);

    // return () => {
    //   clearInterval(loop);
    // };
  }, []);

  return (
    <div className='introduce'>
      <div className='introduce-welcome'>
        <div>
          {titleWelcome.map((title, index) => (
            <p key={index}>{title}</p>
          ))}
        </div>
      </div>
      <div className='introduce-name'>
        <div>
          {introduceName.map((title, index) => (
            <p key={index}>{title}</p>
          ))}
        </div>
      </div>
      <div className='introduce-content'>
        <p>
          I was born in 2000, I currently live in Ha Noi
          <Image
            src={hanoiIcon}
            alt='ha noi'
          />
          <Image
            src={vietNameIcon}
            alt='viet nam'
          />
          and i have graduated from Ha Noi University of Natural Recourse and
          Enviroment with a bachelor 's degree.
          <br /> Now I have been a front-end developer for 1.5 years i had my
          partime jobs as a intern when I been Junior at University and i lost 3
          months to be a freelancer and i have been official employee when i was
          gradueated.
        </p>
        <p>I love {currentLength}</p>
        <p>{endIntroduce}</p>
      </div>
    </div>
  );
};

export default Introduce;
