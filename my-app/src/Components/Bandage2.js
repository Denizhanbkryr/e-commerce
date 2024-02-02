const Bandage2 = () => {
  return (
    <div
      className="mainRowDiv"
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "white",
        height: "110px",
      }}
    >
      <h2
        style={{
          marginLeft: "13.5%",
          marginTop: "auto",
          marginBottom: " auto",
        }}
      >
        Bandage
      </h2>
      <div className="bandage2Icons">
        <i class="fa-brands fa-facebook fa-lg" style={{ color: "#23A6F0" }}></i>
        <i
          class="fa-brands fa-instagram fa-lg"
          style={{ color: "#23A6F0" }}
        ></i>
        <i class="fa-brands fa-twitter fa-lg" style={{ color: "#23A6F0" }}></i>
      </div>
    </div>
  );
};

export default Bandage2;
