"use client"
import React from 'react';
import Image from 'next/image';

// Images Import
import privateHome from "../../../assets/images/privateHome.png";
import eventCatering from "../../../assets/images/eventCatering.png";
import smallBuffet from "../../../assets/images/smallBuffet.png";
import specialBBQ from "../../../assets/images/specialBBQ.png";
import cookingClasses from "../../../assets/images/cookingClass.png";

const services = [
  {
    title: "Private Home Dining",
    description: "A bespoke, multi-course Indian dining experience prepared fresh in your kitchen.",
    icon: privateHome,
  },
  {
    title: "Event Catering",
    description: "Perfect for birthdays, anniversaries, engagements, parties, and special occasions.",
    icon: eventCatering,
  },
  {
    title: "Small Buffet Dine-In",
    description: "Ideal for small gatherings where you want a variety of fresh Indian dishes.",
    icon: smallBuffet,
  },
  {
    title: "Special BBQ Service",
    description: "Perfect for parties, providing delicious grilled meats, seafood, sides, and a memorable experience.",
    icon: specialBBQ,
  },
  {
    title: "Cooking Classes",
    description: "Interactive, fun, and flavorful cooking experiences for all skill levels.",
    icon: cookingClasses,
  }
];

const Services = () => {
  // scroll handler function
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('book-chef');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 lg:py-12 bg-[#FFFAF6] w-full px-4 md:px-8 lg:px-12">
      <div className="text-center mb-12">
        <h2 className="text-[28px] md:text-[48px] font-bold text-[#2D2D2D]">Our Services</h2>
        <p className="text-gray-600 mt-2 max-w-2xl text-[14px] md:text-[17px] mx-auto">
          A personalized fine-dining experience, crafted fresh in your kitchen.
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-[1428px] mx-auto">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white p-6 md:p-8 rounded-[16px] border border-gray-100 flex flex-col items-center text-center w-full shadow-sm hover:shadow-md transition-all group"
          >
            {/* Service Icon Container */}
            <div className="flex justify-center items-center mb-4 h-[70px]">
              <Image
                src={service.icon} 
                alt={service.title}
                width={60} 
                height={60}
                className="object-contain"
                style={{
                  filter: 'invert(58%) sepia(93%) saturate(1352%) hue-rotate(359deg) brightness(102%) contrast(107%)'
                }}
              />
            </div>

            <h3 className="text-[18px] lg:text-[20px] font-bold text-[#000] mb-3 leading-tight min-h-[50px] flex items-center justify-center">
              {service.title}
            </h3>
            
            <p className="text-gray-500 text-[14px] leading-relaxed mb-6 flex-grow">
              {service.description}
            </p>

            {/* Contact Us Button - Connected to book-chef ID */}
            <button 
              onClick={scrollToContact}
              className="font-bold transition-all hover:scale-105 active:scale-95 bg-[#DF7800] text-white py-2 px-6 rounded-full text-[15px] w-full max-w-[180px] cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;