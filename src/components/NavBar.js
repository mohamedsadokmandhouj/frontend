import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, getMe } from "../redux/slices/auth.slice";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import '../CssPage/navbar.css'


const NavBar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.AuthReducer.isAuth)
  const user = useSelector((state) => state.AuthReducer.user)

  useEffect(() => {
    if (isAuth) {
      dispatch(getMe())
    }
  }, [dispatch, isAuth])

  return (
    <Navbar expand="lg" className="navbar-custom">
      <div className="container">
        <Navbar.Brand as={Link} to="/">
          <img
            src="/images/logo2.png" 
           
            className="navbar-logo"
            style={{
              height: "130px",
              borderRadius: "10px",
            }}
          />
          <span className="navbar-brand-text">PopcornBox</span>
        </Navbar.Brand>

        


        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-item-custom">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/AboutUs" className="nav-item-custom">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-item-custom">
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex search-form-custom">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light" className="search-btn-custom">
              Search
            </Button>
          </Form>
          <div className="d-flex align-items-center">
            {isAuth ? (
              <>
                <h5 className="mb-0 me-2 text-light user-greeting">
                  {user?.firstName}
                </h5>
                <Button
                  variant="outline-danger"
                  onClick={() => dispatch(logout())}
                  className="auth-btn-custom"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn btn-outline-light auth-btn-custom me-2"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn btn-outline-light auth-btn-custom"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
