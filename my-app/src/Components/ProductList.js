import React, { useEffect } from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/actions/productActions";

const ProductList = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div
      className="mainDivProduct"
      style={{ display: "flex", flexDirection: "column", margin: "3% 5%" }}
    >
      <div className="main-content">
        <div className="section-title">Featured Products</div>
        <div className="h-section-title">
          <h4 style={{ fontWeight: "bold" }}>BESTSELLER PRODUCTS</h4>
        </div>
        <p className="paragraph">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="productListCards1">
        {productList.map((product) => (
          <Card key={product.id}>
            <img
              style={{ margin: "unset" }}
              alt="Sample"
              src={product.images[0].url}
            />
            <CardBody style={{ textAlign: "center" }}>
              <CardTitle
                style={{ margin: "8% 0", fontWeight: "bold" }}
                tag="h5"
              >
                {product.name}
              </CardTitle>
              <CardSubtitle
                style={{ margin: "5% 0", fontWeight: "bold", opacity: "64%" }}
                className=" text-muted"
                tag="h6"
              >
                {product.description}
              </CardSubtitle>
              <CardText
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  marginTop: "10%",
                  marginBottom: "auto",
                }}
              >
                <p
                  style={{
                    color: "gray",
                    marginRight: "3%",
                    fontWeight: "bold",
                  }}
                >
                  ${product.price}
                </p>
                <p style={{ color: "darkgreen", fontWeight: "bold" }}>
                  ${product.price}
                </p>
              </CardText>
              <CardText
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "37%",
                  margin: "0 auto",
                }}
              ></CardText>
            </CardBody>
          </Card>
        ))}
      </div>

      <div style={{ marginTop: "5%" }}></div>
    </div>
  );
};

export default ProductList;
