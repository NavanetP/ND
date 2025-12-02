import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  const services = [
    { name: "All Services", path: "/services" },
    {
      name: "Architectural Planning",
      path: "/services/architectural-planning",
    },
    { name: "Elevation Design", path: "/services/elevation-design" },
    { name: "Interior Design", path: "/services/interior-design" },
    { name: "Residential Interior", path: "/services/residential-interior" },
    { name: "Commercial Interior", path: "/services/commercial-interior" },
    { name: "Interior Execution", path: "/services/interior-execution" },
    { name: "Renovation", path: "/services/renovation" },
    { name: "Landscape Design", path: "/services/landscape-design" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  // Text color class based on scroll state
  const textColorClass = isScrolled ? "text-gray-900" : "text-white";
  const hoverTextColorClass = isScrolled ? "hover:text-cyan-600" : "hover:text-cyan-500";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/90 backdrop-blur-md shadow-md"
        : "bg-gray-900/90 backdrop-blur-sm"
        }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/logo.png"
              alt="Nitham Designs"
              className="w-13 h-12 transition-transform duration-300 group-hover:scale-105"
            />
            <span
              className={`text-2xl font-bold ${textColorClass} group-hover:text-cyan-500 transition-colors duration-300`}
            >
              Nitham Designs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`${textColorClass} ${hoverTextColorClass} font-medium`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${textColorClass} ${hoverTextColorClass} font-medium`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`${textColorClass} ${hoverTextColorClass} font-medium flex items-center space-x-1`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 group-hover:rotate-180 ${isScrolled ? "text-gray-900" : "text-white"
                    }`}
                />
              </button>

              <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-100 z-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
                <div className="py-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors duration-200"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/why-choose-us"
              className={`${textColorClass} ${hoverTextColorClass} font-medium`}
            >
              Our Edge
            </Link>
            <Link
              to="/portfolio"
              className={`${textColorClass} ${hoverTextColorClass} font-medium`}
            >
              Portfolio
            </Link>
            <Link
              to="/blog"
              className={`${textColorClass} ${hoverTextColorClass} font-medium`}
            >
              Blog
            </Link>
            <Link
              to="/#transform-space"
              className={`${textColorClass} ${hoverTextColorClass} font-medium`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled
              ? "text-gray-900 hover:text-cyan-600"
              : "text-white hover:text-cyan-500"
              }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Now Scrollable */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen
            ? "max-h-[80vh] opacity-100"
            : "max-h-0 opacity-0"
            } ${isScrolled
              ? "bg-white/95 backdrop-blur-md"
              : "bg-gray-900/95 backdrop-blur-md"
            }`}
        >
          <div className="overflow-y-auto max-h-[calc(80vh-5rem)] py-4">
            <nav className="space-y-2 border-t border-gray-600 px-2">
              <Link
                to="/"
                className={`block px-4 py-3 ${isScrolled
                  ? "bg-white/80 text-gray-900"
                  : "bg-gray-800/80 text-white"
                  } rounded-md ${isScrolled ? "hover:text-cyan-600" : "hover:text-cyan-500"
                  }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block px-4 py-3 ${isScrolled
                  ? "bg-white/80 text-gray-900"
                  : "bg-gray-800/80 text-white"
                  } rounded-md ${isScrolled ? "hover:text-cyan-600" : "hover:text-cyan-500"
                  }`}
              >
                About
              </Link>
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 ${isScrolled
                    ? "bg-white/80 text-gray-900"
                    : "bg-gray-800/80 text-white"
                    } rounded-md ${isScrolled ? "hover:text-cyan-600" : "hover:text-cyan-500"
                    }`}
                >
                  <span className="text-left">Services</span>
                  <ChevronDown
                    className={`w-4 h-4 ml-2 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>
                <div
                  className={`ml-4 mt-2 space-y-2 transition-all duration-300 overflow-hidden ${isServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className={`block px-4 py-2 text-sm ${isScrolled
                        ? "text-gray-700 hover:text-cyan-600 hover:bg-cyan-50"
                        : "text-gray-300 hover:text-cyan-500 hover:bg-gray-800/50"
                        } rounded-md`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                to="/why-choose-us"
                className={`block px-4 py-3 ${isScrolled
                  ? "bg-white/80 text-gray-900"
                  : "bg-gray-800/80 text-white"
                  } rounded-md ${isScrolled ? "hover:text-cyan-600" : "hover:text-cyan-500"
                  }`}
              >
                Our Edge
              </Link>
              <Link
                to="/portfolio"
                className={`block px-4 py-3 ${isScrolled
                  ? "bg-white/80 text-gray-900"
                  : "bg-gray-800/80 text-white"
                  } rounded-md ${isScrolled ? "hover:text-cyan-600" : "hover:text-cyan-500"
                  }`}
              >
                Portfolio
              </Link>
              <Link
                to="/blog"
                className={`block px-4 py-3 ${isScrolled
                  ? "bg-white/80 text-gray-900"
                  : "bg-gray-800/80 text-white"
                  } rounded-md ${isScrolled ? "hover:text-cyan-600" : "hover:text-cyan-500"
                  }`}
              >
                Blog
              </Link>
              <Link
                to="/#transform-space"
                className={`block px-4 py-3 ${isScrolled
                  ? "bg-white/80 text-gray-900"
                  : "bg-gray-800/80 text-white"
                  } rounded-md ${isScrolled ? "hover:text-cyan-600" : "hover:text-cyan-500"
                  }`}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;