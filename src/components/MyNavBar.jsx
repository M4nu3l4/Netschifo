import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MyNavBar() {
  return (
    <Navbar className ="bg-black p-3" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">My Movie App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className="text-white" as={Link} to="/">Home</Nav.Link>
          <Nav.Link className="text-white" as={Link} to="/tv-shows">TV Shows</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button className="btn btn-outline-light bg-black">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavBar;
