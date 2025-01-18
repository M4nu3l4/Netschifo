import { Navbar, Nav, Form, FormControl, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MyNavBar() {
  return (
    <Navbar className ="bg-black" variant="dark" expand="lg">
      <Image src="../../public/netflix_logo.png" style={{width:"8rem"}}/>
      <Navbar.Brand as={Link} to="/">My Movie App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className="text-white" as={Link} to="/">Home</Nav.Link>
          <Nav.Link className="text-white" as={Link} to="/tv-shows">TV Shows</Nav.Link>
        </Nav>
        <Form className="d-flex p-2 ">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2 mt-3"
            aria-label="Search"
            style={{width:"12rem",height:"40px"}}
          />
          <Button className="btn btn-outline-light bg-black mt-3"style={{width:"70px",height:"40px"}}>Search</Button>
          <Image src='../../public/avatar.png' className=' rounded-circle p-2 ' style={{width:"60px"}}/>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavBar;
