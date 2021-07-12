import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Navbar, Container, Nav, Form, FormControl, Button,
} from 'react-bootstrap';
import { filterByName } from '../actions/productActions';

const Header = () => {
  const dispatch = useDispatch();
  const filterByInput = (e) => {
    const input = e.target.value;
    dispatch(filterByName({ value: input }));
  };

  return (

    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Cleanify</Nav.Link>
            <Nav.Link href="/cart">
              Cart
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              onChange={(e) => {
                filterByInput(e);
              }}
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
