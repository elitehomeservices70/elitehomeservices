import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand + Rights */}
          <p className="text-center md:text-left transition-transform hover:scale-105">
            © {new Date().getFullYear()}{" "}
            <span className="text-blue-400 font-semibold">
              Elite Home Services
            </span>{" "}
            — All Rights Reserved
          </p>

          {/* Navigation Links */}
          <nav className="flex space-x-6 text-sm font-medium">
            <Link
              to="/about"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
          {/* Phone */}
          <div className="flex items-center bg-gray-800 px-4 py-2 rounded-xl shadow-md w-full sm:w-auto">
            <div className="bg-green-600 p-2 rounded-full mr-3 flex-shrink-0">
              <i className="fas fa-phone text-green-100 text-lg"></i>
            </div>
            <span className="text-gray-300 text-sm sm:text-base">
              (555) 123-4567
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center bg-gray-800 px-4 py-2 rounded-xl shadow-md w-full sm:w-auto">
            <div className="bg-red-600 p-2 rounded-full mr-3 flex-shrink-0">
              <i className="fas fa-envelope text-white text-lg"></i>
            </div>
            <span className="text-gray-300 text-sm sm:text-base break-words">
              elitehomeservices70@gmail.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
