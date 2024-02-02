import image1 from "../images/cardImg1.png";
import image2 from "../images/cardImage2.png";

import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

const FeaturedPosts = () => {
  return (
    <div>
      <header>
        <h4 style={{ color: "#23a6f0", fontWeight: "bold" }}>
          Practice Advice
        </h4>
        <h2>FEATURED POSTS</h2>
      </header>
      <div
        className="featuredPostsMobile"
        style={{ display: "flex", justifyContent: "center", margin: "5%" }}
      >
        <Card className="featuredPostsCard">
          <img alt="Sample" src={image1} />
          <CardBody style={{ textAlign: "left" }}>
            <CardTitle tag="h5" style={{ color: "#23a6f0" }}>
              Card title
            </CardTitle>
            <CardTitle tag="h5">Card subtitle</CardTitle>
            <CardText style={{ marginRight: "20%" }}>
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </CardText>
            <CardText style={{ display: "flex" }}>
              <p
                style={{ color: "gray", marginRight: "3%", fontWeight: "bold" }}
              >
                $16.48
              </p>
              <p style={{ color: "darkgreen", fontWeight: "bold" }}>$6.48</p>
            </CardText>
            <CardText>15 Sales</CardText>
            <CardText
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "25%",
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
                  backgroundColor: " #23856d",
                  borderRadius: "8px",
                  height: "16px",
                  left: " 0",

                  width: "16px",
                }}
              ></button>
              <button
                style={{
                  backgroundColor: " #e67c40",
                  borderRadius: "8px",
                  height: "16px",
                  left: " 0",

                  width: "16px",
                }}
              ></button>
              <button
                style={{
                  backgroundColor: " #252b42",
                  borderRadius: "8px",
                  height: "16px",
                  left: " 0",

                  width: "16px",
                }}
              ></button>
            </CardText>
            <CardText></CardText>

            <Button outline color="info">
              Button
            </Button>
          </CardBody>
        </Card>
        <Card className="featuredPostsCard">
          <img alt="Sample" src={image2} />
          <CardBody style={{ textAlign: "left" }}>
            <CardTitle tag="h5" style={{ color: "#23a6f0" }}>
              Card title
            </CardTitle>
            <CardTitle tag="h5">Card subtitle</CardTitle>
            <CardText style={{ marginRight: "20%" }}>
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </CardText>
            <CardText style={{ display: "flex" }}>
              <p
                style={{ color: "gray", marginRight: "3%", fontWeight: "bold" }}
              >
                $16.48
              </p>
              <p style={{ color: "darkgreen", fontWeight: "bold" }}>$6.48</p>
            </CardText>
            <CardText>15 Sales</CardText>
            <CardText
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "25%",
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
                  backgroundColor: " #23856d",
                  borderRadius: "8px",
                  height: "16px",
                  left: " 0",

                  width: "16px",
                }}
              ></button>
              <button
                style={{
                  backgroundColor: " #e67c40",
                  borderRadius: "8px",
                  height: "16px",
                  left: " 0",

                  width: "16px",
                }}
              ></button>
              <button
                style={{
                  backgroundColor: " #252b42",
                  borderRadius: "8px",
                  height: "16px",
                  left: " 0",

                  width: "16px",
                }}
              ></button>
            </CardText>
            <CardText></CardText>

            <Button outline color="info">
              Button
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default FeaturedPosts;
