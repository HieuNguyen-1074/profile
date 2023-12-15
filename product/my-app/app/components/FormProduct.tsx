'use client';
import React from 'react';
import { updateProduct } from '../actionServer/actionServer';

const FormProduct = ({
  isShow,
  actionForm,
}: {
  isShow: boolean;
  actionForm: (formData: FormData) => Promise<void>;
}) => {
  return (
    <>
      <div
        id='modal-2'
        tabIndex={-1}
        aria-hidden='true'
        className={
          (!isShow ? 'hidden' : '') +
          ' bg-[rgba(0,0,0,0.5)] h-screen w-screen overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center  md:inset-0 '
        }>
        <div className='relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-scroll no-scrollbar p-4 w-full max-w-md max-h-full'>
          <div className='relative  bg-white rounded-lg shadow dark:bg-gray-700'>
            <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                Sign in to our platform
              </h3>
              <button
                type='button'
                className='end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
                data-modal-hide='authentication-modal'>
                <svg
                  className='w-3 h-3'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 14'>
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                  />
                </svg>
                <span className='sr-only'>Close modal</span>
              </button>
            </div>

            <div className='p-4 md:p-5'>
              <form
                className='space-y-4'
                action={actionForm}>
                <div>
                  <label
                    htmlFor='title'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Your title
                  </label>
                  <input
                    type='text'
                    name='title'
                    id='title'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                    placeholder='name@company.com'
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor='price'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Your price
                  </label>
                  <input
                    type='number'
                    name='price'
                    id='price'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                    placeholder='name@company.com'
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor='description'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Your Description
                  </label>
                  <textarea
                    id='description'
                    name='description'
                    className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Write your thoughts here...'></textarea>
                </div>

                <div>
                  <label
                    htmlFor='category'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Your category
                  </label>
                  <input
                    type='text'
                    name='category'
                    id='category'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                    placeholder='name@company.com'
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor='image'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Your image
                  </label>
                  <input
                    type='file'
                    name='image'
                    id='image'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                    placeholder='name@company.com'
                    required
                  />
                </div>

                <div className='flex justify-between'>
                  <div className='flex items-start'>
                    <div className='flex items-center h-5'>
                      <input
                        id='remember'
                        type='checkbox'
                        value=''
                        className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800'
                        required
                      />
                    </div>
                    <label
                      htmlFor='remember'
                      className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      Remember me
                    </label>
                  </div>
                  <a
                    href='#'
                    className='text-sm text-blue-700 hover:underline dark:text-blue-500'>
                    Lost Password?
                  </a>
                </div>
                <button
                  type='submit'
                  className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                  Login to your account
                </button>
                <div className='text-sm font-medium text-gray-500 dark:text-gray-300'>
                  Not registered?{' '}
                  <a
                    href='#'
                    className='text-blue-700 hover:underline dark:text-blue-500'>
                    Create account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormProduct;
