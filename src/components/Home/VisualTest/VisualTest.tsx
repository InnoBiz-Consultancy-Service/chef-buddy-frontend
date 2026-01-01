"use client";

import React from 'react';
import Image, { type StaticImageData } from 'next/image';


interface GalleryImage {
  id: number;
  src: string | StaticImageData;
  span: string;
  objectPos?: string; // নির্দিষ্ট ইমেজের ফোকাস পয়েন্ট ঠিক করার জন্য
}

import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";
import img4 from "../../../assets/4.png";
import img5 from "../../../assets/5.png";
import img6 from "../../../assets/6.png";
import img7 from "../../../assets/7.png";
import img8 from "../../../assets/8.png";
import img9 from "../../../assets/9.png";
import img10 from "../../../assets/10.png";
import img11 from "../../../assets/11.png";
import img12 from "../../../assets/12.png";

const ChefGallery: React.FC = () => {
 
  const images: GalleryImage[] = [
    { id: 1, src: img1, span: 'col-span-12 md:col-span-3 w-full lg:w-[342px] h-[250px] md:h-[261px]' },
    { id: 2, src: img2, span: 'col-span-12 md:col-span-3 w-full lg:w-[342px] h-[300px] md:h-[314px]' },
    { id: 3, src: img3, span: 'col-span-12 md:col-span-4 w-full lg:w-[462px]  h-[250px] md:h-[300px]' },
    // ৪ নম্বর ইমেজে 'object-top' যোগ করা হয়েছে যাতে মাথা না কাটে
    { id: 4, src: img4, span: 'col-span-12 md:col-span-2 w-full lg:w-[342px] h-[340px] md:h-[343px]', objectPos: 'object-top' },
    { id: 5, src: img5, span: 'col-span-12 md:col-span-3 h-[220px] md:h-[222px] md:-mt-15' },
    { id: 6, src: img6, span: 'col-span-12 md:col-span-3 h-[350px] md:h-[364px] md:-mt-2' }, 
    { id: 7, src: img7, span: 'col-span-12 md:col-span-4 w-full lg:w-[462px] h-[300px] md:h-[309px] md:-mt-10' },
    { id: 8, src: img8, span: 'col-span-12 md:col-span-2 h-[220px] md:h-[227px] w-full lg:w-[342px] md:mt-5' },
    { id: 9, src: img9, span: 'col-span-12 md:col-span-3 h-[350px] md:h-[379px] md:-mt-38' },
    { id: 10, src: img10, span: 'col-span-12 md:col-span-3 h-[180px] md:h-[186px] md:mt-10' },
    { id: 11, src: img11, span: 'col-span-12 md:col-span-4 w-full lg:w-[462px] h-[280px] md:h-[293px] md:-mt-16' },
    { id: 12, src: img12, span: 'col-span-12 md:col-span-2 h-[280px] md:h-[293px] w-full lg:w-[342px] md:-mt-16' },
  ];

  return (
    <section className="py-10  md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4">
        
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 px-2">
            A visual taste of our craft and cuisine.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
            A curated glimpse into the refinement, detail, and ritual <br className="hidden md:block" />
            behind every Harp & Suited experience.
          </p>
        </div>

        <div className="grid grid-cols-12 items-start">
          {images.map((img) => (
            <div 
              key={img.id} 
              className={`relative overflow-hidden shadow-sm group transition-all duration-300 rounded-lg ${img.span}`}
            >
              <Image
                src={img.src}
                alt={`Culinary creation ${img.id}`}
                fill
                // এখানে objectPos ব্যবহার করা হয়েছে (ডিফল্ট object-center)
                className={`object-cover ${img.objectPos || 'object-center'} transition-transform duration-700 group-hover:scale-110`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={img.id <= 4} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefGallery;