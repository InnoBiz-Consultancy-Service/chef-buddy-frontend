"use client";

import Image from "next/image";
import React, { useState } from "react";

import gallery1 from "../../assets/images/gallery0.png";
import gallery2 from "../../assets/images/gallery1.png";
import gallery3 from "../../assets/images/gallery2.png";
import gallery4 from "../../assets/images/gallery3.jpg";
import gallery5 from "../../assets/images/gallery4.png";
import gallery6 from "../../assets/images/gallery5.png";
import gallery7 from "../../assets/images/gallery6.png";
import gallery8 from "../../assets/images/gallery7.jpg";
import gallery9 from "../../assets/images/gallery8.png";
import gallery10 from "../../assets/images/gallery9.jpg";
import gallery11 from "../../assets/images/gallery10.png";
import gallery12 from "../../assets/images/gallery11.png";
interface Dish {
  id: number;
  title: string;
  description: string;
  imageUrl: any;
}

const dishes: Dish[] = [
  { id: 1, title: "Mutton Roast", description: "Slow-cooked leg roast with bold spices.", imageUrl: gallery1 },
  { id: 2, title: "Chicken Tikka", description: "Classic spicy chicken tikka in tandoor.", imageUrl: gallery2 },
  { id: 3, title: "Paneer Tikka", description: "Marinated paneer masala with herbs.", imageUrl: gallery3 },
  { id: 4, title: "Spicy Dal", description: "Lentils cooked with fresh garlic and spices.", imageUrl: gallery4 },
  { id: 5, title: "Lamb Curry", description: "Tender lamb cooked in thick traditional gravy.", imageUrl: gallery5 },
  { id: 6, title: "Butter Chicken", description: "Creamy butter chicken delight with cream.", imageUrl: gallery6 },
  { id: 7, title: "Mixed Kebab", description: "Assorted grilled kebabs with chutney.", imageUrl: gallery7 },
  { id: 8, title: "Saffron Rice", description: "Fragrant long-grain saffron rice.", imageUrl: gallery8 },
  { id: 9, title: "Garlic Naan", description: "Freshly baked garlic naan in clay oven.", imageUrl: gallery9 },
  { id: 10, title: "Dessert Platter", description: "Sweet traditional treats for celebrations.", imageUrl: gallery10 },
  { id: 11, title: "Veggie Grill", description: "Healthy grilled seasonal vegetables.", imageUrl: gallery11 },
  { id: 12, title: "Mango Lassi", description: "Refreshing and creamy mango yogurt drink.", imageUrl: gallery12 },
];
export default function HouseParties() {
  const [showAll, setShowAll] = useState(false);

  // মোবাইলের জন্য ইনিশিয়াল লিমিট ৮টি
  const visibleDishes = showAll ? dishes : dishes.slice(0, 8);

  return (
    <section className="bg-white py-12 px-4 md:py-20">
      <div className="max-w-[1416px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
            See My Food in House Parties
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-lg">
            A curated glimpse into the refinement, detail, and ritual behind every experience.
          </p>
        </div>

        {/* Grid System */}
        {/* lg:grid তে সবগুলো দেখাবে, কিন্তু আমরা কন্ডিশনাল রেন্ডারিং নিচে করছি */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {/* বড় স্ক্রিনে (lg) সবসময় ১২টি দেখাবে, মোবাইলে visibleDishes অনুযায়ী */}
          {dishes.map((dish, index) => (
            <div
              key={dish.id}
              className={`relative aspect-square rounded-xl overflow-hidden group shadow-sm 
                ${!showAll && index >= 8 ? "hidden lg:block" : "block"}`}
            >
              <Image
                src={dish.imageUrl}
                alt={dish.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              
            
            </div>
          ))}
        </div>

        {/* See More / Show Less Button - Only visible on Mobile/Tablet */}
        <div className="mt-10 text-center lg:hidden">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#F7931E] hover:bg-[#e07b1a] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md cursor-pointer"
          >
            {showAll ? "Show Less" : "See More"}
          </button>
        </div>

      </div>
    </section>
  );
}