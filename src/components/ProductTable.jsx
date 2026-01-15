import API from "../services/api";

const ProductTable = ({ products, fetchProducts, setEditProduct }) => {
  const del = async (id) => {
    await API.delete(`/products/${id}`);
    fetchProducts();
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Products</h2>

      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            <th>Name</th>
            {/* <th>Price</th> */}
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p._id} className="border-b">
              <td>{p.name}</td>
             {/*  <td>₹{p.price}</td> */}
              <td>{p.category}</td>
              <td>
                {/* ✅ EDIT */}
                <button
                  onClick={() => setEditProduct(p)}
                  className="text-blue-600 mr-3"
                >
                  Edit
                </button>

                {/* DELETE */}
                <button
                  onClick={() => del(p._id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;

