const Bandage = () => {
  return (
    <div className="mainRowDiv">
      <h2
        style={{
          marginLeft: "13.5%",
          marginTop: "auto",
          marginBottom: " auto",
        }}
      >
        Bandage
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginRight: "13.5%",
          marginTop: "auto",
          marginBottom: "auto",
          width: "8%",
          height: "20px",
        }}
      >
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

export default Bandage;
