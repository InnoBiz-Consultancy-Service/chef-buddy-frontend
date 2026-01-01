"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import LogoImg from "../../assets/images/chef_log.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // স্ক্রল এবং মেনু বন্ধ করার ফাংশন
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('book-chef');
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // বুক নাও ক্লিক করলে মেনু বন্ধ হবে
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Menu', href: '/menu' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-[100] bg-transparent transition-all duration-300">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-[120px]">
        <div className="flex items-center justify-between h-[80px] lg:h-[101px]">
          
          <Link href="/" className="flex-shrink-0 z-[110]">
             <div className="relative w-[120px] h-[50px] lg:w-[150px] lg:h-[60px]">
                <Image src={LogoImg} alt="Chef Buddy" fill className="object-contain" priority />
             </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-10">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-white hover:text-[#F7931E] transition-all text-[18px] font-semibold">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <button 
              onClick={scrollToContact}
              className="bg-[#F7931E] text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-all cursor-pointer"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white z-[110] p-2 focus:outline-none">
            {isOpen ? <X size={35} /> : <Menu size={35} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`fixed inset-0 bg-[#1a1a1a] z-[105] flex flex-col items-center justify-center transition-transform duration-500 lg:hidden ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="flex flex-col space-y-8 text-center">
            {navLinks.map((link) => (
               <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)} // লিংক ক্লিক করলে মেনু বন্ধ হবে
                className="text-white text-3xl font-bold hover:text-[#F7931E] transition-colors"
               >
                  {link.name}
               </Link>
            ))}
            
            {/* Mobile Book Now Button */}
            <button 
              onClick={scrollToContact}
              className="bg-[#FFDBB1] text-black px-10 py-4 rounded-full font-extrabold text-xl cursor-pointer active:scale-95 transition-transform"
            >
               Book Now
            </button>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;