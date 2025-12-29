"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import LogoImg from "../../assets/images/chef_log.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <nav 
      className="absolute top-0 left-0 w-full z-50 bg-transparent transition-all duration-300"
      style={{
        // Figma Drop Shadow: X=0, Y=32, Blur=40, Spread=0, Color=#000000 @ 10%
        filter: 'drop-shadow(0px 32px 40px rgba(0, 0, 0, 0.10))'
      }}
    >
      {/* Width set to Figma 1920px (max-width) */}
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[120px]">
        {/* Height set to Figma 101px & Gap: 8px */}
        <div className="flex items-center justify-between h-[101px] gap-2">
          
          {/* Logo Section */}
          <Link href="/" className="flex-shrink-0">
             <div className="relative w-[150px] h-[60px]">
                <Image 
                  src={LogoImg} 
                  alt="Chef Buddy Logo" 
                  fill
                  className="object-contain"
                  priority
                />
             </div>
          </Link>

          {/* Desktop Menu - Text visibility fixed with contrast shadow */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-[#F4C48E] transition-all duration-300 text-[18px] font-semibold drop-shadow-md"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Book Now Button */}
          <div className="hidden lg:block">
            <button className="bg-[#F4C48E] text-[#2D2D2D] px-10 py-4 rounded-full font-bold text-[18px] hover:scale-105 transition-all border-black">
              Book Now
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(true)} className="text-white">
              <Menu size={35} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[100] transform transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setIsOpen(false)} />
          <div className="relative bg-[#1a1a1a] h-full w-[80%] ml-auto p-10 flex flex-col">
             <button onClick={() => setIsOpen(false)} className="self-end text-white mb-10">
                <X size={40} />
             </button>
             <div className="flex flex-col space-y-8">
                {navLinks.map((link) => (
                   <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-white text-2xl font-bold border-b border-white/10 pb-4">
                      {link.name}
                   </Link>
                ))}
                <button className="bg-[#FFDBB1] text-black py-5 font-extrabold text-xl border-black cursor-pointer">
                   Book Now
                </button>
             </div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;