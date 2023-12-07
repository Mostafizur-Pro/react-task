import { Modal } from 'bootstrap';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Modal1 = ({contacts, handleShow}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return (
        <div>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Button variant="primary" >
            Modal A
          </Button>
        <Button variant="primary" >
          Modal B
          </Button>
          <Button variant="secondary" onClick={handleClose}>
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

  {contacts.results?.map((d,i)=><>
  <tr key={i}>
  <td>{d.country.name}</td>
  <td>{d.phone}</td>
  </tr>
  </>)}
</tbody>
                    </table>


    
        </Modal.Footer>
      </Modal>
            
        </div>
    );
};

export default Modal1;