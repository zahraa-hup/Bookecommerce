import React, { Suspense, lazy } from "react";
//import Header from "./components/Navs/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Allbbooks from "./components/pages/Allbbooks";
import Memos from "./components/pages/Memos";
import Newbooks from "./components/pages/Newbooks";
import Reviews from "./components/pages/Reviews";
import Placeholder from "react-bootstrap/Placeholder";
import Header from "./components/Navs/Header";

import "./styles/Header.css";
function App() {
  const LazyHeader = lazy(() => import("./components/Navs/Header"));
  return (
    <>
      {/*<Suspense
        fallback={
          <Placeholder as="div" animation="glow">
            <Placeholder xs={12} style={{ height: "150px" }} />
          </Placeholder>
        }
      >
        <LazyHeader />
      </Suspense>*/}

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allbooks" element={<Allbbooks />} />
        <Route path="/memos" element={<Memos />} />
        <Route path="/newbooks" element={<Newbooks />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </>
  );
}

export default App;
