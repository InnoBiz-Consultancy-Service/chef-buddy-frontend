import Image from "next/image";
import mutton from "../../assets/images/Mutton_si.jpg";
import tikka from "../../assets/images/Chikken_tikka.jpg";
import poneer from "../../assets/images/Poneer_tikka.jpg";
import dal from "../../assets/images/Spicy_dal.jpg";
import lamb from "../../assets/images/Spicy_lamb.jpg";
import butter from "../../assets/images/Butter_chicken.jpg";

export default function Starters(){
    return (
        <div>
            <h1 className="text-center text-3xl font-bold p-12 mt-8">Starters & Kebabs</h1>
              {/* Grid - Gap overlap thik korar jonno auto-rows-min bebohar kora hoyeche */}
    <div className="grid gap-3 md:gap-8 grid-cols-2 lg:grid-cols-3 max-w-[1416px] mx-auto auto-rows-auto">
        
  {/* Dish 1 - Mutton Leg Roast */}
  <div className="relative rounded-2xl overflow-hidden group h-[188px] lg:h-[456px] lg:row-span-2 w-full lg:w-[464px]">
    <Image src={mutton} alt="Mutton Leg Roast" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500" />
    <div className="absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-out
                  /* Mobile: Hidden & Slim */
                  bottom-2 w-[210px] h-[120px] p-[10px_16px] rounded-[20px] opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0
                  /* Large: Fixed as original */
                  md:bottom-6 md:w-[327px] md:h-[141px] md:rounded-[50px] md:p-6 md:opacity-100 md:translate-y-0
                  bg-black/60 backdrop-blur-md flex flex-col items-center justify-center text-center text-white">
      <h3 className="text-xl md:text-2xl font-semibold mb-2">Mutton Leg Roast</h3>
      <p className="text-sm md:text-base text-gray-200 leading-relaxed line-clamp-2">Slow-cooked in yogurt, mango chutney and herbs with bold spices.</p>
    </div>
  </div>

  {/* Dish 2 - Chicken Tikka Masala */}
  <div className="relative rounded-2xl overflow-hidden group h-[188px] lg:h-[270px] w-full lg:w-[464px]">
    <Image src={tikka} alt="Chicken" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-out
                  bottom-2 w-[210px] h-[120px] p-[10px_16px] rounded-[20px] opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0
                  md:bottom-6 md:w-[327px] md:h-[141px] md:rounded-[50px] md:p-6 md:opacity-100 md:translate-y-0
                  bg-black/50 backdrop-blur-lg flex flex-col items-center justify-center text-center text-white">
      <h3 className="text-xl md:text-[24px] font-semibold mb-1">Chicken Tikka Masala</h3>
      <p className="text-xs md:text-[14px] text-gray-200 leading-tight line-clamp-3">Marinated chicken cooked in mild flavoured sauce with fresh herbs and spices.</p>
    </div>
  </div>

  {/* Dish 3 - Paneer Tikka Masala */}
  <div className="relative rounded-2xl overflow-hidden group h-[188px] lg:h-[456px] lg:row-span-2 w-full lg:w-[464px]">
    <Image src={poneer} alt="Paneer" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-out
                  bottom-2 w-[210px] h-[120px] p-[10px_16px] rounded-[20px] opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0
                  md:bottom-6 md:w-[327px] md:h-[141px] md:rounded-[50px] md:p-6 md:opacity-100 md:translate-y-0
                  bg-black/60 backdrop-blur-md flex flex-col items-center justify-center text-center text-white">
      <h3 className="text-xl md:text-2xl font-semibold mb-2">Paneer Tikka Masala</h3>
      <p className="text-sm md:text-base text-gray-200 leading-relaxed line-clamp-2">Marinated paneer cooked in mild flavoured sauce with fresh herbs and spices.</p>
    </div>
  </div>

  {/* Dish 5 - Spicy Dal */}
  <div className="relative rounded-2xl overflow-hidden group h-[188px] lg:h-[506px] lg:row-span-2 order-last lg:order-none w-full lg:w-[464px]">
    <Image src={dal} alt="Dal" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-out
                  bottom-2 w-[210px] h-[120px] p-[10px_16px] rounded-[20px] opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0
                  md:bottom-6 md:w-[327px] md:h-[141px] md:rounded-[50px] md:p-6 md:opacity-100 md:translate-y-0
                  bg-black/50 backdrop-blur-lg flex flex-col items-center justify-center text-center text-white shadow-[0px_32px_40px_rgba(0,0,0,0.1)]">
      <h3 className="text-[22px] md:text-[24px] font-semibold leading-tight mb-2">Spicy Dal</h3>
      <p className="text-[13px] md:text-[14px] text-gray-200 leading-snug line-clamp-3">Marinated paneer cooked in mild flavoured sauce with fresh herbs and spices.</p>
    </div>
  </div>

  {/* Dish 4 - Spicy Lamb Curry */}
  <div className="relative rounded-2xl overflow-hidden group h-[188px] lg:h-[322px] w-full lg:w-[464px]">
    <Image src={lamb} alt="Lamb" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-out
                  bottom-2 w-[210px] h-[120px] p-[10px_16px] rounded-[20px] opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0
                  md:bottom-6 md:w-[327px] md:h-[141px] md:rounded-[50px] md:p-6 md:opacity-100 md:translate-y-0
                  bg-black/50 backdrop-blur-xl flex flex-col items-center justify-center text-center text-white shadow-[0px_32px_40px_rgba(0,0,0,0.1)]">
      <h2 className="text-[24px] font-semibold leading-tight mb-2 tracking-wide">Spicy Lamb Curry</h2>
      <p className="text-[14px] font-medium text-gray-100 leading-[1.4] opacity-90 line-clamp-3">Tender pieces of lamb or chicken cooked with fresh green chilli,garlic,peppers and coriander. Fairly hot.</p>
    </div>
  </div>

  {/* Dish 6 - Butter Chicken */}
  <div className="relative rounded-2xl overflow-hidden group h-[188px] lg:h-[322px] w-full lg:w-[464px] ">
    <Image src={butter} alt="Butter Chicken" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute left-1/2 -translate-x-1/2 transition-all duration-500 ease-out
                  bottom-2 w-[210px] h-[120px] p-[10px_16px] rounded-[20px] opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0
                  md:bottom-6 md:w-[327px] md:h-[141px] md:rounded-[50px] md:p-6 md:opacity-100 md:translate-y-0
                  bg-black/50 backdrop-blur-xl flex flex-col items-center justify-center text-center text-white">
      <h2 className="text-[24px] font-semibold leading-tight mb-1 tracking-tight">Butter Chicken</h2>
      <p className="font-['Nunito_Sans'] font-normal text-white leading-[17px] text-[12px] line-clamp-2 w-[272px]">A special preparation of charcoaled chicken marinated with onions, capsicums, tomatoes, curry paste, cream & coriander</p>
    </div>
  </div>

</div>
        </div>
    )
}