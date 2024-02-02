import { instance } from "../../api/api";

export const setCategories = (categories) => ({
  type: "SET_CATEGORIES",
  payload: categories,
});

export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await instance.get("/categories");
    const categories = response.data;
    console.log(categories);

    dispatch(setCategories(categories));
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};
