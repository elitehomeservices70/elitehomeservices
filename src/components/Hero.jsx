import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="  text-center">
      <Link
        to="/services"
        className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors duration-200"
      >
        Explore Our Services
      </Link>
    </section>
  );
}
