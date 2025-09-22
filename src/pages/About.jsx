import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function About() {
  return (
    <>
      {/* About Section */}
      <main className="flex justify-center items-center px-5 py-16">
        <div className="w-full max-w-3xl bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 animate-fadeIn text-center">
          <h2 className="text-3xl text-blue-900 font-bold mb-6 text-center">
            ABOUT US
          </h2>
          <p className="text-gray-700 mb-6 text-justify leading-relaxed animate-fadeIn">
            At Elite Home Services, we take immense pride in being a premier
            provider of home-based services throughout the USA, dedicated to
            transforming houses into well-maintained, comfortable, and inviting
            homes. With a rich history rooted in a passion for exceptional
            craftsmanship and customer satisfaction, our team of highly skilled
            professionals brings years of expertise to every project, ensuring
            that your home receives the care and attention it deserves. We
            understand that your home is more than just a place—it’s a sanctuary
            where memories are made, and we are committed to preserving its
            functionality and charm through our reliable and tailored solutions.
            At Elite Home Services, we prioritize trust, integrity, and quality
            in everything we do, striving to exceed expectations with our
            meticulous attention to detail and unwavering dedication to
            excellence.
          </p>
          <p className="text-gray-700 mb-6 text-justify leading-relaxed animate-fadeIn">
            Our customer-first philosophy drives us to build lasting
            relationships with homeowners across the nation, offering
            personalized services that cater to the unique needs of each
            household. From coast to coast, we are proud to serve communities
            with dependable, high-quality home-based services that enhance the
            comfort and value of your living space. Choose Elite Home Services
            as your trusted partner for all your home care needs, and experience
            the peace of mind that comes with working with a team that values
            your home as much as you do.
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
      <section className="flex justify-center px-5 mb-12">
        <div className="w-full max-w-3xl bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            Get in Touch
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Phone */}
            <a
              href="tel:5551234567"
              className="flex items-center bg-white px-6 py-4 rounded-xl shadow-md w-full sm:w-auto hover:shadow-lg transition duration-300"
            >
              <div className="bg-green-600 p-3 rounded-full mr-4 flex-shrink-0">
                <i className="fas fa-phone text-white text-lg sm:text-xl"></i>
              </div>
              <span className="text-gray-800 text-base sm:text-lg font-semibold">
                (555) 123-4567
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:elitehomeservices70@gmail.com"
              className="flex items-center bg-white px-6 py-4 rounded-xl shadow-md w-full sm:w-auto hover:shadow-lg transition duration-300"
            >
              <div className="bg-red-600 p-3 rounded-full mr-4 flex-shrink-0">
                <i className="fas fa-envelope text-white text-xl"></i>
              </div>
              <span className="text-gray-800 text-base sm:text-lg font-semibold break-all text-left">
                elitehomeservices70@gmail.com
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
