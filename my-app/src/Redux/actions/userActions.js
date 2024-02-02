import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import history from "../../Components/history";
import axios from "axios";
import { instance } from "../../api/api";

export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});

export const logoutUser = () => {
  localStorage.removeItem("token");
  delete instance.defaults.headers.common["Authorization"];
  return {
    type: "LOGOUT_USER",
  };
};

export const verifyToken = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");

    if (token) {
      instance.defaults.headers.common["Authorization"] = token;

      try {
        const response = await instance.get("/verify");
        const user = response.data;

        dispatch({
          type: "LOGIN_SUCCESS",
          payload: { user, token: user.token },
        });

        instance.defaults.headers.common["Authorization"] = user.token;
        localStorage.setItem("token", user.token);
      } catch (error) {
        dispatch(logoutUser());
      }
    }
  };
};

export const login = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await instance.post("/login", credentials);

      const user = response.data;

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { user, token: user.token },
      });

      toast.success("You are logged in successfully.");

      localStorage.setItem("token", user.token);
      instance.defaults.headers.common["Authorization"] = user.token;

      history.push("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
      toast.error("Login failed. Please check your credentials.");
    }
  };
};
