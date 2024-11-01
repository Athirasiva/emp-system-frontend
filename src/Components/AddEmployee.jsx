import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { uploadEmpDetails } from '../services/allAPIs';

function AddEmployee() {
    const [user, setUser] = useState({
      id:"",
      name:"",
      email:"",
      phone: "",
      designation:"",
      image:""
    })
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log(user);

  const handleSubmit = async() =>{
    const {id,name,email,phone,designation,image}  = user
    if(!id || !name || !email || !phone || !designation || !image){
      alert("Please fill the form completely")
    }else{
      const response = await uploadEmpDetails(user)
      if(response.status == 201){
        alert("Employee details added")
        handleClose();
      }else{
        alert("Error!!")
        console.log(response);
      }
    }
   
  }
  
  return (
    <div>
 <div className='w-100 d-flex justify-content-end align-items-end  me-3'>
         <Button variant="primary" onClick={handleShow} className='m-3 p-3'>
         Add Employee
         </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form action="">
            <InputGroup size="sm" className="mb-3">
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder='Enter Employee Id'
          onChange={(e)=>setUser({...user,id:e.target.value})}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder='Enter Employee Name'
          onChange={(e)=>setUser({...user,name:e.target.value})}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder='Enter Employee Email'
          onChange={(e)=>setUser({...user, email:e.target.value})}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder='Enter Employee Phone Number'
          onChange={(e)=>setUser({...user, phone:e.target.value})}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder='Enter Employee Designation'
          onChange={(e)=>setUser({...user, designation:e.target.value})}
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3">
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder='Enter Image url'
          onChange={(e)=>setUser({...user, image:e.target.value})}
        />
      </InputGroup>
      <br />
           
            </form>
               
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddEmployee