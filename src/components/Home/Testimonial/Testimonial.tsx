"use client";

import Image from "next/image";
import { useState } from "react";

// Mock Data
const testimonials = [
  {
    id: 1,
    content: "The flavors were rich and authentic without feeling heavy or oily. It's rare to find such quality and flexibility together",
    author: "John D, 27",
    avatar: "/path-to-avatar.jpg", // John-er chobi ekhane hobe
    rating: 5,
  },
  {
    id: 2,
    content: "I wasn't expecting the food to be this good, but honestly it blew me away. The butter chicken is creamy, flavorful, and perfectly balanced — you can taste the freshness in every bite. The staff were incredibly warm, and the service was quick even during peak hours. This place has become my go-to spot for comfort food. Highly recommended!",
    author: "John D, 27",
    avatar: "/path-to-avatar.jpg",
    rating: 5,
  },
  {
    id: 3,
    content: "The curries here have such depth of flavor — you can tell the chefs know what they’re doing.",
    author: "John D, 27",
    avatar: "/path-to-avatar.jpg",
    rating: 5,
  },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(1); // Majher card ti default active

  return (
    <section className="py-16 md:py-24 bg-white px-4">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[32px] md:text-[48px] font-bold text-[#1D1D1D] mb-4">
            Loved by Our Customers
          </h2>
          <p className="text-[#4A4A4A] text-sm md:text-base">
            Real stories from the people who enjoy our food every day.
          </p>
        </div>

        {/* Testimonials Grid/Carousel */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`transition-all duration-500 rounded-[32px] p-8 md:p-12 flex flex-col items-center text-center
                ${index === activeIndex 
                  ? "bg-[#F3EFE3] w-full lg:w-[600px] min-h-[400px] z-10 scale-100" 
                  : "bg-[#F9F8F3] w-full lg:w-[400px] min-h-[350px] lg:scale-95 opacity-80 lg:block hidden"
                }`}
            >
              {/* Review Content */}
              <p className="text-[#1D1D1D] text-sm md:text-base leading-relaxed mb-8 italic">
                &quot;{item.content}&quot;
              </p>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i} className="text-[#967B4F] text-xl">★</span>
                ))}
              </div>

              {/* Author Info */}
              <div className="mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden mx-auto mb-3 border-2 border-white">
                  <Image 
                    src={item.avatar} 
                    alt={item.author} 
                    width={48} 
                    height={48} 
                    className="object-cover"
                  />
                </div>
                <h4 className="text-[#1D1D1D] font-bold text-sm">{item.author}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-10 md:mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex ? "bg-[#967B4F] w-6" : "bg-[#D9D9D9]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}