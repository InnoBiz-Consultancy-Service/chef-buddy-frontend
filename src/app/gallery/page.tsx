import ChefGallery from "@/components/Home/VisualTest/VisualTest";
import BookChef from "@/components/shared/BookChef";
import CommonBanner from "@/components/shared/CommonBanner";
import heroImg from "../../assets/images/GalleryBanner.jpg"
import HouseParties from "@/components/gallery/houseParties";
export default function GalleryPage(){
    return(
        <div>
            <CommonBanner
            title="See Our Extended Food Gallery"
        description="Every dish is prepared using traditional techniques, handcrafted spices, and fresh ingredients.
Menus are fully customizable to suit your taste, event, and dietary needs."
        imageUrl={heroImg.src}
            ></CommonBanner>
            <ChefGallery></ChefGallery>
            <HouseParties></HouseParties>
            <BookChef></BookChef>
        </div>
    )
}