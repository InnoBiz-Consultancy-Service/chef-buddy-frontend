"use client";

import React from 'react';
import Image from 'next/image';
import HeroBg from "../../../assets/images/Banner1.jpg"; 
import fresh from "../../../assets/images/fresh.png";
import menu from "../../../assets/images/personalizedMenu.png";
import makeHome from "../../../assets/images/MakeHome.png";

const Banner = () => {
  const scrollToContact = (e: React.MouseEvent) => {
      e.preventDefault();
      const element = document.getElementById('book-chef');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  return (
    <section className="relative w-full overflow-hidden min-h-screen lg:h-[1018px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={HeroBg}
          alt="Private Chef Services"
          fill
          className="object-cover"
          priority
        />
        <div 
          className="absolute inset-0 w-full h-full z-[1]" 
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.9) 100%)'
          }}
        />
      </div>

      {/* Hero Content Section */}
      <div className="relative z-10 max-w-[1920px] mx-auto h-full min-h-screen flex flex-col items-center justify-center px-6 text-center">
        
        {/* Main Content */}
        <div className="flex flex-col items-center mb-20 lg:mb-0">
          <h1 className="text-white text-[32px] md:text-[54px] lg:text-[72px] font-extrabold leading-[1.2] lg:leading-[1.1] max-w-[950px]">
            Private Chef Services for <span className='block lg:inline text-[#F7931E]'>Elevated</span> At-Home Dining
          </h1>

          <p className="text-gray-200 text-[16px] md:text-[18px] lg:text-[20px] mt-6 max-w-[800px] leading-relaxed">
            Enjoy the rich aromas and vibrant spices of India—crafted fresh in your home. 
            From intimate dinners to family celebrations and corporate gatherings.
          </p>

          <button 
          onClick={scrollToContact}
            className="mt-10 font-bold transition-all hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer bg-[#F7931E] text-black rounded-full"
            style={{
              width: '274px',
              height: '59px',
              fontSize: '18px',
            }}
          >
            Book a Consultation
          </button>
        </div>

        {/* Bottom Features Section (CommonBanner style follow kore) */}
        <div className="absolute bottom-0 left-0 right-0 w-full z-20">
          <div className="bg-gradient-to-t from-black via-black/80 to-transparent pt-24 pb-8">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-around items-center px-4 lg:px-8">
              
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center mx-4 my-4 min-w-[140px] group">
                <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-[#F7931E] shadow-lg transition-transform group-hover:scale-110">
                  <Image src={fresh} alt="Fresh Ingredients" width={24} height={24} />
                </div>
                <p className="text-white font-medium text-sm md:text-base">Fresh Ingredients</p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center mx-4 my-4 min-w-[140px] group">
                <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-[#F7931E] shadow-lg transition-transform group-hover:scale-110">
                  <Image src={menu} alt="Personalized Menus" width={24} height={24} />
                </div>
                <p className="text-white font-medium text-sm md:text-base">Personalized Menus</p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center mx-4 my-4 min-w-[140px] group">
                <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-[#F7931E] shadow-lg transition-transform group-hover:scale-110">
                  <Image src={makeHome} alt="Chef at Home" width={24} height={24} />
                </div>
                <p className="text-white font-medium text-sm md:text-base">Chef-Prepared at Home</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;