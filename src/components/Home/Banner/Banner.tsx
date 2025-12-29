"use client";

import React from 'react';
import Image from 'next/image';
import HeroBg from "../../../assets/images/Banner1.jpg"; 
import fresh from "../../../assets/images/fresh.png";
import menu from "../../../assets/images/personalizedMenu.png";
import makeHome from "../../../assets/images/MakeHome.png";
const Banner = () => {
  return (
    <section className="relative w-full overflow-hidden lg:h-[1018px] h-screen lg:mt-[-10px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={HeroBg}
          alt="Private Chef Services"
          fill
          className="object-cover"
          priority
        />
        {/* Figma Linear Gradient Overlay (#000000 at 0%) */}
        <div 
          className="absolute inset-0 w-full h-full" 
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 100%)'
          }}
        />
      </div>

      {/* Hero Content Section */}
      <div className="relative z-10 max-w-[1920px] mx-auto h-full flex flex-col items-center justify-center px-6 text-center mt-24 lg:mt-0">
        
        {/* Main Title: Figma 72px equivalent */}
        <div className='w-[365px] height-[126px] top-[194px] left-[38px]'>

        </div>
   <h1 className="text-white text-[32px] md:text-[54px] lg:text-[72px] font-extrabold leading-[1.1] max-w-[950px]">
  Private Chef Services for Elevated At-Home Dining
</h1>

{/* Subtitle */}
<p className="text-gray-200 text-[16px] md:text-[18px] lg:text-[20px] mt-6 max-w-[800px] leading-relaxed">
  Enjoy the rich aromas and vibrant spices of India—crafted fresh in your home. 
  From intimate dinners to family celebrations and corporate gatherings, 
  experience fine Indian cuisine with your own private chef.
</p>

{/* Call to Action Button */}
<button 
  // mt-20 for mobile
  className="mt-20 md:mt-10 font-bold transition-all hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer"
  style={{
    backgroundColor: '#F7931E',
    color: '#000000',
    width: '274px',
    height: '59px',
    borderRadius: '53px',
    fontSize: '18px',
    padding: '10px 34px'
  }}
>
  <span className="font-nunito text-[18px] font-bold leading-none tracking-normal">
    Book a Consultation
  </span>
</button>

        {/* Bottom Features: Responsive Icons */}
        <div className="lg:absolute lg:bottom-16 mt-0 md:mt-16 lg:mt-0 w-full max-w-[1200px] flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-0">
          
         

         
          <div className="flex flex-col items-center group">
            <div className="w-14 h-14 mb-3 flex items-center justify-center mt-80 md:mt-0">
            
                 <Image
              src={fresh}
          alt="Private Chef Services"
           width={52}
           height={47}
          
          className="object-cover bg-[#F7931E]"
          priority
              />
            
            </div>
            <span className="text-white font-semibold text-sm lg:text-[18px]">Fresh Ingredients</span>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center group">
            <div className="w-14 h-14 mb-3 flex items-center justify-center mt-20 md:mt-0">
              
                    <Image
              src={menu}
          alt="Private Chef Services"
           width={52}
           height={47}
          
          className="object-cover bg-[#F7931E]"
          priority
              />
            
            </div>
            <span className="text-white font-semibold text-sm lg:text-[18px]">Personalized Menus</span>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center group">
            <div className="w-14 h-14 mb-3 flex items-center justify-center mt-80 md:mt-0">
              
                 <Image
              src={makeHome}
          alt="Private Chef Services"
           width={52}
           height={47}
          
          className="object-cover bg-[#F7931E]"
          priority
              />
           
            </div>
            <span className="text-white font-semibold text-sm lg:text-[18px]">Chef-Prepared at Home</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;