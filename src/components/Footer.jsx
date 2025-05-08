import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='bg-gray-100 py-10'>
      <div className='container mx-auto px-6 md:px-12 lg:px-20'>
        <div className='flex flex-col md:flex-row justify-between gap-8'>
          
          {/*------ Left Section ------- */}
          <div className='md:w-1/3'>
            <img className='w-32 mb-4' src={assets.logo} alt="Logo" />
            <p className='text-sm text-gray-600'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              It has been the industry's standard dummy text since the 1500s.
            </p>
          </div>

          {/*------ Center Section ------- */}
          <div>
            <p className='text-lg font-medium mb-2'>COMPANY</p>
            <ul className='text-sm text-gray-600 space-y-2'>
              <li className='cursor-pointer hover:text-black'>Home</li>
              <li className='cursor-pointer hover:text-black'>About us</li>
              <li className='cursor-pointer hover:text-black'>Contact us</li>
              <li className='cursor-pointer hover:text-black'>Privacy policy</li>
            </ul>
          </div>

          {/*------ Right Section ------- */}
          <div>
            <p className='text-lg font-medium mb-2'>GET IN TOUCH</p>
            <ul className='text-sm text-gray-600 space-y-2'>
              <li>📞 +9380817411</li>
              <li>📧 omnateeta@gmail.com</li>
            </ul>
          </div>
        </div>

        {/*----- Copyright Section ----*/}
        <div className='mt-8 text-center text-gray-500 text-sm'>
          <hr className='border-gray-300 my-4' />
          <p>Copyright © 2024 GreatStack - All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
