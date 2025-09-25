import PageWrapper from "../components/PageWrapper";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Main container (intro + hero) */}
      <div className="my-6 bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 mx-4">
        <PageWrapper>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-blue-900 animate-fadeIn text-center">
            Welcome to Elite Home Services Experts
          </h2>

          <p className="text-gray-800 text-base sm:text-lg font-medium max-w-3xl mx-auto mb-12 text-center leading-relaxed">
            Elite Home Services Experts is your trusted partner for expert home
            maintenance and repair solutions. Our team of skilled technicians
            provides top-notch services to ensure your home operates smoothly
            and safely. From door installation and maintenance to various home
            system repairs, we offer comprehensive solutions to meet your needs.
            With competitive pricing, flexible scheduling, and unparalleled
            customer support, we strive to exceed your expectations. Discover
            the Elite difference and contact us today to schedule an appointment
            or learn more about our services.
          </p>
        </PageWrapper>

        {/* Hero Section */}
        <Hero />
      </div>

      {/* Contact Info Container - outside main */}
      <div className="my-8 mx-4 bg-gray-50 rounded-2xl shadow-lg p-6 sm:p-8 animate-fadeIn">
        <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          Get in Touch
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Phone */}
          <a
            href="tel:7326944115"
            className="flex items-center bg-white px-6 py-4 rounded-xl shadow-md w-full sm:w-auto hover:shadow-lg transition duration-300"
          >
            <div className="bg-green-600 p-3 rounded-full mr-4 flex-shrink-0">
              <i className="fas fa-phone text-green-100 text-lg sm:text-xl"></i>
            </div>
            <span className="text-gray-700 text-base sm:text-lg font-semibold">
              7326944115
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:elitehomeservicesexperts@gmail.com"
            className="flex items-center bg-white px-6 py-4 rounded-xl shadow-md w-full sm:w-auto hover:shadow-lg transition duration-300"
          >
            <div className="bg-red-600 p-3 rounded-full mr-4 flex-shrink-0">
              <i className="fas fa-envelope text-white text-xl"></i>
            </div>
            <span className="text-gray-700 text-base sm:text-lg font-semibold break-words whitespace-normal flex-1 min-w-0 text-left">
              elitehomeservicesexperts@gmail.com
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
