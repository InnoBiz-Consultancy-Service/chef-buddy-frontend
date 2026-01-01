import Image from "next/image";

interface HeroProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function CommonBanner({ title, description, imageUrl }: HeroProps) {
  return (
    <section className="relative min-h-screen bg-black text-white w-full">
      <div className="absolute inset-0 lg:hidden">
        <Image
          src={imageUrl}
          alt="Chef preparing food"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 min-h-screen">
          {/* Left Content */}
          <div className="flex justify-center align-middle items-center w-full lg:w-fit p-10">
            <div className="flex flex-col justify-center w-fit">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-center lg:text-left">
                {title}
              </h1>
              <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed text-center lg:text-left">
                {description}
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="bg-[#F7931E] hover:bg-[#e07b1a] text-[#353535] font-semibold px-8 py-4 rounded-full transition-colors duration-300">
                  Book a Consultation
                </button>
              </div>
            </div>
          </div>

          <div className="relative h-full hidden lg:block">
            <Image
              src={imageUrl}
              alt="Chef preparing food"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

       {/* Features Section - Absolute Position Fixed */}
<div className="absolute bottom-0 left-0 right-0 w-full z-20">
  {/* Adding a gradient overlay to make text readable over any image */}
  <div className="bg-gradient-to-t from-black via-black/80 to-transparent pt-20">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-around items-center py-8 px-4 lg:px-8">
      
      {/* Feature 1 */}
      <div className="flex flex-col items-center text-center mx-4 my-2 min-w-[140px]">
        <div className="w-12 h-12 mb-3 flex items-center justify-center">
          <svg className="w-10 h-10 text-[#F7931E]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </div>
        <p className="text-white font-medium text-sm md:text-base">Fresh Ingredients</p>
      </div>

      {/* Feature 2 - Personalized Menus (Fixed Visibility) */}
      <div className="flex flex-col items-center text-center mx-4 my-2 min-w-[140px]">
        <div className="w-12 h-12 mb-3 flex items-center justify-center">
          <svg className="w-10 h-10 text-[#F7931E]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
          </svg>
        </div>
        <p className="text-white font-medium text-sm md:text-base">Personalized Menus</p>
      </div>

      {/* Feature 3 */}
      <div className="flex flex-col items-center text-center mx-4 my-2 min-w-[140px]">
        <div className="w-12 h-12 mb-3 flex items-center justify-center">
          <svg className="w-10 h-10 text-[#F7931E]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </div>
        <p className="text-white font-medium text-sm md:text-base">Chef-Prepared at Home</p>
      </div>

    </div>
  </div>
</div>
      </div>
    </section>
  );
}