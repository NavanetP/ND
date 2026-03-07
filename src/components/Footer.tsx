import { Mail, MapPin, Phone } from "lucide-react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaPinterestP,
    FaTwitter,
    FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Desktop Footer */}
      <footer className="hidden lg:block bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src="/logo.png"
                  alt="Nitham Designs"
                  className="w-24 h-12 shadow-md"
                />
                <span className="text-2xl font-bold tracking-wide">
                  Nitham Designs
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
                Designing Spaces That Endure.
                Architectural and Interior Design Solutions.
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.instagram.com/nitham_designs?igsh=MXRpNmNuYzJmZGJpcQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-600 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={18} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter size={18} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={18} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={18} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-600 transition-colors"
                  aria-label="Pinterest"
                >
                  <FaPinterestP size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 lg:pl-4">
              <h3 className="text-lg font-semibold text-cyan-400">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                {[
                  { path: "/", label: "Home" },
                  { path: "/about", label: "About Us" },
                  { path: "/services", label: "Services" },
                  { path: "/portfolio", label: "Portfolio" },
                  { path: "/blog", label: "Blog" },
                  { path: "/contact", label: "Contact" },
                ].map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                    >
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-cyan-400">
                Our Services
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  {
                    label: "Architectural Planning",
                    slug: "architectural-planning",
                  },
                  {
                    label: "Elevation Design",
                    slug: "elevation-design",
                  },
                  {
                    label: "Interior Design",
                    slug: "interior-design",
                  },
                  {
                    label: "Residential Interior",
                    slug: "residential-interior",
                  },
                  {
                    label: "Commercial Interior",
                    slug: "commercial-interior",
                  },
                  {
                    label: "Interior Execution",
                    slug: "interior-execution",
                  },
                  {
                    label: "Renovation",
                    slug: "renovation",
                  },
                  {
                    label: "Landscape Design",
                    slug: "landscape-design",
                  },
                ].map((service) => (
                  <li key={service.slug}>
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                    >
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-cyan-400">
                Contact Info
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
  <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
  <a
    href="https://www.google.com/search?client=opera&hs=PB4&sca_esv=2e8ca08f5eada962&sxsrf=ANbL-n445uwLp2HstDJTQ3hBZkAk8IqJmA:1772601178094&kgmid=/g/11vt4v8j5r&q=Nitham+Designs&shem=dlvsc,shrtsdl&shndl=30&source=sh/x/loc/uni/m1/1&kgs=7b55a48e20f37c38&utm_source=dlvsc,shrtsdl,sh/x/loc/uni/m1/1"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-cyan-400 transition-colors"
  >
    First Floor, Plot No 20, ARK Nagar Main Rd, opp. Ruby Landmark, Karasangal, Chennai, Tamil Nadu 601301
  </a>
</div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <a
                    href="mailto:enquiry@nithamdesigns.in"
                    className="text-gray-300 hover:text-white transition-all duration-200"
                  >
                    enquiry@nithamdesigns.in
                  </a>
                </div>

                <div className="flex items-start space-x-3">
  <Phone className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />

  <div className="flex flex-col space-y-1">
    <a
      href="tel:+916379939849"
      className="text-gray-300 hover:text-white transition-all duration-200"
    >
      +91 63799 39849
    </a>

    <a
      href="tel:+919381485740"
      className="text-gray-300 hover:text-white transition-all duration-200"
    >
      +91 93814 85740
    </a>
  </div>
</div>

                <div className="pt-2">
                  <a
                    href="https://wa.me/916379939849"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md text-white transition-colors text-sm"
                  >
                    <FaWhatsapp className="mr-2" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Nitham Designs. All Rights
              Reserved. | Committed to excellence in design, delivering timeless elegance and inspired living.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Footer */}
      <footer className="lg:hidden bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col space-y-8">
            {/* Company Info */}
            <div className="space-y-4 text-left">
              <div className="flex items-center space-x-3">
                <img
                  src="/logo.png"
                  alt="Nitham Designs"
                  className="w-16 h-12 shadow-md"
                />
                <span className="text-xl font-bold tracking-wide">
                  Nitham Designs
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm">
                Designing Spaces That Endure.
                Architectural and Interior Design Solutions.
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://instagram.com/nithamdesigns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-600 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={16} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={16} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter size={16} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={16} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={16} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-600 transition-colors"
                  aria-label="Pinterest"
                >
                  <FaPinterestP size={16} />
                </a>
              </div>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-1 gap-8">
              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-base font-semibold text-cyan-400">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  {[
                    { path: "/", label: "Home" },
                    { path: "/about", label: "About Us" },
                    { path: "/services", label: "Services" },
                    { path: "/portfolio", label: "Portfolio" },
                    { path: "/blog", label: "Blog" },
                    { path: "/contact", label: "Contact" },
                  ].map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                      >
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></span>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h3 className="text-base font-semibold text-cyan-400">
                  Our Services
                </h3>
                <ul className="space-y-2 text-sm">
                  {[
                    {
                      label: "Architectural Planning",
                      slug: "architectural-planning",
                    },
                    {
                      label: "Elevation Design",
                      slug: "elevation-design",
                    },
                    {
                      label: "Interior Design",
                      slug: "interior-design",
                    },
                    {
                      label: "Residential Interior",
                      slug: "residential-interior",
                    },
                    {
                      label: "Commercial Interior",
                      slug: "commercial-interior",
                    },
                    {
                      label: "Interior Execution",
                      slug: "interior-execution",
                    },
                    {
                      label: "Renovation",
                      slug: "renovation",
                    },
                    {
                      label: "Landscape Design",
                      slug: "landscape-design",
                    },
                  ].map((service) => (
                    <li key={service.slug}>
                      <Link
                        to={`/services/${service.slug}`}
                        className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                      >
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></span>
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-cyan-400">
                Contact Info
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">
                   First Floor, Plot No 20, ARK Nagar Main Rd, opp. Ruby Landmark, Karasangal, Chennai, Tamil Nadu 601301
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                  <a
                    href="mailto:enquiry@nithamdesigns.in"
                    className="text-gray-300 hover:text-white transition-all duration-200"
                  >
                    enquiry@nithamdesigns.in
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                  <a
                    href="tel:+916379939849"
                    className="text-gray-300 hover:text-white transition-all duration-200"
                  >
                    +91 6379939849
                  </a>
                </div>
                <div className="pt-2">
                  <a
                    href="https://wa.me/916379939849"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md text-white transition-colors text-sm"
                  >
                    <FaWhatsapp className="mr-2" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-gray-400 text-xs leading-relaxed">
              &copy; {new Date().getFullYear()} Nitham Designs. All Rights
              Reserved. | Committed to excellence in design, delivering timeless elegance and inspired living.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
