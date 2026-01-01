import Banner from "@/components/Home/Banner/Banner";
import DiningPackage from "@/components/Home/DiningPackage/DiningPackage";
import Services from "@/components/Home/service/service";
import ServiceArea from "@/components/Service/servicearea";
import BookChef from "@/components/shared/BookChef";
import CommonBanner from "@/components/shared/CommonBanner";
import heroImg from "../../assets/images/Banner3.jpg";
export default function ServicePage(){
    return (
        <div>
           <CommonBanner
            title="Personalized Indian Dining Experiences, Crafted in Your Home"
        description="From intimate dinners to lively celebrations, Chef Raz offers tailored culinary services designed around your taste, event, and lifestyle."
        imageUrl={heroImg.src}
           ></CommonBanner>
            <Services></Services>
            <DiningPackage/>
            <ServiceArea/>
            <BookChef/>
            </div>
    )
}