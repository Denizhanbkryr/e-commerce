import React, { useEffect } from "react";
import { Button, Card, CardImg } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/actions/productActions";
import { useParams } from "react-router-dom";
import { addToCart } from "../Redux/actions/shoppingCartActions";

export const ColMd = () => {
  const dispatch = useDispatch();
  const qp = useParams();
  console.log("qpColdMd:", qp);

  const productId = qp.productId;
  console.log("productId:", productId);

  const { productList } = useSelector((state) => state.product);

  const selectedProduct = productList.find(
    (product) => product.id == productId
  );
  console.log("selected Product:", selectedProduct);

  const handleAddToCart = () => {
    dispatch(addToCart(selectedProduct, 1));
  };

  /*
  useEffect(() => {
    dispatch(fetchProducts());
  }, [productId]);
  */

  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

  return (
    <div className="coldMdCardDiv">
      <Card>
        <CardImg
          style={{ width: "42%", borderWidth: "thin" }}
          src={selectedProduct.images[0].url}
          alt={selectedProduct.name}
          onLoad={() => console.log("Image loaded successfully")}
          onError={(e) => console.error("Error loading image:", e)}
        />
        <div className="col-md">
          <h4 style={{ fontWeight: "bold", paddingBottom: "4%" }}>
            {selectedProduct.name + selectedProduct.id} <br />
          </h4>
          <p
            style={{
              display: "flex",
              fontWeight: "500",
              opacity: "80%",
            }}
          >
            Availability: &nbsp;&nbsp;{" "}
            <p style={{ fontWeight: "500", color: "#23a6f0" }}>In Stock</p>
          </p>
          <p style={{ fontWeight: "500", opacity: "80%" }}>
            {selectedProduct.description}
          </p>
          <hr />
          <div className="product-actions">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "28%",
                marginLeft: "0",
                marginBottom: "10%",
                border: "none",
              }}
            ></div>
            <Button style={{ backgroundColor: "#23a6f0", border: "none" }}>
              Select Options
            </Button>
            <Button
              style={{ backgroundColor: "#23a6f0", border: "none" }}
              onClick={handleAddToCart}
            >
              Sepete Ekle
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
