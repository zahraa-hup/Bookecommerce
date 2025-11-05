import React from "react";
import FUl1 from "./FUl1";
import FUl2 from "./FUl2";
import Fcontact from "./Fcontact";
import FCol1 from "./FCol1";
import "./footer.css";
function Footer() {
  return (
    <div className="footerconiner">
      <div className="row">
        <FCol1/>
        <FUl1 />
        <FUl2 />
        <Fcontact />
        <hr className="fhrstyle" />
      </div>
    </div>
  );
}

export default Footer;
