import React from 'react';
import Image from 'next/image';
import in1 from '../Images/1.png';
import in2 from '../Images/2.png';
import in3 from '../Images/3.png';
import in5 from '../Images/5.png';
import in6 from '../Images/99.png';
import in7 from '../Images/7.png';
import in8 from '../Images/8.png';

export default function Services() {
  return (
    <div className='flex flex-col items-center mx-auto max-w-[1260px] pt-14'>
      <h1 className='text-5xl sm:text-4xl font-bold tracking-tight z-20 text-blue-300'>My Services</h1>
      
      <div className='flex flex-wrap justify-center gap-4 mt-8'>
        <Image 
          src={in1} 
          alt='' 
          className='w-32 h-32 object-contain' 
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" 
        />
        <Image 
          src={in2} 
          alt='' 
          className='w-32 h-32 object-contain' 
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <Image 
          src={in3} 
          alt='' 
          className='w-32 h-32 object-contain' 
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <Image 
          src={in6} 
          alt='' 
          className='w-32 h-32 object-contain' 
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <Image 
          src={in5} 
          alt='' 
          className='w-32 h-32 object-contain' 
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <Image 
          src={in7} 
          alt='' 
          className='w-32 h-32 object-contain' 
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <Image 
          src={in8} 
          alt='' 
          className='w-32 h-32 object-contain' 
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}
