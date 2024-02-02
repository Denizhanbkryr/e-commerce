import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import NavBar from "./NavBar";
import history from "../Components/history";
import { instance } from "../api/api";
import GreenComminicationBar from "./GreenComminicationBar";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const [roles, setRoles] = useState([]);
  const [storeRole, setStoreRole] = useState(false);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await instance.get("/roles");
        setRoles(response.data);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };

    fetchRoles();
  }, []);

  const changeHandler = (e) => {
    const roleId = e.target.value;
    roleId === "2" ? setStoreRole(true) : setStoreRole(false);
    console.log(e.target.value);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    setSubmitError(null);

    try {
      let requestData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: parseInt(data.role_id),
      };

      if (parseInt(data.role_id) === 2) {
        requestData.store = {
          name: data.storeName,
          phone: data.storePhone,
          tax_no: data.storeTaxId,
          bank_account: data.storeBankAccount,
        };
      }

      history.push("/");

      const response = await instance.post("/signup", requestData);

      if (response.status === 200) {
        alert(
          "You need to click the link in the email to activate your account!"
        );
      }
    } catch (error) {
      setSubmitError("An error occurred during submission. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div classname="comminicationBar">
        <GreenComminicationBar />
      </div>

      <div>
        <NavBar />
      </div>
      <form
        style={{ width: "50%", margin: "auto" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            {...register("name", {
              required: "Name is required",
              minLength: 3,
            })}
          />
          {errors.name && (
            <small className="text-danger">{errors.name.message}</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
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
            className="form-control"
            id="password"
            name="password"
            {...register("password", {
              required: "Password is required",
              minLength: 8,
            })}
          />
          {errors.password && (
            <small className="text-danger">{errors.password.message}</small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            {...register("confirmPassword", {
              required: "Password confirmation is required",
              validate: (value) =>
                value === getValues("password") || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <small className="text-danger">
              {errors.confirmPassword.message}
            </small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            onClick={changeHandler}
            className="form-control"
            {...register("role_id", { required: "Role is required" })}
          >
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
          {errors.role && (
            <small className="text-danger">{errors.role.message}</small>
          )}
        </div>

        {storeRole && (
          <>
            <div className="form-group">
              <label htmlFor="storeName">Store Name</label>
              <input
                type="text"
                className="form-control"
                id="storeName"
                name="storeName"
                {...register("storeName", {
                  required: "Store Name is required",
                  minLength: 3,
                })}
              />
              {errors.storeName && (
                <small className="text-danger">
                  {errors.storeName.message}
                </small>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="storePhone">Store Phone</label>
              <input
                type="text"
                className="form-control"
                id="storePhone"
                name="storePhone"
                {...register("storePhone", {
                  required: "Store Phone is required",
                  pattern:
                    /^(\+\d{1,3}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                })}
              />
              {errors.storePhone && (
                <small className="text-danger">
                  {errors.storePhone.message}
                </small>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="storeTaxId">Store Tax ID</label>
              <input
                type="text"
                className="form-control"
                id="storeTaxId"
                name="storeTaxId"
                {...register("storeTaxId", {
                  required: "Store Tax ID is required",
                  pattern: /^T\d{4}V\d{6}$/,
                })}
              />
              {errors.storeTaxId && (
                <small className="text-danger">
                  {errors.storeTaxId.message}
                </small>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="storeBankAccount">Store Bank Account</label>
              <input
                type="text"
                className="form-control"
                id="storeBankAccount"
                name="storeBankAccount"
                {...register("storeBankAccount", {
                  required: "Store Bank Account is required",
                  //       pattern: /^TR\d{2}\d{4}\d{4}\d{4}\d{4}\d{4}\d{2}$/,
                })}
              />
              {errors.storeBankAccount && (
                <small className="text-danger">
                  {errors.storeBankAccount.message}
                </small>
              )}
            </div>
          </>
        )}

        {submitError && <p className="text-danger">{submitError}</p>}

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
};

export default SignUpForm;
