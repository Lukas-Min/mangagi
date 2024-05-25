import { Link } from 'react-router-dom';
import React from 'react';

const Footer = () => {
  return (


    <footer class="border-t-2 border-t-blush z-10">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <Link to={'/'}>
            <div class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img className='h-auto w-20 sm:w-24 md:w-28' src="/img/logo/mangagi.png" alt="Mangagi Logo" />
            </div>
          </Link>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 ">
            <li>
              <Link to={'/'} className="hover:underline me-4 md:me-6">Home</Link>
            </li>
            <li>
              <Link to={'/about'} className="hover:underline me-4 md:me-6">About</Link>
            </li>
            <li>
              <Link to={'/error-404'} className="hover:underline me-4 md:me-6">Contact</Link>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-blush sm:mx-auto  lg:my-8" />
        <span class="block text-sm sm:text-center ">© 2024 <Link to={'/mangagi'}><span className='font-bold'>Mangagi™</span></Link> by Mangagu. All Rights Reserved.</span>
      </div>
    </footer>


  );
}

export default Footer;
