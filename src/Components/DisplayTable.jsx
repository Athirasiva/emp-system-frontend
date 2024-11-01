import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import EditEmployee from './EditEmployee';
import { Button } from 'react-bootstrap';
import { displayEmpDetails } from '../services/allAPIs';
import DisplayEmployee from './DisplayEmployee';

function DisplayTable() {
  const [userData, setUserData] = useState([])
  useEffect(()=>{
    getData()
  },[])

   const getData = async()=>{
    const response = await displayEmpDetails()
    if (response.status == 200) {
      console.log(response);
      setUserData(response.data)
      // console.log(response);
    }
    else
    {
      alert("No user data found")
    }
    
   }
   console.log(userData);
   
  return (
    <div className='mt-4'>
         <Table striped>
      <thead>
        <tr>
          <th>Sl no</th>
          <th>First Name</th>
          <th>Designation</th>
          <th>Email</th>
          <th>Phone No</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          userData.length > 0 ?

        userData.map((user,index)=>(
          <tr key={index}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.designation}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td><DisplayEmployee id={user.id}/></td>
          <td><EditEmployee/></td>
          <td><Button className='mt-3'>Delete</Button></td>
          </tr>
        ))
      : "Nothing to display"

      }
       
        </tbody>
        </Table>
    </div>
  )
}

export default DisplayTable