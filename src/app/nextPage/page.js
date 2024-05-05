import How from '@/app/components/How'

import React from 'react'
import frame from "../assests/Frame.png"
import Image from "next/image"
import { IoIosInformationCircleOutline } from "react-icons/io";
import vector from "../assests/Vector.png"
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FiShoppingCart } from "react-icons/fi";
import { CiMenuBurger } from "react-icons/ci";

import location from "../assests/location.png"
import phone from "../assests/phone.png"
import Link from 'next/link'


function page() {
  return (
    <div >
        <div className='  '>
        <div className=" sm:w-[824px]  xl:w-[1024px] sm:h-[90px] w-[300px] h-[120px]  absolute z-10 top-[25px] left-11 md:left-[100px] sm:left-[60px]  xl:left-[160px] rounded-[35px]  gap-[50px] bg-[rgba(195,195,195,0.5)]  flex justify-center items-center   " >
           
              <div className=' sm:w-[434px] sm:h-[50px] rounded-[25px] '>
                <div className=' sm:hidden inline w-[20px] h-[20px] absolute top-[21px] left-[250px] shadow-sm cursor-pointer'><CiMenuBurger /></div>
                <div className=' sm:w-[220px] xl:w-[290px] sm:h-[50px] w-[260px] h-[40px] absolute top-[60px] left-[20px] sm:top-[19px] sm:left-[155px] xl:left-[189px] rounded-[25px] bg-[#F8F9FB] '>
                   <div className='  flex '>
                     <Image src={frame}  alt="frame" className='  w-[20px] h-[20px]  absolute sm:top-[15px] top-[10px] left-[16px] '/>
                   </div>
                   <div className=' sm:w-[116px] w-[103pxx] lg:text-lg sm:h-[19px] h-[17px] absolute top-[11px] left-[46px] sm:top-[12px] xl:top-[12px] lg:md:left-[38px] xl:left-[46px] font-[Urbanist] font-[500]  leading-[16.8px] lg:md:leading-[19.2px]    '> <span className=' text-slate-950   '> Search Creators</span></div>
                </div>
               <Link href="/"> <div className=' sm:w-[114px] w-[94px]  sm:h-[26px] h-[22px] text-2xl absolute sm:top-[31px] top-[20px] left-[20px] sm:left-[30.25px] xl:left-[45.25px] font-[Urbanist] font-[700]  leading-[26.4px] text-black  '>Createnary</div></Link>
              </div>
              <div className='md:w-[449.5px] sm:w-[300px] h-[42px] rounded-[15px] hidden sm:inline '>
                <div className='  w-[123px] h-[42px] absolute top-[24px] sm:left-[655.75px] xl:left-[855.75px] rounded-[15px]  flex justify-center items-center gap-[10px] hover:scale-[1.1] transition duration-[0.7s] ease-in-out' style={{padding:"10px,25px,10px,25px"}}>
                  
                    <div className=' w-[43px]  h-[22px] text-xl  font-[Urbanist] font-[520]  leading-[21.6px] text-center text-black cursor-pointer '>Login</div>
                    <div><Image src={vector} alt='vector' className=' w-[13.75px] h-[7.5px] '/></div>
                  
                </div>
                <div className='w-[300px] h-[22px] absolute  top-[34px] sm:left-[400px] xl:left-[529px] gap-[30px] flex'>
                     <div className=' w-[66px] h-[22px] '>
                        <div className=' w-[36px]  h-[22px]  absolute  left-[22px]  font-[Urbanist] font-[500]  leading-[21.6px] text-[rgba(17,21,29,1)] text-center cursor-pointer hover:scale-[1.2] transition duration-[0.7s] ease-in-out'>Cart</div>
                        <div className='w-[20px] h-[20px] absolute top-[1.8px] cursor-pointer hover:scale-[1.2] transition duration-[0.7s] ease-in-out'><FiShoppingCart /></div>
                     </div>
                     <div className=' w-[80px] h-[22px] '>
                        <div className=' w-[20px] h-[20px] absolute top-[1.88px] sm:left-[66px] xl:left-[96px] cursor-pointer hover:scale-[1.2] transition duration-[0.7s] ease-in-out'><IoIosInformationCircleOutline /></div>
                        <div className='w-[49px]  h-[22px]  absolute  sm:left-[85px] xl:left-[115px] font-[Urbanist] font-[500]  leading-[21.6px] text-[rgba(17,21,29,1)] text-center cursor-pointer hover:scale-[1.2] transition duration-[0.7s] ease-in-out'>About</div>
                     </div>
                     <div className=' w-[94px] h-[22px]'>
                        <div className='w-[20px] h-[20px] absolute sm:left-[150px] xl:left-[206px] top-[1.88px] cursor-pointer hover:scale-[1.2] transition duration-[0.7s] ease-in-out'><TfiHeadphoneAlt /></div>
                        <div className='w-[64px]  h-[22px]  absolute  sm:left-[170px] xl:left-[236px] font-[Urbanist] font-[500]  leading-[21.6px] text-[rgba(17,21,29,1)] text-center cursor-pointer hover:scale-[1.2] transition duration-[0.7s] ease-in-out'>Contact</div>
                     </div>
                </div>
              </div>
           
       
    </div>
        
     </div>
        <How/>
        <div className='  lg:w-full md:w-[1024px] w-[105%] sm:h-[385px] sm:w-[910px] h-[517px] absolute sm:top-[2200px]  md:top-[2300px] lg:top-[2300px] top-[1800px] bg-[#4A508E] -z-20 '>
        <div className=' md:w-[840px] sm:w-[740px] xl:w-[1080px] absolute h-[229px] top-[40px] left-[180px] '>
          <div className='sm:w-[151px] w-[136px] sm:h-[116px] h-[114px] absolute  sm:left-[560px] md:left-[670px] xl:left-[928px] left-[-160px] sm:top-[30px] top-[280px] flex flex-col gap-[16px] '>
            <div className='sm:w-[83px] w-[79px] sm:h-[19px]  font-[Urbanist] font-[540] leading-[19.2px] text-[#F8F9FB] tracking-widest text-lg '>Contacts</div>
            <div className=' sm:w-[126px] sm:h-[20px] w-[126px] h-[20px] sm:font-[500] font-[300] flex  text-[14px] gap-[16px]'>
                <Image src={location} alt='location' width={22} height={17.5} />
               <div className='w-[91px] h-[19px] font-[Urbanist] font-[500] leading-[19.2px] text-[#F8F9FB] '>Delhi, India</div>
            </div>
            <div className='   w-[151px] h-[46px]  '>
               <div className='w-[116px] h-[46px]  ml-[35px] space-y-2 text-[14px]'>
                  <div className='w-[116px] h-[19px] font-[Urbanist] font-[500] leading-[19.2px] text-[#F8F9FB] '>+91 98765 43210</div>
                  <div className='w-[116px] h-[19px] font-[Urbanist] font-[500] leading-[19.2px] text-[#F8F9FB] '>+91 99999 99999</div>
               </div>
                <div className='mt-[-26px]'>
                  <Image src={phone} alt='phone' width={20} height={20}/>
                </div>
            </div>
          </div>
          <div className='sm:w-[138px] w-[121px] sm:h-[229px] h-[217px] absolute left-[-160px] md:left-[471px] sm:left-[300px] k top-[30px] flex flex-col sm:gap-[16px] gap-[16px]'>
             <div className='w-[78px] h-[19px]  font-[Urbanist] font-[600] leading-[19.2px] text-[#F8F9FB] cursor-pointer '>Navigation</div>
             <div className='sm:w-[128px] w-[152px] h-[17px] sm::h-[19px] font-[Urbanist] sm:font-[500] font-[300] sm:leading-[19.2px] leading-[16.8px] text-[#F8F9FB]  cursor-pointer text-[14px]'>About Createnary</div>
             <div className='sm:w-[79px] sm:h-[19px]  w-[90px] h-[17] font-[Urbanist] sm:font-[500] font-[300] sm:leading-[19.2px] leading-[16.8px] text-[#F8F9FB] cursor-pointer text-[14px]'>Contact Us</div>
             <div className='sm:w-[50px] sm:h-[19px]  w-[60px] h-[17px] font-[Urbanist] sm:font-[500] font-[300] sm:leading-[19.2px] leading-[16.8px] text-[#F8F9FB] cursor-pointer text-[14px]'>Refund</div>
             <div className='sm:w-[77px] sm:h-[19px]   w-[67px] h-[17px] font-[Urbanist] sm:font-[500] font-[300] sm:leading-[19.2px] leading-[16.8px] text-[#F8F9FB] cursor-pointer text-[14px]'>Newsletter</div>
             <div className='sm:w-[138px] sm:h-[19px]   w-[140px] h-[17px] font-[Urbanist] sm:font-[500] font-[300] sm:leading-[19.2px] leading-[16.8px] text-[#F8F9FB] cursor-pointer text-[14px]'>Terms & Conditions</div>
             <div className='sm:w-[138px] sm:h-[19px] w-[130px] h-[17px] font-[Urbanist] sm:font-[500] font-[300] sm:leading-[19.2px] leading-[16.8px] text-[#F8F9FB] cursor-pointer text-[14px]'>Privacy & Policy</div>
          </div>
        </div>
        <div  className=' sm:w-[192px] w-[153px] sm:h-[29px] h-[31px] absolute sm:top-[142px] top-[10px] sm:left-[180px] left-[16px] text-white leading-[37.36px]'>
          <span className='monton text-2xl '>Createnary</span> 
        </div>
        <div className='w-full absolute h-[1px] top-[328px] border-[0.5px] border-[#F8F9FB] hidden sm:inline' ></div>
        <div className='sm:w-[130px] w-[150px] sm:h-[17px] h-[13px] absolute sm:top-[348px] top-[480px] sm:left-[659px] left-[132px] text-base   font-[Urbanist]  font-[500] leading-[16.8px] text-white tracking-wide'>© Createnary 2024</div>
    </div>
      
    </div>
  )
}

export default page