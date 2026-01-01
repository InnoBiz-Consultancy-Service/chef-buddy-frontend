"use client";

import Image from "next/image";
import React, { useState } from "react";

import blogImg1 from "../../assets/images/blog1.jpg";
import blogImg2 from "../../assets/images/blog2.jpg";
import blogImg3 from "../../assets/images/blog3.jpg";
import blogImg4 from "../../assets/images/homeCooked.jpg";
import blogImg5 from "../../assets/images/freshIngredients.jpg";
import blogImg6 from "../../assets/images/houseParty.jpg";

interface Blog {
  id: number;
  title: string;
  description: string;
  imageUrl: any;
}

const allBlogs: Blog[] = [
  {
    id: 1,
    title: "How to make the best website experience for your user?",
    description: "As one of the leading IT agencies in the market, WeTechPro ensures smooth communication with clients. From the free discussion to giving maintenance support, we put client satisfaction and convenience at each stage.",
    imageUrl: blogImg1,
  },
  {
    id: 2,
    title: "How our data driven methods increase your sales",
    description: "As one of the leading IT agencies in the market, WeTechPro ensures smooth communication with clients. From the free discussion to giving maintenance support, we put client satisfaction and convenience at each stage.",
    imageUrl: blogImg2,
  },
  {
    id: 3,
    title: "This is how a good website branding helps your business",
    description: "As one of the leading IT agencies in the market, WeTechPro ensures smooth communication with clients. From the free discussion to giving maintenance support, we put client satisfaction and convenience at each stage.",
    imageUrl: blogImg3,
  },
 {
    id: 4,
    title: "Mastering the Art of Home-Cooked Fine Dining",
    description: "Discover how to bring the restaurant experience to your own kitchen. From plating techniques to sourcing the finest organic ingredients, we share the secrets that professional chefs use to create unforgettable home parties.",
    imageUrl: blogImg4,
  },
  {
    id: 5,
    title: "Why Fresh Ingredients are the Secret to Every Great Meal",
    description: "A great dish starts long before the stove is turned on. Learn how selecting seasonal produce and high-quality herbs can transform a simple recipe into a culinary masterpiece that your guests will talk about for weeks.",
    imageUrl: blogImg5,
  },
  {
    id: 6,
    title: "How to Plan the Perfect Menu for Your Next House Party",
    description: "Planning a menu can be overwhelming. We break down the process of balancing flavors, considering dietary needs, and choosing dishes that allow you to spend more time with your guests and less time in the kitchen.",
    imageUrl: blogImg6,
  },
];

export default function Blogs() {
  const [showAll, setShowAll] = useState(false);

  // মোবাইলে শুরুতে ৩টি দেখাবে, See More ক্লিক করলে সব দেখাবে
  const visibleBlogs = showAll ? allBlogs : allBlogs.slice(0, 3);

  return (
    <section className="bg-white py-16 px-4 md:py-24">
      <div className="max-w-[1416px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#1a1a1a] mb-4">
            Our Blogs
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            See what we are upto these days
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-x-8 md:gap-y-16">
          {/* বড় স্ক্রিনে (lg) সবসময় সব দেখাবে, মোবাইলে লজিক অনুযায়ী */}
          {(showAll ? allBlogs : allBlogs).map((blog, index) => (
            <div 
              key={blog.id} 
              className={`group flex flex-col ${!showAll && index >= 3 ? "hidden lg:flex" : "flex"}`}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6">
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a] leading-tight mb-4 group-hover:text-[#F7931E] transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4 line-clamp-4">
                  {blog.description}
                </p>
                <button className="text-[#F7931E] font-semibold text-sm underline underline-offset-4 hover:text-[#e07b1a] w-fit">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button for Mobile */}
        <div className="mt-12 text-center lg:hidden">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#F7931E] text-white px-10 py-3 rounded-full font-semibold shadow-md hover:bg-[#e07b1a] transition-all active:scale-95 cursor-pointer"
          >
            {showAll ? "Show Less" : "See More"}
          </button>
        </div>

      </div>
    </section>
  );
}