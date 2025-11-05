import React, { Suspense, lazy } from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Allbbooks from "./pages/Allbbooks";
import Memos from "./pages/Memos";
import Newbooks from "./pages/Newbooks";
import Reviews from "./pages/Reviews";
import Placeholder from "react-bootstrap/Placeholder";
import Footer from "./components/Footer/Footer";
function App() {
  const LazyHeader = lazy(() => import("./components/Navs/Header"));
  return (
    <>
      <Suspense
        fallback={
          <Placeholder as="div" animation="glow">
            <Placeholder xs={12} className="navloading" />
          </Placeholder>
        }
      >
        <LazyHeader />
      </Suspense>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allbooks" element={<Allbbooks />} />
        <Route path="/memos" element={<Memos />} />
        <Route path="/newbooks" element={<Newbooks />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
