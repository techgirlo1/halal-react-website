import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { Button, Container, Form, Nav, Navbar,NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from "react-router-dom";
import APPUrl from '../../RestAPI/APPUrl';
import axios from 'axios';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Redirect } from "react-router-dom/cjs/react-router-dom";
const Topnav = (props) => {
  const [state, setState] = useState({
    background: "bg",
    pagetitle: props.title,
    cartCount: 0,
    scrolled: false,
    user: {},
    search:"",
    searchRedirectStatus:false
  });

  const history = useHistory();

  const onScroll = () => {
    if (window.scrollY > 100) {
      setState((prev) => ({
        ...prev,
        scrolled: true,
        background: 'bgscroll',
      }));
    } else {
      setState((prev) => ({
        ...prev,
        scrolled: false,
        background: 'bg',
      }));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  
  useEffect(() => {
    if (props.user && props.user.id) {
      const id = props.user.id;
  
      axios.get(APPUrl.CartCount(id))
        .then(response => {
          console.log('Cart Count Response:', response.data);
          setState(prev => ({
            ...prev,
            cartCount: state.cartCount +1,
          }));
        })
        .catch(error => {
          console.error('Error fetching cart count:', error);
        });
    } else {
      console.error('User object or email is undefined');
    }

    
  }, [ state.scrolled, setState]);

  useEffect(() => {
    console.log('Component Re-rendered with cartCount:', state.cartCount);
  }, [state.cartCount]);

  useEffect(() => {
    console.log('Topnav Re-rendered with cartCount:', state.cartCount);
  }, [state.cartCount]);

  const handleLogout = () => {
    localStorage.clear();
    setState({ ...state, user: null });
    history.push("/"); // Redirect to the home page after logout
  };

   
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (state.search.length >= 2) {
      setState({ ...state, searchRedirectStatus: true });
    }
  };

  
  return (
    <Fragment>
      <title>{state.pagetitle}</title>
      {localStorage.getItem('token') ? (
        <>
      <Navbar expand={false} className={state.background} fixed="top">
  <Container fluid>
    <Navbar.Brand as={Link} to="/" className='navtitle'>HALAL WEARS</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel" className='navitem'>Halal Wears</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link as={Link} to="/" className='navitem'>HOME</Nav.Link>
          <Nav.Link as={Link} to="about" className='navitem'>ABOUT</Nav.Link>
          <Nav.Link as={Link} to="product" className='navitem'>PRODUCTS</Nav.Link>
          <Nav.Link as={Link} to="contact" className='navitem'>CONTACT</Nav.Link>
          <Nav.Link as={Link} to="/profile" className='navitem'>PROFILE</Nav.Link>
          <Nav.Link as={Link} to="/cart" className='navitem'>CART</Nav.Link>
          <NavDropdown
                   title=' MY ORDER'
                   className='navitem' 
                  >
                    <NavDropdown.Item  as={Link} to="/orderlist">Pending Order</NavDropdown.Item><hr></hr>
                    <NavDropdown.Item as={Link} to="/processlist">Processing Order</NavDropdown.Item><hr></hr>
                    <NavDropdown.Item as={Link} to="/deliveredlist">Delivered Order</NavDropdown.Item>
                  </NavDropdown>
    <Nav.Link onClick={handleLogout} className='navitem'>LOGOUT</Nav.Link>


        </Nav>
        <Form className="d-flex" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                name="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setState({ ...state, search: e.target.value })}
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    </>
    








        
      ) : (
        
      <Navbar expand={false} className={state.background} fixed="top">
  <Container fluid>
    <Navbar.Brand as={Link} to="/" className='navtitle'>HALAL WEARS</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Halal Wears</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link as={Link} to="/" className='navitem'>HOME</Nav.Link>
          <Nav.Link as={Link} to="about" className='navitem'>ABOUT</Nav.Link>
          <Nav.Link as={Link} to="product" className='navitem'>PRODUCTS</Nav.Link>
          <Nav.Link as={Link} to="contact" className='navitem'>CONTACT</Nav.Link>
          <Nav.Link as={Link} to="/cart" className='navitem'>CART</Nav.Link>
          <NavDropdown
                   title=' MY ORDER'
                   className='navitem' 
                  >
                    <NavDropdown.Item  as={Link} to="/orderlist">Pending Order</NavDropdown.Item><hr></hr>
                    <NavDropdown.Item as={Link} to="/processlist">Processing Order</NavDropdown.Item><hr></hr>
                    <NavDropdown.Item as={Link} to="/deliveredlist">Delivered Order</NavDropdown.Item>
                  </NavDropdown>
          <Nav.Link as={Link} to="/login" className='navitem'>LOGIN</Nav.Link>
          <Nav.Link as={Link} to="/register" className='navitem'>REGISTER</Nav.Link>
        </Nav>
        <Form className="d-flex" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                name="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setState({ ...state, search: e.target.value })}
              />
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>

    
      )}

{state.searchRedirectStatus && <Redirect to={`/productSearch/${state.search}`} />}
    </Fragment>
    
  );
};

export default Topnav;
