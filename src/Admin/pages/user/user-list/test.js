{
  /*EDIT USER MODAL STARTS*/
}
<div className="editUserModal">
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Edit User
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="row g-3 align-items-center mb-3">
              <div className="col-auto">
                <label htmlFor="editUserId" className="col-form-label">
                  ID
                </label>
              </div>
              <div className="col">
                <input
                  type="text"
                  id="editUserId"
                  className="form-control"
                  disabled
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="EditUserFullname" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="EditUserFullname"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="EditUserUsername" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="EditUserUsername"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="EditUserEmail" className="form-label">
                Email
              </label>
              <input type="text" className="form-control" id="EditUserEmail" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="EditUserAddr" className="form-label">
                Address
              </label>
              <input type="text" className="form-control" id="EditUserAddr" />
            </div>
            <div className="mb-3">
              <label htmlFor="EditUserCreatedon" className="form-label">
                First login
              </label>
              <input
                type="date"
                className="form-control"
                id="EditUserCreatedon"
                value="2022-02-05"
                disabled
              />
            </div>
            <div className="row g-3 align-items-center mb-3">
              <div className="col-auto">
                <label className="col-form-label">Gender</label>
              </div>
              <div className="col-auto">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="editUserGenderMale"
                />
                <label
                  className="form-check-label"
                  htmlFor="editUserGenderMale"
                >
                  Male
                </label>
              </div>
              <div className="col-auto">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="editUserGenderFemale"
                />
                <label
                  className="form-check-label"
                  htmlFor="editUserGenderFemale"
                >
                  Female
                </label>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</div>;
{
  /*EDUT USER MODAL ENDS*/
}

{
  /*EDIT USER MODAL REACT-BOOTSTRAP START*/
}
<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
  <Modal.Header closeButton>
    <Modal.Title>Edit User</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form onSubmit={handleEditSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formBasicId">
        <Form.Label column sm={1}>
          ID
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" name="id" value={id} disabled />
        </Col>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicFn">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          value={full_name}
          name="fullname"
          onChange={handleChanged}
          placeholder="Full Name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          value={username}
          name="username"
          onChange={handleChanged}
          placeholder="Username"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          value={email}
          name="email"
          onChange={handleChanged}
          placeholder="Email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
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
          value={address}
          onChange={handleChanged}
          placeholder="Address"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCrDate">
        <Form.Label>Account Created on</Form.Label>
        <Form.Control
          type="date"
          value={created_on}
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
              value={gender || 0}
              id="editUserMale"
              onChange={handleChanged}
            />
          </Col>
          <Col sm={1}>
            <Form.Check
              type="radio"
              label="Female"
              name="gender"
              value={gender || 0}
              id="editUserFemale"
              onChange={handleChanged}
            />
          </Col>
        </Row>
      </Form.Group>
      <Button variant="primary">Save Change</Button>
    </Form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    {/* <Button variant="primary" onClick={handleEditSubmit}>
            Save Change
          </Button> */}
  </Modal.Footer>
</Modal>;
{
  /*EDIT USER MODAL REACT-BOOTSTRAP END*/
}
