import { instance } from "../../api/api";

export const setProductList = (productList) => ({
  type: "SET_PRODUCT_LIST",
  payload: productList,
});

export const setTotalProductCount = (totalProductCount) => ({
  type: "SET_TOTAL_PRODUCT_COUNT",
  payload: totalProductCount,
});

export const setPageCount = (pageCount) => ({
  type: "SET_PAGE_COUNT",
  payload: pageCount,
});

export const setActivePage = (activePage) => ({
  type: "SET_ACTIVE_PAGE",
  payload: activePage,
});

export const setFetchState = (fetchState) => ({
  type: "SET_FETCH_STATE",
  payload: fetchState,
});

export const fetchProducts =
  (filter, sort, page, offset, category) => async (dispatch) => {
    dispatch(setFetchState("FETCHING"));

    try {
      let params = {
        filter,
        offset,
        category,
        sort,
      };

      console.log("params:", params);

      const response = await instance.get("/products", {
        params,
      });
      console.log(response.data);

      dispatch(setProductList(response.data.products));
      dispatch(setTotalProductCount(response.data.total));
      dispatch(setPageCount(Math.ceil(response.data.total / 25)));
      dispatch(setActivePage(page));
      dispatch(setFetchState("FETCHED"));
    } catch (error) {
      dispatch(setFetchState("FAILED"));
      console.error("Error fetching products:", error.response);
    }
  };
