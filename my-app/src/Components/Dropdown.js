import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../Redux/actions/productActions";
import { useDispatch } from "react-redux";

const ExampleDropDown = ({ direction, ...args }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const categories = useSelector((state) => state.global.categories);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const dispatch = useDispatch();
  //let { categoryId } = useParams();

  /* const handleChangeCategory = () => {
    dispatch(fetchProducts(`id:${categoryId}`, null, null, 1));
  };*/

  return (
    <>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle
          style={{
            backgroundColor: "white",
            fontFamily: "Montserrat-Bold, Helvetica",
            fontSize: "14px",
            fontWeight: 700,
            opacity: 0.57,
            color: "black",
          }}
          caret
        >
          Shop
        </DropdownToggle>
        <DropdownMenu style={{ padding: "10%" }}>
          <h6>Kadın</h6>
          {categories.map((category) => (
            <React.Fragment key={category.id}>
              {category.gender === "k" && (
                <NavLink
                  //onClick={handleChangeCategory}
                  style={{ textDecorationLine: "unset" }}
                  to={`/shop/${category.id}/${
                    category.gender
                  }/${category.title.toLowerCase()}`}
                >
                  <DropdownItem>{category.title}</DropdownItem>
                </NavLink>
              )}
            </React.Fragment>
          ))}

          <DropdownItem divider />
          <h6>Erkek</h6>

          {categories.map((category) => (
            <React.Fragment key={category.id}>
              {category.gender === "e" && (
                <NavLink
                  style={{ textDecorationLine: "unset" }}
                  to={`/shop/${category.id}/${category.gender}/${category.title}`}
                >
                  <DropdownItem>{category.title}</DropdownItem>
                </NavLink>
              )}
            </React.Fragment>
          ))}
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default ExampleDropDown;
