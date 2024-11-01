import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { displayEmp } from '../services/allAPIs';
function DisplayEmployee({id}) {
    const [empData, setEmpData] = useState([])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(()=>{
        getEmpData()
    })
    const getEmpData = async() =>{
        const response = await displayEmp(id)
        console.log(response);
        
    }
  return (
    <div>
        <Button variant="primary" onClick={handleShow} className='mt-3  align-items-right justify-content-right'>
            View
        </Button>
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
                <div className=''>
                    <div className='d-flex align-items-center justify-content-center'>
                        <img src="https://cdn.vectorstock.com/i/1000x1000/73/03/initial-letter-id-logo-template-design-vector-21807303.webp" alt="" style={{height:"100px"}}  className='rounded-circle'/>
                    </div>
                    <div className='d-flex align-items-center justify-content-center flex-column' >
                        <h4>name</h4>
                        <h6>Employee id :1</h6>
                        <h6>Angular Developer</h6>
                        <h6>name@gmail.com</h6>
                        <h6>12345678</h6>
                    </div>
                </div>
            </div>
        </Modal.Body>
             
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default DisplayEmployee