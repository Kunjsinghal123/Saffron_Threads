import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Women from "./pages/women"; // ✅ capital W (important)
import ProductDetail from "./pages/ProductDetail";
import AdminDashboard from "./components/AdminDashboard";
import SectionWrapper from "./ui/SectionWrapper";

const App = () => {
  return (
    <BrowserRouter>
      {/* GLOBAL NAVBAR */}
      <Navbar />

      <Routes>
        {/* ================= HOME ================= */}
        <Route path="/" element={<Home />} />

        {/* ================= WOMEN SHOP ================= */}
        <Route
          path="/shop"
          element={
            <SectionWrapper>
              <Women />
            </SectionWrapper>
          }
        />

        {/* ================= PRODUCT DETAIL ================= */}
        <Route
          path="/product/:id"
          element={
            <SectionWrapper>
              <ProductDetail />
            </SectionWrapper>
          }
        />

        {/* ================= ADMIN ================= */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
