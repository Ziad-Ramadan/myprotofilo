import React from 'react';
import Image from 'next/image';
import in1 from '../Images/1.png';
import in2 from '../Images/2.png';
import in3 from '../Images/3.png';
import in4 from '../Images/4.png';
import in5 from '../Images/5.png';
import in6 from '../Images/6.png';
import in7 from '../Images/7.png';
import in8 from '../Images/8.png';


export default function Gallery() {
  return (
    <div className='flex flex-col items-center mx-auto max-w-[1260px] pt-14'>
        <h1 className='text-5xl sm:text-5xl font-bold tracking-tight z-20 text-blue-300'>My Services</h1>
      <table className='table-auto mx-auto mt-11'>
        <tbody className='mt-11'>
          <tr className="text-center">
            <td className='p-2'>
              <Image 
                src={in1} 
                alt='' 
                className='w-32 h-auto sm:w-48 md:w-44' // smaller width classes
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" 
              />
            </td>
            <td className='p-2'>
              <Image 
                src={in2} 
                alt='' 
                className='w-32 h-auto sm:w-48 md:w-44'
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </td>
            <td className='p-2'>
              <Image 
                src={in3} 
                alt='' 
                className='w-32 h-auto sm:w-48 md:w-52'
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </td>
            <td className='p-2'>
              <Image 
                src={in4} 
                alt='' 
                className='w-32 h-auto sm:w-48 md:w-52'
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </td>
          </tr>
          <tr className="ml-36">
            <td className='p-2'>
              <Image 
                src={in5} 
                alt='' 
                className='w-32 h-auto sm:w-48 md:w-52'
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </td>
            <td className='p-2'>
              <Image 
                src={in6} 
                alt='' 
                className='w-32 h-auto sm:w-48 md:w-52'
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </td>
            <td className='p-2'>
              <Image 
                src={in7} 
                alt='' 
                className='w-32 h-auto sm:w-48 md:w-52'
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </td>
            <td className='p-2'>
              <Image 
                src={in8} 
                alt='' 
                className='w-32 h-auto sm:w-48 md:w-48'
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
