import { NavLink } from "react-router-dom/";
import React from "react";
import { Link } from "react-router-dom";
import ProductListPage from "../Components/ProductListPage";
import { Route } from "react-router-dom";
import icon1 from "../brandIcons/kişi.png";
import icon2 from "../brandIcons/arama.png";
import icon3 from "../brandIcons/sepet.png";
import icon4 from "../brandIcons/beğen.png";
import { Button } from "reactstrap";

const a = {
  marginRight: "6%",
  color: "var(--second-text-color)",
  fontFamily: "Montserrat-Bold, Helvetica",
  fontSize: "14px",
  fontWeight: 700,
  textAlign: "center",
  textDecoration: "none",
  opacity: "57%",
};

const NavBarAboutPage = () => {
  return (
    <div
      className="mainRowDiv"
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "white",
        height: "110px",
        margin: "2% 15%",
      }}
    >
      <h2
        style={{
          marginTop: "auto",
          marginBottom: " auto",
        }}
      >
        Bandage
      </h2>
      <div style={{ margin: "auto", marginRight: "40%", marginLeft: "7%" }}>
        <nav>
          <NavLink style={a} to="/">
            Home
          </NavLink>
          <NavLink style={a} to="/ProductPages">
            Product
          </NavLink>
          <NavLink style={a} to="/">
            Pricing
          </NavLink>
          <NavLink style={a} to="/Contact">
            Contact
          </NavLink>
        </nav>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",

          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        <a
          style={{
            cursor: "pointer",
            marginRight: "15%",
            color: "#23A6F0",
            fontWeight: "500",
          }}
        >
          Login
        </a>
        <Button
          style={{ width: "15vw", backgroundColor: "#23A6F0", border: "none" }}
        >
          Become a member
        </Button>
      </div>
    </div>
  );
};

export default NavBarAboutPage;
