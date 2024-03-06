'use client';

import React from 'react';

// logo ,image
import Image from 'next/image';
import hunreLogo from '@/assets/image/HUNRE_Logo.png';
import pcLogo from '@/assets/image/pc-icon.png';
// data educations
const educations = [
  {
    icon: hunreLogo,
    name: 'Ha Noi University of Natural Recourse and Environment',
    infor: 'Bachelor | Information technology | 3.2/4',
    years: '2019 - 2023',
    achievements: [
      {
        content: 'Scientific research - Library App | Good | 2020-2021',
        techs: 'ReactJS, Firebase',
      },
      {
        content:
          'Scientific research - Fire Warning System | Excellent | 2021-2022',
        techs: 'PHP, mySQL, Uno, Arduino ',
      },
      {
        content:
          'Scientific research - Fire Warning System | Excellent | 2022-2023',
        techs: 'Uno, Arduino',
      },
    ],
  },
];
const Education = () => {
  return (
    <div id='education'>
      <div>
        {educations.map(({ name, icon, infor, years, achievements }) => {
          return (
            <div
              key={name}
              className='flex md:flex-row flex-col gap-10 ml-6 md:mt-5 items-start'>
              <Image
                className='w-[70px] md:block hidden'
                src={icon}
                alt='hunre logo'
              />

              <div>
                <p className='text-[1.2rem]'>{name}</p>
                <p className='md:ml-2'> {infor}</p>
                <p className='md:ml-2'>{years}</p>
                {achievements.length > 0 && (
                  <div className='md:mt-3'>
                    <p className='text-[1.2rem]'>Achievement</p>
                    <ul className='list-decimal'>
                      {achievements.map(({ content, techs }) => {
                        return (
                          <li
                            key={content}
                            className='md:ml-4 md:mt-2'>
                            <p>{content}</p>
                            <p>Techs : {techs}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
