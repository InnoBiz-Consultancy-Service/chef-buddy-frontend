"use client";

import React from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import bgImg from "../../assets/13.png";
const BookChef: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-12 md:py-20 px-4 md:px-6">
      {/* Background Section */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        
      >
        <Image
    src={bgImg}
    alt="Background"
    fill
    className="object-cover object-center fixed"
    priority
  />
        <div className="absolute inset-0 bg-black/40 md:bg-black/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        
        {/* Left Side: Contact Info */}
        <div className="text-white space-y-8 md:space-y-10 text-center lg:text-left">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Book Your Private Chef
            </h2>
            <div className="space-y-4 text-gray-200 md:text-gray-300 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              <p>
                Fine dining, meal prep, events, and more — crafted personally for you. 
                Whether you're hosting an intimate dinner or planning a family 
                celebration, we tailor every detail to your taste.
              </p>
              <p>
                Share your vision, dietary needs, and preferred date, and we'll curate a 
                menu just for you. Reach out today and let us bring authentic Indian 
                flavors to your table.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center lg:items-start justify-center lg:justify-start gap-8 md:gap-12 pt-4">
            <div className="flex flex-col items-center gap-2">
              <Phone size={32} strokeWidth={1.5} className="text-white" />
              <span className="text-[10px] md:text-xs font-light tracking-wider whitespace-nowrap">+33 7 57 58 75 42</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <Mail size={32} strokeWidth={1.5} className="text-white" />
              <span className="text-[10px] md:text-xs font-light tracking-wider whitespace-nowrap">chefbuddycontact@gmail.com</span>
            </div>

            <div className="flex flex-col items-center gap-2 max-w-[200px]">
              <MapPin size={32} strokeWidth={1.5} className="text-white" />
              <span className="text-[10px] md:text-xs font-light tracking-wider text-center leading-tight">
                8 Rue Hittorf, 75010 Paris, France
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white/80 backdrop-blur-md border border-white/20 p-6 md:p-12 rounded-2xl shadow-2xl">
          <h3 className="text-black text-xl md:text-2xl font-medium mb-8 md:mb-10 text-center lg:text-left">Send Us a Message</h3>
          
          <form className="space-y-6 md:space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-transparent border-b border-gray-500 py-2 text-black outline-none focus:border-[#e67e22] transition-all placeholder:text-black font-light text-sm md:text-base" 
              />
              <input 
                type="email" 
                placeholder="E-mail Address" 
                className="w-full bg-transparent border-b border-gray-500 py-2 text-black outline-none focus:border-[#e67e22] transition-all placeholder:text-black font-light text-sm md:text-base" 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              <input 
                type="text" 
                placeholder="Phone" 
                className="w-full bg-transparent border-b border-gray-500 py-2 text-black outline-none focus:border-[#e67e22] transition-all placeholder:text-black font-light text-sm md:text-base" 
              />
              <div className="relative">
                <select className="w-full bg-transparent border-b border-gray-500 py-2 text-black outline-none focus:border-[#e67e22] transition-all appearance-none font-light text-sm md:text-base">
                  <option value="" className="bg-white text-black">Select Service</option>
                  <option value="private" className="bg-white text-black">Private Chef</option>
                  <option value="event" className="bg-white text-black">Event Catering</option>
                </select>
                <div className="absolute right-0 bottom-3 pointer-events-none">
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>

            <textarea 
              placeholder="A brief description about your needs" 
              rows={6} 
              className="w-full bg-transparent border-b border-gray-500 py-2 text-black outline-none focus:border-[#e67e22] transition-all resize-none placeholder:text-black font-light text-sm md:text-base"
            ></textarea>

            <div className="flex justify-center">
              <button 
                type="submit"
                className="w-full md:max-w-xs bg-[#e67e22] hover:bg-[#d35400] text-white font-medium py-3 rounded-xl transition-all shadow-lg uppercase tracking-widest text-sm active:scale-95 cursor-pointer"
              >
                Submit Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default BookChef;