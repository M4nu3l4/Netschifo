
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";

function SecondNavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-3">
        <Container>
          <Navbar.Brand href="#">TV Shows</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Genres
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action">Action</Nav.Link>
                <Nav.Link href="#horror">Horror</Nav.Link>
                <Nav.Link href="#comedy">Comedy</Nav.Link>
                <Nav.Link href="#drama">Drama</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default SecondNavBar;
