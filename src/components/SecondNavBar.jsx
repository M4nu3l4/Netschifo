
import { Navbar, Container, Offcanvas, Nav, Button } from "react-bootstrap";
import { useState } from "react";

function SecondNavBar() {
  const [showGenres, setShowGenres] = useState(false); // Stato per controllare l'Offcanvas dei generi

  const handleShowGenres = () => setShowGenres(true);
  const handleCloseGenres = () => setShowGenres(false);

  return (
    <>
      <Navbar bg="dark" expand="lg" className="text-white">
        <Container>
          <Navbar.Brand href="#"  className=" text-white">TV Shows</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                TV Shows Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#popular" className=" text-white">Popular</Nav.Link>
                <Nav.Link href="#trending" className=" text-white">Trending</Nav.Link>
                <Nav.Link href="#latest" className=" text-white">Latest</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Button
            variant="outline-light"
            className="ms-3 "
            onClick={handleShowGenres}
          >
            Genres
          </Button>
        </Container>
      </Navbar>
      <Offcanvas show={showGenres} onHide={handleCloseGenres} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Movie Genres</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#action">Action</Nav.Link>
            <Nav.Link href="#horror">Horror</Nav.Link>
            <Nav.Link href="#comedy">Comedy</Nav.Link>
            <Nav.Link href="#drama">Drama</Nav.Link>
            <Nav.Link href="#romance">Romance</Nav.Link>
            <Nav.Link href="#thriller">Thriller</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SecondNavBar;

