import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Shop = () => {
  const categories = useSelector((state) => state.global.categories);
  const highestRatedCategories = categories.reduce((acc, category) => {
    if (!acc[category.title] || acc[category.title].rating < category.rating) {
      acc[category.title] = category;
    }
    return acc;
  }, {});

  const uniqueCategories = Object.values(highestRatedCategories);

  const sortedCategories = uniqueCategories
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  return (
    <div className="mainDivShop">
      <div className="cards">
        {sortedCategories.slice(0, 5).map((category, index) => (
          <NavLink
            style={{ textDecoration: "unset" }}
            to={`/shop/${category.id}/${
              category.gender
            }/${category.title.toLowerCase()}`}
          >
            <div
              key={category.id}
              className="shopCard"
              style={{
                width: "15vw",
                backgroundImage: `url(${category.img})`,
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  padding: "42% 35%",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <h6
                  style={{ margin: "auto", color: "white", marginBottom: "0" }}
                >
                  {category.gender === "k" ? "Kadın" : "Erkek"}
                </h6>
                <h6 style={{ margin: "auto", color: "white", marginTop: "0" }}>
                  {category.title}
                </h6>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Shop;
