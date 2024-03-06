import React from 'react';
import Link from 'next/link';
// icon
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa6';

const Footer = ({ isInBottomWeb }) => {
  return (
    <div
      className={
        isInBottomWeb &&
        'footer fixed bottom-0  dark:bg-black bg-white pt-2 right-0 flex items-center justify-center flex-col gap-2 w-[100vw]'
      }>
      <div className='footer-contact flex gap-4 text-[25px]'>
        <Link href='https://www.instagram.com/hjeu1074?igsh=Mzl2cDdpeGF5Y2tx'>
          <FaInstagram />
        </Link>
        <Link href='https://www.facebook.com/profile.php?id=100010910594740&mibextid=ZbWKwL'>
          <FaFacebookSquare />
        </Link>
        <Link href='mailto:hjeu1074@gmail.com'>
          <MdOutlineEmail />
        </Link>
        <Link href='https://github.com/HieuNguyen-1074'>
          <FaGithub />
        </Link>
      </div>
      {isInBottomWeb && (
        <>
          <p className='text-center'>© 2023 • HIEUNGUYEN</p>
          <p className='text-center'>
            Powered by NextJS & TailwindCSS and inspire by SOTO
          </p>
        </>
      )}
    </div>
  );
};

export default Footer;
