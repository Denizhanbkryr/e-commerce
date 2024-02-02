import { NavLink } from "react-router-dom/";
import React, { useEffect, useState } from "react";
import icon1 from "../brandIcons/kişi.png";
import icon2 from "../brandIcons/arama.png";
import icon3 from "../brandIcons/sepet.png";
import icon4 from "../brandIcons/beğen.png";
import { MD5 } from "crypto-js";
import { useDispatch, useSelector } from "react-redux";
import ExampleDropDown from "./Dropdown";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import shoppingCartReducer from "../Redux/reducers/shoppingCartReducer";
const a = {
  marginRight: "6%",
  color: "var(--second-text-color)",
  fontFamily: "Montserrat-Bold, Helvetica",
  fontSize: "14px",
  fontWeight: 700,
  textAlign: "center",
  textDecoration: "none",
  opacity: "57%",
  marginBottom: "auto",
  marginTop: "auto",
};

const b = {
  ...a,
  marginLeft: "4%",
};

const NavBar = () => {
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const { user } = useSelector((s) => s.user);

  const { cart } = useSelector((state) => state.shoppingCart);
  const totalQuantity = cart.reduce((total, item) => total + item.count, 0);

  const history = useHistory();
  const handleGoToCart = () => {
    history.push("/shopping-cart"); // Navigate to the shopping cart page
  };

  console.log("Navbar > user : ", user);
  useEffect(() => {
    // You can dispatch an action here to update the cart in NavBar if needed
    // Example: dispatch(updateCart(cart));
  }, [cart]);

  return (
    <div className="mainRowDiv">
      <h2>Bandage</h2>
      <div className="navBar5">
        <nav className="navBarNavStyle" style={{ display: "flex" }}>
          <NavLink style={a} to="/">
            Home
          </NavLink>

          <ExampleDropDown />
          <NavLink style={b} to="/AboutPage">
            About
          </NavLink>
          <NavLink style={a} to="/Signup">
            Blog
          </NavLink>
          <NavLink style={a} to="/Contact">
            Contact
          </NavLink>
          <NavLink style={a} to="/ProductPages">
            Pages
          </NavLink>
        </nav>
      </div>
      <div className="navBarRegisterPart">
        {user && (
          <>
            <img
              style={{
                height: "fit-content",
                marginTop: "auto",
                marginBottom: "auto",
                marginRight: "4%",
                borderRadius: "50%",
              }}
              src={`https://www.gravatar.com/avatar/${MD5(user?.email)}?s=24`}
              alt=""
            />
            {user.name}
          </>
        )}
        {!user && (
          <>
            <NavLink to="/Login"> Login</NavLink>
            <NavLink to="/Signup">/Register</NavLink>
          </>
        )}
        <img
          style={{
            height: "fit-content",
            marginTop: "auto",
            marginBottom: "auto",
            marginRight: "4%",
            marginLeft: "6%",
          }}
          src={icon2}
          alt="Icon 2"
        />
        <img
          style={{
            height: "fit-content",
            marginTop: "auto",
            marginBottom: "auto",
            marginRight: "4%",
          }}
          src={icon3}
          alt="Icon 3"
        />
        <img
          style={{
            height: "fit-content",
            marginTop: "auto",
            marginBottom: "auto",
          }}
          src={icon4}
          alt="Icon 4"
        />
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle
            style={{
              backgroundColor: "white",
              fontFamily: "Montserrat-Bold, Helvetica",
              fontSize: "14px",
              fontWeight: 700,
              opacity: 0.57,
              color: "black",
              border: "none",
            }}
            caret
          >
            <img
              style={{
                height: "fit-content",
                marginTop: "auto",
                marginBottom: "auto",
              }}
              src={icon4}
              alt="Icon 4"
            />
          </DropdownToggle>
          <DropdownMenu style={{ width: "270px" }}>
            <ul style={{ padding: "10%", marginBottom: "0" }}>
              <span style={{ padding: "5%" }}>
                Sepetim ({totalQuantity} ürün)
              </span>
              {cart.map((item) => (
                <li
                  style={{ marginBottom: "8%", marginTop: "10%" }}
                  key={item.product.id}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={item.product.images[0].url}
                      alt={item.product.name}
                      style={{
                        width: "50px",
                        height: "auto",
                        marginRight: "10px",
                      }}
                    />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span>
                        {item.product.name} - Adet: {item.count}
                      </span>
                      <span>Fiyat: {item.product.price}</span>
                    </div>
                  </div>
                  <DropdownItem divider />
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", margin: "0 10% 10% 10%" }}>
              <Button
                onClick={handleGoToCart}
                style={{
                  backgroundColor: "#23a6f0",
                  border: "none",
                  marginRight: "3%",
                }}
              >
                Sepete Git{" "}
              </Button>
              <Button style={{ backgroundColor: "#23a6f0", border: "none" }}>
                Alışverişi Tamamla{" "}
              </Button>
            </div>
          </DropdownMenu>
        </Dropdown>
        <img />
      </div>
    </div>
  );
};

export default NavBar;
