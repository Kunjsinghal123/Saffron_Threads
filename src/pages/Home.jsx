import { useNavigate } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const FALLBACK = "/images/Background_image.png";

const categories = [
  { name: "All", img: "https://res.cloudinary.com/dj515u4fi/image/upload/v1764948508/samples/dress/all_taz8zn.png" },
  { name: "Kurti", img: "https://res.cloudinary.com/dj515u4fi/image/upload/v1764947927/samples/dress/Kurti/4/4_1_xyrkx0.png" },
  { name: "Short Kurti", img: "https://res.cloudinary.com/dj515u4fi/image/upload/v1764948226/samples/dress/Short%20Kurti/5/5_1_qyhklg.png" },
  { name: "Kurti+Dupatta Set", img: "https://res.cloudinary.com/dj515u4fi/image/upload/v1764948424/samples/dress/Kurta%20%2B%20Duppatta/21/21_1_ufuag3.png" },
  { name: "Co-ord Set", img: "https://res.cloudinary.com/dj515u4fi/image/upload/v1764945611/samples/dress/Co%20ord%20set/22/Gemini_Generated_Image_m68mtlm68mtlm68m_vogoci.png"},
  { name: "Gown", img: "https://res.cloudinary.com/dj515u4fi/image/upload/v1764934287/samples/dress/Gown/18/18_1AI_xpugjl.png" },
  { name: "Short Top", img: "https://res.cloudinary.com/dj515u4fi/image/upload/v1764946823/samples/dress/Short%20top/13/13_1_scozfl.png" },
  { name: "Shirt", img: "https://res.cloudinary.com/dj515u4fi/image/upload/v1764945036/samples/dress/Shirt/15/15_2AI_iwpgxk.png" },
];

const Home = () => {
  const navigate = useNavigate();

  const notify = (platform) =>
    alert(`Connect with us on ${platform}! Pages launching soon.`);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div id="top">

      {/* ================= HERO ================= */}
      <section className="relative h-[92vh]">
        <img
          src="/images/Background_image.png"
          onError={(e) => (e.target.src = FALLBACK)}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Saffron Threads"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-6">
          <div className="text-white max-w-2xl space-y-7">
            <span className="uppercase tracking-[0.35em] text-xs text-white/70">
              Saffron Threads | Indian Ethnic Wear

            </span>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Threads of Tradition <br /> Styled for Today
            </h1>

            <p className="text-lg text-white/90 leading-relaxed">
              Thoughtfully designed kurtis, co-ord sets and gowns inspired by
              India’s heritage — crafted for modern elegance.
            </p>

            <button
              onClick={() => navigate("/shop")}
              className="bg-pink-600 hover:bg-pink-700 px-12 py-4 rounded-full shadow-xl transition"
            >
              Shop Women Collection
            </button>
          </div>
        </div>
      </section>

      {/* ================= DISCOVER ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Explore Our Collections
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {categories.map((c) => (
              <div
                key={c.name}
                onClick={() =>
                  navigate(`/shop?category=${encodeURIComponent(c.name)}`)
                }
                className="group relative h-[420px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition"
              >
                <img
                  src={c.img}
                  onError={(e) => (e.target.src = FALLBACK)}
                  alt={c.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end p-10">
                  <h3 className="text-white text-2xl font-semibold">
                    {c.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* ================= ABOUT ================= */}
<section id="about" className="py-32 bg-[#faf7f4]">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">

    {/* TEXT */}
    <div className="space-y-7">
      <span className="uppercase tracking-[0.3em] text-sm text-pink-600">
        About Saffron Threads
      </span>

      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        Crafted in Tradition <br /> Designed for Today
      </h2>

      <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
        <strong>Saffron Threads</strong> is a contemporary Indian ethnic wear
        brand rooted in timeless craftsmanship. We bring together traditional
        artistry and modern silhouettes to create pieces that feel effortless,
        elegant, and enduring.
      </p>

      <p className="text-gray-600 leading-relaxed max-w-xl">
        Every design is thoughtfully created using premium fabrics, refined
        detailing, and comfortable fits — ensuring each piece not only looks
        beautiful but feels exceptional to wear.
      </p>

      <p className="text-gray-600 leading-relaxed max-w-xl">
        From everyday kurtis to statement co-ord sets and festive gowns,
        Saffron Threads is designed for women who value authenticity,
        quality, and understated luxury in their wardrobe.
      </p>
    </div>

    {/* IMAGE */}
    <div className="relative flex justify-center">
      <img
        src="/images/Kurtianddupatta.png"
        alt="Saffron Threads Craftsmanship"
        className="w-full max-w-lg h-[560px] object-cover rounded-3xl shadow-2xl"
      />

      <div className="absolute -bottom-6 left-6 bg-white px-6 py-3 rounded-xl shadow-lg text-sm font-medium">
        Thoughtfully Crafted · Timelessly Elegant
      </div>
    </div>
  </div>
</section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="uppercase tracking-[0.3em] text-sm text-pink-600">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-5 mb-20">
            Why Saffron Threads
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
            {[
              "Premium Fabrics",
              "Timeless Designs",
              "Perfect Fit",
              "Versatile Collections",
              "Trusted Quality",
              "Designed for Modern Women",
            ].map((title) => (
              <div
                key={title}
                className="bg-[#faf7f4] rounded-3xl p-10 shadow hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  Carefully crafted to deliver elegance, comfort, and lasting
                  quality in every design.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-28 bg-[#faf7f4]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="uppercase tracking-[0.3em] text-sm text-pink-600">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-5 mb-20">
            Loved by Women Across India
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
            {[
              {
                name: "Ananya Sharma",
                review:
                  "The quality and fit are outstanding. Every piece feels premium and thoughtfully designed.",
              },
              {
                name: "Ritika Verma",
                review:
                  "Elegant designs with unmatched comfort. Saffron Threads never disappoints.",
              },
              {
                name: "Neha Patel",
                review:
                  "Beautiful fabrics and timeless styles. Perfect for work and festive wear.",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-3xl p-10 shadow hover:shadow-xl transition text-left"
              >
                <p className="text-gray-700 mb-8 leading-relaxed">
                  “{t.review}”
                </p>
                <h4 className="font-semibold">{t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer id="contact" className="bg-[#0b1220] text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-4 gap-16">
          <div>
            <h3 className="text-white text-2xl font-bold">Saffron Threads</h3>
            <p className="text-sm mt-4 leading-relaxed">
              Premium Indian ethnic wear rooted in craftsmanship and timeless
              elegance.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li onClick={() => scrollTo("top")} className="cursor-pointer hover:text-white">Home</li>
              <li onClick={() => navigate("/shop")} className="cursor-pointer hover:text-white">Women Collection</li>
              <li onClick={() => scrollTo("about")} className="cursor-pointer hover:text-white">About Us</li>
              <li onClick={() => scrollTo("contact")} className="cursor-pointer hover:text-white">Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Reach Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3 items-center"><FaEnvelope /> support@saffronthreads.com</li>
              <li className="flex gap-3 items-center"><FaPhoneAlt /> +91 90000 00000</li>
              <li className="flex gap-3 items-start"><FaMapMarkerAlt /> India</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 text-lg">
              <FaInstagram onClick={() => notify("Instagram")} />
              <FaFacebookF onClick={() => notify("Facebook")} />
              <FaTwitter onClick={() => notify("Twitter")} />
              <FaPinterestP onClick={() => notify("Pinterest")} />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 text-center text-sm py-6">
          © 2025 Saffron Threads · Made in India
        </div>
      </footer>
    </div>
  );
};

export default Home;
