"use client"
import Link from 'next/link';
import React, { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p sm:p-4 md:flex md:justify-between md:items-center">
      <div className="container mx-auto flex justify-between items-center">
        <a href="" className="text-2xl font-bold text-red-500">ZR</a>
        
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="focus:outline-none"
          >
            {open ? (
              <svg
                fill="none"
                className="w-6 h-6"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                fill="none"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path
                  d="M21,13H3a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"
                  className="fill-teal-500"
                />
                <path
                  d="M21,19H9a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2ZM15,7H3A1,1,0,0,1,3,5H15a1,1,0,0,1,0,2Z"
                  className="fill-green-500"
                />
              </svg>
            )}
          </button>
        </div>

        <div className={`fixed inset-x-0 bottom-0 bg-gray-900 p-4 md:static md:bg-transparent md:flex md:items-center md:justify-center 
                        transform ${open ? 'translate-y-0' : 'translate-y-full'} 
                        md:translate-y-0 transition-transform duration-500 ease-in-out`}>
          <Link href="/" className="block text-center mx-2 my-2 md:my-0 hover:text-green-300">
            Home
          </Link>
          <Link href="/" className="block text-center mx-2 my-2 md:my-0 hover:text-green-300">
            Projects
          </Link>
          <Link href="/" className="block text-center mx-2 my-2 md:my-0 hover:text-green-300">
            Services
          </Link>
          <Link href="/" className="block text-center mx-2 my-2 md:my-0 hover:text-green-300">
            Contact
          </Link>
          <Link href="https://drive.google.com/drive/folders/1QA8Wvf619j5UMLihzimKj1Cog3vCMsf7?usp=sharing" className="block text-center mx-2 my-2 md:my-0 hover:text-green-300">
            My certificates 
          </Link>
          <Link href="https://drive.google.com/file/d/1HoAfOPSMQvp5AEYE-Jje7WjDvk6tAdwh/view?usp=sharing" className="block text-center mx-2 my-2 md:my-0 hover:text-green-300">
            My Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
