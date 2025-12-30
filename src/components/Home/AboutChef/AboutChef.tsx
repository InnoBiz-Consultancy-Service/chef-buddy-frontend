"use client";

import Image, { StaticImageData } from "next/image";
import serveSafe from "../../../assets/images/serveSafe.png";
import nutrition from "../../../assets/images/nutrition.png";
import certifiedChef from "../../../assets/images/certifiedChef.png";

interface AboutChefProps {
  chefImage: StaticImageData | string; // Dynamic 
}

export default function AboutChef({ chefImage }: AboutChefProps) {
  return (
    <section className="bg-[#FCF8F3] py-16 md:py-24 px-4 overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-stretch">
        
     
        <div className="relative w-full h-[400px] md:h-[600px] lg:h-full min-h-[400px] lg:min-h-[500px] rounded-[24px] overflow-hidden shadow-xl order-first lg:order-last">
          <Image
            src={chefImage}
            alt="Chef Raz Working"
            fill
            className="object-cover"
            priority
          />
        </div>

       
        <div className="flex flex-col justify-between gap-6 max-w-[550px] mx-auto lg:mx-0 order-last lg:order-first">
          <div className="space-y-6">
            <div>
              <h2 className="text-[32px] md:text-[48px] font-bold text-[#1D1D1D] leading-tight">
                About The Chef
              </h2>
              <p className="text-[14px] md:text-[16px] text-[#4A4A4A] mt-2 italic">
                The best Indian Food Chef in town
              </p>
            </div>

            <div className="flex flex-col gap-4 text-[#4A4A4A] leading-[1.6] text-[15px] md:text-[16px]">
              <p>
                Chef Raz is a passionate private chef with 7+ years of experience,
                bringing the warmth and authenticity of Indian cuisine straight to your table. 
                As a Lifetime Member of the Chef Federation of Bangladesh and a Member of the 
                Federation of Chefs Scotland, he blends international expertise with traditional 
                Indian flavours.
              </p>
              <p>
                Specialising in handcrafted spices, slow-cooked curries, and homestyle dishes, 
                Chef Raz creates personalised dining experiences that make every occasion feel 
                special — from intimate dinners to celebrations. Flavourful, comforting, and 
                made with heart.
              </p>
            </div>
          </div>

         
        {/* Badges/Certifications - Text Alignment Fix */}
<div className="flex flex-wrap items-end gap-8 mt-auto pt-6">
  {/* ServeSafe */}
  <div className="flex flex-col items-center gap-2">
    <div className="flex items-center justify-center h-[54px]"> {/* Image wrapper to keep height same */}
      <Image src={serveSafe} alt="ServeSafe" width={50} height={50} className="object-contain" />
    </div>
    <span className="text-[12px] font-medium text-[#1D1D1D] leading-none">ServeSafe</span>
  </div>

  {/* Nutrition */}
  <div className="flex flex-col items-center gap-2">
    <div className="flex items-center justify-center h-[54px]">
      <Image src={nutrition} alt="Nutrition" width={58} height={54} className="object-contain" />
    </div>
    <span className="text-[12px] font-medium text-[#1D1D1D] leading-none">Nutrition</span>
  </div>

  {/* Certified Chef */}
  <div className="flex flex-col items-center gap-2">
    <div className="flex items-center justify-center h-[54px]">
      <Image src={certifiedChef} alt="Certified Chef" width={50} height={50} className="object-contain" />
    </div>
    <span className="text-[12px] font-medium text-[#1D1D1D] leading-none">Certified Chef</span>
  </div>
</div>
        </div>

      </div>
    </section>
  );
}