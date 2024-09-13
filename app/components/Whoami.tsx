"use client"
import React from 'react'
import { useTypewriter,Cursor } from 'react-simple-typewriter';
export default function Whoami() {
    const [text] =useTypewriter({
        words:['Front-end Develpment','Back-end Development'],
        loop:true,
        delaySpeed: 2000,
      })
  return (
    <div className='flex flex-col mx-auto max-w-[1260px] pt-24'>
        <h1 className='text-5xl sm:text-5xl font-bold tracking-tight z-20'>
            A Software <span className='bg-gradient-to-r from-blue-300 to-slate-400 text-transparent bg-clip-text'>
            Engineer
            </span>
        </h1>
        <br/>
        <h2 className='text-2xl sm:text-3xl mt-4'>Specializing in {" "} <span className="font-bold text-green-500">
          {text}
        </span>
        <Cursor/>
        </h2>
        <p className='text-2xl sm:text-2xl' >I'm Ziad Ramadan Software Engineer graduted from Arab Academy For Science and Technology</p>
        <div className='flex flex-row mx-auto max-w-[1260px] pt-10'>
        <ol className="list-none">
        <h3>My Education</h3>
            <li className="relative before:content-['→'] before:absolute before:left-0 before:text-blue-500 pl-6">
                Bachelor of Computer Science
                 <br /> Arab Academy for Science and Technology
            </li>
            <li className="relative before:content-['→'] before:absolute before:left-0 before:text-blue-500 pl-6">
            Dual Degree in Computer Science 
            <br /> University of Northampton
        </li>
        </ol>
        <ol className="list-none ml-8">
        <h3>My Experience</h3>
        <li className="relative before:content-['→'] before:absolute before:left-0 before:text-blue-500 pl-6">
        ITI Open Source Development
        <br /> Summer Internship
        </li>
        <li className="relative before:content-['→'] before:absolute before:left-0 before:text-blue-500 pl-6">
            Front-End Development: Proficient in Nextjs, Tailwind CSS and JavaScript.
            <br /> Back-End Development: Skilled in PHP, with experience using the Laravel framework for
                    website development.
        </li>
         <li className="relative before:content-['→'] before:absolute before:left-0 before:text-blue-500 pl-6">
            Data Scientist in Python
            <br /> Datacamp Scholarship
        </li>
        </ol>
        </div>
    </div>
  );
}
