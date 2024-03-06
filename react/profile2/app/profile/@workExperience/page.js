'use client';

import React from 'react';
import Image from 'next/image';
import ProjectDescription from '@/components/ProjectDescription';
import { workExperience } from '@/consant';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
const Work = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {workExperience.map((ex) => (
        <ProjectDescription
          key={ex.projectName}
          {...ex}
        />
      ))}
    </Slider>
  );
};

export default Work;
