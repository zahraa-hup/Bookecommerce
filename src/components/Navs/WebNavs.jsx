import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavIcons from "./NavIcons";
import { Link } from "react-router-dom";
import Searchinput from "./Searchinput";
function WebNavs() {
  return (
    <>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto my-2 my-lg-0 navstyle">
          <Link to={"/"}>الرئيسيه</Link>
          <Link to={"/allbooks"}>جميع الكتب</Link>
          <Link to={"/newbooks"}> المنتجات الجديده</Link>
          <Link to={"/memos"}> المذكرات</Link>
          <Link to={"/reviews"}> المراجعات</Link>
        </Nav>
      </Navbar.Collapse>
      <Searchinput />

      <NavIcons />
      <Link to={"/"}>
        <img src="/img/logo.png" alt="logo" className="logo" />
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <span class="material-symbols-outlined">sort</span>
      </Navbar.Toggle>
    </>
  );
}

export default WebNavs;
