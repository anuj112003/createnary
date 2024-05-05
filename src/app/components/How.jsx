import React from 'react'
import work from "../assests/work.png"
import Image from 'next/image'
function How() {
  return (
    <div className='   sm:w-[1024] xl:w-full w-[375px] lg:sm:h-[1575px] xl:h-[1975px] h-[1433px] bg-white flex  absolute sm:top-[120px] top-[155px] shadow-[rgba(236,233,233,0.1)] '>
        <div className='  w-[450px] h-[600px]  ml-[180px] '>
          <div className='  sm:w-[450px] sm:h-[240px] w-[348px] h-[350px] ml-[-170px] sm:ml-[-100px] flex flex-col gap-[50px] sm:mt-[60px] mt-[20px]  '>
            <div className='  sm:w-[450px] sm:h-[136px] w-[345px] h-[300px] gap-[28px] flex flex-col   '>
              <div className=' sm:w-[450px] sm:h-[64px] w-[343px] h-[54px] font-[Urbanist] font-[700] leading-[32.4px] text-black text-2xl sm:text-3xl  sm:tracking-wide '>GetSetYo handholds you at every step of the way</div>
              <div className='sm:w-[450px] sm:h-[44px] w-[330px] text-[14px] h-[34px] font-[Urbanist] font-[400] sm:leading-[21.6px] leading-[16.8px] text-[#404040] text-lg tracking-wider'>You focus on helping your friends and family, we take care of everything else.</div>
            </div>
            <div className='  sm:w-[144px] sm:h-[54px] w-[126px] h-[43px] absolute top-[170px] sm:top-[220px] rounded-[18px] bg-[rgba(74,80,142,1)] pt-[16px] pr-[24px] pb-[16px] pl-[24px] cursor-pointer hover:scale-[1.2] transition duration-[0.7s] ease-in-out' >
                <div className=' w-[96px] h-[22px]  font-[Urbanist]  font-[600] leading-[21.6px] text-white '>Get Started</div>
             </div> 
          </div>
        </div>
        <div className=' lg:sm:w-[430px] xl:w-[630px] sm:h-[1975px] w-[0px] h-[1198px]  flex gap-[50px] '>
          <div className='sm:w-[60px] sm:h-[1972px] w-[34px] h-[1180px] absolute  sm:top-[1px] sm:left-[520px]  lg:left-[600px] xl:left-[680px] top-[250px] left-[6px]  '>
             <div className='sm:w-[60.86px] sm:h-[60px] w-[40px] h-[40px]  rounded-[8px] bg-[#4A508E]  '>
              <div className='w-[12.17px] h-[43px] absolute sm:top-[8px] top-[1px] sm:left-[0px] left-[-7px] sm:text-3xl text-20px  z-10 ml-[23px] font-[Urbanist]  font-[700] leading-[43.2px] text-white '> 1</div>
             </div>
             <div className='w-[2px] bg-[#D6D6D6] sm:h-[1910px] h-[1120px]  mx-auto -z-10 '></div>
             <div className='sm:w-[60.86px] sm:h-[60px] w-[40px] h-[40px] rounded-[8px] bg-[#4A508E] absolute sm:top-[521px] top-[321px]'>
              <div className='w-[12.17px] h-[43px] absolute sm:top-[8px] top-[1px] sm:left-[0px] left-[-7px] sm:text-3xl text-20px z-10 ml-[23px] font-[Urbanist]  font-[700] leading-[43.2px] text-white '> 2</div>
             </div>
             <div className='sm:w-[60.86px] sm:h-[60px] w-[40px] h-[40px] rounded-[8px] bg-[#4A508E] absolute  sm:top-[1044px] top-[635px]'>
              <div className='w-[12.17px] h-[43px] absolute sm:top-[8px] top-[1px] sm:left-[0px] left-[-7px] sm:text-3xl text-20px z-10 ml-[23px] font-[Urbanist]  font-[700] leading-[43.2px] text-white '>3</div>
             </div>
             <div className='sm:w-[60.86px] sm:h-[60px] w-[40px] h-[40px] rounded-[8px] bg-[#4A508E] absolute sm:top-[1565px] top-[935px]'>
              <div className='w-[12.17px] h-[43px] absolute sm:top-[8px] top-[1px] sm:left-[0px] left-[-7px] sm:text-3xl text-20px z-10 ml-[23px] font-[Urbanist]  font-[700] leading-[43.2px] text-white '> 4</div>
             </div>
          </div>
          <div className='w-[520px] h-[1975px]   gap-[120px] flex flex-col '>
             <div className='lg:sm:w-[320px] xl:w-[520px] sm:h-[403px] w-[283px] h-[250.83px] gap-[24px]  flex flex-col   absolute sm:left-[620px] lg:left-[700px] xl:left-[800px] sm:top-[5px] left-[68px] top-[248px]'>
              <div className='lg:sm:w-[320px] xl:w-[520px] sm:h-[57px] w-[280px] h-[88px]  font-[Urbanist] font-[700] leading-[26.4px] text-[#11151D] sm:text-xl text-[14px] tracking-wider   '>Share the holidays, stays and experiences with your friends and family</div>
              <div className='lg:sm:w-[320px] xl:w-[520px] sm:h-[34px] w-[283px] h-[32px] xl:mt-[-9px] lg:sm:mt-[30px] font-[Urbanist] font-[500] leading-[19.2px] text-[#404040] text-base tracking-wide'>You receive trending & curated Itineraries and Insider deals on Hotels & Flights to share</div>
              <Image src={work} alt='work' width={520} height={264} className=' shadow-[rgba(0,0,0,0.1)] hidden sm:inline'/>
              <Image src={work} alt='work' width={226.4} height={133} className=' shadow-[rgba(0,0,0,0.1)] sm:hidden inline mt-[15px]'/>
             </div>
             <div className='lg:sm:w-[320px] xl:w-[520px] sm:h-[403px] w-[283px] h-[256px]  gap-[24px]  flex flex-col   absolute sm:left-[620px] lg:left-[700px] xl:left-[800px] sm:top-[525px] left-[68px] top-[570px]'>
              <div className='lg:sm:w-[320px] xl:w-[520px] sm:h-[57px] w-[282px] h-[32px]  font-[Urbanist] font-[700] leading-[26.4px] text-[#11151D] sm:text-xl text-[14px] tracking-wider   '>Understand their requirements and budgets</div>
              <div className='lg:sm:w-[320px] xl:w-[520px] sm:h-[34px] w-[283] h-[34] font-[Urbanist] font-[500] leading-[19.2px] text-[#404040] text-base tracking-wide'>You receive trending & curated Itineraries and Insider deals on Hotels & Flights to share</div>
              <Image src={work} alt='work' width={520} height={264} className=' shadow-[rgba(0,0,0,0.1)] hidden sm:inline'/>
              <Image src={work} alt='work' width={226} height={133} className=' shadow-[rgba(0,0,0,0.1)] sm:hidden inline '/>
             </div>
             <div className='lg:sm:w-[320px] xl:w-[520px] sm:h-[403px] w-[283px] h-[256px] gap-[24px]  flex flex-col  absolute sm:left-[620px] lg:left-[700px] xl:left-[800px] sm:top-[1050px] left-[68px] top-[885px] '>
              <div className='lg:sm:w-[320px] xl:w-[520px] sm:h-[57px] w-[282px] h-[32px] font-[Urbanist] font-[700] leading-[26.4px] text-[#11151D] sm:text-xl text-[14px] tracking-wider   '>Share the payment link, sit back and relax</div>
              <div className='lg:sm:w-[320px] xl:w-[520px] sm:h-[34px] w-[283px] h-[34px] font-[Urbanist] font-[500] leading-[19.2px] text-[#404040] text-base tracking-wide '>You receive trending & curated Itineraries and Insider deals on Hotels & Flights to share</div>
              <Image src={work} alt='work' width={520} height={264} className=' shadow-[rgba(0,0,0,0.1)] hidden sm:inline'/>
              <Image src={work} alt='work' width={226} height={133} className=' shadow-[rgba(0,0,0,0.1)] sm:hidden inline mt-[15px]'/>
             </div>
             <div className='lg:sm:w-[320px] xl:w-[520px] sm:h-[403px] w-[283px] h-[242px] gap-[24px]  flex flex-col  absolute sm:left-[620px] lg:left-[700px] xl:left-[800px] sm:top-[1570px] left-[68px] top-[1185px]'>
              <div className='lg:sm:w-[320px] xl:w-[520px] sm:h-[57px] w-[282px] h-[18px] font-[Urbanist] font-[700] leading-[26.4px] text-[#11151D] sm:text-xl text-[14px] tracking-wider   '>Get Rewarded each time</div>
              <div className='lg:sm:w-[320px] xl:w-[520px] sm:h-[34px] w-[283px] h-[34px] font-[Urbanist] font-[500] leading-[19.2px] text-[#404040] text-base tracking-wide'>You receive trending & curated Itineraries and Insider deals on Hotels & Flights to share</div>
              <Image src={work} alt='work' width={520} height={264} className=' shadow-[rgba(0,0,0,0.1)] hidden sm:inline'/>
              <Image src={work} alt='work' width={226} height={133} className=' shadow-[rgba(0,0,0,0.1)] sm:hidden inline mt-[15px]'/>
             </div>
          </div>
          
        </div>
    </div>
  )
}

export default How