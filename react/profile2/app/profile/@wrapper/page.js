'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
//icon
import { GrFormNextLink } from 'react-icons/gr';
// data link page
const pages = [
  {
    title: 'EDUCATION',
    id: 'education',
  },
  {
    title: 'SKILL',
    id: 'skill',
  },
];

const Wrapper = () => {
  const [pageSelected, setPageSelected] = useState('education');

  const changePage = (page) => {
    setPageSelected(page);
  };
  return (
    <div className='md:w-[270px]  w-full md:h-screen h-fit flex items-start justify-center flex-col'>
      <h1 className='md:text-[2.5rem] text-[1.5rem]'>NGUYEN VAN HIEU</h1>
      <p>FRONT-END DEVELOPER</p>
      <Link
        href='/cv'
        className='flex items-center group hover:underline'>
        VIEW MY CV
        <GrFormNextLink
          className='relative group-hover:translate-x-5'
          size={25}
        />
      </Link>
      <div className='flex md:flex-col  md:w-fit w-full justify-around gap-3 my-7 order-2 md:order-1 '>
        {pages.map((page) => {
          console.log(page);
          return (
            <Link
              key={page.id}
              href={`#${page.id}`}
              onClick={() => changePage(page.id)}
              className={
                page.id === pageSelected
                  ? 'link-selected opacity-100 scale-125'
                  : 'opacity-50'
              }>
              {page.title}
            </Link>
          );
        })}
      </div>
      <div className='order-1 md:order-2 '>
        <Footer />
      </div>
    </div>
  );
};

export default Wrapper;
