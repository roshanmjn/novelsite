import React from "react";
import { NavLink } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../login/login.css";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { TabTitle } from "../../utils/GeneralFunctions";
const Signup = () => {
  TabTitle("User Signup");
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object({
      fullname: yup
        .string()
        .max(20, "Name should be less than 20 characters")
        .required("Full name is required !"),
      username: yup
        .string()
        .min(4, "Username must be at least 4 characters")
        .max(20, "Username must be less than 20 characters")
        .required("Username is required !")
        .test("UniqueUsername", "username already in use", async (value) => {
          const response = await axios.get(
            `http://localhost:5000/check/${value}/username`
          );
          // console.log(response);
          return response.data; //returns boolean true/false
        }),
      email: yup
        .string()
        .email("Email is not valid !")
        .required("Email is required !")
        .test(
          "uniqueEmail",
          "Account with email already exists !",
          async (value) => {
            const response = await axios.get(
              `http://localhost:5000/check/${value}/email`
            );
            return response.data; //returns boolean true/false
          }
        ),
      password: yup
        .string()
        .min(6, "Password must be at least 6 characters !")
        .required("Password is required !"),
      confirmPassword: yup
        .string()
        .required("Please confirm password !")
        .oneOf([yup.ref("password"), null], "Passwords do not Match !"),
    }),
    onSubmit: (values) => {
      // console.log(formik.values);
      axios
        .post(`http://localhost:5000/signup`, formik.values, {
          withCredentials: true,
        })
        .then((res) => {
          // console.log(res);
          if (res.status == 200) {
            toast.success("Your account has been created.");
            setTimeout(() => {
              navigate("/login");
            }, 1700);
          } else {
            toast.error(res);
          }
        });

      // return response.data; //returns boolean true/false
    },
  });
  // console.log(formik.errors);

  return (
    <>
      <div className="container">
        <ToastContainer />
        <form className="signup-form" onSubmit={formik.handleSubmit}>
          <div className="col-8 col-lg-4 mx-auto">
            <h4 className="signup-heading">Sign up</h4>
            <div className="mb-3">
              <label htmlFor="signup-email" className="form-label signup-label">
                Full name
              </label>
              <input
                type="text"
                className="form-control signup-input"
                name="fullname"
                placeholder="Full name"
                style={{
                  border:
                    formik.touched.fullname && formik.errors.fullname
                      ? "1px solid red"
                      : "",
                }}
                value={formik.values.fullname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.fullname && formik.errors.fullname && (
                <span style={{ color: "red" }}>{formik.errors.fullname}</span>
              )}
            </div>
            <div className="mb-3">
              <label
                htmlFor="signup-username"
                className="form-label signup-label"
              >
                Username
              </label>
              <input
                type="text"
                className="form-control signup-input"
                id="signup-username"
                name="username"
                placeholder="Username"
                style={{
                  border:
                    formik.touched.username && formik.errors.username
                      ? "1px solid red"
                      : "",
                }}
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.username && formik.errors.username && (
                <span style={{ color: "red" }}>{formik.errors.username}</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="signup-email" className="form-label signup-label">
                Email
              </label>
              <input
                type="text"
                className="form-control signup-input"
                id="signup-email"
                name="email"
                placeholder="Email"
                style={{
                  border:
                    formik.touched.email && formik.errors.email
                      ? "1px solid red"
                      : "",
                }}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <span style={{ color: "red" }}>{formik.errors.email}</span>
              )}
            </div>
            <div className="mb-3">
              <label
                htmlFor="signup-password"
                className="form-label signup-label"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control signup-input"
                id="signup-password"
                placeholder="Password"
                name="password"
                style={{
                  border:
                    formik.touched.password &&
                    (formik.errors.password || formik.errors.confirmPassword)
                      ? "1px solid red"
                      : "",
                }}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password &&
                (formik.errors.confirmPassword || formik.errors.password) && (
                  <span style={{ color: "red" }}>{formik.errors.password}</span>
                )}
            </div>
            <div className="mb-3">
              <label
                htmlFor="signup-confirm-password"
                className="form-label signup-label"
              >
                Confirm password
              </label>
              <input
                type="password"
                className="form-control signup-input"
                id="signup-confirm-password"
                name="confirmPassword"
                placeholder="Confirm Password"
                style={{
                  border:
                    formik.touched.confirmPassword &&
                    (formik.errors.confirmPassword || formik.errors.password)
                      ? "1px solid red"
                      : "",
                }}
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmPassword &&
                (formik.errors.confirmPassword || formik.errors.password) && (
                  <span style={{ color: "red" }}>
                    {formik.errors.confirmPassword}
                  </span>
                )}
            </div>
            <button type="submit" className="btn btn-primary signup-btn">
              Sign up
            </button>
          </div>
        </form>
        {/* </div> */}
      </div>
    </>
  );
};

export default Signup;
