import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { WOMEN_PRODUCTS } from "../data/women";
import { getWomenProducts } from "../services/api";
import Filters from "../components/Filters";
import SidebarFilters from "../components/SidebarFilters";
import ProductGrid from "../components/ProductGrid";

const Women = () => {
  const [category, setCategory] = useState("All");
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState("");
  const [dbProducts, setDbProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [params] = useSearchParams();

  /* ================= URL → CATEGORY + SEARCH ================= */
  const urlCategory = params.get("category");
  const searchTerm = params.get("search") || "";

  useEffect(() => {
    setCategory(urlCategory && urlCategory !== "All" ? urlCategory : "All");
  }, [urlCategory]);

  /* ================= SCROLL TO TOP ================= */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [category, filters, sortBy, searchTerm]);

  /* ================= BACKEND FETCH (SAFE) ================= */
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getWomenProducts({
          subCategory: category !== "All" ? category : undefined,
          ...filters,
        });
        setDbProducts(data);
      } catch (err) {
        console.error("Women fetch error:", err);
        setDbProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category, filters]);

  /* ================= DEV vs PROD DATA RULE ================= */
  const mergedProducts = useMemo(() => {
    return import.meta.env.MODE === "development"
      ? [...WOMEN_PRODUCTS, ...dbProducts]
      : dbProducts;
  }, [dbProducts]);

  /* ================= CATEGORY FILTER ================= */
  const baseProducts = useMemo(() => {
    if (category === "All") return mergedProducts;

    return mergedProducts.filter(
      (p) =>
        p.subCategory &&
        p.subCategory.toLowerCase() === category.toLowerCase()
    );
  }, [mergedProducts, category]);

  /* ================= SIDEBAR OPTIONS ================= */
  const options = useMemo(() => {
    const get = (key) =>
      [...new Set(mergedProducts.map((p) => p[key]).filter(Boolean))];

    return {
      fabric: get("fabric"),
      style: get("style"),
      length: get("length"),
    };
  }, [mergedProducts]);

  /* ================= FINAL FILTER + SEARCH + SORT ================= */
  const finalProducts = useMemo(() => {
    let data = [...baseProducts];

    /* 🔍 SEARCH */
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      data = data.filter(
        (p) =>
          p.name?.toLowerCase().includes(term) ||
          p.subCategory?.toLowerCase().includes(term)
      );
    }

    /* 🎯 SIDEBAR FILTERS */
    Object.entries(filters).forEach(([k, v]) => {
      if (v) data = data.filter((p) => p[k] === v);
    });

    /* 🔃 SORT */
    if (sortBy === "priceLow") data.sort((a, b) => a.price - b.price);
    if (sortBy === "priceHigh") data.sort((a, b) => b.price - a.price);
    if (sortBy === "rating") data.sort((a, b) => b.rating - a.rating);

    return data;
  }, [baseProducts, filters, sortBy, searchTerm]);

  /* ================= RENDER ================= */
  return (
    <div className="max-w-7xl mx-auto px-6 -mt-2 pb-8">
      <Filters setCategory={setCategory} />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside>
          <SidebarFilters
            filters={filters}
            setFilters={setFilters}
            options={options}
          />
        </aside>

        <section className="md:col-span-3">
          {loading ? (
            <div className="flex items-center justify-center h-64 text-gray-500">
              Loading products...
            </div>
          ) : (
            <ProductGrid
              products={finalProducts}
              category={category}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          )}
        </section>
      </div>
    </div>
  );
};

export default Women;
