import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../images/technology 1.png";

import { Button } from "reactstrap";

export const DesktopShopHeader = () => {
  return (
    <>
      <div className="desktop-shop-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md">
              <div className="h">SUMMER 2020</div>
              <div className="headline">NEW COLLECTION</div>
              <p className="text-wrapper">
                We know how large objects will act, <br />
                but things on a small scale.
              </p>

              <div>
                <Button
                  size="lg"
                  style={{
                    backgroundColor: "#23a6f0",
                    border: "none",
                    width: "35vw",
                  }}
                >
                  SHOP NOW
                </Button>
              </div>
            </div>
            <div className="hero-cover-wrapper">
              <div className="hero-cover">
                <div className="none">
                  <div className="overlap-group">
                    <div className="ellipse" />
                    <div className="ellipse-2" />
                    <img className="technology" alt="Technology" src={img} />
                    <div className="ellipse-3" />
                    <div className="ellipse-4" />
                    <div className="ellipse-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
