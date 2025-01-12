import { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import MyLogin from "./MyLogin";

class MyNavBar extends Component {
  render() {
    return (
      <>
      
          <Navbar
            key="lg"
            expand ="lg"
            className="bg-dark"
          >
            <Container fluid>
              <Navbar.Brand href="#">
                <Image src="../../public/./netflix_logo.png" style={{width : "7rem"}}/>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-lg`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-lg`}
                aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 p-2 ">
                    <Nav.Link className="text-white"   href="#action1">Home</Nav.Link>
                    <Nav.Link  className= "text-white"  href="#action2">TV Shows</Nav.Link>
                    <Nav.Link className= "text-white"  href="#action2">Movies</Nav.Link>
                    <Nav.Link className= "text-white"  href="#action2">Recently Added</Nav.Link>
                    <Nav.Link  className= "text-white"  href="#action2">My LIst</Nav.Link>
                  
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder=""
                      className="w-50 m-1"
                      aria-label="Search"
                    />
                      <Button variant="outline-dark"
                      className="me-2 w-15 rounded-2 text-white">Search</Button>
                    <MyLogin/>
                  </Form>
                </Offcanvas.Body>
               
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        
      </>
    );
  }
}
export default MyNavBar;
