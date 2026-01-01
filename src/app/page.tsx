import AboutChef from "@/components/Home/AboutChef/AboutChef";
import Banner from "@/components/Home/Banner/Banner";
import Services from "@/components/Home/service/service";
import SignatureDishes from "@/components/Home/SignatureDishes/SignatureDishes";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import chefHomeImg from "../assets/images/chefImageHome.jpg"
import DiningPackage from "@/components/Home/DiningPackage/DiningPackage";
import Testimonial from "@/components/Home/Testimonial/Testimonial";
import ChefGallery from "@/components/Home/VisualTest/VisualTest";
import BookChef from "@/components/shared/BookChef";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
      <Banner></Banner>
     <Services></Services>
     <SignatureDishes></SignatureDishes>
     <AboutChef chefImage={chefHomeImg} />
     <DiningPackage/>
     <Testimonial/>
     <ChefGallery/>
     <BookChef/>
    </div>
  );
}
