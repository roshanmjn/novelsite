import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import * as yup from "yup";
import axios from "axios";

export default function Edit() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  //FORMIK AND YUP VALIDATION
  const formik = useFormik({
    initialValues: {
      chapter_id: "",
      title: "",
      content: "",
    },
    validationSchema: yup.object({
      chapter_id: yup
        .number()
        .typeError("Chapter Number Must be a Number")
        .max(2000, "Chapter Number should be less than 2000")
        .positive()
        .integer("Chapter Number must be a Integer")
        .required("Please Enter Chapter Number !"),
      title: yup
        .string()
        .min(4, "Title must be at least 4 characters")
        .max(50, "Title must be less than 50 characters")
        .required("Chapter Title is required !"),
      content: yup
        .string()
        .min(20, "Content must be at least 10 characters !")
        .required("Content Field Cannot be Empty!"),
    }),
    onSubmit: (values) => {
      const novel_id = params.id;
      axios
        .post(
          `http://localhost:5000/novels/${novel_id}/update`,
          formik.values,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.status == 200) {
            toast.success("Chapter Updated");
            setTimeout(() => {
              navigate(location.state.from);
            }, 1500);
          } else {
            toast.error(res);
          }
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    },
  });

  //ON SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //ON PAGE LOAD
  useEffect(() => {
    async function getChapterInformation() {
      try {
        const response = await axios.get(
          `http://localhost:5000/novels/${params.id}/chapter=${params.chapter_id}`
        );
        formik.setFieldValue("chapter_id", response.data[0].chapter_id);
        formik.setFieldValue("title", response.data[0].chapter_title);
        formik.setFieldValue("content", response.data[0].chapter_content);
      } catch (err) {
        console.log(err.response.data);
      }
    }
    getChapterInformation();
  }, []);

  return (
    <div className="container">
      <ToastContainer position="top-center" />
      <div className="wrapper col-12 col-md-10 col-lg-8 mx-5">
        <div className="col d-flex justify-content-between">
          <h1>Add New Chapter</h1>
          <button
            className="btn btn-danger"
            onClick={() => {
              location.state
                ? navigate(location.state.from)
                : navigate("/admin/novels");
            }}
          >
            Cancel
          </button>
        </div>
        <div className="col">
          <div className="col form">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="chapter_id" className="form-label">
                  Chapter Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="chapter_id"
                  name="chapter_id"
                  placeholder="Chapter Number"
                  style={{
                    border:
                      formik.touched.chapter_id && formik.errors.chapter_id
                        ? "1px solid red"
                        : "",
                  }}
                  value={formik.values.chapter_id}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  disabled
                />
                {formik.touched.chapter_id && formik.errors.chapter_id && (
                  <p style={{ color: "red" }}>{formik.errors.chapter_id}</p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  placeholder="Chapter Title"
                  style={{
                    border:
                      formik.touched.title && formik.errors.title
                        ? "1px solid red"
                        : "",
                  }}
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.title && formik.errors.title && (
                  <p style={{ color: "red" }}>{formik.errors.title}</p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="content" className="form-label">
                  Content
                </label>
                <textarea
                  className="form-control"
                  id="content"
                  name="content"
                  rows="2"
                  placeholder="Chapter Content..."
                  style={{
                    border:
                      formik.touched.content && formik.errors.content
                        ? "1px solid red"
                        : "",
                  }}
                  value={formik.values.content}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></textarea>
                {formik.touched.content && formik.errors.content && (
                  <p style={{ color: "red" }}>{formik.errors.content}</p>
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
