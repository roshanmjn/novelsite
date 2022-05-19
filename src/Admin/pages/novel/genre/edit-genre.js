import React, { useEffect } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
// import "./userList.css";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditGenre() {
  const params = useParams();
  const editId = params.id;

  const navigate = useNavigate();
  //----------HANDLE CHANGE INPUT FIELD
  const [editData, setEditData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:5000/admin/novels/genre/${editId}`)
        .then((response) => {
          if (response.status === 200) {
            setEditData(response.data[0]);

            // console.log("axios_data:", response.data[0]);
          }
          setLoading(false);
        });
    } catch (error) {
      toast.alert("Network Down");
      navigate("/admin/novels/genre", { replace: true });
    }
  }, []);

  const handleChanged = (e) => {
    let { name, value } = e.target;

    setEditData((values) => {
      const nextFormData = { ...values, [name]: value };
      // console.log(nextFormData);
      return nextFormData;
    });
  };

  const handleUserUpdate = (e) => {
    e.preventDefault();
    const updatedData = {
      id: editData.id,
      title: editData.title,
      description: editData.description,
      status: editData.status,
    };

    if (!updatedData.title || !updatedData.description || !updatedData.status) {
      toast.error("Please Fillup all fields !. ");
    } else {
      sendUpdatedData(updatedData);
      toast.success("Genre updated. Redirecting...");
      setTimeout(() => {
        navigate("/admin/novels/genre", { replace: true });
      }, 1500);
    }
  };

  const sendUpdatedData = async (updatedData) => {
    const update_id = params.id;

    try {
      const response = await axios.put(
        `http://localhost:5000/admin/novels/genre/${update_id}`,
        updatedData
      );
      if (response.status === 200) {
        toast.success(response.data);
      } else if (response.data.status === 422) {
        console.log("all fields are mandatory");
      } else if (response.data.status === 404) {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  //LOADING COMPONENT INCASE WRONG USER ID IS ENTERED TO REACH EDIT FORM URL
  if (loading) {
    return (
      <div className="container ">
        <div className="col-12 mt-5 d-flex justify-content-center align-items-center">
          <h3 className="display-3">Genre Data Loading...</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="container " style={{ fontSize: "14px" }}>
      <div className="col-12 d-flex flex-column justify-item-center align-items-center">
        <div className="col-10 col-lg-8 px-5 py-2 shadow-sm rounded">
          <h4 className="display-6">Edit Table</h4>
        </div>

        <div className="col-10 col-lg-8 mt-5 editForm px-5  shadow rounded">
          <Form onSubmit={handleUserUpdate}>
            <Form.Group as={Row} className="mb-3" controlId="formBasicId">
              <Form.Label column sm={1}>
                <h6 className="display-6">ID :</h6>
              </Form.Label>
              <Col sm={11}>
                <Form.Control
                  type="text"
                  name="id"
                  value={editData.id}
                  disabled
                />
              </Col>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicFn">
              <Form.Label style={{ fontWeight: "bold" }}>
                Genre Title
              </Form.Label>
              <Form.Control
                type="text"
                value={editData.title}
                name="title"
                onChange={handleChanged}
                placeholder="New Title"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicGenreDesc">
              <Form.Label style={{ fontWeight: "bold" }}>
                Description
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={editData.description}
                name="description"
                placeholder="Description on genre."
                onChange={handleChanged}
                style={{ fontSize: "17px" }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Row>
                <Col sm={1}>
                  <Form.Label style={{ fontWeight: "bold" }}>Status</Form.Label>
                </Col>
                <Col sm={2}>
                  <Form.Check
                    type="radio"
                    label="In-active"
                    name="status"
                    value="0"
                    id="editInactive"
                    onChange={handleChanged}
                    checked={editData.status == "0"}
                  />
                </Col>
                <Col sm={1}>
                  <Form.Check
                    type="radio"
                    label="Active"
                    name="status"
                    value="1"
                    id="editActive"
                    checked={editData.status == "1"}
                    onChange={handleChanged}
                  />
                </Col>
              </Row>
            </Form.Group>
            <div className="d-flex ">
              <Button type="submit" variant="primary" size="lg">
                Save Changes
              </Button>
              <Link
                to="/admin/novels/genre"
                type="submit"
                className="btn btn-danger"
                size="lg"
                style={{ fontSize: "16px", marginLeft: "7em" }}
              >
                Cancel
              </Link>
            </div>
          </Form>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}
