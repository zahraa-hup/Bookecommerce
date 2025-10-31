import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Searchinput from "./Searchinput";
import NavIcons from "./NavIcons";
import { Link } from "react-router-dom";

import "./Header.css";
function Header() {
  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Link to={"./"}>
            <img src="/img/logo.png" alt="logo" />
          </Link>
          <NavIcons />
          <Searchinput />
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <span class="material-symbols-outlined">sort</span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto my-2 my-lg-0 navstyle">
              <Link to={"/"}>الرئيسيه</Link>
              <Link to={"/allbooks"}>جميع الكتب</Link>
              <Link to={"/newbooks"}> المنتجات الجديده</Link>
              <Link to={"/memos"}> المذكرات</Link>
              <Link to={"/reviews"}> المراجعات</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </>
  );
}

export default Header;
