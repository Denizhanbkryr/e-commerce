import { Button, Input } from "reactstrap";
import icon1 from "../brandIcons/icon.png";
import icon2 from "../brandIcons/icon2.png";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  setActivePage,
  setFetchState,
} from "../Redux/actions/productActions";
import { setSort } from "../Redux/actions/searchParametersAction";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useParams } from "react-router-dom";
import {
  setCategory,
  setFilter,
} from "../Redux/actions/searchParametersAction";
const initialState = {
  category: 0,
  filter: "",
  sort: "",
};
const ContainerResult = () => {
  const queryParams = useParams();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);
  const [searchTerm, setSearchTerm] = useState(initialState);
  const [filterParam, setFilterParam] = useState();
  const qP = useSelector((state) => state.searchParams);

  const changeFilter = (event) => {
    const { value } = event.target;
    setFilterParam(value);
  };

  const applyFilter = () => {
    dispatch(setFilter(filterParam));
    dispatch(setFetchState(1));
    dispatch(fetchProducts(qP.filter, qP.sort, 1, qP.offset, qP.category));
  };

  const handleSortChange = (sortOption) => {
    dispatch(setSort(sortOption));
  };

  useEffect(() => {
    dispatch(setCategory(queryParams.id));
  }, [queryParams]);

  useEffect(() => {
    dispatch(setActivePage(1));
  }, [qP.filter, qP.sort]);

  return (
    <div
      className="container1"
      style={{
        display: "flex",
        margin: "4% 10%",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p className="containerP">Showing all 12 results</p>
      </div>
      <div>
        <p className="containerPviews">
          Views:
          <Button
            color="white"
            style={{
              border: "1px solid rgba(0, 0, 0, 0.29)",
              marginRight: "3%",
              marginLeft: "3%",
            }}
          >
            <img
              style={{ marginBottom: "7%", marginLeft: "3%" }}
              src={icon1}
              alt="Icon 1"
            />
          </Button>
          <Button
            color="white"
            style={{ border: "1px solid rgba(0, 0, 0, 0.29)" }}
          >
            <img src={icon2} alt="Icon 2" style={{ margin: "auto 0" }} />
          </Button>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <Input
            name="filter"
            style={{ borderRadius: "revertLayer" }}
            placeholder="search"
            type=""
            value={filterParam}
            onChange={changeFilter}
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
              }}
              caret
            >
              Sırala
            </DropdownToggle>
            <DropdownMenu style={{ padding: "10%" }}>
              <DropdownItem onClick={() => handleSortChange("price:desc")}>
                Fiyat Yüksekten Düşüğe
              </DropdownItem>
              <DropdownItem onClick={() => handleSortChange("price:asc")}>
                Fiyat Düşükten Yükseğe
              </DropdownItem>
              <DropdownItem onClick={() => handleSortChange("rating:desc")}>
                Yüksek Puan - Düşük Puan
              </DropdownItem>
              <DropdownItem onClick={() => handleSortChange("rating:asc")}>
                Düşük Puan - Yüksek Puan
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Button
            style={{
              color: "white",
              marginLeft: "5%",
              backgroundColor: "rgb(35, 166, 240)",
              border: "none",
            }}
            onClick={applyFilter}
          >
            Filter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContainerResult;
