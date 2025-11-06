import React from "react";
import FUl1 from "./FUl1";
import FUl2 from "./FUl2";
import Fcontact from "./Fcontact";
import FCol1 from "./FCol1";
import Ficons from "./Ficons";
import "./footer.css";

function Footer() {
  return (
    <div className="footerconiner">
      <div className="row frowaftercon">
        <FCol1 />
        <FUl1 />
        <FUl2 />
        <Fcontact />
      </div>
      <hr className="fhrstyle" />
      <div className="row rowsec2">
        <Ficons />
      </div>
      <div className="row ftextimgrow">
        <img src="./img/Frame 28.png" alt="" className="fimgposition" />
        <div className="ftextimg">
          جميع الحقوق محفوظه 2024 &nbsp; &nbsp; &copy;
        </div>
      </div>
    </div>
  );
}

export default Footer;
