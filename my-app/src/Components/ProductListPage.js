import React from "react";
import { Link } from "react-router-dom";
import BrandIcons from "./BrandIcons";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Shop from "./Shop";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import Paginationa from "./Pagination";
import GreenComminicationBar from "./GreenComminicationBar";
import Bandage2 from "./Bandage2";
import ContainerResult from "./ContainerResult";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../Redux/actions/productActions";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const ProductListPage = () => {
  const dispatch = useDispatch();
  const queryParam = useParams();
  console.log("queryParam plistp: ", queryParam);
  const { productList } = useSelector((state) => state.product);
  console.log(productList);

  useEffect(() => {
    dispatch(fetchProducts(null, null, 1, null, queryParam.id));
  }, [queryParam, dispatch]);

  return (
    <div>
      <div>
        <GreenComminicationBar />
      </div>
      <div>
        <NavBar />
      </div>
      <div>
        <Shop />
      </div>
      <div className="containerMainLayout">
        <ContainerResult />
      </div>
      <div>
        <div className="shopCardProductList">
          {productList.map((product) => (
            <Link
              style={{ textDecoration: "unset" }}
              to={`/${product.category_id}/${product.id}/${encodeURIComponent(
                product.name
              )}`}
              key={product.id}
            >
              <Card>
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
                    style={{
                      margin: "5% 0",
                      fontWeight: "bold",
                      opacity: "64%",
                    }}
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
                  >
                    <button
                      style={{
                        backgroundColor: " #23a6f0",
                        borderRadius: "8px",
                        height: "16px",
                        left: " 0",
                        width: "16px",
                      }}
                    ></button>
                    <button
                      style={{
                        backgroundColor: "#FF0000",
                        borderRadius: "8px",
                        height: "16px",
                        left: " 0",
                        width: "16px",
                      }}
                    ></button>
                    <button
                      style={{
                        backgroundColor: " #FFFF00",
                        borderRadius: "8px",
                        height: "16px",
                        left: " 0",
                        width: "16px",
                      }}
                    ></button>
                  </CardText>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Paginationa />
        </div>
      </div>

      <div>
        <BrandIcons style={{ backgroundColor: "rgb(250, 250, 250)" }} />
      </div>
      <div>
        <Bandage2 />
        <hr style={{ margin: "0 13vw" }} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ProductListPage;
