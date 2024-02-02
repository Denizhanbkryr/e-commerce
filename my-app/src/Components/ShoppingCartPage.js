// ShoppingCartPage.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "reactstrap";

import { removeFromCart, setCart } from "../Redux/actions/shoppingCartActions";

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.shoppingCart);
  console.log("slöşs", { cart });

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
  }, []);

  useEffect(() => {
    const storedCart = localStorage.getItem("shoppingCart");
    if (storedCart) {
      dispatch(setCart(JSON.parse(storedCart)));
    }
  }, [dispatch]);

  return (
    <div>
      <h2 style={{ margin: "5%" }}>Sepetim</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.product.id}>
            <div style={{ display: "flex", margin: " 0 20%" }}>
              <img
                src={item.product.images[0].url}
                alt={item.product.name}
                style={{ width: "9%", margin: "auto", border: "outset" }}
              />
              <span style={{ width: "143%", margin: "10%" }}>
                {item.product.name} - Adet: {item.count}
              </span>
              <span style={{ width: "50%", margin: "10%" }}>
                Fiyat: {item.product.price}
              </span>
              <Button
                style={{
                  height: "fit-content",
                  margin: "auto",
                  backgroundColor: "#23a6f0",
                  border: "none",
                }}
                onClick={() => handleRemoveFromCart(item.product)}
              >
                Remove
              </Button>
            </div>
            <hr style={{ margin: "auto", width: "65%" }} />
          </li>
        ))}
      </ul>
      {/* Add checkout or other actions here */}
    </div>
  );
};

export default ShoppingCartPage;
