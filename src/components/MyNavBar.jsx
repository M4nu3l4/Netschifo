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
        {[false, "sm", "md", "lg", "xl", "xxl"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="bg-body-tertiary mb-3"
          >
            <Container fluid>
              <Navbar.Brand href="#">
                <Image src="../../public/./netflix_logo.png" />
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">TV Shows</Nav.Link>
                    <Nav.Link href="#action2">Movies</Nav.Link>
                    <Nav.Link href="#action2">Recently Added</Nav.Link>
                    <Nav.Link href="#action2">My LIst</Nav.Link>
                  
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Offcanvas.Body>
                {MyLogin}
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    );
  }
}
export default MyNavBar;
