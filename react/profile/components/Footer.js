import React from 'react';
// icon
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-contact'>
        <FaInstagram />
        <FaFacebookSquare />
        <MdOutlineEmail />
        <FaGithub />
      </div>
      <p>© 2023 • HIEUNGUYEN</p>
      <p>Powered by NextJS & TailwindCSS and inspire by SOTO</p>
    </div>
  );
};

export default Footer;
