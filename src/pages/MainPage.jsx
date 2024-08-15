import Banner from "../components/Banner";
import Categories from "../components/Categories";
import ShopNow from "../components/ShopNow";
import BestSellers from "../components/BestSellers";
import Testimonials from "../components/Testimonials";
import HomeSlider from "../components/HomeSlider";

export default function MainPage() {
  return (
    <div>
      <HomeSlider></HomeSlider>
      <Banner></Banner>
      <Categories></Categories>
      <ShopNow></ShopNow>
      <BestSellers></BestSellers>
      <Testimonials></Testimonials>
    </div>
  );
}
