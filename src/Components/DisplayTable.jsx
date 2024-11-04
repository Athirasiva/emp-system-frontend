import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import EditEmployee from './EditEmployee';
import { Button } from 'react-bootstrap';
import { deleteEmpDetails, displayEmpDetails } from '../services/allAPIs';
import DisplayEmployee from './DisplayEmployee';
import { toast } from 'react-toastify';

function DisplayTable({addEmpResponse}) {
  const [userData, setUserData] = useState([])
  const [editResponse, setEditResponse]= useState('')
  useEffect(()=>{
    getData()
  },[addEmpResponse,editResponse])

   const getData = async()=>{
    const response = await displayEmpDetails()
    if (response.status == 200) {
      setUserData(response.data)
      // console.log(response);
    }
    else
    {
      toast.warning("No user data found")
    }
    
   }
   
    const deleteEmployee = async(id) =>{
       const res = await deleteEmpDetails(id)
       if (res.status == 200) {
        getData()
        toast.success("Employee Details Deleted")
       }
       else
       {
        toast.error("FAiled")
        console.log(res);
        
       }
       
    }
  return (
    <div className='mt-4'>
         <Table striped>
      <thead>
        <tr>
          <th>Sl no</th>
          <th>First Name</th>
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
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td><DisplayEmployee user={user}/></td>
          <td><EditEmployee  user={user} setEditResponse={setEditResponse}/></td>
          <td><Button className='mt-3' onClick={()=>deleteEmployee(user.id)} >Delete</Button></td>
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