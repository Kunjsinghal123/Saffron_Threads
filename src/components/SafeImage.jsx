import { useEffect, useState } from "react";
import { DEFAULT_IMAGE } from "../data/women";

const SafeImage = ({ src, alt = "", className = "" }) => {
  const [image, setImage] = useState(DEFAULT_IMAGE);

  useEffect(() => {
    if (typeof src === "string" && src.trim() !== "") {
      setImage(src);
    } else {
      setImage(DEFAULT_IMAGE);
    }
  }, [src]);

  return (
    <img
      src={image}
      alt={alt}
      loading="lazy"
      onError={(e) => {
        // fallback only once
        if (image !== DEFAULT_IMAGE) {
          setImage(DEFAULT_IMAGE);
        } else {
          // prevent infinite loop / duplicate fallback
          e.currentTarget.style.display = "none";
        }
      }}
      className={className}
    />
  );
};

export default SafeImage;
