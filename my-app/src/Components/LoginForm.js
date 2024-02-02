import React from "react";
import { useForm } from "react-hook-form";
import ComminicationBar from "./ComminicationBar";
import NavBar from "./NavBar";
import { login } from "../Redux/actions/userActions";
import { useDispatch } from "react-redux";
import gravatar from "gravatar";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  return (
    <>
      <div classname="comminicationBar">
        <ComminicationBar />
      </div>

      <div>
        <NavBar />
      </div>
      <form className="w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="form-control"
            {...register("email", {
              required: "Email is required",
              pattern: /^\S+@\S+$/i,
            })}
          />
          {errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <small className="text-danger">{errors.password.message}</small>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
