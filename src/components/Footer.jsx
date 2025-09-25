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
              Elite Home Services Experts
            </span>{" "}
            — All Rights Reserved
          </p>

          {/* Navigation Links */}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>
      </div>
    </footer>
  );
}
