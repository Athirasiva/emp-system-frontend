import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { editEmpDetails } from '../services/allAPIs';
import { toast } from 'react-toastify';
function EditEmployee({user,setEditResponse}) {
  
  const [show, setShow] = useState(false);
  const [updatedDetails, setUpdatedDetails] = useState({
    id:user.id,
    name:user.name,
    email:user.email,
    phone:user.phone,
    designation:user.designation,
    image:user.image
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleUpdate = async()=>{
    const {name, email, phone, designation,image} = updatedDetails
    if (!name || !email || !phone || !designation || !image) {
      toast.warning("Please Fill All The Details")
    }
    else{
      const response = await editEmpDetails(updatedDetails.id, updatedDetails)
      console.log(response);
      if (response.status == 200) {
        setEditResponse(response)
        handleClose()
        toast.success("Employee Details Updated Successfully")
      }
      else{
        toast.error("Error : Details Not Updated")
      }
    }
      
      
  }

  return (
    <div><Button variant="primary" onClick={handleShow} className='mt-3  align-items-right justify-content-right'>
    Edit Employee
  </Button>
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Edit Details</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <form action="">
        <InputGroup size="sm" className="mb-3">
        <Form.Control
        value={updatedDetails.id}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <Form.Control
        value={updatedDetails.name}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e)=>setUpdatedDetails({...updatedDetails, name:e.target.value})}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <Form.Control
        value={updatedDetails.email}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e)=>setUpdatedDetails({...updatedDetails,email:e.target.value})}

        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <Form.Control
        value={updatedDetails.phone}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e)=>setUpdatedDetails({...updatedDetails,phone:e.target.value})}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <Form.Control
        value={updatedDetails.designation}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e)=>setUpdatedDetails({...updatedDetails,designation:e.target.value})}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <Form.Control
        value={updatedDetails.image}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={(e)=>setUpdatedDetails({...updatedDetails,image:e.target.value})}
        />
      </InputGroup>

        </form>
           
        
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleUpdate}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal></div>
  )
}

export default EditEmployee