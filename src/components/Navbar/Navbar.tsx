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
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Menu', href: '/menu' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
  ];

  // স্মুথ স্ক্রল হ্যান্ডলার
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false); // মোবাইল মেনু খোলা থাকলে বন্ধ করে দেবে
      }
    }
  };

  return (
    <nav 
      className="absolute top-0 left-0 w-full z-50 bg-transparent transition-all duration-300"
      style={{
        filter: 'drop-shadow(0px 32px 40px rgba(0, 0, 0, 0.10))'
      }}
    >
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[120px]">
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

          {/* Desktop Menu */}
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

          {/* Desktop Book Now Button */}
          <div className="hidden lg:block">
            <a href="#book-chef" onClick={handleScroll}>
              <button className="bg-[#F4C48E] text-[#2D2D2D] px-10 py-4 rounded-full font-bold text-[18px] hover:scale-105 transition-all cursor-pointer border-none">
                Book Now
              </button>
            </a>
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
                
                {/* Mobile Book Now Button */}
                <a href="#book-chef" onClick={handleScroll}>
                  <button className="w-full bg-[#FFDBB1] text-black py-5 font-extrabold text-xl rounded-xl cursor-pointer">
                     Book Now
                  </button>
                </a>
             </div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;