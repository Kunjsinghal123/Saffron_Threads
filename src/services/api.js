import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api",
});

/* 🔹 WOMEN PRODUCTS */
export const getWomenProducts = async (params = {}) => {
  try {
    const res = await API.get("/products/women", { params });
    return res.data?.products || [];
  } catch (err) {
    console.error("Women products error:", err);
    return [];
  }
};

export default API;
