import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function About() {
  return (
    <>
      {/* About Section */}
      <main className="flex justify-center items-center px-5 py-16">
        <div className="w-full max-w-3xl bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 animate-fadeIn text-center">
          <h2 className="text-3xl text-blue-900 font-bold mb-6 text-center text-uc">
            ABOUT US
          </h2>
          <p className="text-gray-700 mb-6 text-justify leading-relaxed animate-fadeIn">
            At Elite Home Services Experts, we take immense pride in being a
            premier provider of home-based services throughout the USA,
            dedicated to transforming houses into well-maintained, comfortable,
            and inviting homes. With a rich history rooted in a passion for
            exceptional craftsmanship and customer satisfaction, our team of
            highly skilled professionals brings years of expertise to every
            project, ensuring that your home receives the care and attention it
            deserves. We understand that your home is more than just a
            place—it’s a sanctuary where memories are made, and we are committed
            to preserving its functionality and charm through our reliable and
            tailored solutions. At Elite Home Services Experts, we prioritize
            trust, integrity, and quality in everything we do, striving to
            exceed expectations with our meticulous attention to detail and
            unwavering dedication to excellence.
          </p>
          <p className="text-gray-700 mb-6 text-justify leading-relaxed animate-fadeIn">
            Our customer-first philosophy drives us to build lasting
            relationships with homeowners across the nation, offering
            personalized services that cater to the unique needs of each
            household. From coast to coast, we are proud to serve communities
            with dependable, high-quality home-based services that enhance the
            comfort and value of your living space. Choose Elite Home Services
            Experts as your trusted partner for all your home care needs, and
            experience the peace of mind that comes with working with a team
            that values your home as much as you do.
          </p>
          <Link
            to="/services"
            className="inline-block px-6 py-3 bg-blue-600 border-2 border-blue-700 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 hover:scale-105 transition-transform duration-200"
          >
            Explore Our Services
          </Link>
        </div>
      </main>

      {/* Contact Section */}
    </>
  );
}
