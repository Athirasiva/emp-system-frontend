import React from 'react'
import Table from 'react-bootstrap/Table';
import EditEmployee from './EditEmployee';
import { Button } from 'react-bootstrap';

function DisplayTable() {
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
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td><EditEmployee/></td>
          <td><Button className='mt-3'>Delete</Button></td>
        </tr>
        </tbody>
        </Table>
    </div>
  )
}

export default DisplayTable