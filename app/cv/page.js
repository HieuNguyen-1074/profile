'use client';

import React, { useState, useContext, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// icon
import Image from 'next/image';
import { GrFormPrevious } from 'react-icons/gr';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { RiExchangeLine } from 'react-icons/ri';
import iconEng from '@/assets/skill/eng.png';
import iconVN from '@/assets/skill/vietnam.png';
import { LoadingContext } from '@/loaddingState';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
//data src cv
const cvs = {
  en: {
    id: 'en',
    src: './CV_NGUYEN-VAN-HIEU_FRONT-END-DEVELOPER(E).pdf',
  },
  vi: { id: 'vi', src: './CV_NGUYEN-VAN-HIEU_FRONT-END-DEVELOPER(V).pdf' },
};
const Dashboard = () => {
  //state
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setpageCount] = useState(0);
  const [cv, setCv] = useState(cvs.en);
  //context
  const [state, dispatch] = useContext(LoadingContext);

  function onDocumentLoadSuccess(params) {
    setpageCount(params?.numPages ?? 1);
  }
  const [screenSize, setScreenSize] = useState();
  useEffect(() => {
    if (window && typeof window != 'undefined') {
      setScreenSize({
        width: screen.width,
        height: screen.height,
      });
    }
  }, []);

  function onChangeCv() {
    dispatch({ type: 'open', payload: { timeout: 2000 } });
    setCv(cv.id === cvs.en.id ? cvs.vi : cvs.en);
    setPageNumber(1);
  }
  return (
    <>
      <div className='flex flex-col items-center '>
        <button
          className='border rounded-lg p-2 flex items-center gap-3 group hover:bg-[#f5f4f4]'
          onClick={() => onChangeCv()}>
          {cv.id === cvs.en.id ? (
            <Image
              className='w-[30px] inline-table'
              src={iconEng}
              alt='icon'
            />
          ) : (
            <Image
              className='w-[30px] inline-table'
              src={iconVN}
              alt='icon'
            />
          )}
          <RiExchangeLine
            className='group-hover:scale-50'
            size={25}
          />
        </button>

        <Document
          file={cv.src}
          onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            width={screenSize?.width < screenSize?.height && screenSize?.width}
            height={
              screenSize?.width > screenSize?.height && screenSize?.height
            }
          />
        </Document>

        <div className='flex items-center border rounded-lg p-[2px]'>
          <button
            disabled={1 >= pageNumber}
            className='hover:bg-[#f5f4f4] px-3 py-2 scale-mouse'
            onClick={() => setPageNumber(pageNumber - 1)}>
            <GrFormPrevious size={25} />
          </button>
          <p className='text-[0.8rem]'>
            {pageNumber} of {pageCount}
          </p>
          <button
            disabled={pageCount <= pageNumber}
            className='hover:bg-[#f5f4f4] px-3 py-2 scale-mouse'
            onClick={() => setPageNumber(pageNumber + 1)}>
            <MdOutlineNavigateNext size={25} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
