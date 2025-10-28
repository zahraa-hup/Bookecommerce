import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavIcons from "./NavIcons";
import Searchinput from "./Searchinput";
import { Link } from "react-router-dom";
function TabNav() {
  return (
    <>
      <Link to={"/"}>
        <img src="/img/logo.png" alt="logo" />
      </Link>
      <Searchinput />
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <span class="material-symbols-outlined" style={{ color: "#f5f5f5" }}>
          sort
        </span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <NavIcons />
        <Nav className="me-auto my-2 my-lg-0 navstyle">
          <Link to={"/"}>الرئيسيه</Link>
          <Link to={"/allbooks"}>جميع الكتب</Link>
          <Link to={"/memos"}> المنتجات الجديده</Link>
          <Link to={"/newbooks"}> المذكرات</Link>
          <Link to={"/reviews"}> المراجعات</Link>
        </Nav>
      </Navbar.Collapse>
    </>
  );
}

export default TabNav;
