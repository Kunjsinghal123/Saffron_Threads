import { useNavigate, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState("");

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const goHome = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  /* 🔥 SMART SEARCH HANDLER */
  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    const params = new URLSearchParams(location.search);
    params.set("search", search);

    navigate(`/shop?${params.toString()}`);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex justify-between items-center">

        {/* LOGO */}
        <h1
          onClick={goHome}
          className="text-2xl font-bold cursor-pointer"
        >
          Saffron<span className="text-pink-600">Threads</span>
        </h1>

        {/* MENU */}
        <div className="hidden md:flex gap-8 font-medium items-center">
          <button onClick={goHome}>Home</button>
          <button onClick={() => navigate("/shop")}>Women</button>
          <button onClick={() => scrollToSection("about")}>About Us</button>
          <button onClick={() => scrollToSection("contact")}>Contact Us</button>
        </div>

        {/* SEARCH */}
        <form
          onSubmit={handleSearch}
          className="
            flex
            items-center
            gap-2
            border
            rounded-full
            px-4
            py-2
            w-[260px]
          "
        >
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-sm"
            placeholder="Search products..."
          />
          <button type="submit" className="text-pink-600">
            <FaSearch />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
