import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { DEFAULT_IMAGE } from "../data/women";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const productId = product._id || product.id;
  const imageSrc = product.images?.[0] || DEFAULT_IMAGE;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={() => productId && navigate(`/product/${productId}`)}
      className="
        group
        bg-white
        rounded-2xl
        overflow-hidden
        border border-gray-100
        shadow-sm
        hover:shadow-xl
        cursor-pointer
      "
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={imageSrc}
          alt={product.name}
          onError={(e) => (e.currentTarget.src = DEFAULT_IMAGE)}
          className="
            h-64
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* Rating */}
        <div className="
          absolute top-3 right-3
          bg-white/90
          backdrop-blur
          px-3 py-1
          rounded-full
          text-xs
          shadow
        ">
          ⭐ {product.rating || 0}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 text-center space-y-3">
        <h3 className="text-[15px] font-semibold text-gray-900 line-clamp-1">
          {product.name}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* 🔥 PREMIUM META — NO | NO DOTS */}
        <div className="flex justify-center gap-2 flex-wrap">
          {product.fabric && (
            <span className="text-[11px] px-3 py-1 rounded-full bg-gray-100 text-gray-600">
              {product.fabric}
            </span>
          )}

          {product.work && (
            <span className="text-[11px] px-3 py-1 rounded-full bg-gray-100 text-gray-600">
              {product.work}
            </span>
          )}
        </div>

       
        {/* subtle divider */}
        <div className="mt-2 h-px w-8 bg-gray-200 mx-auto" />
      </div>
    </motion.div>
  );
};

export default ProductCard;

