import AboutChef from "@/components/Home/AboutChef/AboutChef";
import Banner from "@/components/Home/Banner/Banner";
import ChefGallery from "@/components/Home/VisualTest/VisualTest";
import BookChef from "@/components/shared/BookChef";
import aboutChefImg from "../../assets/images/about2.jpg"
import CommonBanner from "@/components/shared/CommonBanner";
import heroImg from "../../assets/images/aboutBanner.jpg";
export default function About(){
   return(
    <div>
         <CommonBanner 
         title="Chef Raz is Bringing the warmth of authentic Indian cuisine to your table."
        description="Enjoy the rich aromas and vibrant spices of India—crafted fresh in your home.From intimate dinners to family celebrations and corporate gatherings, experience fine Indian cuisine with your own private chef."
        imageUrl={heroImg.src}
         ></CommonBanner>
         <AboutChef chefImage={aboutChefImg}></AboutChef>
         <ChefGallery></ChefGallery>
         <BookChef></BookChef>
        </div>
   )
}