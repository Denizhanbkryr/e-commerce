import photo1 from "../images/containerPhoto1.png";
import photo2 from "../images/containerPhoto2.png";

const Container = () => {
  return (
    <div
      className="mainContainer"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div style={{ display: "flex" }}>
        <img
          style={{ height: "498px", width: "50%", marginRight: "3%" }}
          src={photo1}
        ></img>
        <img style={{ height: "498px", width: "50%" }} src={photo2}></img>
      </div>
      <div
        className="containerExplanation"
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          fontSize: "x-large",
          margin: "auto 0 auto 2%",
        }}
      >
        <p style={{ color: "#2c8bc0bf", fontWeight: "bold" }}>
          Featured Products
        </p>
        <h1 style={{ fontWeight: "bold", marginBottom: "11%" }}>
          We love what we do
        </h1>
        <p>
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: <br /> Newtonian mechanics. <br /> <br />
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: <br /> Newtonian mechanics
        </p>
      </div>
    </div>
  );
};

export default Container;
