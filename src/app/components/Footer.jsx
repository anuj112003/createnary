"user client"
import React from 'react'
import location from "../assests/location.png"
import phone from "../assests/phone.png"
import Image from 'next/image'


 


function Footer() {
  return (
    <div className='  lg:w-full md:w-[1024px] w-[100%] sm:h-[385px] sm:w-[870px] h-[517px] absolute sm:top-[3147px]  top-[3100px] bg-[#4A508E] -z-20 '>
        <div className=' md:w-[840px] sm:w-[690px] xl:w-[1080px] absolute h-[229px] top-[40px] left-[180px] '>
          <div className='sm:w-[151px] w-[136px] sm:h-[116px] h-[114px] absolute  sm:left-[540px] md:left-[670px] xl:left-[928px] left-[-160px] sm:top-[30px] top-[280px] flex flex-col gap-[16px] '>
            <div className='sm:w-[83px] w-[79px] sm:h-[19px]  font-[Urbanist] font-[540] leading-[19.2px] text-[#F8F9FB] tracking-widest text-lg '>Contacts</div>
            <div className=' sm:w-[126px] sm:h-[20px] w-[126px] h-[20px] sm:font-[500] font-[300] flex  text-[14px] gap-[16px]'>
                <Image src={location} alt='location' width={22} height={17.5} />
               <div className=  ' w-[91px] h-[19px] font-[Urbanist] font-[500] leading-[19.2px] text-[#F8F9FB] '>Delhi, India</div>
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
  )
}

export default Footer
