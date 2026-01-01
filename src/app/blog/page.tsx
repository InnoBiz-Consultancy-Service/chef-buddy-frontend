import CommonBanner from "@/components/shared/CommonBanner";
import heroImg from "./../../assets/images/BlogBanner.jpg";
import BookChef from "@/components/shared/BookChef";
import Blogs from "@/components/blog/blog";
export default function BlogPage(){
    return(
        <div>
           <CommonBanner
            title="See Our Blogs"
        description="Every dish is prepared using traditional techniques, handcrafted spices, and fresh ingredients.
Menus are fully customizable to suit your taste, event, and dietary needs."
        imageUrl={heroImg.src}
           >
            </CommonBanner>
            <Blogs></Blogs> 
            <BookChef></BookChef>
        </div>
    )
}