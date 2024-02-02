import icon1 from "../brandIcons/fa-brands-1.png";
import icon2 from "../brandIcons/fa-brands-2.png";
import icon3 from "../brandIcons/fa-brands-3.png";
import icon4 from "../brandIcons/fa-brands-4.png";
import icon5 from "../brandIcons/fa-brands-5.png";
import icon6 from "../brandIcons/fa-brands-6.png";

const BrandIcons = () => {
  return (
    <div className="iconBrands">
      <span className="brandImgLayout">
        <img className="brandImg" src={icon1}></img>
      </span>
      <span className="brandImgLayout">
        <img className="brandImg" src={icon2}></img>
      </span>
      <span className="brandImgLayout">
        <img className="brandImg" src={icon3}></img>
      </span>
      <span className="brandImgLayout">
        <img className="brandImg" src={icon4}></img>
      </span>
      <span className="brandImgLayout">
        <img className="brandImg" src={icon5}></img>
      </span>
      <span className="brandImgLayout">
        <img className="brandImg" src={icon6}></img>
      </span>
    </div>
  );
};

export default BrandIcons;
