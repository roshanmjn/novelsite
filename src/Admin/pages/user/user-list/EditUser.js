import React, { useEffect } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import "./userTable.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditUser = () => {
  const params = useParams();
  const editId = params.id;

  const navigate = useNavigate();
  //----------HANDLE CHANGE INPUT FIELD
  const [editData, setEditData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:5000/admin/users/${editId}`)
        .then((response) => {
          if (response.status === 200) {
            setEditData(response.data[0]);
            // console.log("axios_data:", response.data[0]);
          }
          setLoading(false);
        });
    } catch (error) {
      toast.alert("Network Down");
      navigate("/admin/users", { replace: true });
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

  const handleUserUpdate = (ev) => {
    ev.preventDefault();
    // console.log(JSON.stringify(editData));
    const updatedData = {
      id: editData.id,
      full_name: editData.full_name,
      username: editData.username,
      email: editData.email,
      password: editData.password,
      address: editData.address,
      gender: editData.gender,
    };
    // var updatedDataSize = Object.keys(updatedData).length;
    if (
      !updatedData.id ||
      !updatedData.full_name ||
      !updatedData.username ||
      !updatedData.email ||
      !updatedData.password ||
      !updatedData.address ||
      !updatedData.gender
    ) {
      toast.error("Please Fillup all fields !. ");
    } else {
      sendUpdatedData(updatedData);
      toast.success("User updated. Redirecting...");
      setTimeout(() => {
        navigate("/admin/users", { replace: true });
      }, 2000);
    }
    // const isEmpty = Object.values(updatedData).every(
    //   (x) => x === null || x === ""
    // );
  };

  const sendUpdatedData = async (updatedData) => {
    const update_id = params.id;
    try {
      const response = await axios.put(
        `http://localhost:5000/admin/users/edit/${update_id}`,
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
          <h3 className="display-3">User Data Loading...</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="container " style={{ fontSize: "14px" }}>
      {" "}
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
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                value={editData.full_name}
                name="full_name"
                onChange={handleChanged}
                placeholder="Full Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={editData.username}
                name="username"
                onChange={handleChanged}
                placeholder="Username"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                value={editData.email}
                name="email"
                onChange={handleChanged}
                placeholder="Email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={editData.password}
                name="password"
                onChange={handleChanged}
                placeholder="Password"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddr">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={editData.address}
                onChange={handleChanged}
                placeholder="Address"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCrDate">
              <Form.Label>Account Created on</Form.Label>
              <Form.Control
                type="text"
                value={editData.created_on}
                name="created_on"
                onChange={handleChanged}
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Row>
                <Col sm={1}>
                  <Form.Label>Radio</Form.Label>
                </Col>
                <Col sm={1}>
                  <Form.Check
                    type="radio"
                    label="Male"
                    name="gender"
                    value="male"
                    id="editUserMale"
                    onChange={handleChanged}
                    checked={editData.gender === "male"}
                  />
                </Col>
                <Col sm={1}>
                  <Form.Check
                    type="radio"
                    label="Female"
                    name="gender"
                    value="female"
                    id="editUserFemale"
                    checked={editData.gender === "female"}
                    onChange={handleChanged}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Button type="submit" variant="primary" size="lg">
              Save Change
            </Button>
          </Form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default EditUser;
