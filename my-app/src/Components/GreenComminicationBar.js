const GreenComminicationBar = () => {
  return (
    <div className="greenCommunicationBarMainDiv">
      <div style={{ margin: "0 0 0 3%", width: "49%", color: "white" }}>
        <i
          class="fa-solid fa-phone"
          style={{ color: "#ffffff", marginRight: "2%" }}
        />
        (225) 555-0118
        <i
          class="fa-solid fa-envelope"
          style={{ color: "#ffffff", marginRight: "2%", marginLeft: "6%" }}
        />
        michelle.rivera@example.com
      </div>
      <p
        style={{
          marginRight: "auto",
          color: "white",
          marginLeft: "10%",
          width: "29vw",
        }}
      >
        Follow us get a chance to win 80% off
      </p>
      <div
        className="icons"
        style={{
          marginLeft: "6%",
          marginRight: "2%",
          display: "flex",
          width: "20%",
        }}
      >
        <p style={{ color: "white" }}>Follow us:</p>
        <i
          class="fa-brands fa-instagram"
          style={{
            color: "#ffffff",
            marginTop: "2%",
            marginRight: "4%",
            marginLeft: "4%",
          }}
        ></i>
        <i
          class="fa-brands fa-youtube"
          style={{ color: "#ffffff", marginTop: "2%", marginRight: "4%" }}
        ></i>
        <i
          class="fa-brands fa-facebook"
          style={{ color: "#ffffff", marginTop: "2%", marginRight: "4%" }}
        ></i>
        <i
          class="fa-brands fa-twitter"
          style={{ color: "#ffffff", marginTop: "2%", marginRight: "4%" }}
        ></i>
      </div>
    </div>
  );
};

export default GreenComminicationBar;
