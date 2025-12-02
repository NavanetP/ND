import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Building2,
  RefreshCw,
  DraftingCompass,
  Trees,
  Camera,
  ArrowUp,
} from "lucide-react";

const Portfolio = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // ✅ Show button when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const portfolioCategories = [
    {
      icon: Home,
      title: "Residential Projects",
      description: "Modern homes, apartments, and villas showcasing our residential design expertise.",
      features: [
        "Custom homes",
        "Apartment interiors",
        "Luxury villas",
        "Space optimization"
      ],
    },
    {
      icon: Building2,
      title: "Commercial Spaces",
      description: "Offices, retail outlets, and commercial interiors that reflect brand identity.",
      features: [
        "Office design",
        "Retail spaces",
        "Brand integration",
        "Functional layouts"
      ],
    },
    {
      icon: RefreshCw,
      title: "Renovation Projects",
      description: "Before and after transformations showing our renovation capabilities.",
      features: [
        "Structural upgrades",
        "Modernization",
        "Space reconfiguration",
        "Value enhancement"
      ],
    },
    {
      icon: DraftingCompass,
      title: "Architectural Plans",
      description: "Detailed architectural drawings and 3D visualizations of our designs.",
      features: [
        "3D renderings",
        "Technical drawings",
        "Material specifications",
        "Construction plans"
      ],
    },
    {
      icon: Trees,
      title: "Landscape Designs",
      description: "Beautiful outdoor spaces that complement our architectural designs.",
      features: [
        "Garden design",
        "Outdoor living",
        "Sustainable landscaping",
        "Hardscape integration"
      ],
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-cyan-50 to-cyan-100 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-6 left-10 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 reveal fade-in-down relative">
            Our <span className="text-cyan-500">Portfolio</span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-1 bg-cyan-500 rounded-full"></span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto px-4 reveal fade-in-up" style={{ animationDelay: "0.2s" }}>
            Showcasing our finest architectural and interior design projects
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl reveal pop-in">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 group hover:bg-cyan-500 transition-all duration-300">
                <Camera className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-cyan-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6 reveal fade-in-down">
                Portfolio Coming Soon
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 reveal fade-in-up" style={{ animationDelay: "0.2s" }}>
                We're currently curating our best projects to showcase our
                design excellence. Our portfolio will feature stunning
                residential and commercial spaces that demonstrate our
                commitment to creating beautiful, functional environments.
              </p>
              <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 reveal fade-in-up" style={{ animationDelay: "0.3s" }}>
                In the meantime, we'd love to discuss your project and show you
                examples of our work during a consultation.
              </p>
              <Link to="/#transform-space" className="reveal pop-in" style={{ animationDelay: "0.4s" }}>
                <button className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:from-cyan-500 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto">
                  Schedule a Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black text-center mb-8 sm:mb-12 reveal fade-in-down">
            What to Expect in Our Portfolio
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
            {portfolioCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="service-detail-card reveal fade-in-left group p-4 sm:p-6 lg:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                    <div className="flex-shrink-0 w-full sm:w-auto flex justify-center sm:justify-start">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-cyan-100 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-cyan-500 transition-all duration-300 group-hover:scale-105">
                        <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-cyan-500 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3">
                        {category.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                        {category.description}
                      </p>

                      <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
                        {category.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-2 bg-cyan-50 px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm"
                          >
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-500 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-cyan-50 to-cyan-100 relative">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6 reveal fade-in-down">
            Interested in Our Work?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 reveal fade-in-up" style={{ animationDelay: "0.2s" }}>
            Let's discuss how we can bring your vision to life with our design expertise
          </p>
          <Link to="/#transform-space" className="reveal pop-in" style={{ animationDelay: "0.4s" }}>
            <button className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:from-cyan-500 hover:to-cyan-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto">
              Get Started Today
            </button>
          </Link>
        </div>
      </section>

      {/* ✅ Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full p-3 sm:p-4 shadow-lg transition-all duration-300 hover:scale-110 z-50 animate-bounce"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}

      {/* Add CSS animations */}
      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .reveal {
          opacity: 0;
        }
        
        .animate-in {
          animation-fill-mode: both;
          animation-duration: 0.6s;
          animation-timing-function: ease-out;
        }
        
        .fade-in-left.animate-in {
          animation-name: fadeInLeft;
        }
        
        .fade-in-right.animate-in {
          animation-name: fadeInRight;
        }
        
        .fade-in-up.animate-in {
          animation-name: fadeInUp;
        }
        
        .fade-in-down.animate-in {
          animation-name: fadeInDown;
        }
        
        .pop-in.animate-in {
          animation-name: popIn;
        }
        
        .fade-in.animate-in {
          animation-name: fadeIn;
        }
        
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(20px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-15px, 15px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* Custom breakpoint for very small screens */
        @media (min-width: 475px) {
          .xs\\:grid-cols-2 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;