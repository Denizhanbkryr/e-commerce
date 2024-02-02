import { Button, Input } from "reactstrap";

const Footer = () => {
  return (
    <>
      <div className="mainFooterDiv">
        <div className="footerParts">
          <h3>Company Info</h3>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div className="footerParts">
          <h3>Legal</h3>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div className="footerParts">
          <h3>Features</h3>
          <p>Bussines Marketing</p>
          <p>User Analytic</p>
          <p>Live Chat</p>
          <p>Unlimited Support</p>
        </div>
        <div className="footerParts">
          <h3>Resources</h3>
          <p>IOS & Android</p>
          <p>Watch a demo</p>
          <p>Customers</p>
          <p> API</p>
        </div>
        <div className="footerParts">
          <h3>Get in Touch</h3>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Input
              style={{ borderRadius: "inherit" }}
              placeholder="your email"
              type="email"
            />
            <Button
              style={{
                textAlign: "right",
                backgroundColor: "#23A6F0",
                border: "none",
                borderRadius: "inherit",
              }}
              //class="btn  position-absolute"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <p
        style={{
          backgroundColor: "rgb(250, 250, 250)",
          display: "flex",
          padding: "5% 5%",
          justifyContent: "center",
          flexWrap: "wrap",
          fontWeight: "500",
          opacity: "60%",
        }}
      >
        Made With Love By Finland All Right Deserved
      </p>
    </>
  );
};

export default Footer;
