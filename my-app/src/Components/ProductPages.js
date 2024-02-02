import photo0 from "../images/unsplashProductPage.png";
import photo1 from "../images/product-cover-1.png";
import photo2 from "../images/product-cover-2.png";
import photo3 from "../images/product-cover-3.png";
import photo4 from "../images/product-cover-4.png";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import GreenComminicationBar from "./GreenComminicationBar";

import NavBar from "./NavBar";
import BrandIcons from "./BrandIcons";
import Bandage2 from "./Bandage2";
import Footer from "./Footer";
import { ColMd } from "./Coldmd";

const ProductPages = () => {
  return (
    <>
      <GreenComminicationBar />
      <NavBar />
      <ColMd />
      <div
        className="navBarProductPages"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          cursor: "pointer",
          fontWeight: "500",
          opacity: "70%",
        }}
      >
        <p>Description</p>
        <p>Additional Information</p>
        <p>Reviews (0)</p>
      </div>

      <div className="infoProductPage">
        <div>
          <img alt="" src={photo0} />
        </div>

        <div className="productPageDiv">
          <h3 style={{ fontWeight: "bold" }}>the quick fox jumps over</h3>
          <div
            style={{
              fontWeight: "500",
              opacity: "60%",
              margin: "10% 0",
              paddingRight: "10%",
            }}
          >
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
        </div>
        <div className="productPageColumn">
          <h3 style={{ fontWeight: "bold", opacity: "100%" }}>
            the quick fox jumps over
          </h3>
          <p
            style={{
              fontWeight: "bold",
              opacity: "80%",
            }}
          >
            <svg
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icn arrow-right icn-xs" clip-path="url(#clip0_3010_29414)">
                <path
                  id="Vector"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z"
                  fill="#737373"
                />
              </g>
              <defs>
                <clipPath id="clip0_3010_29414">
                  <rect width="9" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            &nbsp;&nbsp; quick fox jumps over the lazy dog.
          </p>
          <p
            style={{
              fontWeight: "bold",
              opacity: "80%",
            }}
          >
            <svg
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icn arrow-right icn-xs" clip-path="url(#clip0_3010_29414)">
                <path
                  id="Vector"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z"
                  fill="#737373"
                />
              </g>
              <defs>
                <clipPath id="clip0_3010_29414">
                  <rect width="9" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            &nbsp;&nbsp; quick fox jumps over the lazy dog.
          </p>
          <p
            style={{
              fontWeight: "bold",
              opacity: "80%",
            }}
          >
            <svg
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icn arrow-right icn-xs" clip-path="url(#clip0_3010_29414)">
                <path
                  id="Vector"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z"
                  fill="#737373"
                />
              </g>
              <defs>
                <clipPath id="clip0_3010_29414">
                  <rect width="9" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            &nbsp;&nbsp; quick fox jumps over the lazy dog.
          </p>
          <p
            style={{
              fontWeight: "bold",
              opacity: "80%",
            }}
          >
            <svg
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icn arrow-right icn-xs" clip-path="url(#clip0_3010_29414)">
                <path
                  id="Vector"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z"
                  fill="#737373"
                />
              </g>
              <defs>
                <clipPath id="clip0_3010_29414">
                  <rect width="9" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            &nbsp;&nbsp; quick fox jumps over the lazy dog.
          </p>
          <h3 style={{ fontWeight: "bold" }}>the quick fox jumps over</h3>
          <p
            style={{
              fontWeight: "bold",
              opacity: "80%",
            }}
          >
            <svg
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icn arrow-right icn-xs" clip-path="url(#clip0_3010_29414)">
                <path
                  id="Vector"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z"
                  fill="#737373"
                />
              </g>
              <defs>
                <clipPath id="clip0_3010_29414">
                  <rect width="9" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            &nbsp;&nbsp; quick fox jumps over the lazy dog.
          </p>
          <p
            style={{
              fontWeight: "bold",
              opacity: "80%",
            }}
          >
            <svg
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icn arrow-right icn-xs" clip-path="url(#clip0_3010_29414)">
                <path
                  id="Vector"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z"
                  fill="#737373"
                />
              </g>
              <defs>
                <clipPath id="clip0_3010_29414">
                  <rect width="9" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            &nbsp;&nbsp; quick fox jumps over the lazy dog.
          </p>
          <p
            style={{
              fontWeight: "bold",
              opacity: "80%",
            }}
          >
            <svg
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icn arrow-right icn-xs" clip-path="url(#clip0_3010_29414)">
                <path
                  id="Vector"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z"
                  fill="#737373"
                />
              </g>
              <defs>
                <clipPath id="clip0_3010_29414">
                  <rect width="9" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            &nbsp;&nbsp; quick fox jumps over the lazy dog.
          </p>
          <p
            style={{
              fontWeight: "bold",
              opacity: "80%",
            }}
          >
            <svg
              width="9"
              height="16"
              viewBox="0 0 9 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icn arrow-right icn-xs" clip-path="url(#clip0_3010_29414)">
                <path
                  id="Vector"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z"
                  fill="#737373"
                />
              </g>
              <defs>
                <clipPath id="clip0_3010_29414">
                  <rect width="9" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            &nbsp;&nbsp; quick fox jumps over the lazy dog.
          </p>
        </div>
      </div>

      <div style={{ backgroundColor: "rgb(250, 250, 250)", padding: "5% 15%" }}>
        <h1 className="bestSellerProducts">
          Best Seller Products <hr style={{ marginTop: "3%" }} />
        </h1>
        <div className="cardColumn1">
          <Card>
            <img style={{ margin: "unset" }} alt="Sample" src={photo1} />
            <CardBody style={{ textAlign: "left" }}>
              <CardTitle
                style={{ margin: "8% 0", fontWeight: "bold" }}
                tag="h5"
              >
                Graphic Design
              </CardTitle>
              <CardSubtitle
                style={{ margin: "5% 0", fontWeight: "bold", opacity: "64%" }}
                className=" text-muted"
                tag="h6"
              >
                English Department
              </CardSubtitle>
              <CardText
                style={{
                  display: "flex",
                  textAlign: "left",

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
                  $16.48
                </p>
                <p style={{ color: "darkgreen", fontWeight: "bold" }}>$6.48</p>
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <img style={{ margin: "unset" }} alt="Sample" src={photo2} />
            <CardBody style={{ textAlign: "left" }}>
              <CardTitle
                style={{ margin: "8% 0", fontWeight: "bold" }}
                tag="h5"
              >
                Graphic Design
              </CardTitle>
              <CardSubtitle
                style={{ margin: "5% 0", fontWeight: "bold", opacity: "64%" }}
                className=" text-muted"
                tag="h6"
              >
                English Department
              </CardSubtitle>
              <CardText
                style={{
                  display: "flex",
                  textAlign: "left",

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
                  $16.48
                </p>
                <p style={{ color: "darkgreen", fontWeight: "bold" }}>$6.48</p>
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <img style={{ margin: "unset" }} alt="Sample" src={photo3} />
            <CardBody style={{ textAlign: "left" }}>
              <CardTitle
                style={{ margin: "8% 0", fontWeight: "bold" }}
                tag="h5"
              >
                Graphic Design
              </CardTitle>
              <CardSubtitle
                style={{ margin: "5% 0", fontWeight: "bold", opacity: "64%" }}
                className=" text-muted"
                tag="h6"
              >
                English Department
              </CardSubtitle>
              <CardText
                style={{
                  display: "flex",
                  textAlign: "left",

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
                  $16.48
                </p>
                <p style={{ color: "darkgreen", fontWeight: "bold" }}>$6.48</p>
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <img style={{ margin: "unset" }} alt="Sample" src={photo4} />
            <CardBody style={{ textAlign: "left" }}>
              <CardTitle
                style={{ margin: "8% 0", fontWeight: "bold" }}
                tag="h5"
              >
                Graphic Design
              </CardTitle>
              <CardSubtitle
                style={{ margin: "5% 0", fontWeight: "bold", opacity: "64%" }}
                className=" text-muted"
                tag="h6"
              >
                English Department
              </CardSubtitle>
              <CardText
                style={{
                  display: "flex",
                  textAlign: "left",

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
                  $16.48
                </p>
                <p style={{ color: "darkgreen", fontWeight: "bold" }}>$6.48</p>
              </CardText>
            </CardBody>
          </Card>
        </div>
        <div className="cardColumn2">
          <Card>
            <img style={{ margin: "unset" }} alt="Sample" src={photo1} />
            <CardBody style={{ textAlign: "left" }}>
              <CardTitle
                style={{ margin: "8% 0", fontWeight: "bold" }}
                tag="h5"
              >
                Graphic Design
              </CardTitle>
              <CardSubtitle
                style={{ margin: "5% 0", fontWeight: "bold", opacity: "64%" }}
                className=" text-muted"
                tag="h6"
              >
                English Department
              </CardSubtitle>
              <CardText
                style={{
                  display: "flex",
                  textAlign: "left",

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
                  $16.48
                </p>
                <p style={{ color: "darkgreen", fontWeight: "bold" }}>$6.48</p>
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <img style={{ margin: "unset" }} alt="Sample" src={photo2} />
            <CardBody style={{ textAlign: "left" }}>
              <CardTitle
                style={{ margin: "8% 0", fontWeight: "bold" }}
                tag="h5"
              >
                Graphic Design
              </CardTitle>
              <CardSubtitle
                style={{ margin: "5% 0", fontWeight: "bold", opacity: "64%" }}
                className=" text-muted"
                tag="h6"
              >
                English Department
              </CardSubtitle>
              <CardText
                style={{
                  display: "flex",
                  textAlign: "left",

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
                  $16.48
                </p>
                <p style={{ color: "darkgreen", fontWeight: "bold" }}>$6.48</p>
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <img style={{ margin: "unset" }} alt="Sample" src={photo3} />
            <CardBody style={{ textAlign: "left" }}>
              <CardTitle
                style={{ margin: "8% 0", fontWeight: "bold" }}
                tag="h5"
              >
                Graphic Design
              </CardTitle>
              <CardSubtitle
                style={{ margin: "5% 0", fontWeight: "bold", opacity: "64%" }}
                className=" text-muted"
                tag="h6"
              >
                English Department
              </CardSubtitle>
              <CardText
                style={{
                  display: "flex",
                  textAlign: "left",

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
                  $16.48
                </p>
                <p style={{ color: "darkgreen", fontWeight: "bold" }}>$6.48</p>
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <img style={{ margin: "unset" }} alt="Sample" src={photo4} />
            <CardBody style={{ textAlign: "left" }}>
              <CardTitle
                style={{ margin: "8% 0", fontWeight: "bold" }}
                tag="h5"
              >
                Graphic Design
              </CardTitle>
              <CardSubtitle
                style={{ margin: "5% 0", fontWeight: "bold", opacity: "64%" }}
                className=" text-muted"
                tag="h6"
              >
                English Department
              </CardSubtitle>
              <CardText
                style={{
                  display: "flex",
                  textAlign: "left",

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
                  $16.48
                </p>
                <p style={{ color: "darkgreen", fontWeight: "bold" }}>$6.48</p>
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
      <BrandIcons />
      <Bandage2 />
      <hr style={{ margin: "0 13vw" }} />
      <Footer />
    </>
  );
};

export default ProductPages;
