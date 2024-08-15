import Banner from "../components/Banner";
import Categories from "../components/Categories";
import ShopNow from "../components/ShopNow";
import BestSellers from "../components/BestSellers";
import Testimonials from "../components/Testimonials";

export default function MainPage() {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <ShopNow></ShopNow>
      <BestSellers></BestSellers>
      <Testimonials></Testimonials>
    </div>
  );
}
