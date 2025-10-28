import Header from "./components/Navs/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Allbbooks from "./components/pages/Allbbooks";
import Memos from "./components/pages/Memos";
import Newbooks from "./components/pages/Newbooks";
import Reviews from "./components/pages/Reviews";
function App() {
  return (
    <>
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
