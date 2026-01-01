import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaPinterest } from 'react-icons/fa';
import LogoImg from  "../../assets/images/chef_log.png";
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="bg-[#101010] text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-16">
          <Image 
                  src={LogoImg} 
                  alt="Chef Buddy Logo" 
                  width={150}
                  height={60}
                  className="object-contain"
                  priority
                />
         
        </div>

        {/* Links Grid: Mobile-e 3 column, Desktop-e 4 column */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-y-12 gap-x-4 mb-16">
          
          {/* Services Section */}
          <div className="order-1">
            <h3 className="font-bold text-sm md:text-lg mb-6">Services</h3>
            <ul className="space-y-4 text-gray-400 text-xs md:text-sm">
              <li><a href="#" className="hover:text-white transition">Small Buffet</a></li>
              <li><a href="#" className="hover:text-white transition">Party</a></li>
              <li><a href="#" className="hover:text-white transition">Wedding</a></li>
              <li><a href="#" className="hover:text-white transition">Combos</a></li>
              <li><a href="#" className="hover:text-white transition">Birthday</a></li>
              <li><a href="#" className="hover:text-white transition">Family dine</a></li>
            </ul>
          </div>

          {/* Menu Section */}
          <div className="order-2">
            <h3 className="font-bold text-sm md:text-lg mb-6">Menu</h3>
            <ul className="space-y-4 text-gray-400 text-xs md:text-sm">
              <li><a href="#" className="hover:text-white transition">Burger</a></li>
              <li><a href="#" className="hover:text-white transition">Chicken</a></li>
              <li><a href="#" className="hover:text-white transition">Indian Curry</a></li>
              <li><a href="#" className="hover:text-white transition">Combos</a></li>
              <li><a href="#" className="hover:text-white transition">Drinks</a></li>
              <li><a href="#" className="hover:text-white transition">Full Menu</a></li>
            </ul>
          </div>

          {/* About Section */}
          <div className="order-3">
            <h3 className="font-bold text-sm md:text-lg mb-6">About</h3>
            <ul className="space-y-4 text-gray-400 text-xs md:text-sm">
              <li><a href="#" className="hover:text-white transition">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition">Mission & Vision</a></li>
              <li><a href="#" className="hover:text-white transition">Quality Standards</a></li>
              <li><a href="#" className="hover:text-white transition">Locations</a></li>
              <li><a href="#" className="hover:text-white transition">Gallery</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact & Social Section: Mobile view-te niche full width nibe */}
          <div className="col-span-3 md:col-span-1 flex justify-between items-start pt-8 md:pt-0 order-4">
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-sm md:text-lg mb-4">Address</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-[200px]">
                  45 Kingsway Street, London, WC2B 6PF, United Kingdom
                </p>
              </div>
              <div>
                <h3 className="font-bold text-sm md:text-lg mb-4">Phone</h3>
                <p className="text-gray-400 text-xs md:text-sm">3119-3455-6677</p>
              </div>
              <div>
                <h3 className="font-bold text-sm md:text-lg mb-4">Email</h3>
                <p className="text-gray-400 text-xs md:text-sm">info@chefbuddy.com</p>
              </div>
            </div>

            {/* Social Icons - Vertical on mobile per screenshot */}
            <div className="flex flex-col space-y-6 pt-2">
              <a href="#" className="text-white hover:text-[#F39C12] transition text-xl"><FaFacebook /></a>
              <a href="#" className="text-white hover:text-[#F39C12] transition text-xl"><FaInstagram /></a>
              <a href="#" className="text-white hover:text-[#F39C12] transition text-xl"><FaLinkedin /></a>
              <a href="#" className="text-white hover:text-[#F39C12] transition text-xl"><FaYoutube /></a>
              <a href="#" className="text-white hover:text-[#F39C12] transition text-xl"><FaPinterest /></a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-[10px] md:text-xs">
            © 2025 Chef Buddy ®. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;