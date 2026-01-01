import DiningPackage from "@/components/Home/DiningPackage/DiningPackage";
import Services from "@/components/Home/service/service";
import Signature from "@/components/Home/SignatureDishes/SignatureDishes";
import Curries from "@/components/menu/Curries";
import CommonBanner from "@/components/shared/CommonBanner";
import heroImg from "../../assets/images/MenuBanner.jpg";
import Starters from "@/components/menu/Starters";
import Desserts from "@/components/menu/Deserts";
import BookChef from "@/components/shared/BookChef";
export default function MenuPage(){
    return (
        <div>
            <CommonBanner
             title="See Our Flavourful Extended Menu Items"
        description="Every dish is prepared using traditional techniques, handcrafted spices, and fresh ingredients.
Menus are fully customizable to suit your taste, event, and dietary needs."
        imageUrl={heroImg.src}
            >

            </CommonBanner>
            
          <Curries></Curries>
          <Starters></Starters>
          <Desserts></Desserts>
          <BookChef></BookChef>
        </div>
    )
}