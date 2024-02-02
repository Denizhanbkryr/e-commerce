import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import {
  fetchProducts,
  setActivePage,
  setFetchState,
  setPageCount,
} from "../Redux/actions/productActions";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Paginationa = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { totalProductCount, pageCount } = useSelector(
    (state) => state.product
  );

  const totalPages = Math.ceil(totalProductCount / 25);

  const qP = useSelector((state) => state.searchParams);

  const handlePageClick = (page) => {
    setCurrentPage(page);
    dispatch(setActivePage(page - 1));
    dispatch(setFetchState("FETCHING"));

    const offset = 25;
    dispatch(fetchProducts(qP.filter, qP.sort, page, offset, qP.category));
  };

  return (
    totalPages && (
      <div style={{ display: "block", padding: 30 }}>
        <Pagination>
          <PaginationItem disabled={currentPage === 1}>
            <PaginationLink
              previous
              onClick={() => handlePageClick(currentPage - 1)}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index} active={index + 1 === currentPage}>
              <PaginationLink onClick={() => handlePageClick(index + 1)}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem disabled={currentPage === totalPages}>
            <PaginationLink next onClick={() => handlePageClick(currentPage)} />
          </PaginationItem>
        </Pagination>
      </div>
    )
  );
};

export default Paginationa;
