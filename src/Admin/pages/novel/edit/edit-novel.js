import React, { useEffect } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TabTitle } from "../../../../utils/GeneralFunctions";

export const EditNovel = () => {
  TabTitle("Edit Novel");
  const params = useParams();
  const editId = params.id;
  const navigate = useNavigate();
  const [getGenre, setGetGenre] = useState({ genres: [] });

  //----------HANDLE CHANGE INPUT FIELD
  const [editNovelData, setEditNovelData] = useState({
    id: "",
    name: "",
    author: "",
    genre: "",
    image: "",
    chapters: "",
    rating: "",
    description: "",
    start_date: "",
    end_date: "",
    status: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    try {
      axios
        .get(`http://localhost:5000/admin/novels/${editId}`, {
          withCredentials: true,
        })
        .then((response) => {
          if (response.status === 200) {
            setEditNovelData(response.data[0]);
          }
          setLoading(false);
        });
    } catch (error) {
      toast.alert("Network Down");
      navigate("/admin/novels", { replace: true });
    }

    //TO GET AVAILABLE GENRE ON FOR <SELECT>GENRE</SELECT> LIST
    const response = await axios.get(
      "http://localhost:5000/admin/novels/genre"
    );
    setGetGenre({ genres: response.data });
  }, [params.id]);

  //FORM ON CHANGE HANDLER
  const handleChanged = (e) => {
    let { name, value, files } = e.target;
    setEditNovelData((values) => {
      if (name == "image") {
        const nextFormData = { ...values, [name]: files[0] };
        console.log(nextFormData);
        return nextFormData;
      } else {
        const nextFormData = { ...values, [name]: value };
        console.log(nextFormData);
        return nextFormData;
      }
    });
  };

  const handleNovelUpdate = (e) => {
    e.preventDefault();

    if (
      !editNovelData.name ||
      // !editNovelData.chapters ||
      !editNovelData.description ||
      !editNovelData.status ||
      !editNovelData.genre
    ) {
      toast.error("Please Fillup all fields !. ");
    } else {
      sendEditNovelData(editNovelData);
      // console.log(editNovelData);
      toast.success("Novel updated. Redirecting...");
      setTimeout(() => {
        navigate("/admin/novels", { replace: true });
      }, 500);
    }
  };

  const sendEditNovelData = async (editNovelData) => {
    const update_id = params.id;
    const formData = new FormData();
    formData.append("image", editNovelData.image);
    formData.append("name", editNovelData.name);
    formData.append("genre_id", editNovelData.genre);
    formData.append("chapters", editNovelData.chapters);
    formData.append("description", editNovelData.description);
    formData.append("start_date", editNovelData.start_date);
    formData.append("status", editNovelData.status);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    try {
      const response = await axios.put(
        `http://localhost:5000/admin/novels/edit/${update_id}`,
        formData,
        {
          header: {
            "Content-Type": "multipart/form-data; boundary=MyBoundary",
          },
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        console.log(response.data);
      } else if (response.data.status === 422) {
        console.log("all fields are mandatory");
      } else if (response.data.status === 404) {
        console.log("error");
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };

  //LOADING COMPONENT IN-CASE WRONG USER ID IS ENTERED TO REACH EDIT FORM URL
  if (loading) {
    return (
      <div className="container ">
        <div className="col-12 mt-5 d-flex justify-content-center align-items-center">
          <h3 className="display-3">Data is being Loaded...</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="container " style={{ fontSize: "14px" }}>
      <div className="col-12 d-flex flex-column justify-item-center align-items-center">
        <div className="col-10 col-lg-8 px-5 py-2 shadow-sm rounded">
          <h4 className="display-6">Edit Novel</h4>
        </div>

        <div className="col-10 col-lg-8 editForm px-5  shadow rounded">
          <Form onSubmit={handleNovelUpdate}>
            <Form.Group as={Row} className="mb-3" controlId="formBasicId">
              <Form.Label column sm={1}>
                <h6 className="display-6">ID</h6>
              </Form.Label>
              <Col sm={11}>
                <Form.Control
                  type="text"
                  name="id"
                  value={editNovelData.id}
                  disabled
                />
              </Col>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNovelName">
              <Form.Label>Novel Name</Form.Label>
              <Form.Control
                type="text"
                value={editNovelData.name}
                name="name"
                onChange={handleChanged}
                placeholder="Novel name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAuthor">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                value={editNovelData.author}
                name="author"
                onChange={handleChanged}
                placeholder="Author"
                disabled
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicGenre">
              <Form.Label>Genre</Form.Label>
              <Form.Select
                value={editNovelData.genre}
                name="genre"
                onChange={handleChanged}
                style={{ fontSize: "16px" }}
              >
                <option value="">Select Genre</option>
                {getGenre.genres.map((e, idx) => {
                  return (
                    <option value={e.id} key={idx}>
                      {e.title}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Choose an image for novel</Form.Label>
              <Form.Control
                name="image"
                type="file"
                onChange={handleChanged}
                accept="image/x-png,image/gif,image/jpeg"
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formBasicChapters"
              >
                <Form.Label>Chapters</Form.Label>
                <Form.Control
                  type="text"
                  value={editNovelData.chapters}
                  name="chapters"
                  onChange={handleChanged}
                  placeholder="Chapters"
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formBasicRating">
                <Form.Label>Average Rating</Form.Label>
                <Form.Control
                  type="text"
                  value={editNovelData.rating}
                  name="rating"
                  onChange={handleChanged}
                  placeholder="Rating"
                  disabled
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicDesc">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={editNovelData.description}
                onChange={handleChanged}
                placeholder="Something about the novel..."
              />
            </Form.Group>

            <Row>
              <Form.Group
                as={Col}
                className="mb-4"
                controlId="formBasicStartDate"
              >
                <Form.Label>Start date</Form.Label>
                <Form.Control
                  type="text"
                  value={editNovelData.start_date}
                  name="start_date"
                  onChange={handleChanged}
                  disabled
                />
              </Form.Group>
              <Form.Group
                as={Col}
                className="mb-4"
                controlId="formBasicEndDate"
              >
                <Form.Label>End date</Form.Label>
                <Form.Control
                  type="text"
                  value={editNovelData.end_date}
                  name="end_date"
                  onChange={handleChanged}
                  disabled
                />
              </Form.Group>
            </Row>
            <Form.Group as={Col} className="mb-4" controlId="formBasicStatus">
              <Row>
                <Col sm={1}>
                  <Form.Label>Status</Form.Label>
                </Col>
                <Col sm={2}>
                  <Form.Check
                    type="radio"
                    label="Ongoing"
                    name="status"
                    value="ongoing"
                    id="editStatusOngoing"
                    onChange={handleChanged}
                    checked={editNovelData.status === "ongoing"}
                  />
                </Col>
                <Col sm={2}>
                  <Form.Check
                    type="radio"
                    label="Completed"
                    name="status"
                    value="completed"
                    id="editStatusCompleted"
                    checked={editNovelData.status === "completed"}
                    onChange={handleChanged}
                  />
                </Col>
                <Col sm={2}>
                  <Form.Check
                    type="radio"
                    label="Hiatus"
                    name="status"
                    value="hiatus"
                    id="editStatusHiatus"
                    checked={editNovelData.status === "hiatus"}
                    onChange={handleChanged}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Button type="submit" variant="primary" size="lg">
              Save Changes
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
