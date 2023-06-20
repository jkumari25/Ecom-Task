import Bannersection from "../components/home/Bannersection";
import Breadcrumb from "../components/home/Breadcrumb";
import Freeshipping from "../components/home/Freeshipping";
import Newarrivals from "../components/home/Newarrivals";
import Newsletter from "../components/home/Newsletter";
import Sliderpage from "../components/home/Sliderpage";
import MainLayout from "../layouts/MainLayout";


export default function Home() {
  return (
    
 <MainLayout>
 <Breadcrumb/>
 <Freeshipping/>
 <Bannersection/>
 <Newarrivals/>
 <Newsletter/>
 <Sliderpage/>
 </MainLayout>
  )
}
