import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container fluid>
        {/* Logo for PizzaWeb */}
        <Navbar.Brand href="#">
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/285/094/original/pizza-logo-with-illustration-a-piece-of-pizza-free-vector.jpg"  // Update this with the actual logo URL
            height="30"
            alt="PizzaWeb Logo"
            loading="lazy"
          />
        </Navbar.Brand>

        {/* Toggle button for mobile view */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        {/* Collapsible navbar */}
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            {/* Navigation links for PizzaWeb */}
            <Nav.Link href="#" active>
              Home
            </Nav.Link>
            <Nav.Link href="#">Menu</Nav.Link>
            <Nav.Link href="#">Deals</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>

          {/* Search Form for pizza search */}
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Find your pizza..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="dark" type="submit">
              Search
            </Button>
          </Form>

          {/* Right side options */}
          <Nav>
            <Nav.Link href="#">Order Now</Nav.Link>

            {/* Notification dropdown */}
            <NavDropdown
              title={<i className="fas fa-bell"></i>}
              id="notificationsDropdown"
              align="end"
            >
              <NavDropdown.Item href="#">Order Update</NavDropdown.Item>
              <NavDropdown.Item href="#">New Deals</NavDropdown.Item>
              <NavDropdown.Item href="#">Pizza News</NavDropdown.Item>
            </NavDropdown>

            {/* Profile dropdown */}
            <NavDropdown
              title={
                <img
                  src="https://cdn2.iconfinder.com/data/icons/people-occupation-job/64/Thief-Stealing-Criminal-Robber-Gangster-Robbery-Avatar-1024.png" // Update this with the actual user avatar URL
                  className="rounded-circle"
                  height="25"
                  width="25"
                  alt="User Avatar"
                />
              }
              id="userDropdown"
              align="end"
            >
              <NavDropdown.Item href="#">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#">Order History</NavDropdown.Item>
              <NavDropdown.Item href="#">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;