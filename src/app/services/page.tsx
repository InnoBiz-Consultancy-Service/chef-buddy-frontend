import Banner from "@/components/Home/Banner/Banner";
import DiningPackage from "@/components/Home/DiningPackage/DiningPackage";
import Services from "@/components/Home/service/service";
import ServiceArea from "@/components/Service/servicearea";
import BookChef from "@/components/shared/BookChef";

export default function ServicePage(){
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <DiningPackage/>
            <ServiceArea/>
            <BookChef/>
            </div>
    )
}