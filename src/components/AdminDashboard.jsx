import { useEffect, useState } from "react";
import API from "../services/api";
import AdminNavbar from "./AdminNavbar";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null); // ✅ ADD

  const fetchProducts = async () => {
    const res = await API.get("/products");
    setProducts(res.data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />
      <div className="p-6 max-w-7xl mx-auto">
        <ProductForm
          fetchProducts={fetchProducts}
          editProduct={editProduct}
          setEditProduct={setEditProduct}
        />

        <ProductTable
          products={products}
          fetchProducts={fetchProducts}
          setEditProduct={setEditProduct}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
