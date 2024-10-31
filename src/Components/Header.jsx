import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div>
        <Navbar bg="light" data-bs-theme="light">
        <Container>
        {/* <i class="fa-solid fa-user"></i> */}
          <Navbar.Brand >Employee Management System</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header