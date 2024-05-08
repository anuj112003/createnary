import React from 'react'
import background from "../assests/background.png"
import Image from 'next/image'
import heroimage from "../assests/HeroImage.png"
import Link from 'next/link'
import Section from './Section'
import Calculator from './Calculator'
import Question from './Question'
import mobile from "../assests/mobile.png"
function dasboard() {
  return (
    
    <div className=' md:w-full sm:w-[800px] w-[385px] '>
      <div className=' absolute -z-20 lg:w-full md:w-[1024px] w-[100%] sm:w-[875px] top-[-50px] lg:h-[1024px]  '>
        <Image src={background} alt='background' className='w-full hidden sm:inline ' />
        <Image src={mobile} alt='mobile' width={690} height={800} className='sm:hidden inline  '/>
      </div>
      <div className='sm:w-[28%]  xl:w-[28%]  w-[300px] sm:h-[630px] h-[450px] absolute sm:top-[126px]  top-[300px]   lg:md:left-[730px] xl:left-[820px] 2xl:left-[1100px] 3xl:left-[1400px] left-[-70px] -z-20 ' >
         <Image src={heroimage} alt='Mobile' className=' absolute left-[105px] md:left-[730px] lg:left-[10px] xl:left-[105px]   sm:left-[740px] 2xl:left-[10px]  shadow-[rgba(0,0,0,0.2)]' width={420} height={630} />
      </div>
      <div className='w-[474px]  h-[360px] absolute top-[232px] sm:top-[132px] left-[180px] sm:left-[50px] gap-[50px]  -z-20 hidden sm:inline' >
         <div className='w-[474px]  h-[256px] lg:gap-[28px] md:gap-[12px] sm:gap-[4px]  flex flex-col'>
             <div className='w-[474px]  h-[162px] lg:gap-[40px] md:gap-[12px] sm:gap-[1px] flex flex-col'>
                <div className='w-[474px] h-[96px]  gap-[40px] font-[Urbanist] font-[700]  leading-[48px] text-black lg:text-4xl md:text-2xl sm:text-xl tracking-[.07em]'>
                  Welcome To India’s First <span className=' bg-gradient-to-r from-[rgba(74,80,142,1)] to-[rgba(103,74,142,1)] inline-block text-transparent bg-clip-text'>Creator’s Marketplace</span> 
                </div>
                <div className='w-[368px] h-[26px] sm:absolute sm:top-[70px] lg:top-[90px] font-[Urbanist] font-[700] text-xl tracking-wide leading-[26.4px] text-black '>
                  Create your first E-Store @ Zero Cost
                </div>
             </div>
             <div className='w-[474px] h-[66px]  font-[Urbanist]  font-[530] leading-[21.6px] text-black text-lg tracking-wide sm:absolute sm:top-[100px] lg:top-[120px]'>Empower your creativity with Createnary. Showcase, sell, and connect with a global audience effortlessly, turn your products into profits.</div>
             <Link href="/nextPage"><div className=' w-[144px] h-[54px] rounded-[18px] bg-[rgba(74,80,142,1)] pt-[16px] pr-[24px] pb-[16px] pl-[24px] hover:scale-[1.2] transition duration-[0.7s] ease-in-out cursor-pointer' >
                <div className='w-[96px] h-[22px]  font-[Urbanist]  font-[600] leading-[21.6px] text-white cursor-pointer '>Get Started</div>
             </div> </Link>
         </div>
      </div>
      <div className='w-[284px] h-[160px] mt-[184px] ml-[48px] absolute top-[-210px] rounded-[12px] sm:hidden inline '>
      <div><div className='w-[280px] h-[58px] mt-[184px] ml-[25px]  font-[Urbanist] text-2xl '>Welcome To India’s First </div>
      <div className=' ml-[50px] mb-[20px] mt-[5px] bg-gradient-to-r from-[rgba(74,80,142,1)] to-[rgba(103,74,142,1)] inline-block text-transparent bg-clip-text font-[Urbanist] absolute top-[205px] text-xl'>Creator’s Marketplace</div> 
       <div className='w-[281px] h-[19px] mt-[9px] mb-[20px] ml-[20px] font-[Urbanist] font-[300]  absolute top-[235px] '>Create your first E-Store @ Zero Cost </div>
       </div>
      
       <Link href="/nextPage"><div className=' w-[126px] h-[43px] mt-[40px] ml-[60px] rounded-[18px]  bg-[rgba(74,80,142,1)] pt-[12px] pr-[20px] pb-[12px] pl-[20px] hover:scale-[1.2] transition duration-[0.7s] ease-in-out cursor-pointer ' >
                <div className='w-[86px] h-[19px]  font-[Urbanist]  font-[600] leading-[21.6px] text-white cursor-pointer '>Get Started</div>
             </div> </Link>
      </div>
      <Section/>
      <Calculator/>
      <Question/>
    </div>
   
  )
}

export default dasboard

