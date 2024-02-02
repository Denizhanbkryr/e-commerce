import BrandIcons from "../Components/BrandIcons";
import ComminicationBar from "../Components/ComminicationBar";
import NavBar from "../Components/NavBar";
import { DesktopShopHeader } from "../Components/DesktopShopHeader";
import ShoppingPart from "../Components/ShoppingPart";

import ProductList from "../Components/ProductList";
import Container from "../Components/Container";
import FeaturedProducts from "../Components/FeaturedProducts";
import FeaturedPosts from "../Components/FeaturedPosts";

import Footer from "../Components/Footer";
import Bandage2 from "../Components/Bandage2";

const HomePage = () => {
  return (
    <div>
      <div classname="comminicationBar">
        <ComminicationBar />
      </div>

      <div>
        <NavBar />
      </div>
      <header className="App-header">
        <DesktopShopHeader />
      </header>

      <BrandIcons />

      <div>
        <ShoppingPart />
      </div>
      <div>
        <ProductList />
      </div>
      <div>
        <Container />
      </div>
      <div>
        <FeaturedProducts />
      </div>

      <div>
        <FeaturedPosts />
      </div>
      <div>
        <Bandage2 />
        <hr style={{ margin: "0 13vw" }} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
