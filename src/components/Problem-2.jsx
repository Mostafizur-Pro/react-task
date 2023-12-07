import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Problem2 = () => {
  const [contacts, setContact] = useState([]);

  useEffect(() => {
    fetch("https://contact.mediusware.com/api/contacts/")
      .then((res) => res.json())
      .then((data) => setContact(data));
  }, []);

  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShows(false);
  const handleShow1 = () => setShows(true);

  const handleModalA = () => {
    setShow(true);
    setShows(false);
  };
  const handleModalB = () => {
    setShow(false);
    setShows(true);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            onClick={handleShow}
            className="btn btn-lg btn-outline-primary"
            type="button"
          >
            All Contacts
          </button>
          <button
            onClick={handleShow1}
            className="btn btn-lg btn-outline-warning"
            type="button"
          >
            US Contacts
          </button>
        </div>
        {/* All Contacts */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>All Contacts</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button
              onClick={handleModalA}
              style={{ backgroundColor: "#46139f", margin: "10px" }}
            >
              Modal A
            </Button>
            <Button
              onClick={handleModalB}
              style={{ backgroundColor: "#ff7f50", margin: "10px" }}
            >
              Modal B
            </Button>
            <Button  style={{ backgroundColor: "#46139f ", margin: "10px" }} onClick={handleClose}>
              Modal C
            </Button>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Number</th>
                </tr>
              </thead>
              <tbody>
                {contacts.results?.map((d, i) => (
                  <>
                    <tr key={i}>
                      <td>{d.country.name}</td>
                      <td>{d.phone}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </Modal.Footer>
        </Modal>

        {/* US Contacts */}
        <Modal show={shows} onHide={handleClose1}>
          <Modal.Header closeButton>
            <Modal.Title>US Contacts</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button
              onClick={handleModalA}
              style={{ backgroundColor: "#46139f", margin: "10px" }}
            >
              Modal A
            </Button>
            <Button
              onClick={handleModalB}
              style={{ backgroundColor: "#ff7f50", margin: "10px" }}
              >
              Modal B
            </Button>
               
            <Button  style={{ backgroundColor: "#46139f ", margin: "10px" }} onClick={handleClose1}>
              Modal C
            </Button>
          </Modal.Body>
          <Modal.Footer>
       
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Number</th>
                </tr>
              </thead>
              <tbody>
                {contacts.results
                  ?.filter((d) => d.country.name === "United States")
                  .map((filteredContact, i) => (
                    <tr key={i}>
                      <td>{filteredContact.country.name}</td>
                      <td>{filteredContact.phone}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Problem2;
