import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import ShopNow from "./components/ShopNow";
import Footer from "./components/Footer";

export default function MainPage() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Categories></Categories>
      <ShopNow></ShopNow>
      <Footer></Footer>
    </div>
  );
}
