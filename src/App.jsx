import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Tentang from "./pages/Tentang";
import Hobi from "./pages/Hobi";
import Kontak from "./pages/Kontak";

import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/hobi" element={<Hobi />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;