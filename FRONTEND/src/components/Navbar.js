import React, { useRef, useState } from "react";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

import NavFlag from "./NavFlag";
import CountryModal from "./CountryModal";

import { useDispatch, useSelector } from "react-redux";

import { search, getNewsByCategory } from "../redux/actions/newsActions";
import { toggleTheme } from "../redux/actions/themeActions";

const Moon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ fill: "white" }}
    >
      <path d="M12,11.807C9.349,9.155,8.7,5.261,10.049,2c-1.875,0.37-3.666,1.281-5.12,2.735c-3.905,3.905-3.905,10.237,0,14.142 c3.906,3.906,10.237,3.905,14.143,0c1.454-1.454,2.364-3.244,2.735-5.119C18.545,15.106,14.651,14.458,12,11.807z"></path>
    </svg>
  );
};

const Sun = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ fill: "white" }}
    >
      <path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19H13V22H11zM11 2H13V5H11zM2 11H5V13H2zM19 11H22V13H19z"></path>
      <path
        transform="rotate(-134.999 5.99 18.01)"
        d="M4.989 16.51H6.989V19.51H4.989z"
      ></path>
      <path
        transform="rotate(-45.001 18.01 5.99)"
        d="M16.51 4.99H19.511000000000003V6.99H16.51z"
      ></path>
      <path
        transform="rotate(-134.983 5.99 5.99)"
        d="M4.489 4.99H7.489V6.99H4.489z"
      ></path>
      <path
        transform="rotate(134.999 18.01 18.01)"
        d="M17.01 16.51H19.01V19.511000000000003H17.01z"
      ></path>
    </svg>
  );
};

const NavBar = () => {
  // Redux
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const { country } = useSelector((state) => state.country);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(search(searchRef.current.value));
  };

  const searchRef = useRef();

  const [showCountryModal, setShowCountryModal] = useState(false);

  const handleShowCountryModal = () => {
    setShowCountryModal(true);
  };

  return (
    <>
      <CountryModal show={showCountryModal} setShow={setShowCountryModal} />
      <Navbar
        variant="dark"
        style={{ backgroundColor: theme == "light" ? "#4C8BF5" : "black" }}
      >
        <Navbar.Brand>
          World News{" "}
          <span onClick={handleShowCountryModal}>
            <NavFlag />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 24 24"
              style={{ fill: "white" }}
            >
              <path d="M11.178,19.569C11.364,19.839,11.672,20,12,20s0.636-0.161,0.822-0.431l9-13c0.212-0.306,0.236-0.704,0.063-1.033 C21.713,5.207,21.372,5,21,5H3C2.628,5,2.287,5.207,2.114,5.536C1.941,5.865,1.966,6.263,2.178,6.569L11.178,19.569z"></path>
            </svg>
          </span>
        </Navbar.Brand>
        <Nav className="mr-auto d-none d-lg-flex">
          <Nav.Link
            onClick={() => dispatch(getNewsByCategory(country, "business"))}
          >
            Business
          </Nav.Link>
          <Nav.Link
            onClick={() =>
              dispatch(getNewsByCategory(country, "entertainment"))
            }
          >
            Entertainment
          </Nav.Link>
          <Nav.Link
            onClick={() => dispatch(getNewsByCategory(country, "general"))}
          >
            General
          </Nav.Link>
          <Nav.Link
            onClick={() => dispatch(getNewsByCategory(country, "health"))}
          >
            Health
          </Nav.Link>
          <Nav.Link
            onClick={() => dispatch(getNewsByCategory(country, "science"))}
          >
            Science
          </Nav.Link>
          <Nav.Link
            onClick={() => dispatch(getNewsByCategory(country, "sports"))}
          >
            Sports
          </Nav.Link>
          <Nav.Link
            onClick={() => dispatch(getNewsByCategory(country, "technology"))}
          >
            Technology
          </Nav.Link>
        </Nav>

        <Nav.Link
          className="ml-auto d-sm-none"
          onClick={() => dispatch(toggleTheme())}
        >
          {theme == "light" ? <Sun /> : <Moon />}
        </Nav.Link>

        <Form inline className="ml-auto d-none d-sm-flex">
          <Nav.Link
            className="d-none d-sm-block"
            onClick={() => dispatch(toggleTheme())}
          >
            {theme == "light" ? <Sun /> : <Moon />}
          </Nav.Link>

          <FormControl
            ref={searchRef}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            style={{ maxWidth: 200 }}
          />
          <Button
            className="ml-auto"
            variant="outline-light"
            onClick={handleSearch}
            type="button"
          >
            Search
          </Button>
        </Form>
      </Navbar>

      <nav
        className="d-lg-none navbar-dark"
        variant="dark"
        style={{ backgroundColor: theme == "light" ? "#4C8BF5" : "black" }}
      >
        <div className="navbar-nav-scroll">
          <ul className="navbar-nav bd-navbar-nav flex-row mx-1">
            <li className="nav-item mx-1">
              <Nav.Link
                onClick={() => dispatch(getNewsByCategory(country, "business"))}
              >
                Business
              </Nav.Link>
            </li>
            <li className="nav-item mx-2">
              <Nav.Link
                onClick={() =>
                  dispatch(getNewsByCategory(country, "entertainment"))
                }
              >
                Entertainment
              </Nav.Link>
            </li>
            <li className="nav-item mx-2">
              <Nav.Link
                onClick={() => dispatch(getNewsByCategory(country, "general"))}
              >
                General
              </Nav.Link>
            </li>
            <li className="nav-item mx-2">
              <Nav.Link
                onClick={() => dispatch(getNewsByCategory(country, "health"))}
              >
                Health
              </Nav.Link>
            </li>
            <li className="nav-item mx-2">
              <Nav.Link
                onClick={() => dispatch(getNewsByCategory(country, "science"))}
              >
                Science
              </Nav.Link>
            </li>
            <li className="nav-item mx-2">
              <Nav.Link
                onClick={() => dispatch(getNewsByCategory(country, "sports"))}
              >
                Sports
              </Nav.Link>
            </li>
            <li className="nav-item mx-2">
              <Nav.Link
                onClick={() =>
                  dispatch(getNewsByCategory(country, "technology"))
                }
              >
                Technology
              </Nav.Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
