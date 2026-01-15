import { useEffect, useState } from "react";
import API from "../services/api";

const emptyProduct = {
  name: "",
  description: "",
  category: "Women",
  subCategory: "",
  fabric: "",
  style: "",
  length: "",
  work: "",
  sizeRange: "",
  stock: "",
  rating: "",
  images: [""],
};

const ProductForm = ({ fetchProducts, editProduct, setEditProduct }) => {
  const [product, setProduct] = useState(emptyProduct);
  const [loading, setLoading] = useState(false);

  /* ✅ EDIT MODE → PREFILL FORM */
  useEffect(() => {
    if (editProduct) {
      setProduct({
        ...editProduct,
        images: editProduct.images?.length
          ? editProduct.images
          : [""],
      });
    }
  }, [editProduct]);

  const update = (key, value) =>
    setProduct((prev) => ({ ...prev, [key]: value }));

  const updateImage = (index, value) => {
    const imgs = [...product.images];
    imgs[index] = value;
    update("images", imgs);
  };

  const addImage = () => update("images", [...product.images, ""]);

  const removeImage = (index) =>
    update(
      "images",
      product.images.filter((_, i) => i !== index)
    );

  /* ✅ CREATE + UPDATE */
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        ...product,
        images: product.images.filter(Boolean),
      };

      if (editProduct) {
        await API.put(`/products/${editProduct._id}`, payload);
        alert("Product updated successfully!");
        setEditProduct(null);
      } else {
        await API.post("/products", payload);
        alert("Product created successfully!");
      }

      setProduct(emptyProduct);
      fetchProducts();
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={submit}
      className="bg-white p-6 rounded-xl shadow mb-10 space-y-4"
    >
      <h2 className="text-xl font-bold">
        {editProduct ? "Update Product" : "Add New Product"}
      </h2>

      {/* BASIC INFO */}
      <div className="grid md:grid-cols-2 gap-4">
        <input
          className="border p-2 rounded"
          placeholder="Product ID"
          value={product.productId}
          onChange={(e) => update("productId", e.target.value)}
        />
        <input
          className="border p-2 rounded"
          placeholder="Name"
          value={product.name}
          onChange={(e) => update("name", e.target.value)}
        />
        <input
          className="border p-2 rounded"
          placeholder="Sub Category"
          value={product.subCategory}
          onChange={(e) => update("subCategory", e.target.value)}
        />
        <input
          className="border p-2 rounded"
          placeholder="Fabric"
          value={product.fabric}
          onChange={(e) => update("fabric", e.target.value)}
        />
        <input
          className="border p-2 rounded"
          placeholder="Style"
          value={product.style}
          onChange={(e) => update("style", e.target.value)}
        />
        <input
          className="border p-2 rounded"
          placeholder="Length"
          value={product.length}
          onChange={(e) => update("length", e.target.value)}
        />
        <input
          className="border p-2 rounded"
          placeholder="Work"
          value={product.work}
          onChange={(e) => update("work", e.target.value)}
        />
        <input
          className="border p-2 rounded"
          placeholder="Size Range"
          value={product.sizeRange}
          onChange={(e) => update("sizeRange", e.target.value)}
        />
        <input
          className="border p-2 rounded"
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={(e) => update("price", e.target.value)}
        />
        <input
          className="border p-2 rounded"
          type="number"
          placeholder="Stock"
          value={product.stock}
          onChange={(e) => update("stock", e.target.value)}
        />
        <input
          className="border p-2 rounded"
          type="number"
          step="0.1"
          placeholder="Rating"
          value={product.rating}
          onChange={(e) => update("rating", e.target.value)}
        />
      </div>

      <textarea
        className="border p-2 rounded w-full"
        placeholder="Description"
        value={product.description}
        onChange={(e) => update("description", e.target.value)}
      />

      {/* 🔥 IMAGES INPUT + UNLIMITED PREVIEW */}
      <div className="space-y-2">
        <label className="font-medium">Image URLs</label>

        {product.images.map((img, i) => (
          <div key={i} className="flex gap-2">
            <input
              className="border p-2 rounded w-full"
              placeholder={`Image URL ${i + 1}`}
              value={img}
              onChange={(e) => updateImage(i, e.target.value)}
            />
            {product.images.length > 1 && (
              <button
                type="button"
                onClick={() => removeImage(i)}
                className="text-red-500 font-bold"
              >
                ✕
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={addImage}
          className="text-sm text-pink-600"
        >
          + Add another image
        </button>

        {/* ✅ LIVE IMAGE PREVIEW (UNLIMITED) */}
        {product.images.some(Boolean) && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {product.images.map(
              (img, i) =>
                img && (
                  <div
                    key={i}
                    className="border rounded-lg overflow-hidden"
                  >
                    <img
                      src={img}
                      alt={`Preview ${i}`}
                      onError={(e) =>
                        (e.target.style.display = "none")
                      }
                      className="h-32 w-full object-cover"
                    />
                  </div>
                )
            )}
          </div>
        )}
      </div>

      {/* ACTIONS */}
      <div className="flex items-center gap-4">
        <button
          disabled={loading}
          className="bg-pink-600 text-white px-6 py-2 rounded"
        >
          {loading
            ? "Saving..."
            : editProduct
            ? "Update Product"
            : "Save Product"}
        </button>

        {editProduct && (
          <button
            type="button"
            onClick={() => {
              setEditProduct(null);
              setProduct(emptyProduct);
            }}
            className="text-gray-500"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default ProductForm;

