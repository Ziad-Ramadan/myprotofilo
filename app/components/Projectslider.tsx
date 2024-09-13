"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import React from 'react'
import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import im1 from "../Images/build.png"
import im2 from "../Images/votinglandpage.png"
import im3 from "../Images/build.png"
export default function Projectslider() {
  return (
    <div className='sm:w-[45%] 2xl:w-[30%] w-[80%] mx-auto mt-20 text-center'>
        <h1 className='font-bold text-2xl mb-8'>My Projects</h1>
        <Swiper 
        effect= {'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop = {true}
        coverflowEffect={
            {
                rotate:0, 
                stretch:0,
                depth:100,
                modifier:2.5,
                slideShadows:true,
            }
        }
        modules={[EffectCoverflow,Navigation,Pagination]}
        pagination ={{
            clickable : true,
        }}
        className='w-[100%] py-[50px]'
        >
            <SwiperSlide>
                <div className='bg-black/60 absolute w-full h-[30%] buttom-0'/>
                <h1 className='absolute text-white font-bold sm:bottom-10 buttom-2 left-10'>My App</h1>
                <Image src={im1} alt="" className='block w-[100%]'/>
            </SwiperSlide>
            <SwiperSlide>
                <div className='bg-black/60 absolute w-full h-[30%] buttom-0'/>
                <h1 className='absolute text-white font-bold sm:bottom-10 buttom-2 left-10'>My App</h1>
                <Image src={im1} alt="" className='block w-[100%]'/>
            </SwiperSlide>            <SwiperSlide>
                <div className='bg-black/60 absolute w-full h-[30%] buttom-0'/>
                <h1 className='absolute text-white font-bold sm:bottom-10 buttom-2 left-10'>My App</h1>
                <Image src={im3} alt=""
                className='block w-[100%]'/>
            </SwiperSlide>

        </Swiper>

    </div>
  )
}
