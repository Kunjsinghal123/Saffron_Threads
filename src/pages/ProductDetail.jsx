import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";
import { motion } from "framer-motion";
import { WOMEN_PRODUCTS } from "../data/women";
import SafeImage from "../components/SafeImage";
import {
  FaWhatsapp,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

const WHATSAPP = "919917354112";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(null); // ✅ MAIN IMAGE

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchProduct = async () => {
      try {
        // ✅ PRODUCTION API
        const res = await API.get(`/products/${id}`);
        const data = res.data.product || res.data;

        setProduct(data);
        setActiveImage(data?.images?.[0] || null);
      } catch (err) {
        console.error("Product fetch failed:", err);

        // 🔹 Dummy fallback ONLY in dev
        if (import.meta.env.MODE === "development") {
          const dummy = WOMEN_PRODUCTS.find((p) => p.id === id);
          setProduct(dummy || null);
          setActiveImage(dummy?.images?.[0] || null);
        } else {
          setProduct(null);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  /* ================= STATES ================= */

  if (loading) {
    return (
      <div className="py-40 text-center text-gray-500">
        Loading product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-40 text-center text-gray-500">
        Product not found
      </div>
    );
  }

  const msg = `Hi, I'm interested in *${product.name}* (₹${product.price})`;

  /* ================= UI ================= */

  return (
    <section className="bg-[#faf7f4] py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-start">

        {/* ================= IMAGE GALLERY ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* MAIN IMAGE */}
          <div className="relative">
            <SafeImage
              src={activeImage}
              alt={product.name}
              className="w-full h-[620px] object-cover rounded-[2.5rem] shadow-2xl"
            />

            {/* Rating */}
            <div className="absolute top-6 left-6 bg-white/95 px-4 py-2 rounded-full shadow text-sm flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              {product.rating || 0}
            </div>
          </div>

          {/* UNLIMITED THUMBNAILS */}
          {product.images?.length > 1 && (
            <div className="flex gap-4 overflow-x-auto pb-2">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`thumb-${i}`}
                  onClick={() => setActiveImage(img)}
                  onError={(e) => (e.target.style.display = "none")}
                  className={`
                    h-24 w-24 object-cover rounded-xl border cursor-pointer
                    transition
                    ${
                      activeImage === img
                        ? "ring-2 ring-pink-600"
                        : "opacity-70 hover:opacity-100"
                    }
                  `}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* ================= DETAILS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <span className="uppercase tracking-[0.25em] text-sm text-pink-600">
            Saffron Threads Exclusive
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {product.name}
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            {product.description}
          </p>

          {/* INFO GRID */}
          <div className="grid grid-cols-2 gap-y-4 text-sm text-gray-700">
            {product.fabric && (
              <div><strong>Fabric:</strong> {product.fabric}</div>
            )}
            {product.work && (
              <div><strong>Work:</strong> {product.work}</div>
            )}
            {product.style && (
              <div><strong>Style:</strong> {product.style}</div>
            )}
            {product.length && (
              <div><strong>Length:</strong> {product.length}</div>
            )}
            {product.sizeRange && (
              <div><strong>Sizes:</strong> {product.sizeRange}</div>
            )}
            <div className="flex items-center gap-1">
              <strong>Rating:</strong>
              <FaStar className="text-yellow-400" />
              {product.rating || 0}
            </div>
          </div>

          {/* PRICE */}
          <div className="text-4xl font-bold text-pink-600">
            ₹{product.price}
          </div>

          {/* TRUST */}
          <div className="flex gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Premium Fabric
            </span>
            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Quality Assured
            </span>
            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Made in India
            </span>
          </div>

          {/* CTA */}
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-4
              bg-green-600
              hover:bg-green-700
              text-white
              px-14
              py-5
              rounded-full
              text-lg
              font-semibold
              shadow-xl
              transition
            "
          >
            <FaWhatsapp className="text-2xl" />
            Order on WhatsApp
          </a>

          <p className="text-xs text-gray-500">
            Our team will assist you personally with sizing & availability.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductDetail;
