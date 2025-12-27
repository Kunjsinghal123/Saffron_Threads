import ProductCard from "./ProductCard";

const ProductGrid = ({ products, category, sortBy, setSortBy }) => {
  if (!products.length) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-400 text-lg">
        No products found
      </div>
    );
  }

  return (
    <section className="space-y-10">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <div>
          <span className="uppercase tracking-[0.25em] text-xs text-pink-600">
            Saffron Threads
          </span>

          <h2 className="text-3xl font-bold mt-2">
            {category === "All" ? "Women Collection" : category}
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            {products.length} premium styles
          </p>
        </div>

        {/* SORT */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="
            border
            rounded-full
            px-5
            py-2.5
            text-sm
            bg-white
            shadow-sm
            hover:shadow
            transition
          "
        >
          <option value="">Sort By</option>
          <option value="priceLow">Price: Low → High</option>
          <option value="priceHigh">Price: High → Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product._id || product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
