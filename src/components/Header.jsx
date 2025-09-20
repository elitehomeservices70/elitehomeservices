import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
    { path: "/about", label: "About" },
  ];

  return (
    <header className="bg-gray-300 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        {/* Mobile Menu Button - Left side */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none transition-transform duration-300 hover:scale-110"
        >
          {menuOpen ? (
            <X size={28} className="transition-all duration-300" />
          ) : (
            <Menu size={28} className="transition-all duration-300" />
          )}
        </button>

        {/* Logo - Centered on mobile, Left on desktop - Linked to Home */}
        <Link
          to="/"
          className="md:flex-1 flex justify-center md:justify-start"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/logo.png"
            alt="Elite Homes Logo"
            className="w-40 object-contain transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation - Right side */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-2xl transition-all duration-300 hover:text-blue-600 hover:scale-105 ${
                location.pathname === item.path
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Spacer for mobile layout balance */}
        <div className="md:hidden w-8"></div>
      </div>

      {/* Mobile Dropdown Navigation with Animation - Left aligned */}
      <div
        className={`
          md:hidden bg-gray-200 shadow-md overflow-hidden transition-all duration-500 ease-in-out
          ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="flex flex-col items-start space-y-4 py-4 pl-8">
          {navItems.map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`
                text-xl transition-all duration-300 hover:text-blue-600 hover:translate-x-2
                transform transition-transform duration-500 ease-out
                ${
                  menuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }
                ${
                  location.pathname === item.path
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700"
                }
              `}
              style={{ transitionDelay: menuOpen ? `${index * 100}ms` : "0ms" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
