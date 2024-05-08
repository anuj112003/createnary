// import React from 'react'
"use client"

import React, { useState, useEffect } from 'react';
import Img from '../assests/New.png';
import Img2 from '../assests/1.jpg';
import Img3 from '../assests/0.jpg';
import previous from '../assests/previous.png';
import next from '../assests/next.png';
import Image from 'next/image';
import Link from 'next/link';

function Section() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [toggle, setToggle] = useState(false);

  const ImageSlider = ({ images, interval }) => {
    useEffect(() => {
      const rotateInterval = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
      }, interval);
      console.log("use effect calling");
      return () => clearInterval(rotateInterval);
    }, [interval, images.length]);

    return (
      <div>
        <Image src={images[currentIndex]} alt='section image' width={720} height={405} className='mx-auto transition duration-[0.7s]' />
      </div>
    );
  };

  console.log(toggle);
  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    console.log("prev", currentIndex);
  };
  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
    setToggle(!toggle);
    console.log("next", currentIndex);
  };

  const images = [Img, Img2, Img3];

  return (
    <div className='  lg:w-full md:w-[1024px]  w-[100%] sm:w-[870px]  sm:h-[924px] h-[571px] absolute top-[750px] lg:top-[600px] md:top-[440px] sm:top-[390px] p-[40px] bg-[#4A508E] z-[25] mr-[20px]'>
      <div className=' md:w-[990px] sm:w-[800px]  xl:w-full w-[360px] sm:h-[644px] h-[571px] gap-[50px] flex flex-col sm:mx-auto sm:ml-0 ml-[-41px]'>
        <div className='md:w-[990px] xl:w-full  w-[360px] sm:w-[830px] h-[540px] flex flex-col gap-[70px]  '>
          <div className=' hidden sm:inline  xl:w-[518px] h-[85px] flex flex-col mx-auto justify-between '>
            <div className=' w-[465px] h-[48px] font-[Urbanist] font-[700] leading-[48px] text-[#F8F9FB] text-3xl tracking-[.07em] text-center'>Your audience wants links</div>
            <div className=' w-[518px] h-[22px] font-[Urbanist] font-[500] leading-[21.6px] text-[#F8F9FB] tracking-[.09em] text-base'>Make it easy for them by linking products to every post and video</div>
          </div>
          <div className='hidden sm:inline absolute  top-[260px] xl:left-[300px] xl:right-[300px] lg:left-[190px] lg:right-[190px]  2xl:left-[320px] md:left-[170px] sm:left-[100px]  mx-auto'>
            <ImageSlider images={images} interval={1500} alt="Payment Sample" />
          </div>
          <div className='sm:hidden inline w-[320px] h-[240px]  rounded-[15px] absolute top-[250px] left-[25px] right-[50px] mx-auto'>
            <ImageSlider images={images} interval={1500} alt="Payment Sample" />
          </div>
        </div>
        <Link href="/nextPage">
          <div className='  hidden sm:inline w-[139px] h-[54px] rounded-[18px] absolute top-[800px] xl:left-[610px] xl:right-[610px] 2xl:left-[650px] md:left-[470px] sm:left-[380px] text-center bg-white pt-[16px] pr-[24px] pb-[16px] pl-[24px] mx-auto hover:scale-[1.2] transition duration-[0.7s] ease-in-out'>
            <div className='w-[91px] h-[22px] font-[Urbanist] font-[600] leading-[21.6px] text-black cursor-pointer'>Try For free</div>
          </div>
        </Link>
        <div>
          <div className='absolute  top-[10px]  right-[50px] left-[40px] w-[300px] h-[129px] pt-[0px] pl-[16px] pr-[0px] pb-[16px] flex flex-col gap-[70px] mx-auto justify-between '>
            <div className='sm:hidden  inline w-[280px] h-[29px] font-[Urbanist] font-[700] leading-[48px] text-[#F8F9FB] text-3xl tracking-[.07em] text-center bottom-[190px]'>Your audience wants links</div>
            <div className='sm:hidden  inline w-[280px] h-[57px]  font-[Urbanist] font-[500] leading-[21.6px] text-[#F8F9FB] tracking-[.09em] text-base'>Make it easy for them by linking products to every post and video</div>
          </div>
          <Link href="/nextPage">
            <div className='sm:hidden inline absolute left-[120px] right-[120px] top-[480px] w-[139px] h-[54px] rounded-[18px] bg-white pt-[16px] pr-[24px] pb-[16px] pl-[24px] mx-auto hover:scale-[1.2] transition duration-[0.7s] ease-in-out'>
              <div className='w-[91px] h-[22px] font-[Urbanist] font-[600] leading-[21.6px] text-black cursor-pointer'>Try For free</div>
            </div>
          </Link>
        </div>
      </div>
      <Image src={previous} alt='previous' width={48} height={48} onClick={goToPrevious} className='absolute top-[50%] left-[8%] md:left-[8%] cursor-pointer hidden md:inline ' />
      <Image src={next} alt='next' width={48} height={48} onClick={goToNext} className='absolute top-[50%] left-[85%] md:left-[90%] cursor-pointer hidden md:inline' />
    </div>
  );
}

export default Section;
