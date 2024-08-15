import Banner from "../components/Banner";
import Categories from "../components/Categories";
import ShopNow from "../components/ShopNow";
import BestSellers from "../components/BestSellers";

export default function MainPage() {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <ShopNow></ShopNow>
      <BestSellers></BestSellers>
    </div>
  );
}
