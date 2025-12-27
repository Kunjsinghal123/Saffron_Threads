const categories = [
  "All",
  "Kurti",
  "Short Kurti",
  "Kurti+Dupatta Set",
  "Co-ord Set",
  "Gown",
  "Short Top",
  "Shirt",
];

const Filters = ({ setCategory }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className="px-5 py-2 rounded-full bg-white shadow hover:bg-pink-600 hover:text-white transition"
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Filters;
