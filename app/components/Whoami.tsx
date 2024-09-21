"use client"
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Image from 'next/image';
import Ziad from "../Images/1707246690922.jpeg"
export default function Whoami() {
  const [text] = useTypewriter({
    words: ['Front-end Development', 'Back-end Development'],
    loop: true,
    delaySpeed: 2000,
  });

  // State for managing the open/close state of education and experience sections
  return (
    <div className='flex flex-col md:flex-row mx-auto max-w-[1260px] pt-24 items-center justify-center'>
      <div className="flex-shrink-0 p-4">
        <Image
          src={Ziad} 
          alt="Ziad Ramadan"
          className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-gray-300 shadow-lg object-cover"
        />
      </div>

      {/* Right Column: Information */}
      <div className='flex flex-col mx-auto pt-4 md:pt-0 md:pl-8 text-center md:text-left'>
        <h1 className='text-4xl md:text-5xl font-bold tracking-tight z-20'>
          A Software{' '}
          <span className='bg-gradient-to-r from-blue-300 to-slate-400 text-transparent bg-clip-text'>
            Engineer
          </span>
        </h1>
        <br />
        <h2 className='text-2xl sm:text-3xl mt-4'>
          Specializing in{' '}
          <span className="font-bold text-green-500">
            {text}
          </span>
          <Cursor />
        </h2>
        <p className='text-lg sm:text-2xl mt-4'>
          I&apos;m Ziad Ramadan, a Software Engineer graduated from the Arab Academy For Science and Technology.
        </p>

        {/* Education and Experience Sections */}
        </div>
      </div>
  );
}
