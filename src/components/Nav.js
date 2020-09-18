import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Nav, Navbar} from "react-bootstrap";

const myNav = (props) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Employee Directory</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>

            <NavDropdown title="Sort By" id="basic-nav-dropdown">
              <NavDropdown.Item
                as="button"
                value="firstName"
                onClick={props.handleSort}
              >
                First Name
              </NavDropdown.Item>
              <NavDropdown.Item
                as="button"
                value="lastName"
                onClick={props.handleSort}
              >
                Last Name
              </NavDropdown.Item>
              <NavDropdown.Item
                as="button"
                value="stateName"
                onClick={props.handleSort}
              >
                State
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form onSubmit={props.handleFormSubmit} inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={props.handleInputChange}
              
              value={props.value}
            />
            <Button variant="outline-success" onClick={props.handleFormSubmit}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default myNav;
