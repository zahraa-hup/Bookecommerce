import React from "react";
import WebNavs from "./WebNavs";
import Navbar from "react-bootstrap/Navbar";
import MobileNavs from "./MobileNav";
import TabNav from "./TabNav";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import "../../styles/Header.css";
function Header() {
  const [screenwidth, setscreenwidth] = useState(1700);
  useEffect(() => {
    const handleResize = () => {
      setscreenwidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);
  }, [screenwidth]);
  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          {screenwidth > 992 ? (
            <WebNavs />
          ) : screenwidth > 567 ? (
            <TabNav />
          ) : (
            <MobileNavs />
          )}
        </Container>
      </Navbar>
      ;
    </>
  );
}

export default Header;
