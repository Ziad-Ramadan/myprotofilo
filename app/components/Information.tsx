"use client"
import React, { useState } from 'react';

export default function Information() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className='flex flex-col items-center justify-center md:flex-row md:items-center md:justify-center gap-8 pt-10'>
      <div className='text-center'>
        <button
          onClick={() => toggleSection('education')}
          className='bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300'>
          My Education
        </button>
        {openSection === 'education' && (
          <div className='mt-4 transition-opacity duration-500 ease-in-out'>
            <ol className="list-none space-y-4">
              <li className="relative before:content-['→'] before:absolute before:left-0 before:text-blue-500 pl-6">
                Bachelor of Computer Science
                <br /> Arab Academy for Science and Technology
              </li>
              <li className="relative before:content-['→'] before:absolute before:left-0 before:text-blue-500 pl-6">
                Dual Degree in Computer Science 
                <br /> University of Northampton
              </li>
            </ol>
          </div>
        )}
      </div>
      
      <div className='text-center'>
        <button
          onClick={() => toggleSection('experience')}
          className='bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-600 transition duration-300'>
          My Experience
        </button>
        {openSection === 'experience' && (
          <div className='mt-4 transition-opacity duration-500 ease-in-out'>
            <ol className="list-none space-y-4">
              <li className="relative before:content-['→'] before:absolute before:left-0 before:text-blue-500 pl-6">
                ITI Open Source Development
                <br /> Summer Internship
              </li>
              <li className="relative before:content-['→'] before:absolute before:left-0 before:text-blue-500 pl-6">
                Front-End Development: Next.js, Tailwind CSS, and JavaScript.
                <br /> Back-End Development: Skilled in PHP with experience using the Laravel framework for website development.
              </li>
              <li className="relative before:content-['→'] before:absolute before:left-0 before:text-blue-500 pl-6">
                Data Scientist in Python
                <br /> Datacamp Scholarship
              </li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}
