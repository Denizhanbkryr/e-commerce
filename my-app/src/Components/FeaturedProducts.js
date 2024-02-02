import logo1 from "../brandIcons/book.png";
import logo2 from "../brandIcons/p1.png";
import logo3 from "../brandIcons/growth.png";

const FeaturedProducts = () => {
  return (
    <div className="mainFeaturedProductDiv">
      <div className="featuredProductPart1">
        <p className="section-title">Featured Products</p>
        <h1>BEST SELLER PRODUCTS</h1>
        <p>Problems trying to resolve the conflict between</p>
      </div>
      <div className="featuredProductsPart2">
        <div>
          <img style={{ margin: "auto" }} src={logo2}></img>
          <h1>Easy Wins</h1>
          <p>Get your best looking smile now!</p>
        </div>
        <div>
          <img style={{ margin: "auto" }} src={logo1}></img>
          <h1>Concrete</h1>
          <p style={{ width: "43%", margin: "auto", marginBottom: "5%" }}>
            Defalcate is most focused in helping you discover your most
            beautiful smile
          </p>
        </div>
        <div>
          <img style={{ margin: "auto" }} src={logo3}></img>
          <h1>Hack Growth</h1>
          <p>Overcame any hurdle or any other problem.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
